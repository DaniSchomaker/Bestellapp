////// Menu //////

function getMainDishesTemplate(dishIndex) {
  return `
    <article class="single_dish">  
      <div>  
        <h3>${mainDishes[dishIndex].name}</h3>
        <p>${mainDishes[dishIndex].description}</p>
        <p class="price">${mainDishes[dishIndex].price.toFixed(2)} €</p>
      </div>
      <button class="add_to_basket_button" onclick="addMainDishToBasket(${dishIndex})"> 
        <img src="./assets/icons/plus_orange.png" alt="Button: Gericht zum Warenkorb hinzufügen">
      </button>  
    </article>
  `;
}

function getSideDishesTemplate(dishIndex) {
  return `
    <article class="single_dish">  
      <div>  
        <h3>${sideDishes[dishIndex].name}</h3>
        <p>${sideDishes[dishIndex].description}</p>
        <p class="price">${sideDishes[dishIndex].price.toFixed(2)} €</p>
      </div>
      <button class="add_to_basket_button" onclick="addSideDishToBasket(${dishIndex})"> 
        <img src="./assets/icons/plus_orange.png" alt="Button: Beilage zum Warenkorb hinzufügen">
      </button>  
    </article>
  `;
}

////// Basket //////

function getBasketMainDishTemplate(dishIndex) {
  return `
    <h3>${mainDishes[dishIndex].name}</h3>
    <div class="calc_dish_price">
      <button onclick="decreaseMainDishFromBasket(${dishIndex})">
        <img src="./assets/icons/minus_orange.png" alt="Button: Anzahl um eins verringern">
      </button>  
      <p> ${mainDishes[dishIndex].amount}x </p>
      <button onclick="addMainDishToBasket(${dishIndex})">
        <img src="./assets/icons/plus_orange.png" alt="Button: Anzahl um eins erhöhen">
      </button>   
      <p> ${(mainDishes[dishIndex].amount * mainDishes[dishIndex].price).toFixed(2)} € </p>
      <button onclick="deleteMainDishFromBasket(${dishIndex})">
        <img src="./assets/icons/trashcan_orange_pixabay.png" alt="Button: Gericht löschen">
      </button>
    </div>    

    `;
  

}

function getBasketTotalsTemplate(subtotal, delivery) {
  return `
    <div class="calc_total_price">
      <div>
        <p>Zwischensumme:</p>
        <p>Lieferkosten:</p>
        <p class="total_price">Gesamt:</p>
      </div> 
      <div class="calc_total_price_Euro">
        <p>${subtotal.toFixed(2)} €</p>
        <p>5.00 €</p>
        <p class="total_price">${(subtotal + delivery).toFixed(2)} €</p>
      </div> 
    </div>  
    
    
  `;
}




function getBasketSideDishTemplate(dishIndex) {
  return `
    <h3>${sideDishes[dishIndex].name}</h3>
        <div class="calc_dish_price">
      <button>
        <img src="./assets/icons/minus_orange.png" alt="Button: Anzahl um eins verringern">
      </button>  
      <p> 1x </p>
      <img src="./assets/icons/plus_orange.png" alt="Button: Anzahl um eins erhöhen">
      <p> 11,90 € </p>
      <img src="./assets/icons/trashcan_orange_pixabay.png" alt="Button: Gericht löschen">
    </div>    
  `;
}