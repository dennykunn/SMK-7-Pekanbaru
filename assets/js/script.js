window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");

  if (window.pageYOffset >= 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

var navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.forEach(function (link) {
      link.classList.remove("active");
    });

    this.classList.add("active");
  });
});
