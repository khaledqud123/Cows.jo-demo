/* =========================================================
   COWS BURGER
   PREMIUM INTERACTION SYSTEM
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     LOADER
     ======================================================= */

  const loader = document.querySelector(".loader");

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 900);
  });


  /* =======================================================
     YEAR
     ======================================================= */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* =======================================================
     HEADER
     ======================================================= */

  const header = document.querySelector(".header");

  const updateHeader = () => {

    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  };

  window.addEventListener("scroll", updateHeader);
  updateHeader();


  /* =======================================================
     MOBILE MENU
     ======================================================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileClose = document.querySelector(".mobile-close");

  const mobileLinks = document.querySelectorAll(".mobile-menu a");

  const openMobileMenu = () => {
    mobileMenu.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeMobileMenu = () => {
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
  };

  if (menuToggle) {
    menuToggle.addEventListener("click", openMobileMenu);
  }

  if (mobileClose) {
    mobileClose.addEventListener("click", closeMobileMenu);
  }

  mobileLinks.forEach(link => {
    link.addEventListener("click", closeMobileMenu);
  });


  /* =======================================================
     LANGUAGE SYSTEM
     ======================================================= */

  const languageButtons = document.querySelectorAll(".lang-option");
  const languageSwitch = document.querySelector(".language-switch");

  let currentLanguage = "en";

  const setLanguage = (language) => {

    currentLanguage = language;

    document.documentElement.lang = language;

    if (language === "ar") {

      document.body.classList.add("arabic");
      document.documentElement.dir = "rtl";
      languageSwitch.classList.add("ar");

    } else {

      document.body.classList.remove("arabic");
      document.documentElement.dir = "ltr";
      languageSwitch.classList.remove("ar");

    }

    languageButtons.forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.lang === language
      );

    });

    document.querySelectorAll("[data-en][data-ar]").forEach(element => {

      const value = element.dataset[language];

      if (!value) return;

      element.innerHTML = value;

    });

    localStorage.setItem("cowsLanguage", language);
  };


  languageButtons.forEach(button => {

    button.addEventListener("click", () => {

      setLanguage(button.dataset.lang);

    });

  });


  const savedLanguage = localStorage.getItem("cowsLanguage");

  if (savedLanguage === "ar") {
    setLanguage("ar");
  } else {
    setLanguage("en");
  }


  /* =======================================================
     SCROLL REVEAL
     ======================================================= */

  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });


  /* =======================================================
     MENU FILTER
     ======================================================= */

  const filters = document.querySelectorAll(".filter");
  const menuItems = document.querySelectorAll(".menu-item");

  filters.forEach(filter => {

    filter.addEventListener("click", () => {

      const category = filter.dataset.filter;

      filters.forEach(item => {
        item.classList.remove("active");
      });

      filter.classList.add("active");

      menuItems.forEach(item => {

        const itemCategory = item.dataset.category;

        if (
          category === "all" ||
          itemCategory === category
        ) {

          item.style.display = "";

          requestAnimationFrame(() => {
            item.style.opacity = "1";
            item.style.transform = "";
          });

        } else {

          item.style.opacity = "0";
          item.style.transform = "translateY(10px)";

          setTimeout(() => {
            item.style.display = "none";
          }, 250);

        }

      });

    });

  });


  /* =======================================================
     TILT CARDS
     ======================================================= */

  const tiltCards = document.querySelectorAll(".tilt-card");

  if (window.innerWidth > 900) {

    tiltCards.forEach(card => {

      card.addEventListener("mousemove", event => {

        const rect = card.getBoundingClientRect();

        const x =
          (event.clientX - rect.left) / rect.width;

        const y =
          (event.clientY - rect.top) / rect.height;

        const rotateY = (x - 0.5) * 5;
        const rotateX = (0.5 - y) * 5;

        card.style.transform = `
          perspective(900px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-5px)
        `;

      });

      card.addEventListener("mouseleave", () => {

        card.style.transform = "";

      });

    });

  }


  /* =======================================================
     HERO PARALLAX
     ======================================================= */

  const heroFood = document.querySelector(".hero-food");
  const heroCircle = document.querySelector(".hero-red-circle");

  if (window.innerWidth > 900) {

    window.addEventListener(
      "scroll",
      () => {

        const scroll = window.scrollY;

        if (scroll < window.innerHeight) {

          if (heroFood) {

            heroFood.style.transform =
              `translateY(calc(-45% + ${scroll * 0.08}px))`;

          }

          if (heroCircle) {

            heroCircle.style.transform =
              `translateY(${scroll * 0.04}px)`;

          }

        }

      },
      { passive: true }
    );

  }


  /* =======================================================
     CUSTOM CURSOR
     ======================================================= */

  const cursor = document.querySelector(".cursor");
  const cursorRing = document.querySelector(".cursor-ring");

  if (
    cursor &&
    cursorRing &&
    window.matchMedia("(pointer:fine)").matches
  ) {

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    window.addEventListener("mousemove", event => {

      mouseX = event.clientX;
      mouseY = event.clientY;

      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;

    });

    const animateCursor = () => {

      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;

      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;

      requestAnimationFrame(animateCursor);

    };

    animateCursor();


    const interactiveElements =
      document.querySelectorAll(
        "a, button, .food-card, .menu-item"
      );

    interactiveElements.forEach(element => {

      element.addEventListener("mouseenter", () => {

        cursorRing.style.width = "55px";
        cursorRing.style.height = "55px";
        cursorRing.style.borderColor =
          "rgba(245,197,66,.95)";

      });

      element.addEventListener("mouseleave", () => {

        cursorRing.style.width = "36px";
        cursorRing.style.height = "36px";
        cursorRing.style.borderColor =
          "rgba(245,197,66,.65)";

      });

    });

  }


  /* =======================================================
     SMOOTH ANCHOR HANDLING
     ======================================================= */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      const headerHeight =
        document.querySelector(".header").offsetHeight;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });

    });

  });


  /* =======================================================
     ACTIVE NAV
     ======================================================= */

  const sections = document.querySelectorAll(
    "section[id]"
  );

  const navLinks = document.querySelectorAll(
    ".desktop-nav a"
  );

  const navObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const id = entry.target.id;

        navLinks.forEach(link => {

          const matches =
            link.getAttribute("href") === `#${id}`;

          link.style.color = matches
            ? "var(--yellow)"
            : "";

        });

      });

    },
    {
      threshold: 0.35
    }
  );

  sections.forEach(section => {
    navObserver.observe(section);
  });


  /* =======================================================
     PREVENT BROKEN IMAGE ISSUE
     ======================================================= */

  document.querySelectorAll("img").forEach(image => {

    image.addEventListener("error", () => {

      image.style.display = "none";

    });

  });


  /* =======================================================
     ESCAPE KEY
     ======================================================= */

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

      closeMobileMenu();

    }

  });

});
