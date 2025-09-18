let basket = []; 

function init() {
  renderMainDishes();
  renderBasket();
}

function renderMainDishes() {
  let mainDishesRef = document.getElementById("main_dishes_details");
  mainDishesRef.innerHTML = "";

  for (let dishIndex = 0; dishIndex < mainDishes.length; dishIndex++) {
    mainDishesRef.innerHTML += getMainDishesTemplate(dishIndex);
  }
}

function addMainDishToBasket(dishIndex) {
  if (mainDishes[dishIndex].amount === 0) {
    basket.push(dishIndex); // Wenn das Gericht erstmalig in den Warenkorb kommt, wird es als letztes Element in das basket-Array gepusht (Reihenfolge)
  }
  mainDishes[dishIndex].amount++;
  renderBasket();
}

function decreaseMainDishFromBasket(dishIndex) {
  mainDishes[dishIndex].amount--;

  if (mainDishes[dishIndex].amount === 0) {
    // Das Gericht wird aus dem basket-Array entfernt, hierfür muss ich wissen an WELCHER STELLE das Gericht im basket-Array steht:
    let position = basket.indexOf(dishIndex); // indexOf(dishIndex) für: An welcher Stelle steht dieser dishIndex im basket-Array?
    if (position !== -1) {
      // position !== -1: Eintrag wurde gefunden (wenn der Eintrag nicht im basket-Array enthalten ist, wird -1 ausgegeben)
      basket.splice(position, 1); // lösche genau EIN Element des Arrays an der entsprechenden POSITION
    }
  }
  renderBasket();
}

function deleteMainDishFromBasket(dishIndex) {
  let position = basket.indexOf(dishIndex); 
  if (position !== -1) {
    basket.splice(position, 1); // Gericht wird aus dem basket-Array entfernt
  }
  mainDishes[dishIndex].amount = 0; 
  renderBasket();
}

function renderBasket() {
  let delivery = 5;
  let subtotal = 0;
  let basketRef = document.getElementById("basket_items");
  basketRef.innerHTML = "";

  if (basket.length === 0) {
    basketRef.innerHTML = `<p class="empty_basket">Pott leer, Gemüse her!</p>`; // Template?
    return;
  }

  for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
    let dishIndex = basket[basketIndex]; // Holt aus dem basket-Array an der Position basketIndex den gespeicherten Wert (Index eines Gerichts im mainDishes-Array) und speichert ihn in der Variable dishIndex

    basketRef.innerHTML += getBasketMainDishTemplate(dishIndex);
    subtotal += mainDishes[dishIndex].amount * mainDishes[dishIndex].price;

  }
  basketRef.innerHTML += getBasketTotalsTemplate(subtotal, delivery);
}
