import * as yup from "yup";

const formSchema = yup.object().shape({
  customerName: yup
    .string()
    .trim()
    .required("your name is required")
    .min(2, "name must be at least 2 characters"),
  pizzaSize: yup
    .string()
    .oneOf(["small", "medium", "large"], "please select a size"),
  sauce: yup
    .string()
    .oneOf(
      ["Original Red", "Garlic Ranch", "BBQ Sauce", "Spinach Alfredo"],
      "please select a sauce"
    ),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  canadianBacon: yup.boolean(),
  spicyItalianSausage: yup.boolean(),
  grilledChicken: yup.boolean(),
  onions: yup.boolean(),
  greenPepper: yup.boolean(),
  dicedTomatoes: yup.boolean(),
  blackOlives: yup.boolean(),
  roastedGarlic: yup.boolean(),
  artichokeHearts: yup.boolean(),
  threeCheeses: yup.boolean(),
  pineapple: yup.boolean(),
  extraCheese: yup.boolean(),
  glutenFreeCrust: yup.boolean(),
  additionalInfo: yup.string().trim(),
});

export default formSchema;
