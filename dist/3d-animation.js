function animationExec($element, sensitivity) {

  // Sensitivity declaration
  sensitivity = parseFloat(sensitivity) <= 25 && parseFloat(sensitivity) >= 10 ? sensitivity : 25;

  // Moving Animation Event
  $element.mousemove(function (event) {
    let xAxis = ($(window).innerWidth() / 2 - event.pageX) / sensitivity;
    let yAxis = ($(window).innerHeight() / 2 - event.pageY) / sensitivity;

    $element.css({
      transform: "rotateY(" + xAxis + "deg) rotateX(" + yAxis + "deg)",
    });
  });

  // Animate In
  $element.mouseenter(function (event) {
    $element.css({ transition: "none" });
  });

  // Animate Out
  $element.mouseleave(function (event) {
    $element.css({
      transform: "rotateY(0deg) rotateX(0deg)",
      transition: "all 0.5s ease",
    });
  });
}

function animationStart() {
  // Find every element in the page that has the selector clas
  $(".3d-animation").each(function () {
    var dataSensitivity = $(this).data("sensitivity");
    dataSensitivity = typeof dataSensitivity === "undefined" ? 25 : dataSensitivity;
    animationExec($(this), dataSensitivity);
  });
}
