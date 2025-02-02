$(document).ready(function() {
  let heroheight = $(window).height() - ($(".cta--training").height() + 48);
  $(".hero--training").css("height", heroheight - 160);

  $("#hamburger").click(function() {
    $(".hamburger__bar").toggleClass("active");
    $("#mobile-nav").toggleClass("active");
  });

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

  $(".home--training__box__item").click(function() {
    $(this).addClass("active");
    $(this)
      .siblings()
      .removeClass("active");
  });

  $(".goTo").click(function(e) {
    e.preventDefault();
    var position = $($(this).attr("href")).offset().top;
    $("html, body").animate({ scrollTop: position });
  });
});
