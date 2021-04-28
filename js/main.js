let index = 0;
const totalWorkItems = $(".service-inner").length;
console.log(totalWorkItems)

// ===== Animation on Scroll ====
window.addEventListener("load", function() {
    AOS.init({
        once: true
    });
});

// ==== Preloader ====
$(window).on("load",function(){
    $(".preloader").addClass("loaded");
 })



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

    // lightbox
    $(".service-inner").click(function() {
        index = $(this).index();
        $(".lightbox").addClass("open");
        lightboxSlideShow();
    });

    $(".lightbox .prev").click(function() {
        if(index == 0) {
            index = totalWorkItems - 1;
        } else {
            index--;
        }
        lightboxSlideShow();
    });

    $(".lightbox .next").click(function() {
        if(index == totalWorkItems - 1) {
            index = 0;
        } else {
            index++;
        }
        lightboxSlideShow();
    });

    // Close Lightbox
    $(".lightbox-close").click(function() {
        $(".lightbox").removeClass("open");
    });

    // Close lightbox when clicked outside of imgbox
    $(".lightbox").click(function(event) {
        if($(event.target).hasClass("lightbox")){
            $(this).removeClass("open");
        }
    });
});

function lightboxSlideShow() {
    const imgSrc = $(".service-inner").eq(index).find("img").attr("data-image");
    const category = $('.service-inner').eq(index).find("h4").html()
    const details = $('.service-inner').eq(index).find("p").html()
    $(".lightbox-img").attr("src", imgSrc);
    $(".lightbox-category").html(category); 
    $(".lightbox-details").html(details);
    $(".lightbox-counter").html((index+1) + "/" + totalWorkItems);
}