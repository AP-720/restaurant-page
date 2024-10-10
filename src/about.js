import aboutImage from "./images/samantha-beaty-9A_fqg3YeKw-unsplash.jpg";

export class AboutPage {
	constructor() {
		this.content = document.querySelector("#content");
	}

	renderAbout() {
		const aboutContainer = document.createElement("div");
		aboutContainer.classList.add("about-container");

		const aboutText = document.createElement("div");
		aboutText.classList.add("about-text");
		aboutContainer.appendChild(aboutText);

		const aboutTextContent = `
        <h2>Our Story</h2>
		<p>
			At our coffee shop, we’re passionate about the art of filter coffee.
			Every cup is crafted from a rotating selection of exceptional beans,
			sourced from guest roasters around the globe.
		</p>
		<p>
			We prioritize ethically sourced coffee, ensuring that every bean
			reflects our commitment to fair practices and sustainability. Join
			us for an ever-changing coffee experience that celebrates diverse
			coffee traditions and brings you fresh, unique flavors with every
			brew.
		</p>
        `;
		aboutText.innerHTML = aboutTextContent;

		const aboutImg = document.createElement("img");
		aboutImg.src = aboutImage;
		aboutContainer.appendChild(aboutImg);

		this.content.appendChild(aboutContainer);
	}
}
