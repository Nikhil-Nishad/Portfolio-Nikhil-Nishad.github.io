let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
  document.body.classList.toggle("active");
};

window.onscroll = () => {
  if (window.innerWidth < 991) {
    menu.classList.remove("fa-times");
    header.classList.remove("active");
    document.body.classList.remove("active");
  }

  document.querySelectorAll("section").forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      document.querySelectorAll(".header .navbar a").forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".header .navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// Framer Motion for Smooth Infinite Animation
const techItems1 = document.getElementById("tech-items-1");
const techItems2 = document.getElementById("tech-items-2");

// Calculate the total width of one set of items
const totalWidth = techItems1.offsetWidth;

// Animate the first set of items
techItems1.animate(
  [
    { transform: "translateX(0)" },
    { transform: `translateX(-${totalWidth}px)` },
  ],
  {
    duration: 20000, // Adjust speed here
    iterations: Infinity,
  }
);

// Animate the second set of items
techItems2.animate(
  [
    { transform: "translateX(0)" },
    { transform: `translateX(-${totalWidth}px)` },
  ],
  {
    duration: 20000, // Same speed as the first set
    iterations: Infinity,
  }
);
   const socialLinks = document.querySelectorAll(".social-links a");

   socialLinks.forEach((link) => {
     link.addEventListener("mouseenter", () => {
       link.style.transform = "translateY(-5px)";
     });
     link.addEventListener("mouseleave", () => {
       link.style.transform = "translateY(0)";
     });
   });

