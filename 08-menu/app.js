const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    item: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    item: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    item: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    item: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    item: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    item: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    item: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    item: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    item: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    item: "dinner",
    price: 16.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

window.addEventListener("DOMContentLoaded", () => {
  displayMenu();
  displayFoods(menu);
});

let btnContainer = document.querySelector(".btn-container");
const displayMenu = () => {
  let categories = [];
  menu.filter((food) => {
    if (!categories.includes(food.item)) {
      categories.push(food.item);
    }
  });

  categories.map(item => {
    btnContainer.innerHTML += `<button class="filter-btn" data-type=${item}>${item}</button>`;
  });

  let filterBtns = btnContainer.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      let category = e.currentTarget.dataset.type;

      let menuCategory = menu.filter(food => {
        if (food.item === category) {
          return food;
        }
      });

      if (category === "all") {
        displayFoods(menu);
      } else {
        displayFoods(menuCategory);
      }
    });
  });
};

let sectionCenter = document.querySelector(".section-center");
const displayFoods = (menuItems) => {
  sectionCenter.innerHTML = "";
  menuItems.map((food) => {
    sectionCenter.innerHTML += `<article class="menu-item">
     <img src="${food.img}" alt="${food.title}" class="photo">
     <div class="item-info">
      <header>
        <h4>${food.title}</h4>
        <h4 class="price">$${food.price}</h4>
      </header>
      <p class="item-text">
        ${food.desc}
      </p>
     </div>
    </article>`
  });
};