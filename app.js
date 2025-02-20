// dommy array is here
const foodItems = [
  {
    img: "images/pizza1.jpg",
    name: "Cheese Pizza",
    category: "veg",
    price: 199,
  },
  {
    img: "images/pizza1.jpg",
    name: "Pepperoni Pizza",
    category: "nonveg",
    price: 249,
  },
  {
    img: "images/pizza1.jpg",
    name: "Veggie Burger",
    category: "veg",
    price: 149,
  },
  {
    img: "images/pizza1.jpg",
    name: "Chicken Burger",
    category: "nonveg",
    price: 179,
  },
  {
    img: "images/pizza1.jpg",
    name: "French Fries",
    category: "veg",
    price: 99,
  },
  {
    img: "images/pizza1.jpg",
    name: "Paneer Wrap",
    category: "veg",
    price: 129,
  },
  {
    img: "images/pizza1.jpg",
    name: "Chicken Wrap",
    category: "nonveg",
    price: 159,
  },
  {
    img: "images/pizza1.jpg",
    name: "Veg Sandwich",
    category: "veg",
    price: 119,
  },
  {
    img: "images/pizza1.jpg",
    name: "Grilled Chicken Sandwich",
    category: "nonveg",
    price: 169,
  },
  {
    img: "images/pizza1.jpg",
    name: "Garlic Bread",
    category: "veg",
    price: 99,
  },
  {
    img: "images/pizza1.jpg",
    name: "Choco Lava Cake",
    category: "veg",
    price: 139,
  },
  {
    img: "images/pizza1.jpg",
    name: "Pasta Alfredo",
    category: "veg",
    price: 189,
  },
  {
    img: "images/pizza1.jpg",
    name: "Pasta Arrabbiata",
    category: "veg",
    price: 179,
  },
  {
    img: "images/pizza1.jpg",
    name: "Chicken Nuggets",
    category: "nonveg",
    price: 149,
  },
  {
    img: "images/pizza1.jpg",
    name: "Fish Fingers",
    category: "nonveg",
    price: 199,
  },
  {
    img: "images/pizza1.jpg",
    name: "Mushroom Soup",
    category: "veg",
    price: 129,
  },
  {
    img: "images/pizza1.jpg",
    name: "Chicken Soup",
    category: "nonveg",
    price: 149,
  },
  {
    img: "images/pizza1.jpg",
    name: "Tandoori Paneer Pizza",
    category: "veg",
    price: 229,
  },
  {
    img: "images/pizza1.jpg",
    name: "BBQ Chicken Pizza",
    category: "nonveg",
    price: 259,
  },
  {
    img: "images/pizza1.jpg",
    name: "Schezwan Noodles",
    category: "veg",
    price: 159,
  },
  {
    img: "images/pizza1.jpg",
    name: "Egg Noodles",
    category: "nonveg",
    price: 179,
  },
  { img: "images/pizza1.jpg", name: "Veg Momos", category: "veg", price: 129 },
  {
    img: "images/pizza1.jpg",
    name: "Chicken Momos",
    category: "nonveg",
    price: 159,
  },
  {
    img: "images/pizza1.jpg",
    name: "Spring Rolls",
    category: "veg",
    price: 139,
  },
  {
    img: "images/pizza1.jpg",
    name: "Veg Fried Rice",
    category: "veg",
    price: 169,
  },
  {
    img: "images/pizza1.jpg",
    name: "Chicken Fried Rice",
    category: "nonveg",
    price: 189,
  },
  {
    img: "images/pizza1.jpg",
    name: "Dal Makhani",
    category: "veg",
    price: 179,
  },
  {
    img: "images/pizza1.jpg",
    name: "Butter Chicken",
    category: "nonveg",
    price: 249,
  },
  {
    img: "images/pizza1.jpg",
    name: "Paneer Butter Masala",
    category: "veg",
    price: 199,
  },
  {
    img: "images/pizza1.jpg",
    name: "Chicken Biryani",
    category: "nonveg",
    price: 239,
  },
  {
    img: "images/pizza1.jpg",
    name: "Veg Biryani",
    category: "veg",
    price: 209,
  },
  { img: "images/pizza1.jpg", name: "Pav Bhaji", category: "veg", price: 159 },
  {
    img: "images/pizza1.jpg",
    name: "Chole Bhature",
    category: "veg",
    price: 169,
  },
  {
    img: "images/pizza1.jpg",
    name: "Masala Dosa",
    category: "veg",
    price: 149,
  },
  {
    img: "images/pizza1.jpg",
    name: "Schezwan Dosa",
    category: "veg",
    price: 169,
  },
  {
    img: "images/pizza1.jpg",
    name: "Paneer Tikka",
    category: "veg",
    price: 189,
  },
  {
    img: "images/pizza1.jpg",
    name: "Tandoori Chicken",
    category: "nonveg",
    price: 259,
  },
  {
    img: "images/pizza1.jpg",
    name: "Shawarma Roll",
    category: "nonveg",
    price: 179,
  },
  {
    img: "images/pizza1.jpg",
    name: "Cheese Corn Sandwich",
    category: "veg",
    price: 139,
  },
  {
    img: "images/pizza1.jpg",
    name: "Hakka Noodles",
    category: "veg",
    price: 159,
  },
  {
    img: "images/pizza1.jpg",
    name: "Chicken Kebab",
    category: "nonveg",
    price: 229,
  },
  {
    img: "images/pizza1.jpg",
    name: "Mutton Kebab",
    category: "nonveg",
    price: 279,
  },
  {
    img: "images/pizza1.jpg",
    name: "Paneer Roll",
    category: "veg",
    price: 149,
  },
  {
    img: "images/pizza1.jpg",
    name: "Egg Roll",
    category: "nonveg",
    price: 169,
  },
  { img: "images/pizza1.jpg", name: "Cold Coffee", category: "veg", price: 99 },
  {
    img: "images/pizza1.jpg",
    name: "Chocolate Shake",
    category: "veg",
    price: 119,
  },
  {
    img: "images/pizza1.jpg",
    name: "Blueberry Cheesecake",
    category: "veg",
    price: 199,
  },
  { img: "images/pizza1.jpg", name: "Gulab Jamun", category: "veg", price: 99 },
];
// all function are here
function showmenu(a) {
  // alert("i am working");
  a.style.top = "3.5rem";
  showMenuContent = false;
}
function hidemenu(a) {
  a.style.top = "-30rem";
  showMenuContent = true;
}
function CartInfo(item) {
  alert(item.name);
}
const foodContainer = document.querySelector(".products-container");
// alert("i am working");
// Generate cards and insert into the container
foodContainer.innerHTML = foodItems
  .map((item) => {
    let productCat = document.querySelector(".product-cat");
    return `
    <div class="product-card">
        <div class="Pimg">
          <img src= ${item.img} alt="img" />
        </div>
        <div class="card-footer">
          <div class="product-details">
            <div class="product-name">${item.name}</div>
            <div class="product-cat ${
              item.category === "veg" ? "veg" : "nonVeg"
            }">${item.category}</div>
          </div>
          <div class="product-price">Rs. ${item.price}/-</div>
          <button class="addCartBtn" onclick = "CartInfo(item)">add to cart</button>
        </div>
      </div>
    `;
  })
  .join("");

// all global item selections are here
let menuBtn = document.querySelector(".menuBtn");
let showMenuContent = true;
// all eventListeners are here
menuBtn.addEventListener("click", () => {
  let menuContent = document.querySelector(".menu-fluid");
  // alert("menu btn clicked");
  if (showMenuContent) {
    showmenu(menuContent);
    // console.log("clicked");
    menuBtn.innerText = "Hide";
  } else {
    hidemenu(menuContent);
    menuBtn.innerText = "show";
  }
});
