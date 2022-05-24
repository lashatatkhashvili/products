import * as Yup from "yup";

export const productSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
  price: Yup.number().min(5).required(),
});
