import ScrollPage from "./modules/ScrollPage.js";
import initTabNav from "./modules/tabNav.js";
import initAccordion from "./modules/accordion.js";
import initAnimacaoScroll from "./modules/AnimacaoScroll.js";
import initLoginModel from "./model/login.js";
import initTooltip from "./modules/tooltip.js";
import initShowDropDownMenu from "./modules/showDropDownMenu.js";
import initShowDropDownMenuMobile from "./modules/showDropDownMenuMobile.js";
import initInOperationOrNot from "./modules/inOperationOrNot.js";
import initCustomValidation from "./modules/customValidation.js";
import initFeachTotalAnimals from "./modules/feachTotalAnimals.js";

const scrollpage = new ScrollPage('[href^="#"]', {
  behavior: "smooth",
  block: "start",
});
scrollpage.Init();

initAccordion();
initAnimacaoScroll();
initLoginModel();
initTooltip();
initShowDropDownMenu();
initShowDropDownMenuMobile();
initInOperationOrNot();
initCustomValidation();
initFeachTotalAnimals();
