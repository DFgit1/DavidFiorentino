
$(document).ready(function () {


//Scroll to top button
let topButton = document.getElementById("backTop");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

  $("#backTop").on("click", function(e){  
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});


var controller = new ScrollMagic.Controller();

   
  var revealElementsL = document.getElementsByClassName("slidein-l");

  for (var i=0; i<revealElementsL.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: revealElementsL[i],
      offset: 50,
      triggerHook: 0.9,
    })
    .setClassToggle(revealElementsL[i], "visible")
    // .addIndicators({name: "slidein-l" + (i+1) })
    .addTo(controller);
  }

  var revealElementsR = document.getElementsByClassName("slidein-r");

  for (var i=0; i<revealElementsR.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: revealElementsR[i],
      offset: 50,
      triggerHook: 0.9,
    })
    .setClassToggle(revealElementsR[i], "visible")
    // .addIndicators({name: "slidein-r" + (i+1) })
    .addTo(controller);
  }

  var revealElementsTop = document.getElementsByClassName("slidein-top");

  for (var i=0; i<revealElementsTop.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: revealElementsTop[i],
      offset: 50,
      triggerHook: 0.9,
    })
    .setClassToggle(revealElementsTop[i], "visible")
    // .addIndicators({name: "slidein-top" + (i+1) })
    .addTo(controller);
  }

  var revealElementsTop2 = document.getElementsByClassName("slidein-top2");

  for (var i=0; i<revealElementsTop2.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: revealElementsTop2[i],
      offset: 50,
      triggerHook: 0.9,
    })
    .setClassToggle(revealElementsTop2[i], "visible")
    // .addIndicators({name: "slidein-top" + (i+1) })
    .addTo(controller);
  }

});