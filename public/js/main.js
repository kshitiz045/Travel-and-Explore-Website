$(function(){
    
    // alert('test')

    // $('a.confirmdeletion').on('click',function(){
    //     if(!confirm('confirm deletion'))
    //         return false;
    // })

    if($("[data-fancybox]").length){
        $("[data-fancybox]").fancybox();
    }
    if ($('textarea#ta').length) {
        console.log($('#ta'));
        ClassicEditor.create(document.querySelector('#ta')).then(() => {
            console.log('editor initialized');
        }).catch((err) => {
            console.log(err);
        });
    }

});
