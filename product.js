const modalContainer = document.createElement("div");

modalContainer.innerHTML = `
  <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="productModalLabel">Product Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" id="modalBody">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
`;

document.body.appendChild(modalContainer);

const firstRowPlayers = [
  {
    firstName: "Wooden",

    lastName: "Boat",

    price: 25,

    photos: ["imgs/boat1.jpg", "imgs/boat2.jpg", "imgs/boat1.jpg"],
  },

  {
    firstName: "Wooden",

    lastName: "Plane",

    price: 60,

    photos: ["imgs/plane1.jpg", "imgs/plane2.jpg", "imgs/plane3.jpg"],
  },

  {
    firstName: "Wooden",

    lastName: "Train",

    price: 25,

    photos: ["imgs/train2.jpg", "imgs/train1.jpg", "imgs/train4.jpg"],
  },
];

// Second row of products

const secondRowPlayers = [
  {
    firstName: "Wooden",

    lastName: "Blocks",

    price: 40,

    photos: ["imgs/block1.jpg", "imgs/block2.jpg"],
  },

  {
    firstName: "Wooden",

    lastName: "Car",

    price: 45,

    photos: ["imgs/car1.jpg", "imgs/car2.jpg", "imgs/car3.jpg"],
  },
];

function renderPlayers(list, rowElement, indexOffset) {
  for (let i = 0; i < list.length; i++) {
    const p = list[i];

    const globalIndex = indexOffset + i;
    const card = document.createElement("div");

    card.className = "card";

    const photo = p.photos[0];

    card.innerHTML = `

      <img src="${photo}" alt="${p.firstName} ${p.lastName}" />

      <div class="card-title">${p.firstName} ${p.lastName}</div>

      <div class="card-body">

        <p>Price: $<span id="price-${globalIndex}">${p.price}</span></p>
        <label for="qty-${globalIndex}">Quantity:</label><br />

        <select id="qty-${globalIndex}" style="width: 60%; margin: 0 auto;">

          <option value="1" selected>1</option>

          <option value="2">2</option>

          <option value="3">3</option>

          <option value="4">4</option>

          <option value="5">5</option>

        </select>

        <button class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#productModal" id="more-info-${globalIndex}">

          More Info

        </button>

      </div>

    `;

    rowElement.appendChild(card);

    const qtySelect = document.getElementById(`qty-${globalIndex}`);

    const priceSpan = document.getElementById(`price-${globalIndex}`);

    qtySelect.onchange = function () {
      priceSpan.textContent = p.price * qtySelect.value;
    };

    const moreInfoButton = document.getElementById(`more-info-${globalIndex}`);

    moreInfoButton.onclick = function () {
      const modalBody = document.getElementById("modalBody");

      modalBody.innerHTML = `

        <h6>${p.firstName} ${p.lastName}</h6>

        <p><strong>Price:</strong> $${p.price}</p>

        <p><strong>Photos:</strong></p>

        <div>

          ${p.photos

            .map(
              (photo, index) =>
                `<img src="${photo}" alt="Photo ${
                  index + 1
                }" style="width: 50px; margin: 5px;">`
            )

            .join("")}

        </div>

        <p>This is a beautiful handcrafted wooden ${
          p.lastName
        }. Perfect for kids and collectors alike!</p>

      `;
    };
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const row1 = document.getElementById("row1");
  const row2 = document.getElementById("row2");
  renderPlayers(firstRowPlayers, row1, 0);
  renderPlayers(secondRowPlayers, row2, firstRowPlayers.length);
});
