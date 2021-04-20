require('dotenv').config();
const express = require('express');
const path = require('path');
// const config=require('./config/database');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var expressValidator = require('express-validator');
var expressMessages = require('express-messages');
var multer = require('multer');
const fileUpload = require('express-fileupload');
const passport = require('passport')
const User=require('./models/user');
// require('dotenv').config({path: path.join(__dirname, '.env')});
// connect to db 

mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('database running');

});
// init app
const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// set public folder
app.use(express.static(path.join(__dirname + '/public')));
// set globaly variable****************
app.locals.errors = null;
////////////
// {{{ GET Page model and shows on header.ejs
const Page = require('./models/page')

// GET all pages to show on header.js
Page.find({}).exec((err, pages) => {
  if (err) {
    console.log(err);
  }
  else {
    app.locals.pages = pages;
  }
})
// }}}

// 


// fileupload middleware//////////////
app.use(fileUpload({ safeFileNames: true, preserveExtension: true }));

// body parser miidleware

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())

// express session miidleware
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  // cookie: { secure: true }
}))
// express validator middleware
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    var namespace = param.split('.'),
      root = namespace.shift(),
      formParam = root;

    while (namespace.length) {
      formParam += '{' + namespace.shift() + '}';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  },
  customValidators: {
    isImage: function (value, filename) {
      console.log(value);
      console.log(filename);
      var extension = (path.extname(filename)).toLowerCase();
      console.log(extension);
      switch (extension) {
        case '.jpg':
          return '.jpg';
        case '.jpeg':
          return '.jpeg';
        case '.png':
          return '.png';
        case '':
          return '.jpg';
        default:
          return false;
      }
    }
    
    
  }

}));
//custom email validation
module.exports.findByEmail=async(email)=>{
  
  return await User.count({ 'email': email }, function (err, result) {
    if(err){
       console.log('1',err);
       return err;
    }
    return result;
 
  });

}
// 

// express message middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

//require passport config
require('./config/passport')(passport);
// passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// to available every where
app.get('*', function (req, res, next) {
  // console.log('req'+req);
  // console.log(req.session);
  res.locals.user = req.user || null;
  res.locals.cart = req.session.cart;

  next();
})

// SET routes
const Products = require('./routes/products.js');
const pages = require('./routes/pages.js');
const addCart = require('./routes/cart.js');
const Users = require('./routes/users.js');
const adminPages = require('./routes/adminpages.js');
const adminProducts = require('./routes/adminProducts.js');


app.use('/admin/pages', adminPages);
app.use('/travel', pages);
app.use('/cart', addCart);
app.use('/users', Users);
app.use('/admin/products', adminProducts);
app.use('/products', Products);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server is running..", PORT);
});


