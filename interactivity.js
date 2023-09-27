$(window).on('load', function() {
    //flexslider responsive carousel image slider.
    $(".single-item").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "ease",
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    });


    $(".toggleButton").on("click", function() {
        //on click of the hamburger menu
        if ($(".menuItem").hasClass("active")) {
            //if mobile menu is active when clicked,
            //hide the menu
            $(".menuItem").removeClass("active");
            $("nav").css("height", "auto");

        } else {
            //if mobile menu is hidden when clicked,
            //show the menu
            $(".menuItem").addClass("active");
            $("nav").css("height", "100%");
        }

    });

    $(window).resize(function() {
        //If client window is resized an menu is hidden
        if (document.documentElement.clientWidth >= 968) {
            //hide the mobile menu.
            $("nav").css("height", "auto");
        }
        if (document.documentElement.clientWidth < 968 && $(".menuItem").hasClass("active")) {
            //Client size < 968 and toggled
            $("nav").css("height", "100%");
        }

    }).resize()


});