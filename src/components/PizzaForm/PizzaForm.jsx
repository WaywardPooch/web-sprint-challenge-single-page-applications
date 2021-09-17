// Import libraries
import React, { useState } from "react";
// Import styles
import "./PizzaForm.css";
// Import data
import initialFormErrors from "../../data/initialFormErrors.json";

const PizzaForm = (props) => {
  // ========== VARIABLES
  const initialSubmitDisabled = true;
  const initialOrders = [];

  // ========== STATES
  const [orders, setOrders] = useState(initialOrders);
  const [submitDisabled, setSubmitDisabled] = useState(initialSubmitDisabled);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  // ========== HELPERS
  const onSubmit = (event) => {
    // Prevent page refresh
    event.preventDefault();
    submitForm();
  };

  const onChange = (event) => {
    // Get input attributes
    const { name, value, checked, type } = event.target;
    // Determine if it's a checkbox or not
    let newValue = null;
    if (type === "checkbox") {
      newValue = checked;
    } else {
      newValue = value;
    }
    // Update the input
    updateInput(name, newValue);
  };

  return (
    <section className="pizzaOrderSection">
      {/* TITLE AREA */}
      <div className="pizzaOrderTitle">
        <h2>Order Hot Pizza, Today!</h2>
        <p>Please fill out the order form, below, to purchase.</p>
      </div>

      {/* FORM AREA */}
      <form id="pizza-form" onSubmit={onSubmit}>
        {/* CUSTOMER NAME */}
        <div className="inputAreaLabel">
          <h2>Customer Name</h2>
        </div>
        <label>
          Name:
          <input
            id="name-input"
            type="text"
            name="customerName"
            placeholder="First Last"
            onChange={onChange}
          />
        </label>

        {/* PIZZA SIZE */}
        <div className="inputAreaLabel">
          <h2>Choice of Size</h2>
          <p>Required</p>
        </div>
        <label>
          Size:
          <select name="pizzaSize" id="size-dropdown">
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
          <input
            type="radio"
            name="sauce"
            value="Original Red"
            onChange={onChange}
          />
          Original Red
        </label>
        <label>
          <input
            type="radio"
            name="sauce"
            value="Garlic Ranch"
            onChange={onChange}
          />
          Garlic Ranch
        </label>
        <label>
          <input
            type="radio"
            name="sauce"
            value="BBQ Sauce"
            onChange={onChange}
          />
          BBQ Sauce
        </label>
        <label>
          <input
            type="radio"
            name="sauce"
            value="Spinach Alfredo"
            onChange={onChange}
          />
          Spinach Alfredo
        </label>

        {/* PIZZA TOPPINGS */}
        <div className="inputAreaLabel">
          <h2>Add Toppings</h2>
          <p>Choose up to 10</p>
        </div>
        <label>
          <input type="checkbox" name="pepperoni" onChange={onChange} />
          Pepperoni
        </label>
        <label>
          <input type="checkbox" name="sausage" onChange={onChange} />
          Sausage
        </label>
        <label>
          <input type="checkbox" name="canadianBacon" onChange={onChange} />
          Canadian Bacon
        </label>
        <label>
          <input
            type="checkbox"
            name="spicyItalianSausage"
            onChange={onChange}
          />
          Spicy Italian Sausage
        </label>
        <label>
          <input type="checkbox" name="grilledChicken" onChange={onChange} />
          Grilled Chicken
        </label>
        <label>
          <input type="checkbox" name="onions" onChange={onChange} />
          Onions
        </label>
        <label>
          <input type="checkbox" name="greenPepper" onChange={onChange} />
          Green Pepper
        </label>
        <label>
          <input type="checkbox" name="dicedTomatoes" onChange={onChange} />
          Diced Tomatoes
        </label>
        <label>
          <input type="checkbox" name="blackOlives" onChange={onChange} />
          Black Olives
        </label>
        <label>
          <input type="checkbox" name="roastedGarlic" onChange={onChange} />
          Roasted Garlic
        </label>
        <label>
          <input type="checkbox" name="artichokeHearts" onChange={onChange} />
          Artichoke Hearts
        </label>
        <label>
          <input type="checkbox" name="threeCheeses" onChange={onChange} />
          Three Cheeses
        </label>
        <label>
          <input type="checkbox" name="pineapple" onChange={onChange} />
          Pineapple
        </label>
        <label>
          <input type="checkbox" name="extraCheese" onChange={onChange} />
          Extra Cheese
        </label>

        {/* PIZZA DOUGH SUBSTITUTE */}
        <div className="inputAreaLabel">
          <h2>Choice of Substitute</h2>
          <p>Choose up to 1</p>
        </div>
        <label>
          <input type="checkbox" name="glutenFreeCrust" onChange={onChange} />
          Gluten-Free Crust
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
            name="additionalInfo"
            placeholder="Write any additonal information, here."
            id="special-text"
            onChange={onChange}
          />
        </label>
        <button id="order-button" disabled={submitDisabled}>
          Place Order
        </button>
      </form>
    </section>
  );
};

export default PizzaForm;
