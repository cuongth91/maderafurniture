// DOCUMENT READY JAVA--------------------------------------------
$(document).ready(function () {
  // MOBILE NAVI & MOBILE SEARCH----------------------------
  // Initial hide all mobile element
  $("#bgmobilenavi").hide();
  $("#blackscreen").hide();
  $("#blackscreen2").hide();
  $("#bgmobilesearch").hide();
  $(".mobile-dropdown-container").hide();
  $(".mobile-dropdown-container-level2").hide();

  // trigger mobile navi
  $("#triggermobilenavi").click(function () {
    $("#bgmobilenavi").slideToggle();
    $("#bgmobilesearch").fadeOut();
    if ($("#blackscreen2").is(":visible") && $("#bgmobilesearch").is(":visible")) {
      $("#blackscreen2").fadeIn();
    } else if ($("#blackscreen2").is(":visible")) {
      $("#blackscreen2").fadeOut();
    } else {
      $("#blackscreen2").fadeIn();
    }
  });

  // toggle mobile dropdown lv1
  $(".trigger-mobile-dropdown-lv1").click(function () {
    $(".mobile-dropdown-container").slideToggle();
    $(this).find("i").toggleClass("fa-plus fa-minus");
  });

  // toggle mobile dropdown lv2
  $(".trigger-mobile-dropdown-lv2").click(function () {
    var mobiledropdownlv2 = $(this).next();
    if (mobiledropdownlv2.is(":visible")) {
      mobiledropdownlv2.slideUp();
      $(this).find("i").toggleClass("fa-plus fa-minus");
    } else {
      $(".mobile-dropdown-container-level2:visible").slideUp();
      $(".mobile-dropdown-container-level2:visible").prev().find("i").toggleClass("fa-plus fa-minus");
      mobiledropdownlv2.slideDown();
      $(this).find("i").toggleClass("fa-plus fa-minus");
    }
  });

  // click blackscreen hide all mobile element
  $("#blackscreen2").click(function () {
    $("#bgmobilenavi").slideUp();
    $("#blackscreen2").fadeOut();
    $("#bgmobilesearch").fadeOut();
  });

  // toggle mobile search
  $("#triggermobilesearch").click(function () {
    $("#bgmobilenavi").slideUp();
    $("#mobilenavi").slideUp();
    $("#bgmobilesearch").fadeToggle();
    if ($("#blackscreen2").is(":visible") && $("#mobilenavi").is(":visible")) {
      $("#blackscreen2").fadeIn();
    } else if ($("#blackscreen2").is(":visible")) {
      $("#blackscreen2").fadeOut();
    } else {
      $("#blackscreen2").fadeIn();
    }
  });

  // Mobile footer
  $(".mobilefooterlink").hide();
  $(".triggermobilefooterlink").click(function () {
    var mobilefooterlink = $(this).next();
    if (mobilefooterlink.is(":visible")) {
      mobilefooterlink.slideUp();
      $(this).find("i").toggleClass("fa-chevron-down fa-chevron-up");
    } else {
      $(".mobilefooterlink:visible").slideUp();
      $(".mobilefooterlink:visible").prev().find("i").toggleClass("fa-chevron-down fa-chevron-up");
      mobilefooterlink.slideDown();
      $(this).find("i").toggleClass("fa-chevron-down fa-chevron-up");
    }
  });

  // MOBILE NAVI & MOBILE SEARCH ENDS----------------------------

  // DROP DOWN MENU -------------------------
  $(".dropdown-content").hide();

  // click dropdown-button toggle dropdown-menu
  if ($(".dropdown-content").is(":hidden")) {
    $(".dropdownbutton").mouseenter(function () {
      $(".dropdown-content")
        .not(".dropdown-content[data-dropdown='" + $(this).data("dropdown") + "']")
        .slideUp();
      $(".dropdown-content[data-dropdown='" + $(this).data("dropdown") + "']").slideDown(650);
      $(".menuproductbutton[data-dropdown='" + $(this).data("dropdown") + "']").css(
        "transition",
        "border-radius 1s ease"
      );
      $("#blackscreen").fadeIn();
    });
  }

  // click blackscreen hide dropdown-menu
  $("#blackscreen").mouseenter(function () {
    $(".dropdown-content").slideUp();
    $("#blackscreen").fadeOut();
  });

  // click bgheader hide dropdown-menu
  $("#bgheader").mouseenter(function () {
    $(".dropdown-content").slideUp();
    $("#blackscreen").fadeOut();
  });

  // adjust menuproductbutton  border-radius when dropdownmenu is visibled
  $(".dropdown-content")
    .mouseenter(function () {
      $(".menuproductbutton[data-dropdown='" + $(this).data("dropdown") + "']").addClass("hovered");
      $(".menuproductbutton[data-dropdown='" + $(this).data("dropdown") + "']").css(
        "transition",
        "border-radius 1s ease"
      );
      $(".menuproductbutton[data-dropdown='" + $(this).data("dropdown") + "']")
        .find("i")
        .toggleClass("fa-chevron-down fa-chevron-up");
    })
    .mouseleave(function () {
      $(".menuproductbutton[data-dropdown='" + $(this).data("dropdown") + "']").removeClass("hovered");
      $(".menuproductbutton[data-dropdown='" + $(this).data("dropdown") + "']").css(
        "transition",
        "border-radius 1s ease"
      );
      $(".menuproductbutton[data-dropdown='" + $(this).data("dropdown") + "']")
        .find("i")
        .toggleClass("fa-chevron-down fa-chevron-up");
    });

  $(".menuproductbutton").hover(function () {
    $(".menuproductbutton[data-dropdown='" + $(this).data("dropdown") + "']")
      .find("i")
      .toggleClass("fa-chevron-down fa-chevron-up");
  });

  // make the first tab on dropdown-menu active when trigger dropdown menu
  $(".menuproductbutton").mouseenter(function () {
    $(".tablinks").removeClass("active");
    $(".tablinks[data-dropdown='" + $(this).data("dropdown") + "']").addClass("active");
    $(".tabcontent").css("display", "none");
    $(".tabcontent[data-dropdown='" + $(this).data("dropdown") + "']").css("display", "block");
  });

  //  DROP DOWN MENU ENDS-------------------------

  // OWL CAROUSEL

  // HOME PAGE OWL CAROUSEL
  $(".productcarousel").owlCarousel({
    loop: true,
    dotsEach: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      480: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 4 },
      1200: { items: 4 },
    },
  });
  $(".partnercarousel").owlCarousel({
    loop: true,
    dotsEach: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsiveClass: true,
    responsive: {
      0: { items: 2 },
      480: { items: 2 },
      576: { items: 3 },
      768: { items: 4 },
      992: { items: 6 },
      1200: { items: 6 },
    },
  });

  // HOME PAGE OWL CAROUSEL ENDS

  // OWL CAROUSEL ENDS

  // FAQS Q&A
  $(".faqs-answer").hide();
  $(".trigger-faqs-anwswer").click(function () {
    var faqsanswer = $(this).next();
    if (faqsanswer.is(":visible")) {
      faqsanswer.slideUp();
      $(this).find("i").toggleClass("fa-chevron-down fa-chevron-up");
      $(this).css("border-bottom-left-radius", "15px");
      $(this).css("border-bottom-right-radius", "15px");
      $(this).css("transition", "border-radius 2s ease");
    } else {
      faqsanswer.slideDown();
      $(this).find("i").toggleClass("fa-chevron-down fa-chevron-up");
      $(this).css("border-bottom-left-radius", "0");
      $(this).css("border-bottom-right-radius", "0");
      $(this).css("transition", "border-radius 0.1s ease");
    }
  });
  // FAQS Q&A END

  // FAQs CATEGORY BUTTON
  $(".faqs-category").click(function () {
    $(".faqs-category").removeClass("active");
    $(this).addClass("active");
  });

  // FAQs CATEGORY BUTTON ENDS
});
// DOCUMENT READY ENDS---------------------------

// HOVER TAB-----------------------------------------------------
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// HOVER TAB ENDS----------------------------------------------------

// TOOLTIPS PRODUCTBOX
$(function () {
  $('[data-toggle="tooltip"]').tooltip({
    trigger: "hover",
  });
});

// TOOLTIPS PRODUCTBOX END
