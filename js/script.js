// DOCUMENT READY JAVA--------------------------------------------
$(document).ready(function () {
  // MOBILE NAVI & MOBILE SEARCH----------------------------
  // Initial hide all mobile element
  $("#bgmobilenavi").hide();
  $("#blackscreen").hide();
  $("#blackscreen2").hide();
  $("#blackscreen3").hide();
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

  // hover dropdown-button toggle dropdown-menu
  if ($(".dropdown-content").is(":hidden")) {
    $(".dropdownbutton").mouseenter(function () {
      // hide all dropdown-content except the hovering one
      $(".dropdown-content")
        .not(".dropdown-content[data-dropdown='" + $(this).data("dropdown") + "']")
        .slideUp();
      // show the dropdown-content of hovering one
      $(".dropdown-content[data-dropdown='" + $(this).data("dropdown") + "']").slideDown(650);
      // animation effect for transition the border radius
      $(".menuproductbutton[data-dropdown='" + $(this).data("dropdown") + "']").css(
        "transition",
        "border-radius 1s ease"
      );
      $("#blackscreen").fadeIn();
    });
  }

  // enter blackscreen hide dropdown-menu
  var resetTimeout;
  // Mouse enter event for #blackscreen
  $("#blackscreen").mouseenter(function () {
    resetTimeout = setTimeout(function () {
      $(".dropdown-content").slideUp();
      $("#blackscreen").fadeOut();
    }, 200);
  });

  // Mouse leave event for #blackscreen
  $("#blackscreen").mouseleave(function () {
    clearTimeout(resetTimeout);
  });

  // enter bgheader hide dropdown-menu
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
    $(".faqs-category").removeClass("faqs-cat-active");
    $(this).addClass("faqs-cat-active");
    $(".faqs-section3").removeClass("faqs-content-active");
    $(".faqs-section3[data-faqs='" + $(this).data("faqs") + "']").addClass("faqs-content-active");
  });

  // FAQs CATEGORY BUTTON ENDS

  // CLICK SMALL IMAGE TO BIG IMAGE
  $(".smallimagebox img").click(function () {
    var linkimg = $(this).attr("src");
    $(".smallimagebox img.img-active").removeClass("img-active");
    $(this).addClass("img-active");
    $(".bigimagebox img").fadeOut(200, function () {
      $(".bigimagebox img").attr("src", linkimg);
      $(".bigimagebox img").fadeIn(200);
    });
  });
  // CLICK SMALL IMAGE TO BIG IMAGE ENDS

  // PRODUCT INFO ACTIVE BUTTON
  $(".warrantybtn").click(function () {
    $(".warrantybtn").removeClass("wrt-active");
    $(this).addClass("wrt-active");
  });
  $(".colorbox").click(function () {
    $(".colorbox").removeClass("colorbox-active");
    $(this).addClass("colorbox-active");
  });

  // PRODUCT PAGE
  // TRIGGER MOBILE FILTER
  $(".mobilefiltertrigger").click(function () {
    $("#productfilter").slideToggle(500);
    $(this).find("i").toggleClass("fa-filter-list fa-filter-circle-xmark");
    var buttonText = $(this).find("h6").text();
    if (buttonText === "Show Filter") {
      $(this).find("h6").text("Hide Filter");
    } else {
      $(this).find("h6").text("Show Filter");
    }
  });
  // TRIGGER MOBILE FILTER END
  // TOGGLE FILTER MOBI
  $(".filtermobi").click(function () {
    $(".filter").slideToggle(500);
    $(this).find("i").toggleClass("fa-filter fa-filter-circle-xmark");
    var buttonText = $(this).find("h5").text();
    if (buttonText === "Show Filter") {
      $(this).find("h5").text("Hide Filter");
    } else {
      $(this).find("h5").text("Show Filter");
    }
  });
  // TOGGLE FILTER DESKTOP
  $(".detailfilter, .triggerfilter").click(function () {
    $(this).parent().find(".filtercontent").slideToggle();
    $(this).parent().find("i").toggleClass("fa-chevron-up fa-chevron-down");
  });
  // PRICE RANGE SLIDER
  const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
  let priceGap = 1;
  priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });
  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    });
  });

  // PRICE RANGE SLIDER END

  // MINUS AND PLUS BTN
  const quantityInput = document.querySelector(".quantityinput");
  const plusBtn = document.querySelector(".plusbtn");
  const minusBtn = document.querySelector(".minusbtn");

  if (quantityInput) {
    // Set the default and minimum value as 1
    quantityInput.value = "01";

    // Click plus button to plus 1
    plusBtn.addEventListener("click", () => {
      let currentValue = parseInt(quantityInput.value) || 0;
      currentValue += 1;
      quantityInput.value = currentValue.toString().padStart(2, "0");
    });

    // Click minus button to minus 1
    minusBtn.addEventListener("click", () => {
      let currentValue = parseInt(quantityInput.value) || 0;

      // Min value = 1
      currentValue = Math.max(currentValue - 1, 1);

      quantityInput.value = currentValue.toString().padStart(2, "0");
    });
  }

  // DELETE ITEM IN CART MODAL
  const trashButtons = document.querySelectorAll(".fa-trash-can");
  const emptyCartText = document.getElementById("empty-cart-text");

  trashButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const cartModalRow = button.closest(".cart-modal");
      cartModalRow.remove();

      // Show noti when there is no item
      if (document.querySelectorAll(".cart-modal").length === 0) {
        emptyCartText.style.display = "block";
      }
    });
  });
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

// DROPDOWNMENU WHEN SCROLL
var scroll_pos = 0;
var resetTimeout;

function resetBgDropdownMenu() {
  $("#bgdropdownmenu").css({
    position: "",
    "z-index": "",
    top: "",
  });
  $("#blackscreen3").fadeOut();
}

$(document).scroll(function () {
  scroll_pos = $(this).scrollTop();
  if (scroll_pos > 165) {
    $("#icon-trigger-bgdropdownmenu").css({
      display: "inline-block",
    });

    // trigger dropdownenu by mouse hover
    $("#trigger-bgdropdownmenu").mouseenter(function () {
      $("#bgdropdownmenu").css({
        position: "sticky",
        "z-index": 1950,
        top: "65px",
      });
      $("#blackscreen3").fadeIn();
    });

    // dropdownmenu off by mouse enter blackscreen
    $("#blackscreen3").mouseenter(function () {
      clearTimeout(resetTimeout);
      resetTimeout = setTimeout(resetBgDropdownMenu, 100);
    });
    $("#blackscreen3").mouseleave(function () {
      clearTimeout(resetTimeout);
    });
  }
  // hide dropdownmenu icon when scroll top
  else {
    $("#icon-trigger-bgdropdownmenu").css({
      display: "none",
    });

    // Remove all event and reset #bgdropdownmenu
    $("#trigger-bgdropdownmenu, #blackscreen3").off("mouseenter mouseleave");
    resetBgDropdownMenu();
  }
});
