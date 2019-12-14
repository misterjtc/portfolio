// This is the main site js file
$(document).ready(function() {
    // Check if the DOM function is ready
    console.log("I'm Ready")
    // Initialize slick slider
    $('#projectThingCam').slick({
        dots: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        // centerMode: true,
        // centerPadding: 0,
        adaptiveHeight: true,
    });
});