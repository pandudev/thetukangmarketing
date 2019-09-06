$(document).ready(function() {
  $("#hamburger").click(function() {
    $(".hamburger__bar").toggleClass("active");
    $("#mobile-nav").toggleClass("active");
  });

  // $("#hamburger").click(function() {
  //   $("#mobile-nav").css("z-index", "50px");
  // });

  $(".nav--mobile__dropdown").click(function() {
    $(".nav--mobile__dropdown ul").slideDown({
      start: function() {
        jQuery(this).css("display", "flex");
      }
    });
    $(".nav--mobile__dropdown > a").css("display", "none");
  });

  $(".nav--mobile__dropdown")
    .siblings()
    .click(function() {
      $(".nav--mobile__dropdown ul").slideUp({
        start: function() {
          jQuery(".nav--mobile__dropdown > a").css("display", "flex");
        }
      });

      $(".nav--mobile__dropdown > a").slideDown({
        start: function() {
          jQuery(this).css("display", "flex");
        }
      });
    });
});
