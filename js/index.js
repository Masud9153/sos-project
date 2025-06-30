        // Navbar Section
const navToggler = document.querySelector(".nav-toggler");
const sidebar = document.querySelector(".sidebar");
const sidebarOverlay = document.querySelector(".sidebar-overlay");
const sidebarClose = document.querySelector(".sidebar-close");
const body = document.body;

// Function to open sidebar
function openSidebar() {
  navToggler.classList.add("active");
  sidebar.classList.add("active");
  sidebarOverlay.classList.add("active");
  body.style.overflow = "hidden";
}

// Function to close sidebar
function closeSidebar() {
  navToggler.classList.remove("active");
  sidebar.classList.remove("active");
  sidebarOverlay.classList.remove("active");
  body.style.overflow = "";
}

// Event listeners
navToggler.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (sidebar.classList.contains("active")) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

sidebarClose.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  closeSidebar();
});

sidebarOverlay.addEventListener("click", (e) => {
  if (e.target === sidebarOverlay) {
    closeSidebar();
  }
});

// Prevent sidebar from closing when clicking inside sidebar
sidebar.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Close sidebar when clicking on sidebar links
const sidebarLinks = document.querySelectorAll(".sidebar-nav a");
sidebarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    closeSidebar();
  });
});

// Close sidebar on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && sidebar.classList.contains("active")) {
    closeSidebar();
  }
});

// Handle window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && sidebar.classList.contains("active")) {
    closeSidebar();
  }
});

// Close sidebar when clicking anywhere outside (fallback)
document.addEventListener("click", (e) => {
  if (
    sidebar.classList.contains("active") &&
    !sidebar.contains(e.target) &&
    !navToggler.contains(e.target)
  ) {
    closeSidebar();
  }
});
















//   const navcontent = document.querySelector(".nav-content");

// function openNav() {
//   if (navcontent.style.width === "50vh") {
//     sidebar.style.width = "0";
//   } else {
//     navcontent.style.width = "54vh";
//   }
// }

// function closeNav() {
//   navcontent.style.width = "0";
// }

//  testimonial section js 

 const swiper = new Swiper(".testimonial-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
       autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
      
        
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          968: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      });


      // automobile swiper js 

       const swiper5 = new Swiper("#automobile-services", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
         slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
         breakpoints: {
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          968: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        },

        // And if we need scrollbar
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });