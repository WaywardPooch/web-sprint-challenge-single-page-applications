import React from "react";

import "./PizzaForm.css";

const PizzaForm = () => {
  return (
    <section className="pizzaOrderSection">
      <div className="pizzaOrderTitle">
        <h2>Order Hot Pizza, Today!</h2>
        <p>Please fill out the order form, below, to purchase.</p>
      </div>
      <form>
        <div className="inputAreaLabel">
          <h2>Choice of Size</h2>
          <p>Required</p>
        </div>
        <label>
          Size
          <select name="pizzaSize" id="pizzaSizeDropdown">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
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
      </form>
    </section>
  );
};

export default PizzaForm;
