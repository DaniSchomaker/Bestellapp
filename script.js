function renderMenuItems() {
    renderMainDishes();
    renderSideDishes();
}

function renderMainDishes() {
  let mainDishesRef = document.getElementById("main_dishes_details");
  mainDishesRef.innerHTML = "";

  for (let indexMainDishes = 0; indexMainDishes < mainDishes.length; indexMainDishes++) {
    mainDishesRef.innerHTML += getMainDishesTemplate(indexMainDishes);
  }
}

function renderSideDishes() {
  let sideDishesRef = document.getElementById("side_dishes_details");
  sideDishesRef.innerHTML = "";

  for (let indexSideDishes = 0; indexSideDishes < sideDishes.length; indexSideDishes++) {
    sideDishesRef.innerHTML += getSideDishesTemplate(indexSideDishes);
  }
}
