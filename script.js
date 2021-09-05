let addToCart = document.querySelectorAll(".add-cart");
let products = [
  {
    name: "Fundita",
    tag: "img1",
    price: 30,
    inCart: 0,
  },
  {
    name: "Fundita",
    tag: "img2",
    price: 30,
    inCart: 0,
  },
  {
    name: "Set accesorii",
    tag: "img3",
    price: 230,
    inCart: 0,
  },
  {
    name: "Bentite",
    tag: "img4",
    price: 55,
    inCart: 0,
  },
  {
    name: "Set fundite",
    tag: "img5",
    price: 60,
    inCart: 0,
  },
  {
    name: "Bentita",
    tag: "img6",
    price: 40,
    inCart: 0,
  },
  {
    name: "Set accesorii",
    tag: "img7",
    price: 120,
    inCart: 0,
  },
  {
    name: "Fundite",
    tag: "img8",
    price: 40,
    inCart: 0,
  },
  {
    name: "Fundite",
    tag: "img9",
    price: 40,
    inCart: 0,
  },
  {
    name: "Bentita",
    tag: "img10",
    price: 40,
    inCart: 0,
  },
  {
    name: "Bentita",
    tag: "img11",
    price: 40,
    inCart: 0,
  },
  {
    name: "Set fundite",
    tag: "img12",
    price: 100,
    inCart: 0,
  },
  {
    name: "Set bentite",
    tag: "img13",
    price: 100,
    inCart: 0,
  },
  {
    name: "Set papucei asortati cu bentite",
    tag: "img14",
    price: 100,
    inCart: 0,
  },
  {
    name: "Set clame cu fundite",
    tag: "img15",
    price: 60,
    inCart: 0,
  },
  {
    name: "Set papucei asortati cu bentite",
    tag: "img16",
    price: 55,
    inCart: 0,
  },
];

for (let i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers); //converts string to number

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      }; //whatever was in the cart before, add new product(s)
    }
    cartItems[product.tag].inCart += 1; //increase the product in cart by 1
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  //console.log("The product price is ", produce.price);
  let cartCost = localStorage.getItem("totalCost");

  console.log("My cartCost is ", cartCost);
  console.log(typeof cartCost);

  if (cartCost != null) {
    cartCost = parseInt(cartCost); //from string to number
    localStorage.setItem("totalCost", cartCost + product.price); //whatever was before + new price we are clicking on
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems); //from string to obj
  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem("totalCost");

  console.log(cartItems);
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
        <div class="product">
            <ion-icon name="close-circle"></ion-icon> 
            <img src="./images/${item.tag}.jpeg"/>
            <span>${item.name}</span>
        </div>
        <div class="price">${item.price}</div>
        <div class"quantity">
            <ion-icon class="decrease" name="arrow-dropleft-circle></ion-icon>
            <span>${item.inCart}</span>
            <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>
        </div>
        <div class="total">
            ${item.inCart * item.price}
        </div>
        `;
    });
    //check value not key of item
    productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">Basket Total</h4>
            <h4 class="basketTotal">${cartCost}</h4>
        </div>
`;
  }
}
onLoadCartNumbers();
displayCart();
