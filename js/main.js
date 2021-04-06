$(document).ready(function() {
    // Fixed Header
    $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
            $(".header").addClass("fixed");
        } else {
            $(".header").removeClass("fixed");
        }
    });

    // Nav Toggle
    $(".nav-toggle").click(function() {
        $(".header .nav").slideToggle();
    })

    // close Navbar when click on link
    $(".header .nav a").click(function() {
        if($(window).width() < 768) {
            $(".header .nav").slideToggle();
        }
    });

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            let hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

});