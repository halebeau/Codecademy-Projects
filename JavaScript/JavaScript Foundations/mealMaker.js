const menu = {
  _meal: "",
  _price: 0,

  // Meal setter method
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    }
  },

  // Price setter method
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck;
    }
  },

  // TodaysSpecial getter method
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today’s Special is ${this._meal} for $${this._price.toFixed(2)}!`;
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};

menu.meal = "Pizza";
menu.price = 9.99;

console.log(menu.todaysSpecial);
