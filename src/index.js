import "./css/reset.css";
import "./css/style.css";

import { HomePage } from "./home";
import { MenuPage } from "./menu";

const newHomePage = new HomePage();
const newMenuPage = new MenuPage();

newHomePage.renderHome();
newMenuPage.renderMenu();
