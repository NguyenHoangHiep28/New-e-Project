<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="font-4.7/css/font-awesome.css">
    <link rel="stylesheet" type="text/css" href="css/slick-theme.css">
    <link rel="stylesheet" type="text/css" href="css/slick.css">
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css">
    <link rel="stylesheet" type="text/css" href="css/nice-select.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <title>Harvel Electric</title>
</head>
<body>
    <div class="wraper">
        <div class="container-fluid">
            <div class="head-wrapper">
                <div class="header" id="header">
                    <div class="container px-0">
                        <a href="index.html" ><img class="logo" src="images/logo_new.png"></a>
                        <div class="search widget-ui">
                            <form action="#">
                                <input type="text" placeholder="Search.." id="autocomplete">
                                <button type="submit" ><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                        <div class="user-block">
                            <div class="login">
                                <a href="Login.html" title="Login"><i class="far fa-user fa-2x"></i><span></span></a>
                            </div>
                            <div class="cart">
                                <a href="Cart.html" title="Cart"><i class="fa fa-shopping-cart fa-2x"></i>
                                    <span>2</span>
                                </a>
                                <div class="cart-hover">
                                    <div class="selected-item">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td class="si-pic">
                                                        <img src="images/Fan1.jpg" alt="" width="90px" height="90px">
                                                    </td>
                                                    <td class="si-text">
                                                        <div class="product-selected">
                                                            <p>$5.00 x 1</p>
                                                            <h6>Product name</h6>
                                                        </div>
                                                    </td>
                                                    <td class="si-close">
                                                        <i class="fas fa-times"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="si-pic">
                                                        <img src="images/Fan1.jpg" alt="" width="90px" height="90px">
                                                    </td>
                                                    <td class="si-text">
                                                        <div class="product-selected">
                                                            <p>$5.00 x 1</p>
                                                            <h6>Product name</h6>
                                                        </div>
                                                    </td>
                                                    <td class="si-close">
                                                        <i class="fas fa-times"></i>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="selected-total">
                                        <hr>
                                        <span>total:</span>
                                        <h5>$10.00</h5>
                                    </div>
                                    <div class="selected-button">
                                        <a href="shopping-cart.html" class="view-cart-btn">VIEW CART</a>
                                        <a href="checkOut.html" class="check-out-btn">CHECK OUT</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid menu">
                    <div class="container" style="padding-left: 0px">
                        <div id="menu">
                            <ul>
                                <li style="margin-left: 0px !important;"><a href="index.html"  class="active">Home</a></li>
                                <li><a href="about-us.html">Introduce</a></li>
                                <li id="product"><a href="product.html">Product <i class="fa fa-angle-down"></i></a>
                                    <ul class="product-menu-dropdown">
                                        <li><a href="fans.html">fans</a></li>
                                        <li><a href="appliances.html">appliances</a></li>
                                        <li><a href="water-heater.html">water heater</a></li>
                                        <li><a href="lightning.html">lightning</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact</a></li>
                                <li id="pages"><a href="#">Pages <i class="fa fa-angle-down"></i></a>
                                    <ul class="pages-menu-dropdown">
                                        <li><a href="shopping-cart.html">shopping cart</a></li>
                                        <li><a href="#">checkout</a></li>
                                        <li><a href="#">faq</a></li>
                                        <li><a href="register.html">register</a></li>
                                        <li><a href="login.html">login</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- slider  -->
            <div class="content-wrapper">
                <a href="#" class="totop"><i class="fa fa-chevron-up"></i></a>
                <div class="container-fluid top-slider">
                    <div class="container">
                        <div id="myslider" class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <ul class="carousel-indicators">
                                <li data-bs-target="#myslider" data-bs-slide-to="0" class="active"></li>
                                <li data-bs-target="#myslider" data-bs-slide-to="1"></li>
                                <li data-bs-target="#myslider" data-bs-slide-to="2"></li>
                            </ul>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <a href="#"><img src="images/Slide-1.png" alt=""></a>
                                    <div class="carousel-caption">
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <a href="#"><img src="images/Slide-2.png" alt=""></a>
                                    <div class="carousel-caption">
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <a href="#"><img src="images/Slide-3.png" alt=""></a>
                                    <div class="carousel-caption">
                                    </div>
                                </div>
                            </div>
                            <a href="#myslider" class="carousel-control-prev" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </a>
                            <a href="#myslider" class="carousel-control-next" data-bs-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="promotion">
                    <div class="title">
                        <a href="#"><h3>promotion</h3></a>
                    </div>
                    <div class="container">
                        <div class="row pro-slider">
                            <div class="col-lg-12 products">
                                <figure>
                
                                    <div class="onsale">
                                        <span>-10%</span>
                                    </div>
                                    <img src="images/Promotion1.png" alt="">
                                    <div class="item-action">
                                        <a href="#" id="buy" title="Add to cart"><i class="fas fa-shopping-cart"></i></a>
                                        <a href="#" id="quick-view" title="Quick view"><i class="fas fa-eye"></i><span> quick view</span></a>
                                        <a href="#" id="compare" title="Compare"><i class="fas fa-random"></i></a>
                                    </div>
                                    <figcaption>
                                        <p class="text-truncate">Light Sensor LED Buld</p>
                                        <span id="old-price">$3.66</span>
                                        <span id="pro-price">$3.294</span>
                
                                    </figcaption>
                
                                </figure>
                            </div>
                
                            <div class="col-lg-12 products">
                                <figure>
                
                                    <div class="onsale">
                                        <span>-15%</span>
                                    </div>
                                    <img src="images/Promotion-2.png" alt="">
                                    <div class="item-action">
                                        <a href="#" id="buy" title="Add to cart"><i class="fas fa-shopping-cart"></i></a>
                                        <a href="#" id="quick-view" title="Quick view"><i class="fas fa-eye"></i><span> quick view</span></a>
                                        <a href="#" id="compare" title="Compare"><i class="fas fa-random"></i></a>
                                    </div>
                                    <figcaption>
                                        <p class="text-truncate">Smart Tivi Samsung 4K 55 inch UA55RU7100</p>
                                        <span id="old-price">$523</span>
                                        <span id="pro-price">$444.55</span>
                
                                    </figcaption>
                
                                </figure>
                            </div>
                
                            <div class="col-lg-12 products">
                                <figure>
                                    <a href="">
                                        <div class="onsale">
                                            <span>-20%</span>
                                        </div>
                                        <img src="images/Promotion-3.png" alt="">
                                        <div class="item-action">
                                            <a href="#" id="buy" title="Add to cart"><i class="fas fa-shopping-cart"></i></a>
                                            <a href="#" id="quick-view" title="Quick view"><i class="fas fa-eye"></i><span> quick view</span></a>
                                            <a href="#" id="compare" title="Compare"><i class="fas fa-random"></i></a>
                                        </div>
                                        <figcaption>
                                            <p class="text-truncate">ANDRIS2 Top WIFI 30L ARISTON</p>
                                            <span id="old-price">$286</span>
                                            <span id="pro-price">$228.8</span>
                                        </figcaption>
                                    </a>
                                </figure>
                            </div>
                
                            <div class="col-lg-12 products">
                                <figure>
                                    <a href="">
                                        <div class="onsale">
                                            <span>-10%</span>
                                        </div>
                                        <img src="images/Promotion-4.png" alt="">
                                        <div class="item-action">
                                            <a href="#" id="buy" title="Add to cart"><i class="fas fa-shopping-cart"></i></a>
                                            <a href="#" id="quick-view" title="Quick view"><i class="fas fa-eye"></i><span> quick view</span></a>
                                            <a href="#" id="compare" title="Compare"><i class="fas fa-random"></i></a>
                                        </div>
                                        <figcaption>
                                            <p class="text-truncate">ROBOT Suction KOWON Dust</p>
                                            <span id="old-price">$219</span>
                                            <span id="pro-price">$197.1</span>
                                        </figcaption>
                                    </a>
                                </figure>
                            </div>
                
                            <div class="col-lg-12 products">
                                <figure>
                                    <a href="">
                                        <div class="onsale">
                                            <span>-25%</span>
                                        </div>
                                        <img src="images/Promotion-5png.png" alt="">
                                        <div class="item-action">
                                            <a href="#" id="buy" title="Add to cart"><i class="fas fa-shopping-cart"></i></a>
                                            <a href="#" id="quick-view" title="Quick view"><i class="fas fa-eye"></i><span> quick view</span></a>
                                            <a href="#" id="compare" title="Compare"><i class="fas fa-random"></i></a>
                                        </div>
                                        <figcaption>
                                            <p class="text-truncate">Refrigerator Family Hub 641L</p>
                
                                            <span id="old-price">$2857.142</span>
                                            <span id="pro-price">$2142.857</span>
                                        </figcaption>
                                    </a>
                                </figure>
                            </div>
                
                            <div class="col-lg-12 products">
                                <figure>
                                    <a href="">
                                        <div class="onsale">
                                            <span>-20%</span>
                                        </div>
                                        <img src="images/Promotion-6.png" alt="">
                                        <div class="item-action">
                                            <a href="#" id="buy" title="Add to cart"><i class="fas fa-shopping-cart"></i></a>
                                            <a href="#" id="quick-view" title="Quick view"><i class="fas fa-eye"></i><span> quick view</span></a>
                                            <a href="#" id="compare" title="Compare"><i class="fas fa-random"></i></a>
                                        </div>
                                        <figcaption class="text-truncate">
                                            <p class="text-truncate">ROWENTA HQ7112 Table Fan</p>
                
                                            <span id="old-price">$233.333</span>
                                            <span id="pro-price">$186.666</span>
                                        </figcaption>
                                    </a>
                                </figure>
                            </div>
                
                            <div class="col-lg-12 products">
                                <figure>
                                    <a href="">
                                        <div class="onsale">
                                            <span>-15%</span>
                                        </div>
                                        <img src="images/Promotion-7.png" alt="">
                                        <div class="item-action">
                                            <a href="#" id="buy" title="Add to cart"><i class="fas fa-shopping-cart"></i></a>
                                            <a href="#" id="quick-view" title="Quick view"><i class="fas fa-eye"></i><span> quick view</span></a>
                                            <a href="#" id="compare" title="Compare"><i class="fas fa-random"></i></a>
                                        </div>
                                        <figcaption>
                                            <p class="text-truncate">Kitchen From D'MESTIK ML288DKI</p>
                
                                            <span id="old-price">$323.809</span>
                                            <span id="pro-price">$275.238</span>
                                        </figcaption>
                                    </a>
                                </figure>
                            </div>
                        </div>
                        <div class="view-all">
                            <a href="promotion.html">View All...</a>
                        </div>
                    </div>
                </div>
                <div class="best-selling">
                    <div class="title">
                        <a href="#"><h3>Best Selling Product</h3></a>
                    </div>
                    <div class="container">
                        <div class="row bselling-slider">
                            <div class="col-lg-12 products">
                                <figure>
                                    <a href="#">
                
                                        <img src="images/BestSelling-1.png" alt="">
                                        <div class="item-action">
                                            <a href="#" id="buy" title="Add to cart"><i class="fas fa-shopping-cart"></i></a>
                                            <a href="#" id="quick-view" title="Quick view"><i class="fas fa-eye"></i><span> quick view</span></a>
                                            <a href="#" id="compare" title="Compare"><i class="fas fa-random"></i></a>
                                        </div>
                                        <figcaption>
                                            <a href=""><p class="text-truncate">Light Buld Led Cree+</p></a>
                                            <span id="pro-price">$7</span>
                                        </figcaption>
                                    </a>
                                </figure>
                            </div>
                
                            <div class="col-lg-12 products">
                                <figure>
                                    <a href="">
                
                                        <img src="images/BestSelling-2.png" alt="">
                                        <div class="item-action">
                                            <a href="#" id="buy" title="Add to cart"><i class="fas fa-shopping-cart"></i></a>
                                            <a href="#" id="quick-view" title="Quick view"><i class="fas fa-eye"></i><span> quick view</span></a>
                                            <a href="#" id="compare" title="Compare"><i class="fas fa-random"></i></a>
                                        </div>
                                        <figcaption>
                                            <p class="text-truncate">Robot Vacuum Cleaner ILIFE X900 </p>
                                            <span id="pro-price">$571.428</span>
                                        </figcaption>
                                    </a>
                                </figure>
                            </div>
                
                            <div class="col-lg-12 products">
                                <figure>
                                    <a href="">
                
                                        <img src="images/BestSelling-3.png" alt="">
                                        <div class="item-action">
                                            <a href="#" id="buy" title="Add to cart"><i class="fas fa-shopping-cart"></i></a>
                                            <a href="#" id="quick-view" title="Quick view"><i class="fas fa-eye"></i><span> quick view</span></a>
                                            <a href="#" id="compare" title="Compare"><i class="fas fa-random"></i></a>
                                        </div>
                                        <figcaption>
                                            <p class="text-truncate">Blender WMF</p>
                
                                            <span id="pro-price">$80.952</span>
                                        </figcaption>
                                    </a>
                                </figure>
                            </div>
                
                            <div class="col-lg-12 products">
                                <figure>
                                    <a href="">
                
                                        <img src="images/BestSelling-4.png" alt="">
                                        <div class="item-action">
                                            <a href="#" id="buy" title="Add to cart"><i class="fas fa-shopping-cart"></i></a>
                                            <a href="#" id="quick-view" title="Quick view"><i class="fas fa-eye"></i><span> quick view</span></a>
                                            <a href="#" id="compare" title="Compare"><i class="fas fa-random"></i></a>
                                        </div>
                                        <figcaption>
                                            <p class="text-truncate">Induction Cooker GGM GCI42-2I</p>
                                            <span id="pro-price">$566.666</span>
                
                                        </figcaption>
                                    </a>
                                </figure>
                            </div>
                
                            <div class="col-lg-12 products">
                                <figure>
                                    <a href="">
                
                                        <img src="images/BestSelling-5.png" alt="">
                                        <div class="item-action">
                                            <a href="#" id="buy" title="Add to cart"><i class="fas fa-shopping-cart"></i></a>
                                            <a href="#" id="quick-view" title="Quick view"><i class="fas fa-eye"></i><span> quick view</span></a>
                                            <a href="#" id="compare" title="Compare"><i class="fas fa-random"></i></a>
                                        </div>
                                        <figcaption>
                                            <p class="text-truncate">Samsung WW90J54E0BX / SV 9 Kg Steam Washer</p>
                
                                            <span id="pro-price">$809.523</span>
                
                                        </figcaption>
                                    </a>
                                </figure>
                            </div>
                
                            <div class="col-lg-12 products">
                                <figure>
                                    <a href="">
                
                                        <img src="images/BestSelling-6.png" alt="">
                                        <div class="item-action">
                                            <a href="#" id="buy" title="Add to cart"><i class="fas fa-shopping-cart"></i></a>
                                            <a href="#" id="quick-view" title="Quick view"><i class="fas fa-eye"></i><span> quick view</span></a>
                                            <a href="#" id="compare" title="Compare"><i class="fas fa-random"></i></a>
                                        </div>
                                        <figcaption class="text-truncate">
                                            <p class="text-truncate">Legend LA-007 Mist Steam Fan</p>
                                            <span id="pro-price">$85.714</span>
                
                                        </figcaption>
                                    </a>
                                </figure>
                            </div>
                
                            <div class="col-lg-12 products">
                                <figure>
                                    <a href="">
                
                                        <img src="images/BestSelling-7.png" alt="">
                                        <div class="item-action">
                                            <a href="#" id="buy" title="Add to cart"><i class="fas fa-shopping-cart"></i></a>
                                            <a href="#" id="quick-view" title="Quick view"><i class="fas fa-eye"></i><span> quick view</span></a>
                                            <a href="#" id="compare" title="Compare"><i class="fas fa-random"></i></a>
                                        </div>
                                        <figcaption>
                                            <p class="text-truncate">Heating Fan Sunhouse SHD 7019</p>
                                            <span id="pro-price">$26</span>
                                        </figcaption>
                                    </a>
                                </figure>
                            </div>
                        </div>
                        <div class="view-all">
                            <a href="best-selling.html">View All...</a>
                        </div>
                    </div>
                </div>
                <div class="cate-block">
                    <h5>categories</h5>
                    <div class="container cate-menu-wrapper">
                        <div class="cate-menu">
                            <div class="lightning">
                                <a href="lightning.html">
                                    <i class="fa fa-lightbulb-o fa-2x"></i>
                                    <span>lightning</span>
                                </a>
                            </div>
                            <div class="appliances">
                                <a href="appliances.html">
                                    <i class="fas fa-plug fa-2x"></i>
                                    <span>appliances</span>
                                </a>
                            </div>
                            <div class="fans">
                                <a href="fans.html">
                                    <i class="fas fa-fan fa-2x"></i>
                                    <span>fans</span>
                                </a>
                            </div>
                            <div class="water-heater">
                                <a href="water-heater.html">
                                    <i class="fa fa-power-off fa-2x"></i>
                                    <span>water heater</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="deal-of-week">
                    <div class="container deal-wrapper">
                        <div class="row">
                            <div class="col-lg-7 deal-content">
                                <h1>deal of the week <i class="fas fa-fire"></i></h1>
                                <div class="underline"></div>
                                <p>29" Tall Oscillating Standing Tower Air Cooler Fan Humidifer</p>
                                <h1 id="deal-price">$20.00<sub>/fan</sub></h1>
                                <div class="time-countdown">
                                    <div>
                                        <h4 id="day"></h4>
                                        <h5>DAYS</h5>
                                    </div>
                                    <div>
                                        <h4 id="hour"></h4>
                                        <h5>HRS</h5>
                                    </div>
                                    <div>
                                        <h4 id="minute"></h4>
                                        <h5>MINS</h5>
                                    </div>
                                    <div>
                                        <h4 id="second"></h4>
                                        <h5>SECS</h5>
                                    </div>
                                </div>
                                <a href="#" class="shop-button">
                                    <span>shop now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="popular">
                    <div class="title">
                        <a href="#"><h3>Popular</h3></a>
                    </div>
                    <div class="container">
                        <div class="row row-items">
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <img src="images/Popular-1.png" alt="">
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">GE LED Outdoor Light Bulb</p></a>
                                        <span id="pro-price">$9.38</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <img src="images/Popular-2.png" alt=""/>
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">Alaska RL-99 Hot And Cold Water Plant</p></a>
                                        <span id="pro-price">$179.047</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <img src="images/Popular-3.png" alt=""/>
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">Tefal DR8085 Hand Steam Iron</p></a>
                                        <span id="pro-price">$75.1</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <img src="images/Popular-4.png" alt="">
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">ARISTON ANDRIS2 LUX Water Heater</p></a>
                                        <span id="pro-price">$180.118</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <img src="images/Popular-5.png" alt=""/>
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">Multi-drive electric drive</p></a>
                                        <span id="pro-price">$6,728</span>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div class="row row-items">
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <img src="images/Popular-6.png" alt=""/>
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">Robot vacuum cleaner Liectroux C30B</p></a>
                                        <span id="pro-price">$267.857</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <img src="images/Popular-7.png" alt=""/>
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">Lasko Adjustable-Height Fan</p></a>
                                        <span id="pro-price">$23.984</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <img src="images/Popular-8.png" alt=""/>
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">Panasonic MX-V310 Blender</p></a>
                                        <span id="pro-price">$58.0</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <img src="images/Popular-9.png" alt=""/>
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">HONEYWELL R4158WHI</p></a>
                                        <span id="pro-price">$5.46</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <img src="images/Popular-10.png" alt="">
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">12V 1157 Led Bulb</p></a>
                                        <span id="pro-price">3.00$</span>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div class="row row-items">
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <img src="images/Popular-11.png" alt=""/>
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">Standard Cruiser Refresh Ceiling Fan</p></a>
                                        <span id="pro-price">$228.571</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <img src="images/Popular-12.png" alt="">
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">Philips A19 LED light bulbs</p></a>
                                        <span id="pro-price">11.16$</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <img src="images/Popular-13.png" alt="">
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">Ferroli Verdi-AE 20 heater</p></a>
                                        <span id="pro-price">$189.04</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <img src="images/Popular-14.png" alt="">
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">Hair dryer Philips BHD170 / 40</p></a>
                                        <span id="pro-price">$71.428</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <img src="images/Popular-15.png" alt="">
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">Product name this is a long name ho</p></a>
                                        <span id="pro-price">$86.666</span>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div class="row row-items">
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <img src="images/Popular-16.png" alt="">
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">BM lamp 135W</p></a>
                                        <span id="pro-price">$15.238</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <img src="images/Popular-17.png" alt="">
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">The power outlet has the Sino Amigo SW-1UAS USB port</p></a>
                                        <span id="pro-price">$16.666</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <img src="images/Popular-18.png" alt="">
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">Sunhouse SHR76210CK hot and cold water purifier</p></a>
                                        <span id="pro-price">$400</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <img src="images/Popular-19.png" alt="">
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">Air-cooled fan cooled by steam Kozaika 60l</p></a>
                                        <span id="pro-price">$276.190</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <img src="images/Popular-20.png" alt="">
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">2 × 2.5 Soft double Cadisun wire</p></a>
                                        <span id="pro-price">$75</span>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div class="row row-items">
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <img src="images/Popular-21.png" alt="">
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">Induction cooker Mijia A1</p></a>
                                        <span id="pro-price">$35.714</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <img src="images/Popular-22.png" alt="">
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">Electrolux Inverter 8 Kg Washing Machine EWF8025CQSA</p></a>
                                        <span id="pro-price">$465.666</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <img src="images/Popular-23.png" alt="">
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">Super speed Philips 1.2 liter HD9303</p></a>
                                        <span id="pro-price">$580</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <div class="onsale">
                                            <span>sale</span>
                                        </div>
                                        <img src="images/elec2.jpg" alt="" height="200px">
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">Product name this is a long name ho</p></a>
                                        <span id="old-price">5$</span>
                                        <span id="pro-price">5$</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <div class="onsale">
                                            <span>sale</span>
                                        </div>
                                        <img src="images/elec2.jpg" alt="" height="200px">
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">Product name this is a long name ho</p></a>
                                        <span id="old-price">5$</span>
                                        <span id="pro-price">5$</span>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div class="row row-items">
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <div class="onsale">
                                            <span>sale</span>
                                        </div>
                                        <img src="images/elec2.jpg" alt="" height="200px">
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">Product name this is a long name ho</p></a>
                                        <span id="old-price">5$</span>
                                        <span id="pro-price">5$</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <div class="onsale">
                                            <span>sale</span>
                                        </div>
                                        <img src="images/elec2.jpg" alt="" height="200px">
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">Product name this is a long name ho</p></a>
                                        <span id="old-price">5$</span>
                                        <span id="pro-price">5$</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <div class="onsale">
                                            <span>sale</span>
                                        </div>
                                        <img src="images/elec2.jpg" alt="" height="200px">
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">Product name this is a long name ho</p></a>
                                        <span id="old-price">5$</span>
                                        <span id="pro-price">5$</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <div class="onsale">
                                            <span>sale</span>
                                        </div>
                                        <img src="images/elec2.jpg" alt="" height="200px">
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">Product name this is a long name ho</p></a>
                                        <span id="old-price">5$</span>
                                        <span id="pro-price">5$</span>
                                    </figcaption>
                                </figure>
                            </div>
                
                            <div class="product-item">
                                <figure>
                                    <a href="">
                                        <div class="onsale">
                                            <span>sale</span>
                                        </div>
                                        <img src="images/elec2.jpg" alt="" height="200px">
                                    </a>
                                    <figcaption>
                                        <a href=""><p class="text-truncate">Product name this is a long name ho</p></a>
                                        <span id="old-price">5$</span>
                                        <span id="pro-price">5$</span>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                
                </div>
                <a href="#" id="load-more">
                    <span>load more</span>
                </a>
                <hr>
                <div class="user-benefit">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 bnf-block">
                                <img src="images/high-quality-icon.png" alt="" width="100px" height="100px">
                                <h4>high quality</h4>
                            </div>
                            <div class="col-lg-4 bnf-block">
                                <img src="images/return-icon.jpg" alt="" width="100px" height="100px">
                                <h4>easy to return</h4>
                            </div>
                            <div class="col-lg-4 bnf-block">
                                <img src="images/24-7-support-icon.png" alt="" width="100px" height="100px">
                                <h4>24/7 support</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="brand">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-2"><img src="images/philips086473574.jpg" alt="" height="40px"></div>
                            <div class="col-lg-2"><img src="images/Panasonic873768367.jpg" alt="" height="40px"></div>
                            <div class="col-lg-2"><img src="images/Mennekes520246502.jpg" alt="" height="40px"></div>
                            <div class="col-lg-2"><img src="images/Cadivi847106821.jpg" alt="" height="40px"></div>
                            <div class="col-lg-2"><img src="images/Paragon760064346.jpg" alt="" height="40px"></div>
                            <div class="col-lg-2"><img src="images/SchneiderElectric412485467.jpg" alt="" height="40px"></div>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="footer-banner">
                        <div class="ftbanner-content">
                            <div class="container">
                                <h3>sign up for newsletter</h3>
                                <form class="einput-group" action="#">
                                    <input type="email" id="email" placeholder="Enter your email address">
                                    <button type="submit">sign up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="container footer-content">
                        <div class="row">
                            <div class="col-lg-3 contact-info">
                                <h3>contact info</h3>
                                <address>No. 08, Ton That Thuyet Street, My Dinh Ward, Tu Liem District, Hanoi City</address>
                                <p>If you got questions please mail us at <a href="mailto:harvelelectric@gmail.com">harvelelectric@gmail.com</a>
                                    or <a href="tel:0987654321">call us</a> (11:00 am to 7:00 pm)
                                </p>
                            </div>
                            <div class="col-lg-3 find-it-fast">
                                <h3>find it fast</h3>
                                <ul>
                                    <li><a href="fans.html">fans</a></li>
                                    <li><a href="appliances.html">appliances</a></li>
                                    <li><a href="water-heater.html">water heater</a></li>
                                    <li><a href="lightning.html">lightning</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-3 customer-care">
                                <h3>customer care</h3>
                                <ul>
                                    <li><a href="login.html">my account</a></li>
                                    <li><a href="#">shopping cart</a></li>
                                    <li><a href="contact.html">contact</a></li>
                                    <li><a href="product.html">product</a></li>

                                </ul>
                            </div>
                            <div class="col-lg-3" style="text-align: center">
                                <h3>Certified and link</h3>
                                <img src="images/fot_chung_nhan.png" alt="">
                                <br>
                                <a href="#"><img src="images/fot_chung_nhan2.png"></a>
                                <div class="link">
                                    <a href="https://www.facebook.com/"><i class="fa fa-facebook-square fa-3x"></i></a>
                                    <a href="https://www.google.com/"><i class="fa fa-google-plus-square fa-3x"></i></a>
                                    <a href="https://www.youtube.com/"><i class="fa fa-youtube-square fa-3x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/jquery-3.5.1.min.js"></script>
    <script src="https://kit.fontawesome.com/4f2e7166f7.js" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/slick.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="js/jquery.countdown.js"></script>
    <script type="text/javascript" src="js/jquery.nice-select.min.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
</body>
</html>
