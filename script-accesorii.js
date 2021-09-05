let carts = document.querySelectorAll(".add-cart");
let products = [
  {
    name: "Fundita",
    tag: "imgAccesorii1",
    price: 10,
    inCart: 0,
  },
  {
    name: "Fundite",
    tag: "imgAccesorii2",
    price: 20,
    inCart: 0,
  },
  {
    name: "Set acesorii",
    tag: "imgAccesorii3",
    price: 60,
    inCart: 0,
  },
  {
    name: "Set bentite",
    tag: "imgAccesorii4",
    price: 30,
    inCart: 0,
  },
  {
    name: "Set fundite",
    tag: "imgAccesorii5",
    price: 30,
    inCart: 0,
  },
  {
    name: "Bentita",
    tag: "imgAccesorii6",
    price: 20,
    inCart: 0,
  },
  {
    name: "Set accesorii",
    tag: "imgAccesorii7",
    price: 60,
    inCart: 0,
  },
  {
    name: "Fundite",
    tag: "imgAccesorii8",
    price: 20,
    inCart: 0,
  },
  {
    name: "Fundite",
    tag: "imgAccesorii9",
    price: 20,
    inCart: 0,
  },
  {
    name: "Bentita",
    tag: "imgAccesorii10",
    price: 25,
    inCart: 0,
  },
  {
    name: "Bentita",
    tag: "imgAccesorii11",
    price: 20,
    inCart: 0,
  },
  {
    name: "Fundite",
    tag: "imgAccesorii12",
    price: 60,
    inCart: 0,
  },
  {
    name: "Bentite",
    tag: "imgAccesorii13",
    price: 50,
    inCart: 0,
  },
  {
    name: "Set accesorii",
    tag: "imgAccesorii14",
    price: 80,
    inCart: 0,
  },
  {
    name: "Fundite",
    tag: "imgAccesorii15",
    price: 30,
    inCart: 0,
  },
  {
    name: "Set accesorii",
    tag: "mgAccesorii16",
    price: 70,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
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
      <img src="./img-accesorii/${item.tag}.jpeg"/>
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
  </div> `;
    });
    //check value not key of item
    productContainer.innerHTML += `<div class="basketTotalContainer">
      <h4 class="basketTotalTitle">Basket Total</h4>
      <h4 class="basketTotal">${cartCost}</h4>
  </div>`;
  }
}

onLoadCartNumbers();
displayCart();
