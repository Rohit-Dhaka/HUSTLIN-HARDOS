// ---------First
$('.first').slick({
    infinite: true,
    dots: false,
    autoplay: true,
    variableWidth: true,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    speed: 2000,
    pauseOnHover: false,
    cssEase: 'linear',  
  });



// -------------------------navbar
  const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menulist");
hamburger.addEventListener("click", mobileMenu);
const Navlink = document.querySelectorAll(".nav-link");
Navlink.forEach(e => e.addEventListener("click", () => {
  hamburger.classList.toggle("nav-active");
  document.body.classList.remove("overflow-hidden");
  navMenu.classList.toggle("nav-active");
}))
function mobileMenu() {
  hamburger.classList.toggle("nav-active");
  document.body.classList.toggle("overflow-hidden");
  navMenu.classList.toggle("nav-active");
}



// --------Tweet-Slider
$('.tweet-slider').slick({
    prevArrow: ".pre-btn",
    nextArrow: ".next-btn",
    infinite: true,
    dots: false,  
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,                        
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,        
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,        
          cssEase: 'linear'
        }
      }
    ]
  });