import coffeeImage from "./images/isaac-ERFNtzlkpP8-unsplash.jpg";

export class HomePage {
	constructor() {
		this.content = document.querySelector("#content");
	}

	renderHome() {
		const homeContainer = document.createElement("div");
		homeContainer.classList.add("home-main-container");

		const homeTextContainer = document.createElement("div");
		homeTextContainer.classList.add("home-text-container");
		homeContainer.appendChild(homeTextContainer);

		const imgElement = document.createElement("img");
		imgElement.src = coffeeImage;
		imgElement.alt = "Pour over coffee dripper on a scale";
		homeContainer.appendChild(imgElement);

		const welcomeHeader = document.createElement("h2");
		welcomeHeader.innerHTML = "Welcome <br/>to <br/>Dot Coffee";
		homeTextContainer.appendChild(welcomeHeader);

		const introText = document.createElement("p");
		introText.innerHTML =
			"Where every cup is crafted with precision and passion. Specializing in expertly brewed filter coffee, we take pride in sourcing the finest beans and highlighting their unique flavors. Whether you're a coffee connoisseur or just discovering your love for a perfect brew,Dot Coffee is the spot to savor quality and simplicity in every sip.<br/><br/>Check out our menu:";
		homeTextContainer.appendChild(introText);

		const menuBtn = document.createElement("button");
		menuBtn.setAttribute("type", "button");
		menuBtn.textContent = "Menu";
		menuBtn.dataset.menuBtn = "";
		homeTextContainer.appendChild(menuBtn);

		this.content.appendChild(homeContainer);
	}
}
