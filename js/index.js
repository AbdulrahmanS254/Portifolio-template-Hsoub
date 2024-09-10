$(window).scroll(function () {
   if ($(this).scrollTop() >= 200) {
      $("#navbar").addClass("noTransparent");
   } else {
      $("#navbar").removeClass("noTransparent");
   }
});

$(document).ready(function () {
   $(".circle")
      .circleProgress({
         startAngle: -Math.PI / 2,
         fill: { gradient: ["#0575e6", "#0466c8"] },
      })
      .on("circle-animation-progress", function (event, progress, stepValue) {
         $(this)
            .find("span")
            .html(Math.round(stepValue * 100) + "%");
      });

   $(function () {
      $("#contactForm").validate();
   });
});

document.getElementById("year").innerHTML = new Date().getFullYear();
