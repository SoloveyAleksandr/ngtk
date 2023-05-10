document.addEventListener("DOMContentLoaded", () => {
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  class HeaderDrop {
    constructor(container) {
      this.container = container;
      this.content = this.container.querySelector(".header-nav-dropdown__content");
      this.btn = this.container.querySelector(".header-nav-dropdown__btn");
      this.isOpen = false;
      this.maxHeight = 0;

      if (this.container && this.content && this.btn) {
        this.init();
      }
    }

    init() {
      this.maxHeight = this.content.offsetHeight * 1.5;

      if (window.matchMedia("(max-width: 1024px)").matches) {
        this.btn.addEventListener("click", (e) => this.handleClick.call(this, e))
      } else {
        this.container.addEventListener("mouseenter", this.open.bind(this));
      }

      this.container.addEventListener("mouseleave", this.close.bind(this));

      this.close();
    }

    handleClick(e) {
      if (this.isOpen) {
        this.close();
      } else {
        e.preventDefault();
        this.open();
      }
    }

    open() {
      this.isOpen = true;
      this.container.classList.add("_open");

      if (window.matchMedia("(max-width: 1024px)").matches) {
        this.content.style.maxHeight = this.maxHeight + "px";
      }
    }

    close() {
      this.isOpen = false;
      this.container.classList.remove("_open");

      if (window.matchMedia("(max-width: 1024px)").matches) {
        this.content.style.maxHeight = 0 + "px";
      }
    }
  }

  class Checkbox {
    constructor(wrapper) {
      this.wrapper = wrapper;
      this.checkbox = this.wrapper.querySelector("input");

      if (this.wrapper && this.checkbox) this.init();
    }

    init() {
      this.checkbox.addEventListener("change", this.handleChange.bind(this));

      if (this.checkbox.checked) {
        this.wrapper.classList.add("_checked");
      } else {
        this.wrapper.classList.remove("_checked");
      }
    }

    handleChange() {
      if (this.checkbox.checked) {
        this.wrapper.classList.add("_checked");
      } else {
        this.wrapper.classList.remove("_checked");
      }
    }
  }

  class DropDocInfo {
    constructor(container) {
      this.container = container;
      this.btn = this.container.querySelector(".doc-info-item-drop-btn");
      this.content = this.container.querySelector(".doc-info-item-drop__content");
      this.isOpen = false;
      this.maxHeight = 0;

      if (this.container && this.btn && this.content) {
        this.init();
      }
    }

    init() {
      this.maxHeight = this.content.offsetHeight + 100;
      this.btn.addEventListener("click", this.handleClick.bind(this));
      this.close();
    }

    handleClick() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }

    open() {
      this.isOpen = true;
      this.content.style.maxHeight = this.maxHeight + "px";
      this.container.classList.add("_open");
    }

    close() {
      this.isOpen = false;
      this.content.style.maxHeight = "0rem";
      this.container.classList.remove("_open");
    }
  }

  class HeaderMenu {
    constructor(container, btn) {
      this.container = container;
      this.btn = btn;
      this.isOpen = false;

      if (this.container && this.btn) {
        this.init();
      }
    }

    init() {
      this.btn.addEventListener("click", this.handleClick.bind(this));
    }

    handleClick(e) {
      if (this.isOpen) {
        this.close();
      } else {
        e.preventDefault();
        this.open();
      }
    }

    open() {
      this.isOpen = true;
      this.container.classList.add("_open");
      this.btn.classList.add("_open");
    }

    close() {
      this.isOpen = false;
      this.container.classList.remove("_open");
      this.btn.classList.remove("_open");
    }
  }

  // dropwodn в шапке
  const headerDrops = document.querySelectorAll(".header-nav-dropdown");
  headerDrops.forEach(item => new HeaderDrop(item));

  // меню
  const header = document.querySelector(".header");
  if (header) {
    const headerMenu = header.querySelector(".header-menu");
    const headerMenuBtn = header.querySelector(".header-controls__btn_menu");
    const headerMenuNav = header.querySelector(".header-menu-nav");

    const navFragment = document.createDocumentFragment();

    const headerLoginBtn = header.querySelector(".header-controls__btn_login");
    navFragment.appendChild(headerLoginBtn);

    const headerNavBoxList = header.querySelectorAll(".header-box");
    headerNavBoxList.forEach(item => {
      navFragment.appendChild(item);
    });

    headerMenuNav.appendChild(navFragment);

    const MENU = new HeaderMenu(headerMenu, headerMenuBtn);
  }

  const checkboxList = document.querySelectorAll("[data-checkbox]");
  checkboxList.forEach(item => new Checkbox(item));

  const infoSliderList = document.querySelectorAll(".info-slider");
  infoSliderList.forEach(item => {
    const swiper = item.querySelector(".info-slider-swiper");
    const prevBtn = item.querySelector(".info-slider__btn_left");
    const nextBtn = item.querySelector(".info-slider__btn_right");
    new Swiper(swiper, {
      slidesPerView: 4,
      spaceBetween: 40,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
    })
  })

  if (document.querySelector(".main-about")) {
    const swiper = new Swiper(".main-about-swiper", {
      effect: "fade",
    })
    const swiperBtns = document.querySelectorAll(".main-about__btn");
    swiperBtns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        swiper.slideTo(i);
        swiperBtns.forEach(item => {
          item.classList.remove("_active");
          btn.classList.add("_active");
        })
      })
    })

  }

  const reviewsSliders = document.querySelectorAll(".reviews");
  reviewsSliders.forEach(wrapper => {
    console.log(wrapper);
    const swiper = wrapper.querySelector(".swiper");
    const prevBtn = wrapper.querySelector(".info-slider__btn_left");
    const nextBtn = wrapper.querySelector(".info-slider__btn_right");
    new Swiper(swiper, {
      speed: 1000,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
    })
  })

  const docInfoItemDrops = document.querySelectorAll(".doc-info-item-drop");
  docInfoItemDrops.forEach(item => {
    new DropDocInfo(item);
  })

})