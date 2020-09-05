/*
kjl_script.js
5/29/19
*/

//particles background function
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 450 } },
    color: { value: "#c5c6c7" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#c5c6c7" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#c5c6c7",
      opacity: 0.1,
      width: 2
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});


$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-color-on-scroll");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

//sticky Navbar
$(document).ready(function() {
  // Custom
  var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;
    if (scrollElement.scrollTop() >= stickyTop){
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky");
    }
    else{
      sticky.removeClass("is-sticky");
      stickyWrapper.height('auto');
    }
  };

  // Find all data-toggle="sticky-onscroll" elements
  $('[data-toggle="sticky-onscroll"]').each(function() {
    var sticky = $(this);
    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    sticky.before(stickyWrapper);
    sticky.addClass('sticky');

    // Scroll & resize events
    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
      stickyToggle(sticky, stickyWrapper, $(this));
    });

    // On page load
    stickyToggle(sticky, stickyWrapper, $(window));
  });
});



//form validation
  function validateForm () {
    event.preventDefault();
    console.log('sending...');

    $.ajax({
      url : "https://myphpscript2.000webhostapp.com/mail/form-to-email.php",
      //contentType: "application/json",
      type: 'POST',
      data : $('#contactForm').serialize(),
      success: function(response)
      {
        $('#contactForm').closest('form').find("input[type=text], input[type=email], textarea").val(" ");

        //populate alert modal instead
       // $('#alertModal').find('.modal-body h4').text(JSON.stringify(response));
        var obj = JSON.stringify(response).replace(/[\[\]"]+/g,"");
      
        $('#alertModal').find('.modal-body h4').text(obj);
          $('#alertModal').modal('show');
        
      }
    });
  }


// Small Screen animation
if(windowWidth <= 719){
    $(document).ready(function() {
        $(".wow").removeClass("wow");
    });
}

//outfitter page remove modal padding, not working still
$('#myModal1').on('shown.bs.modal', function() {
       $("body.modal-open").removeAttr("style");
 });
