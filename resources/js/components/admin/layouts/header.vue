<template>
        <!--==================== HEADER ====================-->
        <!-- Header -->
        <header class="header" id="header">
            <div class="header_logo " >
                <i class="header_collapse-btn fas fa-align-left"></i>
                <img class="logo_img" src="assets/img/logo.png"
                />
            </div>
            <div class="header_search">
                <i class="header_search-icon fas fa-search"></i>
                <input class="header_search-input" type="text" placeholder="Search"/>
            </div>
            <div class="header_profile ">
                <div class="header_profile-imgWrapper ">
                    <img class="header_profile-img" src="assets/img/avatar.jpg" alt=""/>
                </div>
                <p class="header_profile-name">
                    Zander Ford
                </p>
                
            </div>
            <div class="nav__btns" >
                <!--====== THEME CHANGE BUTTON ======-->
                <i class="uil uil-moon change-theme" id="theme-button"></i>

                <div class="nav__toggle" id="nav-toggle">
                    <i class="uil uil-apps "></i>
                </div>
            </div>
        </header>
        <!-- End Header -->

        <!-- Header Profile -->
        <div>
            <span class="header_profile-name--nav">
                <span class="header_profile-name--nav--pointer">
                    <i class="fas fa-sort-up"></i>
                </span>
                <ul class="header_profile-name--nav--list">
                    <li class="header_profile-name--nav--item">
                        <a class="header_profile-name--nav--link" href="#">
                            Profile 
                        </a>
                    </li>
                    <li class="header_profile-name--nav--item">
                        <a class="header_profile-name--nav--link" href="#">
                            Message 
                        </a>
                    </li>
                    <li class="header_profile-name--nav--item">
                        <a class="header_profile-name--nav--link" href="#">
                            Logout 
                        </a>
                    </li>
                </ul>
            </span>
        </div>
        <!-- End Profile Header -->
</template>