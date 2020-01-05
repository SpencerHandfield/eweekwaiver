
function login () {
  $(".waiverhead").removeClass("hide")
  showForm(".waiverhead")
}

var video = document.getElementById("waiverVideo")

function videoEnd () {
  // alert("video ended")
  $("#waiver-info").removeClass("hide")
  $("#waiver").removeClass("hide")
  showForm("#waiver-info")
}
function showForm (form) {
  $('html, body').animate({
    scrollTop: $(form).offset().top
  }, 1000,  "easeInOutExpo");
}
function playVideo () {
  video.play()
}
function pauseVideo () {
  video.pause()
}
function progressBar () {
  curTime = video.currentTime
  duration = video.duration
  curProgress = Math.round(curTime/duration * 100)
  var elem = document.getElementById("myBar")
  elem.style.width = curProgress + '%';
  elem.innerHTML = curProgress  + '%';
}

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });
  if (window.location.href === "http://localhost:3000/" || window.location.href === "https://https://mcgilleweek.github.io/eweekwaiver/") {
    $(window).blur(pauseVideo)
  }
  window.onbeforeunload = function()) {
    return "Please continue watching.";
  }
  window.onunload = function()) {
    $(window).blur(pauseVideo)
  }
  /*else {
    $("#select-team-filter").change(function (event) {
      var filter = $("#select-team-filter option:selected")[0].label
      $("#participant-table").empty()
      updateTable(masterTable, filter)
    })
  }*/

})(jQuery)
