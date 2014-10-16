$(document).ready(function() {
    $('.flexslider').flexslider({
        animation: "slide"
        ,pauseOnAction: false
        ,pauseOnHover: true
        ,controlNav: false
    });
});

$(document).ready(function() {
    $('.main-page .fotorama').fotorama({
        width: "100%",
        height: "100%",
        loop: "true",
        fit: "cover",
        nav: "thumbs",
        thumbwidth: "100",
        autoplay: "true",
        allowfullscreen: "true",
        animation: "slide",
        pauseOnAction: false,
        pauseOnHover: true,
        controlNav: false,
    });
});

$(document).ready(function() {
    $('.equipment-page .fotorama').fotorama({
        height: "320",
    });
});