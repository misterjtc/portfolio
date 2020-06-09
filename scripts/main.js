// This is the mainLinks site js file
$(document).ready(function() {
    // Check if the DOM function is ready
    console.log("I'm Ready")
    // Timeout function for loader
    function showPage() {
      // document.getElementById("loader").style.display = "none";
      // document.getElementById("dashboard").style.opacity = "1";
      $('#loader').fadeOut("slow");
      $('main').fadeIn("slow");
  }
  setTimeout(showPage, 3500);
    // Initialize slick sliders
    // Project thing cam
    $('#thingcamHero, #carmountHero, #boggerHero, #headphoneHero, #glacierHero, #dashboardHero, #lightarmHero, #selfieStickHero, #piHoleHero, #homeServerHero, #basfiltrHero, #drivfiltrHero, #bajaHero, #OADHero').slick({
        dots: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 5000,
        // centerMode: true,
        // centerPadding: 0,
        adaptiveHeight: true,
        pauseOnHover: true
    });
    // Smoothscrool for mainLinks section links
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
    // Mobile nav menu actuation
    $(".headerMobileNavLink").on("click", function(){
      var $navHeight = $('.mainLinks').height();
      console.log($navHeight);
      // If the nav bar has class navCheck collapse it - else expand it
      if ( $('.mainLinks').hasClass("navCheck") ) {
      // collapse nav
        $('.mainLinks').animate({height: "50px"}, 400, "linear");
        $('.mainLinks').removeClass('navCheck');
        $(".mobileList").fadeOut( "fast", function() {
          // Animation complete
        });
      } else {
        // expand nav
        $('.mainLinks').animate({height: "300px"}, 400, "linear");
        $('.mainLinks').addClass('navCheck');
        $(".mobileList").fadeIn( "fast", function() {
          // Animation complete
        });
      }
    });
    // isotope project grid layout
    $('.projectGrid').isotope({
      // options
      itemSelector: '.projectItem',
      percentPosition: true,
      masonry: {
        columnWidth: '.gridSizer'
      }
    });
});