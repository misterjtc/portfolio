// This is the mainLinks site js file
$(document).ready(function() {
    // Check if the DOM function is ready
    console.log("I'm Ready")
    // Timeout function for loading page
    function showPage() {
      $('#loader').fadeOut("slow");
      $('main').fadeIn("slow");
      $('body').css("overflow-y", "scroll");
      // isotope project grid layout
      $('.projectGrid').isotope({
        // options
        itemSelector: '.projectItem',
        percentPosition: true,
        stagger: 30,
        // layoutMode: 'packery',
        masonry: {
          columnWidth: '.gridSizer'
        }
        // packery: {
        //   // columnWidth: ".gridSizer"
        //   horizontal: true
        // }
      });
    }
    setTimeout(showPage, 3500);
    // Get the widths of each project
      // Presentation project widths
      var projectBumperWidth = $('#projectBumperDesign').css("width");
      var projectBASTwoWidth = $('#projectBASTwo').css('width');
      var projectCultureWidth = $('#projectCulture').css('width');
      var projectHeatTreatWidth = $('#projectHeatTreat').css('width');
      var projectFEAWidth = $('#projectFEA').css('width');
      var projectAutomationWidth = $('#projectAutomation').css('width');
      // Personal project widths
      var projectPiHoleWidth = $('#projectPiHole').css('width');
      var projectHomeServerWidth = $('#projectHomeServer').css('width');
      // 3D printing project widths
      var projectHeadphoneCableWidth = $('#projectHeadphoneCable').css('width');
      var projectSelfieStickWidth = $('#projectSelfieStick').css('width');
      // Professional project widths
      var projectDrivfiltrWidth = $('#projectDrivfiltr').css('width');
      var projectOADWidth = $('#projectOAD').css('width');
      // Travel project widths
      var projectTurkeyCatWidth = $('#projectTurkeyCat').css('width');
      var projectTurkeyDroneWidth = $('#projectTurkeyDrone').css('width');
      var projectGlacierDroneWidth = $('#projectGlacierDrone').css('width');
      var projectUtahDroneWidth = $('#projectUtahDrone').css('width');
      var projectMarineWidth = $('#projectMarine').css('width');
      var projectBluejaysWidth = $('#projectBluejays').css('width');
      var projectKangarooWidth = $('#projectKangaroo').css('width');
    // Sorting for project section
    $('.filterContent').on( 'click', 'button', function() {
      var filterValue = $( this ).attr('data-filter');
      console.log(filterValue);
      // filter the grid
      $('.projectGrid').isotope({ filter: filterValue });
      // if statement to resize project items when sorted
      if (filterValue == '.presentation') {
        console.log("I set presentation width")
        $('.presentation').css('width', "50%");
        // reload the grid
        $('.projectGrid').isotope({
          itemSelector: '.projectItem',
          percentPosition: true,
          stagger: 30,
          masonry: {
            columnWidth: '.gridSizer'
          }
        });
      } else if (filterValue == '.professional') {
        $('#projectBASTwo').css('width', '50%');
        $('#projectHeatTreat').css('width', '50%');
        $('#projectDrivfiltr').css('width', '50%');
        $('#drivfiltrHero').css('padding', '0 20%');
        $('#projectOAD').css('width', '50%');
        $('#OADHero').css('padding', '0 20%');
        // reload the grid
        $('.projectGrid').isotope({
          itemSelector: '.projectItem',
          percentPosition: true,
          stagger: 30,
          masonry: {
            columnWidth: '.gridSizer'
          }
        });
      } else if (filterValue == '.personal') {
        $('#projectHeadphoneCable').css('width', '40%');
        $('#projectSelfieStick').css('width', '50%');
        $('#projectPiHole').css('width', '50%');
        $('#projectHomeServer').css('width', '50%');
        // reload the grid 
        $('.projectGrid').isotope({
          itemSelector: '.projectItem',
          percentPosition: true,
          stagger: 30,
          masonry: {
            columnWidth: '.gridSizer'
          }
        });
      } else if (filterValue == '.printing') {
        $('#projectHeadphoneCable').css('width', '35%');
        $('#projectSelfieStick').css('width', '35%');
        // reload the grid
        $('.projectGrid').isotope({
          itemSelector: '.projectItem',
          percentPosition: true,
          stagger: 30,
          masonry: {
            columnWidth: '.gridSizer'
          }
        });
      } else if (filterValue == '.travel') {
        $('#projectTurkeyCat').css('width', '33%');
        $('#projectTurkeyDrone').css('width', '33%');
        $('#projectGlacierDrone').css('width', '33%');
        $('#projectUtahDrone').css('width', '66%');
        $('#projectMarine').css('width', '33%');
        $('#projectBluejays').css('width', '33%');
        $('#projectKangaroo').css('width', '33%');
        // reload the grid
        $('.projectGrid').isotope({
          itemSelector: '.projectItem',
          percentPosition: true,
          stagger: 30,
          masonry: {
            columnWidth: '.gridSizer'
          }
        });
      } else {
        // reset all sizing and show all projects
        console.log("I set the widths to normal")
        $('#projectBumperDesign').css('width', projectBumperWidth);
        $('#projectBASTwo').css('width', projectBASTwoWidth);
        $('#projectCulture').css('width', projectCultureWidth);
        $('#projectHeatTreat').css('width', projectHeatTreatWidth);
        $('#projectFEA').css('width', projectFEAWidth);
        $('#projectAutomation').css('width', projectAutomationWidth);
        $('#projectPiHole').css('width', projectPiHoleWidth);
        $('#projectHomeServer').css('width', projectHomeServerWidth);
        $('#projectHeadphoneCable').css('width', projectHeadphoneCableWidth);
        $('#projectSelfieStick').css('width', projectSelfieStickWidth);
        $('#projectDrivfiltr').css('width', projectDrivfiltrWidth);
        $('#drivfiltrHero').css('padding', '0');
        $('#projectOAD').css('width', projectOADWidth);
        $('#OADHero').css('padding', '0');
        $('#projectTurkeyCat').css('width', projectTurkeyCatWidth);
        $('#projectTurkeyDrone').css('width', projectTurkeyDroneWidth);
        $('#projectGlacierDrone').css('width', projectGlacierDroneWidth);
        $('#projectUtahDrone').css('width', projectUtahDroneWidth);
        $('#projectMarine').css('width', projectMarineWidth);
        $('#projectBluejays').css('width', projectBluejaysWidth);
        $('#projectKangaroo').css('width', projectKangarooWidth);
        // reload the grid
        $('.projectGrid').isotope({
          itemSelector: '.projectItem',
          percentPosition: true,
          stagger: 30,
          masonry: {
            columnWidth: '.gridSizer'
          }
        });
      }
    });
    // change is-checked class on buttons
    $('.projectSort').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.litButton').removeClass('litButton');
        $( this ).addClass('litButton');
      });
    });
    // Initialize slick sliders
    $('.enabledHero').slick({
        dots: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 5000,
        // centerMode: true,
        // centerPadding: 0,
        adaptiveHeight: true,
        pauseOnHover: true
    });
    // Smoothscroll for mainLinks section links
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
        scrollTarget: '#projectStart',
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
});