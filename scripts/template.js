function getMainDishesTemplate(indexMainDishes) {
  return `
    <article class="single_dish">  
      <h3>${mainDishes[indexMainDishes].name}</h3>
      <p>${mainDishes[indexMainDishes].description}</p>
      <p class="price">${mainDishes[indexMainDishes].price.toFixed(2)} €</p>
    </article>
    `;
}

function getSideDishesTemplate(indexSideDishes) {
  return `
    <article class="single_dish">  
      <h3>${sideDishes[indexSideDishes].name}</h3>
      <p>${sideDishes[indexSideDishes].description}</p>
      <p class="price">${sideDishes[indexSideDishes].price.toFixed(2)} €</p>
    </article>
    `;
}