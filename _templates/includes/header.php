<!DOCTYPE html>
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie10" lang="en"> <![endif]-->
<!--[if IE 8]><html class="no-js is-ie lt-ie9 lt-ie10" lang="en"> <![endif]-->
<!--[if IE 9]><html class="no-js is-ie lt-ie10" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" lang="en"><!--<![endif]-->
<!--
                        _                   _  _    _        __  _                   _                 _
                      | |                 (_)| |  | |      / _|(_)                 | |               | |
 _ __ ___    __ _   __| |  ___  __      __ _ | |_ | |__   | |_  _  _ __   ___  ___ | |_   __ _  _ __ | |_   ___  _ __
| '_ ` _ \  / _` | / _` | / _ \ \ \ /\ / /| || __|| '_ \  |  _|| || '__| / _ \/ __|| __| / _` || '__|| __| / _ \| '__|
| | | | | || (_| || (_| ||  __/  \ V  V / | || |_ | | | | | |  | || |   |  __/\__ \| |_ | (_| || |   | |_ |  __/| |
|_| |_| |_| \__,_| \__,_| \___|   \_/\_/  |_| \__||_| |_| |_|  |_||_|    \___||___/ \__| \__,_||_|    \__| \___||_|


                                                                                https://github.com/oninross/firestarter

                                                                                                                         -->
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="">

        <title>Firestarter</title>

        <link rel="manifest" href="manifest.json">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="msapplication-TileColor" content="#54606e">
        <meta name="msapplication-TileImage" content="ms-icon-144x144.png">
        <meta name="theme-color" content="#54606e">

        <link rel="apple-touch-icon" sizes="57x57" href="apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192"  href="android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">

        <meta name="robots" content="follow">
        <meta name="author" content="">
        <meta name="copyright" content="">
        <meta name="description" content="">
        <meta name="keywords" content="" />

        <meta property="og:title" content="">
        <meta property="og:type" content="">
        <meta property="og:url" content="">
        <meta property="og:image" content="">
        <meta property="og:description" content="">
        <meta property="og:site_name" content="">

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:creator" content=""/>
        <meta name="twitter:url" content=""/>

        <meta name="twitter:title" content=""/>
        <meta name="twitter:description" content=""/>
        <meta name="twitter:image" content="" />

        <!-- build:css /assets/firestarter/css/main.min.css -->
        <link href="/assets/firestarter/css/main.css" rel="stylesheet">
        <!-- /build -->

        <?php if(!isset($is_table_preview)): ?>
            <!-- build:css /assets/firestarter/css/responsive.min.css -->
            <link href="/assets/firestarter/css/responsive.css" rel="stylesheet">
            <!-- /build -->
        <?php endif; ?>

        <link href="https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic" rel="stylesheet" type="text/css">

        <!--[if lt IE 9]>
            <link rel="stylesheet" href = "/assets/firestarter/css/ie.css">
            <script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
        <![endif]-->

        <script src="/assets/firestarter/js/vendor/modernizr.js"></script>
    </head>
    <body>
        <?php if(!isset($is_table_preview)): ?>
        <header class="header">
            <div class="logo">
                <div class="container">
                    <h1>
                        <a href="/">Firestarter</a>
                    </h1>
                </div>
            </div>

            <?php include('primary-nav.php'); ?>
        </header>
        <?php endif; ?>