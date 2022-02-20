// function range() {
//   var val = $(".range").val();
//   $(".range").css({
//     background:
//       "-webkit-linear-gradient(left, #67ac5b 0%, #67ac5b '+val+'%, #fff '+val+'%, #fff 100% )",
//   });
// }
var connectSlider = document.getElementById("slider-connect");

noUiSlider.create(connectSlider, {
  start: 40,
  connect: "lower",
  step: 1,
  range: {
    min: 0,
    max: 100,
  },
});
