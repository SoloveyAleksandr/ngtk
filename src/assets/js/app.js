document.addEventListener("DOMContentLoaded", () => {
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

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

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
})