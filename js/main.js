(function ($) {
  "use strict";

  // Initiate the wowjs
  new WOW().init();

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 90) {
      $(".nav-bar").addClass("nav-sticky");
      $(".carousel, .page-header").css("margin-top", "73px");
    } else {
      $(".nav-bar").removeClass("nav-sticky");
      $(".carousel, .page-header").css("margin-top", "0");
    }
  });

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Modal Video
  $(document).ready(function () {
    var $videoSrc;
    $(".btn-play").click(function () {
      $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });

    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", $videoSrc);
    });
  });

  // Testimonial Slider
  $(".testimonial-slider").slick({
    infinite: true,
    autoplay: true,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".testimonial-slider-nav",
  });
  $(".testimonial-slider-nav").slick({
    arrows: false,
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "22px",
    slidesToShow: 3,
    asNavFor: ".testimonial-slider",
  });
  $(".testimonial .slider-nav").css({ position: "relative", height: "160px" });

  // Blogs carousel
  $(".related-slider").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });

    // Mostrar el modal automáticamente después de que la página se cargue completamente
    $(document).ready(function(){
        $('#popupModal').modal('show');
    });


  // Portfolio isotope and filter
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });

  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });

  document.getElementById('searchInput').addEventListener('input', function() {
    filterSpeakers();
});

document.getElementById('categorySelect').addEventListener('change', function() {
    filterSpeakers();
});

function filterSpeakers() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const categorySelect = document.getElementById('categorySelect').value;
    const speakers = document.querySelectorAll('.team-item');

    speakers.forEach(speaker => {
        const speakerName = speaker.querySelector('.team-text h2').innerText.toLowerCase();
        const speakerCategory = speaker.querySelector('.team-text-2 h2').innerText;

        const matchesName = speakerName.includes(searchInput);
        const matchesCategory = categorySelect === "" || speakerCategory === categorySelect;

        if (matchesName && matchesCategory) {
            speaker.closest('.col-lg-3').style.display = "block";
        } else {
            speaker.closest('.col-lg-3').style.display = "none";
        }
    });
}

function actualizarContador() {
  const fechaObjetivo = new Date('October 25, 2024 00:00:00').getTime();
  const ahora = new Date().getTime();
  const diferencia = fechaObjetivo - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById('dias').innerHTML = dias;
  document.getElementById('horas').innerHTML = horas;
  document.getElementById('minutos').innerHTML = minutos;
  document.getElementById('segundos').innerHTML = segundos;
}

actualizarContador();
setInterval(actualizarContador, 1000);

})(jQuery);
