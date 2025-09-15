function renderMenuItems() {
    renderMainDishes();
}

function renderMainDishes() {
  let mainDishesRef = document.getElementById("main_dishes_details");
  mainDishesRef.innerHTML = "";

  for (let indexMainDishes = 0; indexMainDishes < mainDishes.length; indexMainDishes++) {
    mainDishesRef.innerHTML += getMainDishesTemplate(indexMainDishes);
  }
}
