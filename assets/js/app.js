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
// -----------Increment and Decrement
var increment = document.getElementById("increment");
var decrement = document.getElementById("decrement");
var counts  =  document.getElementById("count");
count = 100;
increment.onclick = function() {
  count += 1;
  counts.innerHTML = count;
}
decrement.onclick  = function() {
  count -= 1;
  counts.innerHTML = count;
}


// -----------CountDown Time
var countDownDate = new Date("Apr 27, 2024 18:37:25").getTime();
var x = setInterval(function () {  
  var now = new Date().getTime();  
  var distance = countDownDate - now;  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);  
  document.getElementById("demo").innerHTML = days + ":" + hours + ":"
    + minutes + ":" + seconds;  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);