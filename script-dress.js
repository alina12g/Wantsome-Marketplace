let carts = document.querySelectorAll(".add-cart");
let products = [
  {
    name: "Rochie",
    tag: "imag1",
    price: 100,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imag2",
    price: 90,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imag3",
    price: 90,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imag4",
    price: 100,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imag5",
    price: 100,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imag6",
    price: 80,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imag7",
    price: 100,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imag8",
    price: 80,
    inCart: 0,
  },
  {
    name: "Rochie ",
    tag: "imag9",
    price: 100,
    inCart: 0,
  },
  {
    name: "Rochie ",
    tag: "imag10",
    price: 120,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imag11",
    price: 70,
    inCart: 0,
  },
  {
    name: "Rochie ",
    tag: "imag12",
    price: 120,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imag13",
    price: 150,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imag14",
    price: 80,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imag15",
    price: 90,
    inCart: 0,
  },
  {
    name: "Fusta",
    tag: "imag16",
    price: 50,
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
      <img src="./img-dress/${item.tag}.jpeg"/>
      <span>${item.name}</span>
  </div>
  <div class="price">${item.price}</div>
  <div class"quantity">
      <ion-icon name="remove-circle-outline" class="decrease" ></ion-icon>
      <span>${item.inCart}</span>
      <ion-icon name="add-circle-outline"></ion-icon>
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

function manageQuantity() {
  let decreaseButtons = document.querySelectorAll(".decrease");
  let increaseButtons = document.querySelectorAll(".increase");
  let currentQuantity = 0;
  let currentProduct = "";
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  for (let i = 0; i < increaseButtons.length; i++) {
    decreaseButtons[i].addEventListener("click", () => {
      console.log(cartItems);
      currentQuantity =
        decreaseButtons[i].parentElement.querySelector("span").textContent;
      console.log(currentQuantity);
      currentProduct = decreaseButtons[
        i
      ].parentElement.previousElementSibling.previousElementSibling
        .querySelector("span")
        .textContent.toLocaleLowerCase()
        .replace(/ /g, "")
        .trim();
      console.log(currentProduct);

      if (cartItems[currentProduct].inCart > 1) {
        cartItems[currentProduct].inCart -= 1;
        cartNumbers(cartItems[currentProduct], "decrease");
        totalCost(cartItems[currentProduct], "decrease");
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        displayCart();
      }
    });

    increaseButtons[i].addEventListener("click", () => {
      console.log(cartItems);
      currentQuantity =
        increaseButtons[i].parentElement.querySelector("span").textContent;
      console.log(currentQuantity);
      currentProduct = increaseButtons[
        i
      ].parentElement.previousElementSibling.previousElementSibling
        .querySelector("span")
        .textContent.toLocaleLowerCase()
        .replace(/ /g, "")
        .trim();
      console.log(currentProduct);

      cartItems[currentProduct].inCart += 1;
      cartNumbers(cartItems[currentProduct]);
      totalCost(cartItems[currentProduct]);
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));
      displayCart();
    });
  }
}

function deleteButtons() {
  let deleteButtons = document.querySelectorAll(".product ion-icon");
  let productNumbers = localStorage.getItem("cartNumbers");
  let cartCost = localStorage.getItem("totalCost");
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productName;
  console.log(cartItems);

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", () => {
      productName = deleteButtons[i].parentElement.textContent
        .toLocaleLowerCase()
        .replace(/ /g, "")
        .trim();

      localStorage.setItem(
        "cartNumbers",
        productNumbers - cartItems[productName].inCart
      );
      localStorage.setItem(
        "totalCost",
        cartCost - cartItems[productName].price * cartItems[productName].inCart
      );

      delete cartItems[productName];
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));

      displayCart();
      onLoadCartNumbers();
    });
  }
}

onLoadCartNumbers();
displayCart();
