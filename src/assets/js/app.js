document.addEventListener("DOMContentLoaded", () => {
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

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

  class DromDocInfo {
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

  // дорисовка типа документа для > UL > doc-info
  const dataDocTypeItems = document.querySelectorAll("[data-doc-type]");
  dataDocTypeItems.forEach(item => {
    const type = item.getAttribute("data-doc-type");
    if (type) {
      const typeSpan = document.createElement("span");
      typeSpan.className = "_type";
      typeSpan.innerText = type;
      item.appendChild(typeSpan);
    }
  })

  const docInfoItemDrops = document.querySelectorAll(".doc-info-item-drop");
  docInfoItemDrops.forEach(item => {
    new DromDocInfo(item);
  })
})