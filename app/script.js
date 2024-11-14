document.querySelectorAll('.header__nav-links--links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      targetSection.scrollIntoView({
          behavior: 'smooth'
      });
  });
});

function toggleMenu() {
}







function toggleSearch() {
  const searchBarContainer = document.querySelector('.search-bar-container');
  searchBarContainer.classList.toggle('active');
}

function hideSearchBarOnEnter(event) {
  if (event.key === 'Enter') {
    const searchBarContainer = document.querySelector('.search-bar-container');
    searchBarContainer.classList.remove('active'); 
    document.getElementById("searchForm").submit(); 
  }
}









function toggleMenu() {
  const sideMenu = document.querySelector('.side-menu');
  const isActive = sideMenu.classList.toggle('active');

  if (isActive) {
      document.body.classList.add('no-scroll');
      window.addEventListener('click', closeMenuOnClickOutside);
  } else {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('click', closeMenuOnClickOutside);
  }
}

function closeMenuOnClickOutside(event) {
  const sideMenu = document.querySelector('.side-menu');
  const menuButton = document.querySelector('.menu-button'); 
  if (!sideMenu.contains(event.target) && !menuButton.contains(event.target)) {
      sideMenu.classList.remove('active');
      document.body.classList.remove('no-scroll');
      window.removeEventListener('click', closeMenuOnClickOutside);
  }
}










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






let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  if (index >= slides.length) currentSlideIndex = 0;
  else if (index < 0) currentSlideIndex = slides.length - 1;
  else currentSlideIndex = index;

  const offset = -currentSlideIndex * 100;
  document.querySelector(".carousel-track").style.transform = `translateX(${offset}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentSlideIndex].classList.add("active");
}

function moveSlide(n) {
  showSlide(currentSlideIndex + n);
}

function currentSlide(n) {
  showSlide(n - 1);
}

showSlide(currentSlideIndex);
