/* =========================================================
   COWS BURGER
   PREMIUM INTERACTION SYSTEM
   ========================================================= */


/* =========================================================
   MENU DATA
========================================================= */

const menuItems = [

  /* BURGERS */
  {
    category: "burgers",
    name: {
      en: "Cows Single",
      ar: "COWS سنجل"
    },
    description: {
      en: "The classic Cows burger experience.",
      ar: "تجربة Cows الكلاسيكية."
    },
    price: "1.90",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
    tag: {
      en: "SIGNATURE",
      ar: "المميز"
    }
  },

  {
    category: "burgers",
    name: {
      en: "Cows Double",
      ar: "COWS دبل"
    },
    description: {
      en: "More of what makes Cows worth coming back for.",
      ar: "المزيد من النكهة التي تجعلك تعود مرة أخرى."
    },
    price: "2.90",
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=85",
    tag: {
      en: "DOUBLE",
      ar: "دبل"
    }
  },


  /* FRIES */
  {
    category: "fries",
    name: {
      en: "Cows Fries",
      ar: "بطاطا COWS"
    },
    description: {
      en: "Cows fries, built for the table.",
      ar: "بطاطا Cows للمشاركة والاستمتاع."
    },
    price: "2.50",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85",
    tag: {
      en: "FAVOURITE",
      ar: "المفضلة"
    }
  },

  {
    category: "fries",
    name: {
      en: "Fries + Soft Drink",
      ar: "بطاطا + مشروب غازي"
    },
    description: {
      en: "Add fries and a soft drink.",
      ar: "أضف البطاطا والمشروب الغازي."
    },
    price: "1.25",
    image:
      "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=900&q=85",
    tag: {
      en: "ADD ON",
      ar: "إضافة"
    }
  },

  {
    category: "fries",
    name: {
      en: "Make It A Bucket",
      ar: "حوّلها إلى باكيت"
    },
    description: {
      en: "Comes with 2 fries and 2 soft drinks.",
      ar: "تأتي مع بطاطا عدد 2 ومشروبات غازية عدد 2."
    },
    price: "2.50",
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=85",
    tag: {
      en: "BUCKET",
      ar: "باكيت"
    }
  },


  /* EXTRAS */
  {
    category: "extras",
    name: {
      en: "Smoked Cheese",
      ar: "جبنة مدخنة"
    },
    description: {
      en: "Add smoky cheese flavour.",
      ar: "أضف نكهة الجبنة المدخنة."
    },
    price: "0.50",
    image:
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=900&q=85"
  },

  {
    category: "extras",
    name: {
      en: "Mozzarella Cheese",
      ar: "جبنة موزاريلا"
    },
    description: {
      en: "Extra mozzarella.",
      ar: "جبنة موزاريلا إضافية."
    },
    price: "0.80",
    image:
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=900&q=85"
  },

  {
    category: "extras",
    name: {
      en: "Grilled Jalapeño",
      ar: "هالابينو مشوي"
    },
    description: {
      en: "Add a grilled kick.",
      ar: "أضف نكهة حارة مشوية."
    },
    price: "0.50",
    image:
      "https://images.unsplash.com/photo-1599909533603-7b5c5c6f7e4f?auto=format&fit=crop&w=900&q=85"
  },

  {
    category: "extras",
    name: {
      en: "911 Sauce",
      ar: "صوص 911"
    },
    description: {
      en: "A little extra heat.",
      ar: "لمسة إضافية من الحرارة."
    },
    price: "0.50",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85"
  },

  {
    category: "extras",
    name: {
      en: "Cows Sauce",
      ar: "صوص COWS"
    },
    description: {
      en: "The Cows signature sauce.",
      ar: "صوص Cows المميز."
    },
    price: "0.50",
    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85"
  },

  {
    category: "extras",
    name: {
      en: "Extra Cheddar",
      ar: "تشيدر إضافي"
    },
    description: {
      en: "More cheddar. Always a good idea.",
      ar: "المزيد من التشيدر. دائماً فكرة جيدة."
    },
    price: "1.00",
    image:
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=900&q=85"
  },


  /* DRINKS */
  {
    category: "drinks",
    name: {
      en: "Water",
      ar: "مياه"
    },
    description: {
      en: "Cold bottled water.",
      ar: "مياه باردة."
    },
    price: "0.50",
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=85"
  },

  {
    category: "drinks",
    name: {
      en: "Soft Drink",
      ar: "مشروب غازي"
    },
    description: {
      en: "Cold soft drink.",
      ar: "مشروب غازي بارد."
    },
    price: "0.50",
    image:
      "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=900&q=85"
  },

  {
    category: "drinks",
    name: {
      en: "Cows Red Drink",
      ar: "مشروب COWS الأحمر"
    },
    description: {
      en: "The signature Cows red drink.",
      ar: "مشروب Cows الأحمر المميز."
    },
    price: "1.00",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=85"
  },


  /* SEASONAL */
  {
    category: "seasonal",
    name: {
      en: "Cows Truffle",
      ar: "COWS ترافل"
    },
    description: {
      en: "A seasonal Cows special.",
      ar: "اختيار موسمي خاص من Cows."
    },
    price: "3.50",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85",
    tag: {
      en: "SEASONAL",
      ar: "موسمي"
    }
  },

  {
    category: "seasonal",
    name: {
      en: "Cows Cheese Sticks",
      ar: "أصابع جبنة COWS"
    },
    description: {
      en: "Crispy cheese sticks.",
      ar: "أصابع جبنة مقرمشة."
    },
    price: "2.00",
    image:
      "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?auto=format&fit=crop&w=900&q=85"
  },

  {
    category: "seasonal",
    name: {
      en: "Cows Milkshake",
      ar: "ميلك شيك COWS"
    },
    description: {
      en: "Creamy Cows milkshake.",
      ar: "ميلك شيك Cows الكريمي."
    },
    price: "2.50",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85"
  },

  {
    category: "seasonal",
    name: {
      en: "Cows Cookies",
      ar: "كوكيز COWS"
    },
    description: {
      en: "A sweet finish.",
      ar: "نهاية حلوة."
    },
    price: "0.75",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=85"
  }

];


