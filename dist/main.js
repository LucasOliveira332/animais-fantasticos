/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./js/model/login.js":
      /*!***************************!*\
  !*** ./js/model/login.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ model)\n/* harmony export */ });\n/* harmony import */ var _utils_urls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/urls.js */ "./js/utils/urls.js");\n\r\n\r\nfunction model() {\r\n  const close = document.querySelector(\'[data-model = "close"]\');\r\n  const container = document.querySelector(\'[data-model="container"]\');\r\n  const form = document.querySelector(\'[data-model = "form"]\');\r\n  const openModel = document.querySelector(\'[data-model = "openModel"]\');\r\n\r\n  openModel.addEventListener("click", function (e) {\r\n    e.preventDefault();\r\n    container.style.display = "flex";\r\n  });\r\n\r\n  close.addEventListener("click", function (e) {\r\n    container.style.display = "none";\r\n  });\r\n\r\n  container.addEventListener("click", function (e) {\r\n    if (e.target === container) this.style.display = "none";\r\n  });\r\n\r\n  form.addEventListener("submit", function (e) {\r\n    e.preventDefault();\r\n    window.location.href = _utils_urls_js__WEBPACK_IMPORTED_MODULE_0__.urls.home;\r\n    close.click();\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/model/login.js?'
        );

        /***/
      },

    /***/ "./js/modules/AnimacaoScroll.js":
      /*!**************************************!*\
  !*** ./js/modules/AnimacaoScroll.js ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\r\n  const sections = document.querySelectorAll(\'[data-anime="scroll"]\');\r\n  if (sections.length) {\r\n    const halfWindon = window.innerHeight * 0.6;\r\n    function animaScroll() {\r\n      sections.forEach((section) => {\r\n        const sectionTop = section.getBoundingClientRect().top;\r\n        const isSectionVisible = sectionTop - halfWindon < 0;\r\n        isSectionVisible\r\n          ? section.classList.add("active")\r\n          : section.classList.remove("active");\r\n      });\r\n    }\r\n\r\n    animaScroll();\r\n\r\n    window.addEventListener("scroll", animaScroll);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/AnimacaoScroll.js?'
        );

        /***/
      },

    /***/ "./js/modules/NavigationPage.js":
      /*!**************************************!*\
  !*** ./js/modules/NavigationPage.js ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\nclass PageNavigation {\r\n  constructor(internalLinks) {\r\n    this.internalLinks = document.querySelectorAll(internalLinks);\r\n  }\r\n}\r\n\r\nfunction initScrollSuave() {\r\n  const linksInternos = document.querySelectorAll(\r\n    \'[data-menu="suave"] a[href^="#"]\'\r\n  );\r\n  function scrollToSection(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute("href");\r\n    \r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView({\r\n      behavior: "smooth",\r\n      block: "start",\r\n    });\r\n  }\r\n  linksInternos.forEach((link) => {\r\n    link.addEventListener("click", scrollToSection);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/NavigationPage.js?'
        );

        /***/
      },

    /***/ "./js/modules/accordion.js":
      /*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\r\n  const accordionList = document.querySelectorAll(\r\n    \'[data-anime="accordion"] dt\'\r\n  );\r\n  const activeClass = "ativo";\r\n\r\n  if (accordionList.length) {\r\n    accordionList[0].classList.add(activeClass);\r\n    accordionList[0].nextElementSibling.classList.add(activeClass);\r\n\r\n    function activeAccordion() {\r\n      this.classList.toggle(activeClass);\r\n      this.nextElementSibling.classList.toggle(activeClass);\r\n    }\r\n\r\n    accordionList.forEach((item) => {\r\n      item.addEventListener("click", activeAccordion);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordion.js?'
        );

        /***/
      },

    /***/ "./js/modules/animalNumber.js":
      /*!************************************!*\
  !*** ./js/modules/animalNumber.js ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ animalNumber)\n/* harmony export */ });\nfunction animalNumber() {\r\n  const animalNumbers = document.querySelectorAll("[data-animalNumber=\'item\']");\r\n  const section = document.querySelector("[data-animalNumber=\'section\']");\r\n  section.addEventListener("change", () => {\r\n    console.log("scroll");\r\n  });\r\n\r\n  animalNumbers.forEach((number) => {\r\n    let total = +number.innerText;\r\n    let times = total / 100;\r\n    let acu = 0;\r\n\r\n    const interval = setInterval(() => {\r\n      number.innerText = Math.ceil(acu);\r\n      acu += times;\r\n      if (acu > total) {\r\n        clearInterval(interval);\r\n        number.innerText = total;\r\n      }\r\n    }, 50 * Math.random());\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/animalNumber.js?'
        );

        /***/
      },

    /***/ "./js/modules/customValidation.js":
      /*!****************************************!*\
  !*** ./js/modules/customValidation.js ***!
  \****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ customValidation)\n/* harmony export */ });\nfunction customValidation() {\r\n  const form = document.querySelector("[data-model=\'form\']");\r\n\r\n  form.addEventListener("change", modifyForm);\r\n\r\n  function modifyForm(event) {\r\n    console.log(event.target.checkValidity());\r\n    if (!event.target.checkValidity())\r\n      console.log(event.target.validationMessage);\r\n    console.log(event.target.value);\r\n\r\n    form.style.backgroundColor = event.target.value;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/customValidation.js?'
        );

        /***/
      },

    /***/ "./js/modules/feachTotalAnimals.js":
      /*!*****************************************!*\
  !*** ./js/modules/feachTotalAnimals.js ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ initFeachTotalAnimals)\n/* harmony export */ });\n/* harmony import */ var _animalNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animalNumber.js */ "./js/modules/animalNumber.js");\n\r\n\r\nasync function initFeachTotalAnimals() {\r\n  const sectionAnimals = document.querySelector(\r\n    "[data-animalNumber=\'section\'] .content"\r\n  );\r\n\r\n  async function feachTotalAnimals() {\r\n    try {\r\n      const response = await fetch("../js/utils/animalsAPI.json");\r\n      return await response.json();\r\n    } catch (error) {\r\n      \r\n    }\r\n  }\r\n\r\n  const totalNumberAnimalsSpecies = await feachTotalAnimals();\r\n  totalNumberAnimalsSpecies.forEach((animal) => addInHtml(animal));\r\n  (0,_animalNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])();\r\n  function addInHtml(animal) {\r\n    const element = document.createElement("div");\r\n    \r\n\r\n    element.innerHTML = `<h2>${animal.specie}</h2><span data-animalNumber=\'item\'>${animal.amount}</span>`;\r\n\r\n    sectionAnimals.appendChild(element);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/feachTotalAnimals.js?'
        );

        /***/
      },

    /***/ "./js/modules/inOperationOrNot.js":
      /*!****************************************!*\
  !*** ./js/modules/inOperationOrNot.js ***!
  \****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ inOperationOrNot)\n/* harmony export */ });\nfunction inOperationOrNot() {\r\n  const status = document.querySelector(\'[data-operation="status"]\');\r\n  const daysOperation = [1, 2, 3, 4, 5];\r\n  const timeOperation = [8, 18];\r\n\r\n  const dateNow = new Date();\r\n  const day = dateNow.getDay();\r\n  const hour = dateNow.getHours();\r\n\r\n  const isDayOpen = daysOperation.includes(day);\r\n  const isTimeOpen = hour >= timeOperation[0] && hour <= timeOperation[1];\r\n\r\n  \r\n\r\n  isDayOpen && isTimeOpen\r\n    ? (status.style.backgroundColor = "green")\r\n    : (status.style.backgroundColor = "red");\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/inOperationOrNot.js?'
        );

        /***/
      },

    /***/ "./js/modules/outsideClick.js":
      /*!************************************!*\
  !*** ./js/modules/outsideClick.js ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, eventList) {\r\n  const html = document.documentElement;\r\n\r\n  eventList.forEach((event) => {\r\n    element.addEventListener(event, handleClickInside);\r\n  });\r\n  function handleClickInside(e) {\r\n    e.preventDefault();\r\n    element.classList.add("active");\r\n    eventList.forEach((event) => {\r\n      html.addEventListener(event, handleClickOutside);\r\n    });\r\n  }\r\n  function handleClickOutside(event) {\r\n    if (!element.parentElement.contains(event.target)) {\r\n      element.classList.remove("active");\r\n      eventList.forEach((event) =>\r\n        html.removeEventListener(event, handleClickOutside)\r\n      );\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outsideClick.js?'
        );

        /***/
      },

    /***/ "./js/modules/showDropDownMenu.js":
      /*!****************************************!*\
  !*** ./js/modules/showDropDownMenu.js ***!
  \****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ showDropDownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ "./js/modules/outsideClick.js");\n\r\n\r\nfunction showDropDownMenu() {\r\n  const dropDown = document.querySelector("[data-dropDown]");\r\n  const eventList = ["touchstart", "click"];\r\n  (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dropDown, eventList);\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/showDropDownMenu.js?'
        );

        /***/
      },

    /***/ "./js/modules/showDropDownMenuMobile.js":
      /*!**********************************************!*\
  !*** ./js/modules/showDropDownMenuMobile.js ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ showDropDownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ "./js/modules/outsideClick.js");\n\r\n\r\nfunction showDropDownMenu() {\r\n  const dropDown = document.querySelector("[data-menuMobile]");\r\n  const eventList = ["touchstart", "click"];\r\n  (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dropDown, eventList);\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/showDropDownMenuMobile.js?'
        );

        /***/
      },

    /***/ "./js/modules/tabNav.js":
      /*!******************************!*\
  !*** ./js/modules/tabNav.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\r\n  const gallery = document.querySelectorAll("[data-main=\'gallery\'] li");\r\n  const description = document.querySelectorAll(\r\n    "[data-main=\'description\'] section"\r\n  );\r\n\r\n  description[0].classList.add("active");\r\n\r\n  gallery.forEach((img, index) => {\r\n    img.addEventListener("click", function (e) {\r\n      description.forEach((section) => {\r\n        section.classList.remove("active");\r\n      });\r\n      description[index].classList.add("active");\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tabNav.js?'
        );

        /***/
      },

    /***/ "./js/modules/tooltip.js":
      /*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\r\n  const map = document.querySelector(\'[data-tooltip="container"]\');\r\n  const box = document.querySelector(\'[data-tooltip="box"]\');\r\n\r\n  map.addEventListener("mouseover", function (e) {\r\n    box.style.display = "block";\r\n  });\r\n\r\n  map.addEventListener("mouseleave", function (e) {\r\n    box.style.display = "none";\r\n  });\r\n\r\n  map.addEventListener("mousemove", function (e) {\r\n    box.style.top = e.pageY + 20 + "px";\r\n    box.style.left = e.pageX + 20 + "px";\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?'
        );

        /***/
      },

    /***/ "./js/script.js":
      /*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_NavigationPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/NavigationPage.js */ "./js/modules/NavigationPage.js");\n/* harmony import */ var _modules_tabNav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabNav.js */ "./js/modules/tabNav.js");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ "./js/modules/accordion.js");\n/* harmony import */ var _modules_AnimacaoScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/AnimacaoScroll.js */ "./js/modules/AnimacaoScroll.js");\n/* harmony import */ var _model_login_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/login.js */ "./js/model/login.js");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ "./js/modules/tooltip.js");\n/* harmony import */ var _modules_showDropDownMenu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/showDropDownMenu.js */ "./js/modules/showDropDownMenu.js");\n/* harmony import */ var _modules_showDropDownMenuMobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/showDropDownMenuMobile.js */ "./js/modules/showDropDownMenuMobile.js");\n/* harmony import */ var _modules_inOperationOrNot_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/inOperationOrNot.js */ "./js/modules/inOperationOrNot.js");\n/* harmony import */ var _modules_customValidation_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/customValidation.js */ "./js/modules/customValidation.js");\n/* harmony import */ var _modules_feachTotalAnimals_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/feachTotalAnimals.js */ "./js/modules/feachTotalAnimals.js");\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_NavigationPage_js__WEBPACK_IMPORTED_MODULE_0__["default"])();\n(0,_modules_tabNav_js__WEBPACK_IMPORTED_MODULE_1__["default"])();\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__["default"])();\n(0,_modules_AnimacaoScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])();\n(0,_model_login_js__WEBPACK_IMPORTED_MODULE_4__["default"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__["default"])();\n(0,_modules_showDropDownMenu_js__WEBPACK_IMPORTED_MODULE_6__["default"])();\n(0,_modules_showDropDownMenuMobile_js__WEBPACK_IMPORTED_MODULE_7__["default"])();\n(0,_modules_inOperationOrNot_js__WEBPACK_IMPORTED_MODULE_8__["default"])();\n(0,_modules_customValidation_js__WEBPACK_IMPORTED_MODULE_9__["default"])();\n(0,_modules_feachTotalAnimals_js__WEBPACK_IMPORTED_MODULE_10__["default"])();\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?'
        );

        /***/
      },

    /***/ "./js/utils/urls.js":
      /*!**************************!*\
  !*** ./js/utils/urls.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "urls": () => (/* binding */ urls)\n/* harmony export */ });\nconst urls = {\r\n  home: "http://127.0.0.1:5501/Javascript/Projetos/animais-fantasticos/",\r\n};\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/utils/urls.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./js/script.js");
  /******/
  /******/
})();
