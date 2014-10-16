$(document).ready(function() {
    $('.fotorama').fotorama({
        width: "100%",
        height: "100%",
        loop: "true",
        fit: "cover",
        nav: "thumbs",
        thumbwidth: "100",
        autoplay: "true",
        allowfullscreen: "true",
        fit: "contain",
        animation: "slide",
        pauseOnAction: false,
        pauseOnHover: true,
        controlNav: false,
    });
});