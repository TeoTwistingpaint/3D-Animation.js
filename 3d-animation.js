function animationExec($element, sensitivity) {
  // Sensitivity declaration
  sensitivity =
    parseFloat(sensitivity) <= 25 && parseFloat(sensitivity) >= 10
      ? sensitivity
      : 25;

  // Moving Animation Event
  $element.mousemove(function (event) {
    let xAxis = ($(window).innerWidth() / 2 - event.pageX) / sensitivity;
    let yAxis = ($(window).innerHeight() / 2 - event.pageY) / sensitivity;

    $element.css({
      transform: "rotateY(" + xAxis + "deg) rotateX(" + yAxis + "deg)",
    });
  });

  // More items
  const $airpods = $(".airpods img");
  const $title = $(".title");
  const $description = $(".description");
  const $sizes = $(".sizes");
  const $purchase = $(".purchase");

  // Animate In
  $element.mouseenter(function (event) {
    $element.css({ transition: "none" });

    // Poput
    $airpods.css({ transform: "translateZ(150px) rotateZ(-30deg)" });
    $title.css({ transform: "translateZ(100px)" });
    $description.css({ transform: "translateZ(75px)" });
    $sizes.css({ transform: "translateZ(50px)" });
    $purchase.css({ transform: "translateZ(25px)" });
  });

  // Animate Out
  $element.mouseleave(function (event) {
    $element.css({
      transform: "rotateY(0deg) rotateX(0deg)",
      transition: "all 0.5s ease",
    });

    // Poput
    $airpods.css({ transform: "translateZ(0px) rotateZ(0deg)" });
    $title.css({ transform: "translateZ(0px)" });
    $description.css({ transform: "translateZ(0px)" });
    $sizes.css({ transform: "translateZ(0px)" });
    $purchase.css({ transform: "translateZ(0px)" });
  });
}

function animationStart() {
  // Find every element in the page that has the selector clas
  $(".3d-animation").each(function () {
    var dataSensitivity = $(this).data("sensitivity");
    dataSensitivity =
      typeof dataSensitivity === "undefined" ? 25 : dataSensitivity;
    animationExec($(this), dataSensitivity);
  });
}
