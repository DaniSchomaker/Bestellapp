let basket = []; // raus?

function init() {
  renderMainDishes();
  renderSideDishes();
  renderBasket();
}

function renderMainDishes() {
  let mainDishesRef = document.getElementById("main_dishes_details");
  mainDishesRef.innerHTML = "";

  for (let dishIndex = 0; dishIndex < mainDishes.length; dishIndex++) {
    mainDishesRef.innerHTML += getMainDishesTemplate(dishIndex);
  }
}

function renderSideDishes() {
  let sideDishesRef = document.getElementById("side_dishes_details");
  sideDishesRef.innerHTML = "";

  for (let dishIndex = 0; dishIndex < sideDishes.length; dishIndex++) {
    sideDishesRef.innerHTML += getSideDishesTemplate(dishIndex);
  }
}

// function addMainDishToBasket(dishIndex) { // in einer Funktion zusammenfassen?
//   let basketRef = document.getElementById("basket_items");
//   basketRef.innerHTML += getBasketMainDishTemplate(dishIndex);
// }

function addMainDishToBasket(dishIndex) {
  mainDishes[dishIndex].amount++;
  console.log(mainDishes[dishIndex].amount); // später raus

  renderBasket();
}

function decreaseMainDishFromBasket(dishIndex) {
  mainDishes[dishIndex].amount--;
  console.log(mainDishes[dishIndex].amount); // später raus

  renderBasket();
}

function deleteMainDishFromBasket(dishIndex) {
  mainDishes[dishIndex].amount = 0;
  console.log(mainDishes[dishIndex].amount); // später raus

  renderBasket();
}

function renderBasket() {
  let basketRef = document.getElementById("basket_items");
  basketRef.innerHTML = "";

  let subtotal = 0;
  let delivery = 5;

  for (let dishIndex = 0; dishIndex < mainDishes.length; dishIndex++) {
    if (mainDishes[dishIndex].amount > 0) {
      basketRef.innerHTML += getBasketMainDishTemplate(dishIndex);
      subtotal += mainDishes[dishIndex].amount * mainDishes[dishIndex].price;
    }
  }

  if (subtotal === 0) {
    basketRef.innerHTML = `<p class="empty_basket">Pott leer, Gemüse her!</p>`;
    return;
  }

  basketRef.innerHTML += getBasketTotalsTemplate(subtotal, delivery);
}



function addSideDishToBasket(dishIndex) {
  let basket = document.getElementById("basket_items");
  basket.innerHTML += getBasketSideDishTemplate(dishIndex);
}
