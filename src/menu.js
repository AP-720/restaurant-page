import menuImage from "./images/raychan-OxEFLtbPtqs-unsplash.jpg";

export class MenuPage {
	constructor() {
		this.content = document.querySelector("#content");
	}

	renderMenu() {
		const menuContainer = document.createElement("div");
		menuContainer.classList.add("menu-container");

		const menuImg = document.createElement("img");
		menuImg.src = menuImage;
		menuImg.alt = "Coffee shop";
		menuContainer.appendChild(menuImg);

		const menuText = document.createElement("div");
		menuText.classList.add("menu-text");
		menuContainer.appendChild(menuText);

		const menuTable = `
        <h2>Menu</h2>
        <table>
		<thead>
			<tr>
				<th>Drink</th>
				<th>Price</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Espresso</td>
				<td>£3.30</td>
			</tr>

			<tr>
				<td>Long Black</td>
				<td>£3.50</td>
			</tr>

			<tr>
				<td>Americano</td>
				<td>£3.50</td>
			</tr>

			<tr>
				<td>Filter</td>
				<td>£3.30</td>
			</tr>

			<tr>
				<td colspan="2">&nbsp;</td>
			</tr>

			<tr>
				<td>Macchiato</td>
				<td>£3.30</td>
			</tr>

			<tr>
				<td>Flat White</td>
				<td>£3.80</td>
			</tr>
			<tr>
				<td>Latte</td>
				<td>£3.90</td>
			</tr>
			<tr>
				<td>Cappuccino</td>
				<td>£3.90</td>
			</tr>
		</tbody>
		</table>`;

		menuText.innerHTML = menuTable;

		this.content.appendChild(menuContainer);
	}
}
