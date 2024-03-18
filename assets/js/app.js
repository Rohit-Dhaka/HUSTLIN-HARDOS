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

// ------------------team-slider
  $('.team-slider').slick({
    prevArrow: ".pre-btn2",
    nextArrow: ".next-btn2",
    infinite: true,
    dots: false,  
    speed: 300,  
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
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
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,          
        }
      }
    ]
  });

  // -----------------------Accordion
const accordion = document.querySelectorAll(".accordion-item")
accordion.forEach((e) => {
    e.addEventListener("click", () => {
        e.classList.toggle("active");
        var isactive = document.querySelector(".accordion");
        accordion.forEach(e => {
            e.classList.remove("active")
        })
        if (!isactive) {
            e.classList.toggle("active")
        }
    })
})


// Get year
var d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year


//------go to top
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}