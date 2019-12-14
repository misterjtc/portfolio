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
    // Smoothscrool for main section links
    $('.thisIsMeButton').on('click', function() {
        // event.preventDefault();
        console.log("you click the this is me link")
        $.smoothScroll({
        //   scrollElement: $('.pressInputsContainer'),
          scrollTarget: '#thisIsMe',
          speed: 800
        });
    });
    $('.meButton').on('click', function() {
        // event.preventDefault();
        console.log("you click the this is me link")
        $.smoothScroll({
        //   scrollElement: $('.pressInputsContainer'),
          scrollTarget: '#me',
          speed: 800
        });
    });
    $('.meButton').on('click', function() {
        // event.preventDefault();
        console.log("you click the this is me link")
        $.smoothScroll({
        //   scrollElement: $('.pressInputsContainer'),
          scrollTarget: '#me',
          speed: 800
        });
    });
    $('.profInterestsButton').on('click', function() {
        // event.preventDefault();
        console.log("you click the this is me link")
        $.smoothScroll({
        //   scrollElement: $('.pressInputsContainer'),
          scrollTarget: '#profInterests',
          speed: 800
        });
    });
    $('.perInterestsButton').on('click', function() {
        // event.preventDefault();
        console.log("you click the this is me link")
        $.smoothScroll({
        //   scrollElement: $('.pressInputsContainer'),
          scrollTarget: '#perInterests',
          speed: 800
        });
    });
    $('.projectButton').on('click', function() {
        // event.preventDefault();
        console.log("you click the this is me link")
        $.smoothScroll({
        //   scrollElement: $('.pressInputsContainer'),
          scrollTarget: '#mainProjects',
          speed: 800
        });
    });
});