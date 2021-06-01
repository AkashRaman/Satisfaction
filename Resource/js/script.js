$(document).ready(function () {
  $("#section-cover").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "100px;",
    }
  );

  $(".btn-discover").hover(
    function () {
      if ($(window).width() <= "768") {
        $(this).addClass("shadow-pulse");
      } else {
        $(this).addClass("shadow-pulse");
      }
    },

    function () {
      $(this).removeClass("shadow-pulse");
    }
  );

  $(".js--section-synopsis").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".about-us").addClass("underline");
      } else {
        $(".about-us").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-youtube").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".about-us").removeClass("underline");
      }
      if (direction == "up") {
        $(".about-us").addClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-self").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".self").addClass("underline");
      }
      if (direction == "up") {
        $(".self").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-exist").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".self").removeClass("underline");
        $(".exists").addClass("underline");
      }
      if (direction == "up") {
        $(".self").addClass("underline");
        $(".exists").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-worth").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".exists").removeClass("underline");
        $(".worth").addClass("underline");
      }
      if (direction == "up") {
        $(".exists").addClass("underline");
        $(".worth").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--section-aware").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".worth").removeClass("underline");
        $(".aware").addClass("underline");
      }
      if (direction == "up") {
        $(".worth").addClass("underline");
        $(".aware").removeClass("underline");
      }
    },
    {
      offset: "150px;",
    }
  );

  $(".js--aware-support-1").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--aware-support-1").addClass("aware-support-rs-hover");
      }
      if (direction == "up") {
        $(".js--aware-support-1").removeClass("aware-support-rs-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--aware-support-2").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--aware-support-2").addClass("aware-support-ls-hover");
        $(".js--aware-support-1").removeClass("aware-support-rs-hover");
      }
      if (direction == "up") {
        $(".js--aware-support-2").removeClass("aware-support-ls-hover");
        $(".js--aware-support-1").addClass("aware-support-rs-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--aware-support-3").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--aware-support-3").addClass("aware-support-rs-hover");
        $(".js--aware-support-2").removeClass("aware-support-ls-hover");
      }
      if (direction == "up") {
        $(".js--aware-support-3").removeClass("aware-support-rs-hover");
        $(".js--aware-support-2").addClass("aware-support-ls-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--aware-support-4").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--aware-support-4").addClass("aware-support-ls-hover");
        $(".js--aware-support-3").removeClass("aware-support-rs-hover");
      }
      if (direction == "up") {
        $(".js--aware-support-4").removeClass("aware-support-ls-hover");
        $(".js--aware-support-3").addClass("aware-support-rs-hover");
      }
    },
    {
      offset: "50%",
    }
  );
  $(".js--aware-support-5").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--aware-support-5").addClass("aware-support-rs-hover");
        $(".js--aware-support-4").removeClass("aware-support-ls-hover");
      }
      if (direction == "up") {
        $(".js--aware-support-5").removeClass("aware-support-rs-hover");
        $(".js--aware-support-4").addClass("aware-support-ls-hover");
      }
    },
    {
      offset: "50%",
    }
  );

  $(".js--aware-conclusion").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js--aware-conclusion").addClass("aware-conclusion-hover");
        $(".js--aware-support-5").removeClass("aware-support-rs-hover");
      }
      if (direction == "up") {
        $(".js--aware-conclusion").removeClass("aware-conclusion-hover");
        $(".js--aware-support-5").addClass("aware-support-rs-hover");
      }
    },
    {
      offset: "50%",
    }
  );

  /*
    $('.nav-section').ready(function () {
        var deviceWidth = $(window).width();
        
        if (deviceWidth >= "768px") {
            $(this).css("display", "inline-block");
        };
    })
    */

  $(".mobile-nav-icon").click(function () {
    var nav = $(".nav-section");
    var icon = $(".mobile-nav-icon i");
    var isActive = nav.is(":visible");
    nav.slideToggle(200);

    if (isActive == false) {
      icon.removeClass("fa-bars");
      icon.addClass("fa-times");
    } else {
      icon.removeClass("fa-times");
      icon.addClass("fa-bars");
    }
  });
});
