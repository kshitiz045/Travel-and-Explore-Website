<%- include ('layouts/login_header') -%>

<div class="page-layout">
    <div class="mako-grid__row">
        <div class="mako-grid__col-12">
            <h1 data-qahook="headerTitle">Account Details</h1>
            <ul class="tab-wrapper tabs-module__tab-wrapper___1raiW account-details-tabs">
                <li class="tab tabs-module__tab___2qlvM tabs-module__is-active___1yO84 is-active"
                    data-qahook="detailsTab">Account </li>
                <li class="tab tabs-module__tab___2qlvM" data-qahook="billingTab">Billing </li>
                <li class="tab tabs-module__tab___2qlvM" data-qahook="productsTab">Your Products </li>
            </ul>
            <div class="account-container">
                <div class="mako-grid__row">
                    <div class="mako-grid__col-3 header-container">
                        <h2 class="header">Your Account</h2>
                    </div>
                    <div class="mako-grid__col-9 stacked-card">
                        <div class="bordered">
                            <div class="mako-grid__row" data-qahook="personalInfo">
                                <div class="mako-grid__col-2 title">Personal Info</div>
                                <div class="mako-grid__col-8">
                                    <div class="content"><span>hemant gaur</span></div>
                                    <div class="content"><span>hemant.gaur_cs18@gla.ac.in</span></div>
                                </div>
                                <div class="mako-grid__col-2 edit"><button class="edit-icon-button" id="AccountInfo"
                                        tabindex="0"><i
                                            class="sg-icon sg-icon-pencil icon-module__sg-icon___3W7YJ icon-module__sg-icon-pencil___l2w10"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="bordered">
                            <div class="mako-grid__row" data-qahook="username">
                                <div class="mako-grid__col-2 title">Username</div>
                                <div class="mako-grid__col-8">
                                    <div class="content"><span>hemant.gaur_cs18@gla.ac.in</span></div>
                                </div>
                                <div class="mako-grid__col-2 edit"><button class="edit-icon-button" id="Username"
                                        tabindex="0"><i
                                            class="sg-icon sg-icon-pencil icon-module__sg-icon___3W7YJ icon-module__sg-icon-pencil___l2w10"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="bordered">
                            <div class="mako-grid__row" data-qahook="password">
                                <div class="mako-grid__col-2 title">Password</div>
                                <div class="mako-grid__col-8">
                                    <div class="content"><span>*****************</span></div>
                                </div>
                                <div class="mako-grid__col-2 edit"><button class="edit-icon-button" id="Password"
                                        tabindex="0"><i
                                            class="sg-icon sg-icon-pencil icon-module__sg-icon___3W7YJ icon-module__sg-icon-pencil___l2w10"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="bordered">
                            <div class="mako-grid__row" data-qahook="timezone">
                                <div class="mako-grid__col-2 title">Timezone</div>
                                <div class="mako-grid__col-8">
                                    <div class="content"><span>GMT-06:00 - Central Time, US &amp; Canada
                                            America/Chicago</span></div>
                                </div>
                                <div class="mako-grid__col-2 edit"><button class="edit-icon-button" id="Timezone"
                                        tabindex="0"><i
                                            class="sg-icon sg-icon-pencil icon-module__sg-icon___3W7YJ icon-module__sg-icon-pencil___l2w10"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="">
                <div class="mako-grid__row">
                    <div class="mako-grid__col-3 header-container">
                        <h2 class="header">your company</h2>
                    </div>
                    <div class="mako-grid__col-9 stacked-card">
                        <div class="bordered">
                            <div class="mako-grid__row" data-qahook="companyName">
                                <div class="mako-grid__col-2 title">name</div>
                                <div class="mako-grid__col-8">
                                    <div class="content"><span>nothing</span></div>
                                </div>
                                <div class="mako-grid__col-2 edit"><button class="edit-icon-button" id="CompanyName"
                                        tabindex="0"><i
                                            class="sg-icon sg-icon-pencil icon-module__sg-icon___3W7YJ icon-module__sg-icon-pencil___l2w10"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="bordered">
                            <div class="mako-grid__row" data-qahook="address">
                                <div class="mako-grid__col-2 title">address</div>
                                <div class="mako-grid__col-8">
                                    <div class="content"><span>Meerut, UP </span></div>
                                    <div class="content"><span>IN</span></div>
                                </div>
                                <div class="mako-grid__col-2 edit"><button class="edit-icon-button" id="CompanyAddress"
                                        tabindex="0"><i
                                            class="sg-icon sg-icon-pencil icon-module__sg-icon___3W7YJ icon-module__sg-icon-pencil___l2w10"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="bordered">
                            <div class="mako-grid__row" data-qahook="website">
                                <div class="mako-grid__col-2 title">website</div>
                                <div class="mako-grid__col-8">
                                    <div class="content"><span>nothing</span></div>
                                </div>
                                <div class="mako-grid__col-2 edit"><button class="edit-icon-button" id="CompanyWebsite"
                                        tabindex="0"><i
                                            class="sg-icon sg-icon-pencil icon-module__sg-icon___3W7YJ icon-module__sg-icon-pencil___l2w10"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<%- include ('layouts/footer'); -%>
