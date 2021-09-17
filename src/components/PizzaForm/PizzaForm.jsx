// Import libraries
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
// Import styles
import "./PizzaForm.css";
// Import data
import initialFormData from "../../data/initialFormData.json";
import formSchema from "../../data/formSchema.js";

const PizzaForm = (props) => {
  // ========== STATES
  const [orders, setOrders] = useState(initialFormData["orders"]);
  const [submitDisabled, setSubmitDisabled] = useState(
    initialFormData["submitDisabled"]
  );
  const [formValues, setFormValues] = useState(initialFormData["values"]);
  const [formErrors, setFormErrors] = useState(initialFormData["errors"]);

  // ========== HELPERS
  const getOrders = () => {
    axios
      .get("https://reqres.in/api/orders")
      .then((response) => {
        // Update the list of orders from the API
        setOrders(response.data);
      })
      .catch((error) => {
        // If orders cannot be updated, log the error
        console.error("[getOrders() CATCH]", error);
      });
  };
  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((response) => {
        // Post the new order to the list of orders
        setOrders([response.data, ...orders]);
        // Wipe the inputs clean on submit
        setFormValues(initialFormData["values"]);
      })
      .catch((error) => {
        // If the order cannot be submitted, log the error
        console.error("[postNewOrder() CATCH]", error);
        // Wipe the inputs clean on submit
        setFormValues(initialFormData["values"]);
      });
  };
  const validateInput = (inputName, inputValue) => {
    yup
      // Find the expected value
      .reach(formSchema, inputName)
      // Compare the input value to the expected value
      .validate(inputValue)
      // Display no error if inputs are good
      .then(() => {
        setFormErrors({ ...formErrors, [inputName]: "" });
      })
      // Log any input errors if present
      .catch((error) => {
        setFormErrors({ ...formErrors, [inputName]: error.errors[0] });
      });
  };
  const updateInput = (inputName, inputValue) => {
    // Check if the input is valid
    validateInput(inputName, inputValue);
    // Update the form
    setFormValues({ ...formValues, [inputName]: inputValue });
  };
  const submitForm = () => {
    const newOrder = {
      customerName: formValues["customerName"].trim(),
      pizzaSize: formValues["pizzaSize"],
      sauce: formValues["sauce"],
      pepperoni: formValues["pepperoni"],
      sausage: formValues["sausage"],
      canadianBacon: formValues["canadianBacon"],
      spicyItalianSausage: formValues["spicyItalianSausage"],
      grilledChicken: formValues["grilledChicken"],
      onions: formValues["onions"],
      greenPepper: formValues["greenPepper"],
      dicedTomatoes: formValues["dicedTomatoes"],
      blackOlives: formValues["blackOlives"],
      roastedGarlic: formValues["roastedGarlic"],
      artichokeHearts: formValues["artichokeHearts"],
      threeCheeses: formValues["threeCheeses"],
      pineapple: formValues["pineapple"],
      extraCheese: formValues["extraCheese"],
      glutenFreeCrust: formValues["glutenFreeCrust"],
      additionalInfo: formValues["additionalInfo"],
    };
    postNewOrder(newOrder);
  };

  // ========== EVENT HANDLERS
  const onSubmit = (event) => {
    // Prevent page refresh
    event.preventDefault();
    submitForm();
    getOrders();
    console.log(`FORM SUBMITTED! Current orders: ${orders}`);
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

  // ========== SIDE EFFECTS

  // After first load...
  useEffect(() => {
    // ...get the list of orders from the API.
    getOrders();
  }, []);

  // When the user updates form inputs...
  useEffect(() => {
    formSchema
      // ...check if their form is complete...
      .isValid(formValues)
      // ... and if it is, enable the submit button.
      .then((valid) => setSubmitDisabled(!valid));
  }, [formValues]);

  // ========== COMPONENT MARKUP
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
          <p>Required</p>
        </div>
        <p className="inputError">{formErrors.customerName}</p>
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
        <p className="inputError">{formErrors.pizzaSize}</p>
        <label>
          Size:
          <select name="pizzaSize" id="size-dropdown" onChange={onChange}>
            <option value="unselected">Please select a size</option>
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
        <p className="inputError">{formErrors.sauce}</p>
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