/* =========================================================
   GLOBAL STATE
========================================================= */

let currentLanguage = "en";


/* =========================================================
   LOADER
========================================================= */

document.body.classList.add("loading");

window.addEventListener("load", () => {

  setTimeout(() => {

    document.getElementById("loader").classList.add("hidden");
    document.body.classList.remove("loading");

    setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el, index) => {

        if (
          el.getBoundingClientRect().top <
          window.innerHeight * .9
        ) {
          setTimeout(() => {
            el.classList.add("visible");
          }, index * 80);
        }

      });
    }, 250);

  }, 1200);

});


/* =========================================================
   NAVBAR
========================================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {

  menuToggle.classList.toggle("active");
  mobileMenu.classList.toggle("active");

  document.body.classList.toggle(
    "loading",
    mobileMenu.classList.contains("active")
  );

});


document.querySelectorAll(".mobile-menu a").forEach(link => {

  link.addEventListener("click", () => {

    menuToggle.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.body.classList.remove("loading");

  });

});


/* =========================================================
   LANGUAGE SYSTEM
========================================================= */

const languageToggle =
  document.getElementById("languageToggle");

languageToggle.addEventListener("click", () => {

  currentLanguage =
    currentLanguage === "en"
      ? "ar"
      : "en";

  applyLanguage();

});


function applyLanguage() {

  const isArabic = currentLanguage === "ar";

  document.documentElement.lang =
    isArabic ? "ar" : "en";

  document.documentElement.dir =
    isArabic ? "rtl" : "ltr";

  document.body.classList.toggle(
    "arabic",
    isArabic
  );


  document.querySelectorAll("[data-en][data-ar]")
    .forEach(element => {

      element.textContent =
        isArabic
          ? element.dataset.ar
          : element.dataset.en;

    });


  renderMenu(
    document.querySelector(".menu-tab.active")?.dataset.filter
    || "burgers"
  );

}


/* =========================================================
   MENU RENDER
========================================================= */

const menuGrid =
  document.getElementById("menuGrid");

const menuTabs =
  document.querySelectorAll(".menu-tab");


