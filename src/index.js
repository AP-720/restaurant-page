import "./css/reset.css";
import "./css/style.css";

import { HomePage } from "./home";
import { MenuPage } from "./menu";
import { AboutPage } from "./about";

// const newHomePage = new HomePage();
// const newMenuPage = new MenuPage();
// const newAboutPage = new AboutPage();

// newHomePage.renderHome();
// newMenuPage.renderMenu();
// newAboutPage.renderAbout();

class TabController {
	constructor() {
		this.newHomePage = new HomePage();
		this.newMenuPage = new MenuPage();
		this.newAboutPage = new AboutPage();

		this.content = document.querySelector("#content");

		this.homeBtn = document.querySelector("[data-home-btn]");
		this.menuBtn = document.querySelector("[data-menu-btn]");
		this.aboutBtn = document.querySelector("[data-about-btn]");

		this.homeBtn.addEventListener("click", () => this.renderHome());
		this.menuBtn.addEventListener("click", () => this.renderMenu());
		this.aboutBtn.addEventListener("click", () => this.renderAbout());

		window.onload = () => {
			this.newHomePage.renderHome();
		};

		this.setupEventDelegation();
	}

	setupEventDelegation() {
		this.content.addEventListener("click", (event) => {
			if (event.target.matches("[data-menu-btn]")) {
				this.renderMenu();
			}
		});
	}

	clearContent() {
		this.content.innerHTML = "";
	}

	renderHome() {
		this.clearContent();
		this.newHomePage.renderHome();
	}

	renderMenu() {
		this.clearContent();
		this.newMenuPage.renderMenu();
		console.log("Menu");
	}

	renderAbout() {
		this.clearContent();
		this.newAboutPage.renderAbout();
	}
}

new TabController();
