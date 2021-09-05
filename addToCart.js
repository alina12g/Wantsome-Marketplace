let addToCart = document.querySelectorAll(".add-cart");
let products = [
  {
    name: "Rochie",
    tag: "imagine1",
    price: 100,
    inCart: 0,
  },
  {
    name: "Bluzita body",
    tag: "imagine2",
    price: 50,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imagine3",
    price: 150,
    inCart: 0,
  },
  {
    name: "Salopeta",
    tag: "imagine4",
    price: 90,
    inCart: 0,
  },
  {
    name: "Salopeta",
    tag: "imagine5",
    price: 80,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imagine6",
    price: 100,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imagine7",
    price: 160,
    inCart: 0,
  },
  {
    name: "Rochie body",
    tag: "imagine8",
    price: 120,
    inCart: 0,
  },
  {
    name: "Salopeta",
    tag: "imagine9",
    price: 210,
    inCart: 0,
  },
  {
    name: "Salopeta",
    tag: "imagine10",
    price: 125,
    inCart: 0,
  },
  {
    name: "Body",
    tag: "imagine11",
    price: 120,
    inCart: 0,
  },
  {
    name: "Salopeta",
    tag: "imagine12",
    price: 90,
    inCart: 0,
  },
  {
    name: "Body",
    tag: "imagine13",
    price: 100,
    inCart: 0,
  },
  {
    name: "Body",
    tag: "imagine14",
    price: 80,
    inCart: 0,
  },
  {
    name: "Rochita",
    tag: "imagine15",
    price: 80,
    inCart: 0,
  },
  //img accesorii
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
    tag: "imgAccesorii16",
    price: 70,
    inCart: 0,
  },
  //img clothing
  {
    name: "Rochie",
    tag: "imgClothing1",
    price: 100,
    inCart: 0,
  },
  {
    name: "Bluzita body",
    tag: "iimgClothing2",
    price: 50,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imgClothing3",
    price: 150,
    inCart: 0,
  },
  {
    name: "Salopeta",
    tag: "imgClothing4",
    price: 90,
    inCart: 0,
  },
  {
    name: "Salopeta",
    tag: "imgClothing5",
    price: 80,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imgClothing6",
    price: 100,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imgClothing7",
    price: 160,
    inCart: 0,
  },
  {
    name: "Rochie body",
    tag: "imgClothing8",
    price: 120,
    inCart: 0,
  },
  {
    name: "Salopeta",
    tag: "imgClothing9",
    price: 210,
    inCart: 0,
  },
  {
    name: "Salopeta",
    tag: "imgClothing10",
    price: 125,
    inCart: 0,
  },
  {
    name: "Body",
    tag: "imgClothing11",
    price: 120,
    inCart: 0,
  },
  {
    name: "Salopeta",
    tag: "imgClothing12",
    price: 90,
    inCart: 0,
  },
  {
    name: "Body",
    tag: "imgClothing13",
    price: 100,
    inCart: 0,
  },
  {
    name: "Body",
    tag: "imgClothing14",
    price: 80,
    inCart: 0,
  },
  {
    name: "Rochita",
    tag: "imgClothing15",
    price: 80,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imgDress1",
    price: 100,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imgDress2",
    price: 90,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imgDress3",
    price: 90,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imgDress4",
    price: 100,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imgDress5",
    price: 100,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imgDress6",
    price: 80,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imgDress7",
    price: 100,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imgDress8",
    price: 80,
    inCart: 0,
  },
  {
    name: "Rochie ",
    tag: "imgDress9",
    price: 100,
    inCart: 0,
  },
  {
    name: "Rochie ",
    tag: "imgDress10",
    price: 120,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imgDress11",
    price: 70,
    inCart: 0,
  },
  {
    name: "Rochie ",
    tag: "imgDress12",
    price: 120,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imgDress13",
    price: 150,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imgDress14",
    price: 80,
    inCart: 0,
  },
  {
    name: "Rochie",
    tag: "imgDress15",
    price: 90,
    inCart: 0,
  },
  {
    name: "Fusta",
    tag: "imgDress16",
    price: 50,
    inCart: 0,
  },
  {
    name: "Salopeta",
    tag: "imgSalopete1",
    price: 100,
    inCart: 0,
  },
  {
    name: "Salopeta",
    tag: "imgSalopete2",
    price: 70,
    inCart: 0,
  },
  {
    name: "Body",
    tag: "imgSalopete3",
    price: 150,
    inCart: 0,
  },
  {
    name: "Salopeta",
    tag: " imgSalopete4",
    price: 90,
    inCart: 0,
  },
  {
    name: "Salopeta",
    tag: "imgSalopete5",
    price: 80,
    inCart: 0,
  },
  {
    name: "Salopeta",
    tag: "imgSalopete6",
    price: 100,
    inCart: 0,
  },
  {
    name: "Salopeta",
    tag: "imgSalopete7",
    price: 160,
    inCart: 0,
  },
  {
    name: "Salopeta",
    tag: "imgSalopete8",
    price: 120,
    inCart: 0,
  },
  {
    name: "Body",
    tag: "imgSalopete9",
    price: 80,
    inCart: 0,
  },
  {
    name: "Salopete set",
    tag: "imgSalopete10",
    price: 125,
    inCart: 0,
  },
  {
    name: "Body",
    tag: "imgSalopete11",
    price: 120,
    inCart: 0,
  },
  {
    name: "Salopeta",
    tag: "imgSalopete12",
    price: 90,
    inCart: 0,
  },
  {
    name: "Body",
    tag: "imgSalopete13",
    price: 100,
    inCart: 0,
  },
  {
    name: "Body",
    tag: "imgSalopete14",
    price: 80,
    inCart: 0,
  },
  {
    name: "Body",
    tag: "imgSalopete15",
    price: 80,
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

function cartNumbers(product, action) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (action) {
    localStorage.setItem("cartNumbers", productNumbers - 1);
    document.querySelector(".cart span").textContent = productNumbers - 1;
    console.log("action running");
  } else if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    let currentProduct = product.tag;
    if (cartItems[currentProduct] == undefined) {
      cartItems = {
        ...cartItems,
        [currentProduct]: product,
      };
    }
    cartItems[currentProduct].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product, action) {
  let cart = localStorage.getItem("totalCost");

  if (action) {
    cart = parseInt(cart);

    localStorage.setItem("totalCost", cart - product.price);
  } else if (cart != null) {
    cart = parseInt(cart);
    localStorage.setItem("totalCost", cart + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let cart = localStorage.getItem("totalCost");
  cart = parseInt(cart);
  let productContainer = document.querySelector(".products");
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item, index) => {
      productContainer.innerHTML += `
      <div class="product">
        <ion-icon name="close-circle"></ion-icon> 
       <img src="./images/${item.tag}.jpeg"/>
      <span class="sm-hide">${item.name}</span>
    </div>
    <div class="price sm-hide">${item.price}</div>
    <div class="quantity">
                <ion-icon class="decrease" name="arrow-dropleft-circle"></ion-icon>
                    <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
            </div>
    <div class="total">
      ${item.inCart * item.price}
  </div> `;
    });
    productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">${cart}</h4>
            </div>`;

    deleteButtons();
    manageQuantity();
  }
}
/* function manageQuantity() {
  let decreaseButtons = document.querySelectorAll(".decrease");
  let increaseButtons = document.querySelectorAll(".increase");
  let currentQuantity = 0;
  let currentProduct = "";
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  for (let i = 0; i < increaseButtons.length; i++) {
    decreaseButtons[i].addEventListener("click", () => {
      currentQuantity =
        decreaseButtons[i].parentElement.querySelector("span").textContent;
      currentProduct = decreaseButtons[
        i
      ].parentElement.previousElementSibling.previousElementSibling
        .querySelector("span")
        .textContent.toLocaleLowerCase()
        .replace(/ /g, "")
        .trim();
      if (cartItems[currentProduct].inCart > 1) {
        cartItems[currentProduct].inCart -= 1;
        cartNumbers(cartItems[currentProduct], "decrease");
        totalCost(cartItems[currentProduct], "decrease");
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        displayCart();
      }
    });

    increaseButtons[i].addEventListener("click", () => {
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
      cartItems[currentProduct].inCart += 1;
      cartNumbers(cartItems[currentProduct]);
      totalCost(cartItems[currentProduct]);
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));
      displayCart();
    });
  }
} */
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
