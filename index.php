<?php
    $server = $_SERVER['SERVER_ADDR'];
    $username = 'root';
    $password = 'root';
    $dbname = 'camagru';
    $charset = 'utf-8';

    $connection = new mysqli($server, $username, $password, $dbname);
    if ($connection->connect_error) {
        die('Ошибка соединения: ' . $connection->connect_error);
    }
    if ($connection->set_charset($charset)) {
        echo 'Ошибка установки кодировки UTF8';
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="static/css/base_style.css">
    <link rel="stylesheet" href="static/css/video.css">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap" rel="stylesheet">
    <title>Camagru</title>
</head>

<body>

    <div class="m-menu-wrapper">
        <header class="m-header">
            <div class="m-container">
                <div class="m-header-body">
                    <a href="#" class="m-header-logo">
                        <p>Camagru</p>
                    </a>
                    <div class="m-header-burger">
                        <span></span>
                    </div>
                    <nav class="m-header-menu">
                        <ul class="m-header-list">
                            <li>
                                <a href="#" class="m-header-link gen_menu">Camagru</a>
                            </li>
                            <li>
                                <a href="#" class="m-header-link gen_menu">О нас</a>
                            </li>
                            <li>
                                <a href="#" class="m-header-link gen_menu">Услуги</a>
                            </li>
                            <li>
                                <a href="#" class="m-header-link gen_menu">Отзывы</a>
                            </li>
                            <li>
                                <a href="#" class="m-header-link gen_menu">Контакты</a>
                            </li>
                            <li>
                                <a id="myBtn" href="#" class="m-header-link m-button">lalala</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    </div>

<main>
    <section id="first-section" class="wrapper">
        <h1>Hello</h1>
        <p>You can make photo here and use our masks</p>
    </section>

    <section>
    
    <div class="main-action">
            <div class="ma-left">
            <div class="upload_form">
                <form action="upload_photo.php" method="post" enctype="multipart/form-data">
                    <p>Вы можете выбрать фото с компьютера или сделать самостоятельно</p>
                    <input type="file" name="upload" id="file" accept="image/*" onchange="previewImage();">
                </form>
            </div>
            <div class="booth">
                <video id="video" autoplay="autoplay"></video>
                <p id="del_photo">X</p>
                <canvas id="canvas"></canvas>
                <a href="#" id="capture" class="booth-capture-button">Сфотографировать</a>
                <!-- <input type="color" id="color"> -->
                <img src="" alt="" id="tmp_photo">

                <!-- <img src="http://goo.gl/qgUfzX" id="photo" alt="Ваша фотография"> -->

                <!-- <img src="/camagru/static/img/error.png" id="photo" alt="Ваша фотография"> -->
                <!-- <a id="dl-btn" href="#" download="glorious_selfie.png">Save Photo</a> -->
            </div>
            <div class="slider">
                <div id="slide">
                    <img src="static/img/batman.jpg" alt="" class="slide_single">
                    <img src="static/img/carnaval.png" alt="" class="slide_single">
                    <img src="static/img/mask.png" alt="" class="slide_single">
                    <img src="static/img/mask1.png" alt="" class="slide_single">
                    <img src="static/img/mask2.jpg" alt="" class="slide_single">
                    <img src="static/img/mask3.png" alt="" class="slide_single">
                </div>
                <div>
                    <img id="arrow" src="static/img/arrow.png" alt="">
                    <img id="arrow2" src="static/img/arrow2.png" alt="">
                </div> 
                <p id="download_photo">download</p>
            </div>

        </div>

        <div class="ma-right">

        </div>
    </div>
    </section>
</main>

</body>
<script src="static/js/primary.js"></script>
<script src="static/js/cam.js"></script>
<script src="static/js/masks.js"></script>
<script src="static/js/menu_script.js"></script>
<script src="static/js/slider.js"></script>
<script src="static/js/download_photo.js"></script>
</html>