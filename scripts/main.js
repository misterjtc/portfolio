// This is the main site js file
$(document).ready(function() {
    // Check if the DOM function is ready
    console.log("I'm Ready")
    // Initialize slick sliders
    // Project thing cam
    $('#projectThingCam').slick({
        dots: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        // centerMode: true,
        // centerPadding: 0,
        adaptiveHeight: true,
    });
    // projet car mount
    $('#projectCarMount').slick({
      dots: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      // centerMode: true,
      // centerPadding: 0,
      adaptiveHeight: true,
  });
  // project bogger rc tire
  $('#projectBogger').slick({
    dots: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    // centerMode: true,
    // centerPadding: 0,
    adaptiveHeight: true,
  });
  // project headphone cable manager
  $('#projectHeadphoneCable').slick({
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
      $.smoothScroll({
        scrollTarget: '#thisIsMe',
        speed: 800
      });
    });
    $('.meButton').on('click', function() {
      $.smoothScroll({
        scrollTarget: '#me',
        speed: 800
      });
    });
    $('.meButton').on('click', function() {
      $.smoothScroll({
        scrollTarget: '#me',
        speed: 800
      });
    });
    $('.profInterestsButton').on('click', function() {
      $.smoothScroll({
        scrollTarget: '#profInterests',
        speed: 800
      });
    });
    $('.perInterestsButton').on('click', function() {
      $.smoothScroll({
        scrollTarget: '#perInterests',
        speed: 800
      });
    });
    $('.projectButton').on('click', function() {
      $.smoothScroll({
        scrollTarget: '#mainProjects',
        speed: 800
      });
    });
    $('.contactButton').on('click', function() {
      $.smoothScroll({
        scrollTarget: '#contact',
        speed: 800
      })
    })
});