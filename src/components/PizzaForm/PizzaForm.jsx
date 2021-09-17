import React from "react";

import "./PizzaForm.css";

const PizzaForm = () => {
  return (
    <section className="pizzaOrderSection">
      {/* TITLE AREA */}
      <div className="pizzaOrderTitle">
        <h2>Order Hot Pizza, Today!</h2>
        <p>Please fill out the order form, below, to purchase.</p>
      </div>

      {/* FORM AREA */}
      <form>
        {/* PIZZA SIZE */}
        <div className="inputAreaLabel">
          <h2>Choice of Size</h2>
          <p>Required</p>
        </div>
        <label>
          Size:
          <select name="pizzaSize" id="pizzaSizeDropdown">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>

        {/* PIZZA SAUCE */}
        <div className="inputAreaLabel">
          <h2>Choice of Sauce</h2>
          <p>Required</p>
        </div>
        <label>
          <input type="radio" name="sauce" value="Original Red" />
          Original Red
        </label>
        <label>
          <input type="radio" name="sauce" value="Garlic Ranch" />
          Garlic Ranch
        </label>
        <label>
          <input type="radio" name="sauce" value="BBQ Sauce" />
          BBQ Sauce
        </label>
        <label>
          <input type="radio" name="sauce" value="Spinach Alfredo" />
          Spinach Alfredo
        </label>

        {/* PIZZA TOPPINGS */}
        <div className="inputAreaLabel">
          <h2>Add Toppings</h2>
          <p>Choose up to 10</p>
        </div>
        <label>
          <input type="checkbox" name="pepperoni" />
          Pepperoni
        </label>
        <label>
          <input type="checkbox" name="sausage" />
          Sausage
        </label>
        <label>
          <input type="checkbox" name="canadianBacon" />
          Canadian Bacon
        </label>
        <label>
          <input type="checkbox" name="spicyItalianSausage" />
          Spicy Italian Sausage
        </label>
        <label>
          <input type="checkbox" name="grilledChicken" />
          Grilled Chicken
        </label>
        <label>
          <input type="checkbox" name="onions" />
          Onions
        </label>
        <label>
          <input type="checkbox" name="greenPepper" />
          Green Pepper
        </label>
        <label>
          <input type="checkbox" name="dicedTomatoes" />
          Diced Tomatoes
        </label>
        <label>
          <input type="checkbox" name="blackOlives" />
          Black Olives
        </label>
        <label>
          <input type="checkbox" name="roastedGarlic" />
          Roasted Garlic
        </label>
        <label>
          <input type="checkbox" name="artichokeHearts" />
          Artichoke Hearts
        </label>
        <label>
          <input type="checkbox" name="threeCheeses" />
          Three Cheeses
        </label>
        <label>
          <input type="checkbox" name="pineapple" />
          Pineapple
        </label>
        <label>
          <input type="checkbox" name="extraCheese" />
          Extra Cheese
        </label>

        {/* PIZZA DOUGH SUBSTITUTE */}
        <div className="inputAreaLabel">
          <h2>Choice of Substitute</h2>
          <p>Choose up to 1</p>
        </div>
        <label>
          <input type="checkbox" name="extraCheese" />
          Gluten-Free Crust (+ $1.00)
        </label>

        {/* ADDITIONAL INSTRUCTIONS */}
        <div className="inputAreaLabel">
          <h2>Special Instructions</h2>
        </div>
        <label>
          Anything else?
          <input
            className="additionalInfo"
            type="text"
            placeholder="Write any additonal information, here."
          />
        </label>
      </form>
    </section>
  );
};

export default PizzaForm;
