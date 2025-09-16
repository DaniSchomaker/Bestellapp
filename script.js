let basket = []; //Besser Objekt? Key: Gericht-Index, Value: Anzahl


function renderMenuItems() {
    renderMainDishes();
    renderSideDishes();
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

function addMainDishToBasket(dishIndex) { // in einer Funktion zusammenfassen?
  let basketRef = document.getElementById("basket_items");
  basketRef.innerHTML += getBasketMainDishTemplate(dishIndex);
  // `<p>${mainDishes[dishIndex].name}</p>`;
}

function addSideDishToBasket(dishIndex) {
  let basket = document.getElementById("basket_items");
  basket.innerHTML += getBasketSideDishTemplate(dishIndex);
  // `<p>${sideDishes[dishIndex].name}</p>`;
}