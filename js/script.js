import ScrollPage from "./modules/ScrollPage.js";
import ImageDescription from "./modules/ImageDescription.js";
import Accordion from "./modules/Accordion.js";
import AnimationScroll from "./modules/AnimationScroll.js";
import LoginModel from "./modules/ModelLogin.js";
import MousePosition from "./modules/MousePosition.js";

import initShowDropDownMenu from "./modules/showDropDownMenu.js";
import initShowDropDownMenuMobile from "./modules/showDropDownMenuMobile.js";
import initInOperationOrNot from "./modules/inOperationOrNot.js";
import initCustomValidation from "./modules/customValidation.js";
import initFeachTotalAnimals from "./modules/feachTotalAnimals.js";

const scrollPage = new ScrollPage('[href^="#"]', {
  behavior: "smooth",
  block: "start",
});
scrollPage.Init();

const imageDescription = new ImageDescription(
  "[data-main='gallery'] li",
  "[data-main='description'] section"
);
imageDescription.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const animationScroll = new AnimationScroll('[data-anime="scroll"]');
animationScroll.init();

const loginModel = new LoginModel(
  '[data-model ="close"]',
  '[data-model ="container"]',
  '[data-model ="form"]',
  '[data-model ="openModel"]'
);
loginModel.init();

const mousePosition = new MousePosition(
  '[data-tooltip="container"]',
  '[data-tooltip="box"]',
  20,
  20
);
mousePosition.init();

initShowDropDownMenu();
initShowDropDownMenuMobile();
initInOperationOrNot();
initCustomValidation();
initFeachTotalAnimals();
