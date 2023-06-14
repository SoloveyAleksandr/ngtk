"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
document.addEventListener("DOMContentLoaded", function () {
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
  var startWindowSize = window.innerWidth;
  var breackpoint = 1024;
  var isDescktop = startWindowSize > breackpoint;
  window.onresize = function () {
    if (isDescktop) {
      if (window.innerWidth <= breackpoint) {
        location.reload();
      }
    } else {
      if (window.innerWidth > breackpoint) {
        location.reload();
      }
    }
  };
  var HeaderDrop = /*#__PURE__*/function () {
    function HeaderDrop(container) {
      _classCallCheck(this, HeaderDrop);
      this.container = container;
      this.content = this.container.querySelector(".header-nav-dropdown__content");
      this.btn = this.container.querySelector(".header-nav-dropdown__btn");
      this.isOpen = false;
      this.maxHeight = 0;
      if (this.container && this.content && this.btn) {
        this.init();
      }
    }
    _createClass(HeaderDrop, [{
      key: "init",
      value: function init() {
        var _this = this;
        this.maxHeight = this.content.offsetHeight * 1.5;
        if (window.matchMedia("(max-width: 1024px)").matches) {
          this.btn.addEventListener("click", function (e) {
            return _this.handleClick.call(_this, e);
          });
        } else {
          this.container.addEventListener("mouseenter", this.open.bind(this));
        }
        this.container.addEventListener("mouseleave", this.close.bind(this));
        this.close();
      }
    }, {
      key: "handleClick",
      value: function handleClick(e) {
        if (this.isOpen) {
          this.close();
        } else {
          e.preventDefault();
          this.open();
        }
      }
    }, {
      key: "open",
      value: function open() {
        this.isOpen = true;
        this.container.classList.add("_open");
        if (window.matchMedia("(max-width: 1024px)").matches) {
          this.content.style.maxHeight = this.maxHeight + "px";
        }
      }
    }, {
      key: "close",
      value: function close() {
        this.isOpen = false;
        this.container.classList.remove("_open");
        if (window.matchMedia("(max-width: 1024px)").matches) {
          this.content.style.maxHeight = 0 + "px";
        }
      }
    }]);
    return HeaderDrop;
  }();
  var Checkbox = /*#__PURE__*/function () {
    function Checkbox(wrapper) {
      _classCallCheck(this, Checkbox);
      this.wrapper = wrapper;
      this.checkbox = this.wrapper.querySelector("input");
      if (this.wrapper && this.checkbox) this.init();
    }
    _createClass(Checkbox, [{
      key: "init",
      value: function init() {
        this.checkbox.addEventListener("change", this.handleChange.bind(this));
        if (this.checkbox.checked) {
          this.wrapper.classList.add("_checked");
        } else {
          this.wrapper.classList.remove("_checked");
        }
      }
    }, {
      key: "handleChange",
      value: function handleChange() {
        if (this.checkbox.checked) {
          this.wrapper.classList.add("_checked");
        } else {
          this.wrapper.classList.remove("_checked");
        }
      }
    }]);
    return Checkbox;
  }();
  var DropDocInfo = /*#__PURE__*/function () {
    function DropDocInfo(container) {
      _classCallCheck(this, DropDocInfo);
      this.container = container;
      this.btn = this.container.querySelector(".doc-info-item-drop-btn");
      this.content = this.container.querySelector(".doc-info-item-drop__content");
      this.isOpen = false;
      this.maxHeight = 0;
      if (this.container && this.btn && this.content) {
        this.init();
      }
    }
    _createClass(DropDocInfo, [{
      key: "init",
      value: function init() {
        this.maxHeight = this.content.offsetHeight + 100;
        this.btn.addEventListener("click", this.handleClick.bind(this));
        this.close();
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        if (this.isOpen) {
          this.close();
        } else {
          this.open();
        }
      }
    }, {
      key: "open",
      value: function open() {
        this.isOpen = true;
        this.content.style.maxHeight = this.maxHeight + "px";
        this.container.classList.add("_open");
      }
    }, {
      key: "close",
      value: function close() {
        this.isOpen = false;
        this.content.style.maxHeight = "0rem";
        this.container.classList.remove("_open");
      }
    }]);
    return DropDocInfo;
  }();
  var HeaderMenu = /*#__PURE__*/function () {
    function HeaderMenu(header, container, btn) {
      _classCallCheck(this, HeaderMenu);
      this.header = header;
      this.container = container;
      this.btn = btn;
      this.isOpen = false;
      if (this.container && this.btn) {
        this.init();
      }
    }
    _createClass(HeaderMenu, [{
      key: "init",
      value: function init() {
        this.btn.addEventListener("click", this.handleClick.bind(this));
      }
    }, {
      key: "handleClick",
      value: function handleClick(e) {
        if (this.isOpen) {
          this.close();
        } else {
          e.preventDefault();
          this.open();
        }
      }
    }, {
      key: "open",
      value: function open() {
        this.isOpen = true;
        this.container.classList.add("_open");
        this.btn.classList.add("_open");
        this.header.classList.add("_open");
      }
    }, {
      key: "close",
      value: function close() {
        this.isOpen = false;
        this.container.classList.remove("_open");
        this.btn.classList.remove("_open");
        this.header.classList.remove("_open");
      }
    }]);
    return HeaderMenu;
  }();
  var UpBtn = /*#__PURE__*/function () {
    function UpBtn(btn) {
      _classCallCheck(this, UpBtn);
      this.btn = btn;
      this.isVisable = false;
      if (this.btn) {
        this.init();
      }
    }
    _createClass(UpBtn, [{
      key: "init",
      value: function init() {
        window.addEventListener("scroll", this.scrollHandler.bind(this));
      }
    }, {
      key: "scrollHandler",
      value: function scrollHandler() {
        if (window.scrollY >= window.outerHeight && !this.isVisable) {
          this.setVisable(true);
        } else if (window.scrollY < window.outerHeight && this.isVisable) {
          this.setVisable(false);
        }
      }
    }, {
      key: "setVisable",
      value: function setVisable(bool) {
        if (bool) {
          this.btn.classList.add("_visable");
          this.isVisable = true;
        } else {
          this.btn.classList.remove("_visable");
          this.isVisable = false;
        }
      }
    }]);
    return UpBtn;
  }();
  var HeaderSearch = /*#__PURE__*/function () {
    function HeaderSearch(container) {
      _classCallCheck(this, HeaderSearch);
      this.container = container;
      this.openBtn = this.container.querySelector(".header-search__btn_open");
      this.searchBtn = this.container.querySelector(".header-search__btn_search");
      this.inner = this.container.querySelector(".header-search__inner");
      if (this.container && this.openBtn && this.searchBtn && this.inner) {
        this.init();
      }
    }
    _createClass(HeaderSearch, [{
      key: "init",
      value: function init() {
        var _this2 = this;
        this.openBtn.addEventListener("click", function (e) {
          e.stopPropagation();
          _this2.open.call(_this2);
        });
        this.inner.addEventListener("click", function (e) {
          return e.stopPropagation();
        });
        document.addEventListener("click", this.close.bind(this));
      }
    }, {
      key: "open",
      value: function open() {
        this.container.classList.add("_active");
      }
    }, {
      key: "close",
      value: function close() {
        this.container.classList.remove("_active");
      }
    }]);
    return HeaderSearch;
  }();
  {
    var formBtns = document.querySelectorAll("[data-to-form]");
    var form = document.querySelector(".entrance-form");
    var _header = document.querySelector(".header");
    if (form) {
      formBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
          var hh = _header.offsetHeight;
          var formY = form.getBoundingClientRect().y;
          var winY = window.scrollY;
          window.scrollTo({
            behavior: "smooth",
            top: winY > formY ? winY - (Math.abs(formY) + hh) : winY + (formY - hh)
          });
        });
      });
    }
  }
  var headerSearch = document.querySelector(".header-search");
  if (headerSearch) {
    new HeaderSearch(headerSearch);
  }

  // dropwodn в шапке
  var headerDrops = document.querySelectorAll(".header-nav-dropdown");
  headerDrops.forEach(function (item) {
    return new HeaderDrop(item);
  });

  // меню
  var header = document.querySelector(".header");
  if (header && window.matchMedia("(max-width: 1024px)").matches) {
    var headerMenu = header.querySelector(".header-menu");
    var headerMenuBtn = header.querySelector(".header-controls__btn_menu");
    var headerMenuNav = header.querySelector(".header-menu-nav");
    var navFragment = document.createDocumentFragment();
    var headerLoginBtn = header.querySelector(".header-controls__btn_login");
    navFragment.appendChild(headerLoginBtn);
    var headerNavBoxList = header.querySelectorAll(".header-box");
    headerNavBoxList.forEach(function (item) {
      navFragment.appendChild(item);
    });
    headerMenuNav.appendChild(navFragment);
    var MENU = new HeaderMenu(header, headerMenu, headerMenuBtn);
  }

  // footer adaptive
  var footer = document.querySelector(".footer");
  if (footer && window.matchMedia("(max-width: 1024px)").matches) {
    var footerInner = footer.querySelector(".footer-inner");
    var footerContacts = footer.querySelector(".footer-contacts");
    footerInner.appendChild(footerContacts);
  }
  var checkboxList = document.querySelectorAll("[data-checkbox]");
  checkboxList.forEach(function (item) {
    return new Checkbox(item);
  });
  if (window.matchMedia("(min-width: 501px)").matches) {
    var infoSliderList = document.querySelectorAll(".info-slider");
    infoSliderList.forEach(function (item) {
      var swiper = item.querySelector(".info-slider-swiper");
      var prevBtn = item.querySelector(".info-slider__btn_left");
      var nextBtn = item.querySelector(".info-slider__btn_right");
      new Swiper(swiper, {
        slidesPerView: 2,
        spaceBetween: 40,
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn
        },
        breakpoints: {
          1025: {
            slidesPerView: 4
          },
          741: {
            slidesPerView: 3
          }
        }
      });
    });
  }
  if (document.querySelector(".main-about")) {
    var swiper = new Swiper(".main-about-swiper", {
      effect: "fade"
    });
    var swiperBtns = document.querySelectorAll(".main-about__btn");
    swiperBtns.forEach(function (btn, i) {
      btn.addEventListener("click", function () {
        swiper.slideTo(i);
        swiperBtns.forEach(function (item) {
          item.classList.remove("_active");
          btn.classList.add("_active");
        });
      });
    });
  }
  var reviewsSliders = document.querySelectorAll(".reviews");
  reviewsSliders.forEach(function (wrapper) {
    var swiper = wrapper.querySelector(".swiper");
    var prevBtn = wrapper.querySelector(".info-slider__btn_left");
    var nextBtn = wrapper.querySelector(".info-slider__btn_right");
    new Swiper(swiper, {
      speed: 1000,
      spaceBetween: 100,
      autoHeight: true,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn
      }
    });
  });
  var docInfoItemDrops = document.querySelectorAll(".doc-info-item-drop");
  docInfoItemDrops.forEach(function (item) {
    new DropDocInfo(item);
  });
  var upBtn = document.querySelector(".up-btn");
  if (upBtn) {
    new UpBtn(upBtn);
  }
});