function renderMenu(category) {

  const filtered =
    menuItems.filter(item =>
      item.category === category
    );

  menuGrid.innerHTML = "";

  filtered.forEach((item, index) => {

    const card =
      document.createElement("article");

    card.className = "menu-card reveal";

    card.style.transitionDelay =
      `${index * 70}ms`;

    const name =
      item.name[currentLanguage];

    const description =
      item.description[currentLanguage];

    const tag =
      item.tag
        ? item.tag[currentLanguage]
        : null;

    card.innerHTML = `

      <div class="menu-card-image">

        <img
          src="${item.image}"
          alt="${name}"
          loading="lazy"
        >

        ${
          tag
            ? `<span class="menu-card-tag">${tag}</span>`
            : ""
        }

      </div>

      <div class="menu-card-body">

        <h3>${name}</h3>

        <p>${description}</p>

        <div class="menu-card-bottom">

          <div class="menu-price">
            ${item.price}
            <small>JOD</small>
          </div>

          <button
            class="menu-add"
            aria-label="Add ${name}"
            onclick="orderItem('${name}')"
          >
            +
          </button>

        </div>

      </div>

    `;

    menuGrid.appendChild(card);

  });


  setTimeout(() => {

    menuGrid
      .querySelectorAll(".reveal")
      .forEach(el =>
        el.classList.add("visible")
      );

  }, 30);

}


menuTabs.forEach(tab => {

  tab.addEventListener("click", () => {

    menuTabs.forEach(item =>
      item.classList.remove("active")
    );

    tab.classList.add("active");

    renderMenu(tab.dataset.filter);

  });

});


renderMenu("burgers");


/* =========================================================
   ORDER ITEM
========================================================= */

function orderItem(itemName) {

  const message =
    currentLanguage === "ar"
      ? `مرحباً، أريد الاستفسار عن ${itemName} من Cows.`
      : `Hi, I'd like to order ${itemName} from Cows.`;

  const whatsapp =
    `https://wa.me/962799935135?text=${encodeURIComponent(message)}`;

  window.open(
    whatsapp,
    "_blank",
    "noopener"
  );

}


/* =========================================================
   SCROLL REVEALS
========================================================= */

const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: .12
    }
  );


document
  .querySelectorAll(".reveal")
  .forEach(el =>
    revealObserver.observe(el)
  );


/* =========================================================
   3D TILT CARDS
========================================================= */

const tiltCards =
  document.querySelectorAll(".tilt-card");

tiltCards.forEach(card => {

  card.addEventListener("mousemove", event => {

    if (window.innerWidth < 800) return;

    const rect =
      card.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

    const rotateY =
      ((x / rect.width) - .5) * 10;

    const rotateX =
      ((y / rect.height) - .5) * -10;

    card.style.transform =
      `perspective(1000px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       scale3d(1.02,1.02,1.02)`;

  });


  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";

  });

});


/* =========================================================
   MAGNETIC BUTTONS
========================================================= */

const magneticButtons =
  document.querySelectorAll(".magnetic");

magneticButtons.forEach(button => {

  button.addEventListener("mousemove", event => {

    if (window.innerWidth < 800) return;

    const rect =
      button.getBoundingClientRect();

    const x =
      event.clientX - rect.left - rect.width / 2;

    const y =
      event.clientY - rect.top - rect.height / 2;

    button.style.transform =
      `translate(${x * .12}px, ${y * .12}px)`;

  });


  button.addEventListener("mouseleave", () => {

    button.style.transform =
      "translate(0,0)";

  });

});


/* =========================================================
   HERO PARALLAX
========================================================= */

const heroProduct =
  document.querySelector(".hero-product");

window.addEventListener("scroll", () => {

  if (!heroProduct) return;

  const scroll =
    window.scrollY;

  if (scroll < window.innerHeight) {

    heroProduct.style.transform =
      `translateY(calc(-50% + ${scroll * .12}px))`;

  }

});


/* =========================================================
   SMOOTH ANCHOR OFFSET
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", event => {

    const target =
      document.querySelector(
        anchor.getAttribute("href")
      );

    if (!target) return;

    event.preventDefault();

    const offset = 70;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });

  });

});


/* =========================================================
   IMAGE ERROR FALLBACK
========================================================= */

document.addEventListener("error", event => {

  if (
    event.target.tagName === "IMG"
  ) {

    event.target.style.background =
      "#202020";

    event.target.style.objectFit =
      "cover";

  }

}, true);


/* =========================================================
   PERFORMANCE:
   REDUCE MOTION FOR ACCESSIBILITY
========================================================= */

const reduceMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

if (reduceMotion.matches) {

  document.documentElement.style.scrollBehavior =
    "auto";

  document
    .querySelectorAll(".reveal")
    .forEach(el => {

      el.style.transition = "none";
      el.style.opacity = "1";
      el.style.transform = "none";

    });

}
