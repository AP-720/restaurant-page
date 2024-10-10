import "./css/reset.css";
import "./css/style.css";

import { HomePage } from "./home";
import { MenuPage } from "./menu";
import { AboutPage } from "./about";

const newHomePage = new HomePage();
const newMenuPage = new MenuPage();
const newAboutPage = new AboutPage();

// newHomePage.renderHome();
// newMenuPage.renderMenu();
newAboutPage.renderAbout();
