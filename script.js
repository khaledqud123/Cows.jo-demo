/* =========================================================
   COWS BURGER
   INTERACTION SYSTEM
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const body = document.body;
  const header = document.getElementById("header");

  const languageToggle = document.getElementById("languageToggle");
  const mobileButton = document.getElementById("mobileMenuButton");
  const mobileNav = document.getElementById("mobileNav");

  const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;


  /* =======================================================
     LANGUAGE
  ======================================================= */

  let currentLanguage = localStorage.getItem("cows-language") || "en";

  function updateLanguage() {

    const elements = document.querySelectorAll("[data-en][data-ar]");

    elements.forEach(element => {

      const value =
        currentLanguage === "ar"
          ? element.dataset.ar
          : element.dataset.en;

      if (value.includes("<")) {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }

    });


    body.classList.toggle("rtl", currentLanguage === "ar");

    document.documentElement.lang = currentLanguage;

    document.documentElement.dir =
      currentLanguage === "ar"
        ? "rtl"
        : "ltr";


    const languageOptions =
      document.querySelectorAll(".lang-option");

    languageOptions.forEach(option => {
      option.classList.remove("active");
    });

    languageOptions[
      currentLanguage === "en" ? 0 : 1
    ].classList.add("active");


    localStorage.setItem("cows-language", currentLanguage);

  }


  languageToggle.addEventListener("click", () => {

    currentLanguage =
      currentLanguage === "en"
        ? "ar"
        : "en";

    updateLanguage();

  });


  updateLanguage();


  /* =======================================================
     HEADER
  ======================================================= */

  function updateHeader() {

    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  }

  window.addEventListener("scroll", updateHeader);

  updateHeader();


  /* =======================================================
     MOBILE MENU
  ======================================================= */

  mobileButton.addEventListener("click", () => {

    mobileNav.classList.toggle("open");

  });


  document.querySelectorAll(".mobile-nav a").forEach(link => {

    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
    });

  });


  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  const revealElements =
    document.querySelectorAll(".reveal");


  if (!prefersReducedMotion) {

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add("visible");

              observer.unobserve(entry.target);

            }

          });

        },
        {
          threshold: .12
        }
      );


    revealElements.forEach(element => {
      observer.observe(element);
    });

  } else {

    revealElements.forEach(element => {
      element.classList.add("visible");
    });

  }


  /* =======================================================
     3D TILT
  ======================================================= */

  if (!prefersReducedMotion &&
      window.matchMedia("(pointer:fine)").matches) {

    const tiltElements =
      document.querySelectorAll(".tilt");


    tiltElements.forEach(element => {

      element.addEventListener("pointermove", event => {

        const rect =
          element.getBoundingClientRect();

        const x =
          event.clientX - rect.left;

        const y =
          event.clientY - rect.top;


        const centerX =
          rect.width / 2;

        const centerY =
          rect.height / 2;


        const rotateY =
          ((x - centerX) / centerX) * 8;

        const rotateX =
          ((centerY - y) / centerY) * 8;


        if (element.classList.contains("burger-visual")) {

          element.style.transform =
            `translate(-50%, -50%)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateZ(15px)`;

        } else {

          element.style.transform =
            `perspective(1200px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

        }

      });


      element.addEventListener("pointerleave", () => {

        if (element.classList.contains("burger-visual")) {

          element.style.transform =
            "translate(-50%, -50%) rotateY(-14deg) rotateX(7deg)";

        } else {

          element.style.transform =
            "perspective(1200px) rotateX(0deg) rotateY(0deg)";

        }

      });

    });

  }


  /* =======================================================
     HERO PARALLAX
  ======================================================= */

  const heroProduct =
    document.querySelector(".hero-product");

  const heroCow =
    document.querySelector(".hero-cow");


  if (!prefersReducedMotion &&
      window.matchMedia("(pointer:fine)").matches) {

    document.addEventListener("pointermove", event => {

      const x =
        (event.clientX / window.innerWidth - .5);

      const y =
        (event.clientY / window.innerHeight - .5);


      if (heroProduct) {

        heroProduct.style.marginLeft =
          `${x * 12}px`;

        heroProduct.style.marginTop =
          `${y * 8}px`;

      }


      if (heroCow) {

        heroCow.style.marginLeft =
          `${x * -8}px`;

      }

    });

  }


  /* =======================================================
     MENU FILTER
  ======================================================= */

  const menuTabs =
    document.querySelectorAll(".menu-tab");

  const menuItems =
    document.querySelectorAll(".menu-item");


  menuTabs.forEach(tab => {

    tab.addEventListener("click", () => {

      menuTabs.forEach(item => {
        item.classList.remove("active");
      });

      tab.classList.add("active");


      const filter =
        tab.dataset.filter;


      menuItems.forEach(item => {

        const category =
          item.dataset.category;


        if (
          filter === "all" ||
          category === filter
        ) {

          item.classList.remove("hide");

        } else {

          item.classList.add("hide");

        }

      });

    });

  });


  /* =======================================================
     SMOOTH ANCHOR SCROLL
  ======================================================= */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetID =
        link.getAttribute("href");

      if (!targetID || targetID === "#") {
        return;
      }

      const target =
        document.querySelector(targetID);

      if (!target) {
        return;
      }

      event.preventDefault();

      const headerOffset = 85;

      const position =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;


      window.scrollTo({
        top: position,
        behavior: prefersReducedMotion
          ? "auto"
          : "smooth"
      });

    });

  });


  /* =======================================================
     ORDER TOAST
  ======================================================= */

  const toast =
    document.getElementById("orderToast");

  const toastTitle =
    document.getElementById("toastTitle");

  const toastPrice =
    document.getElementById("toastPrice");


  let toastTimeout;


  function showToast(item, price) {

    toastTitle.textContent =
      currentLanguage === "ar"
        ? "تمت الإضافة"
        : `${item} ADDED`;

    toastPrice.textContent =
      `${price} JOD`;


    toast.classList.add("show");


    clearTimeout(toastTimeout);


    toastTimeout =
      setTimeout(() => {

        toast.classList.remove("show");

      }, 2400);

  }


  document.querySelectorAll(
    ".food-order, .add-bucket"
  ).forEach(button => {

    button.addEventListener("click", () => {

      const item =
        button.dataset.item;

      const price =
        button.dataset.price;


      showToast(item, price);

    });

  });


  /* =======================================================
     ACTIVE NAV
  ======================================================= */

  const sections =
    document.querySelectorAll(
      "section[id]"
    );

  const navLinks =
    document.querySelectorAll(
      ".desktop-nav a"
    );


  const sectionObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) {
            return;
          }

          navLinks.forEach(link => {

            link.style.color = "";

          });


          const activeLink =
            document.querySelector(
              `.desktop-nav a[href="#${entry.target.id}"]`
            );


          if (activeLink) {

            activeLink.style.color =
              "var(--yellow)";

          }

        });

      },
      {
        threshold: .35
      }
    );


  sections.forEach(section => {
    sectionObserver.observe(section);
  });


  /* =======================================================
     IMAGE FALLBACK
  ======================================================= */

  document.querySelectorAll("img").forEach(image => {

    image.addEventListener("error", () => {

      image.style.background =
        "linear-gradient(135deg,#181510,#090806)";

      image.style.objectFit =
        "cover";

    });

  });


});
