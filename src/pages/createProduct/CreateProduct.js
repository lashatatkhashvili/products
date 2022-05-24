import React from "react";
import {
  Box,
  Button,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  Switch,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { useFormik } from "formik";
import uuid from "react-uuid";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productSchema } from "../../validation/productSchemas";
import { ErrorIcon } from "../../components/icons/Icons";
import {
  createProduct,
  updateProduct,
} from "../../reducers/products/products.actions";

import useStyle from "./CreateProduct.style";
import { selectProducts } from "../../reducers/products/products.selectors";

const CreateProduct = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { search } = useLocation();
  const products = useSelector(selectProducts);

  const id = search?.split("=")[1];

  const formValues = () => {
    const product = products.find((item) => item.id === id);

    let values = {
      title: "",
      price: "",
      description: "",
      payBack: false,
    };

    if (product) {
      values = {
        ...values,
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        payBack: product.payBack,
      };
    }

    return values;
  };

  const { values, setFieldValue, errors, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: formValues(),
      validationSchema: productSchema,
      onSubmit: (values, { resetForm }) => {
        if (!id) {
          dispatch(createProduct({ ...values, id: uuid() }));
          toast.success("Product Created Successfully");
          resetForm();
        } else {
          dispatch(updateProduct(values));
          toast.success("Product Updated Successfully");
          navigate("/products");
        }
      },
    });

  return (
    <Box className={classes.createContainer}>
      <form onSubmit={handleSubmit} className={classes.createForm}>
        <TextField
          fullWidth
          placeholder="Title"
          label="Title"
          type="text"
          name="title"
          variant="outlined"
          size="small"
          error={touched.title && errors.title}
          value={values.title}
          onChange={handleChange}
          className={classes.textField}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {touched?.title && errors?.title && (
                  <Tooltip title={errors.title} arrow>
                    <Button className={classes.errorMessage} disableRipple>
                      <ErrorIcon />
                    </Button>
                  </Tooltip>
                )}
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          placeholder="Price"
          label="Price"
          type="number"
          name="price"
          variant="outlined"
          size="small"
          error={touched.price && errors.price}
          value={values.price}
          onChange={handleChange}
          className={classes.textField}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {touched?.price && errors?.price && (
                  <Tooltip title={errors.price} arrow>
                    <Button className={classes.errorMessage} disableRipple>
                      <ErrorIcon />
                    </Button>
                  </Tooltip>
                )}
              </InputAdornment>
            ),
          }}
        />

        <Box className={classes.payBackContainer}>
          <InputLabel id="payBack">Pay Back</InputLabel>
          <FormControlLabel
            className={classes.switcher}
            control={
              <Switch
                size="medium"
                checked={values.payBack}
                name="Pay Back"
                onChange={() => {
                  setFieldValue("payBack", !values.payBack);
                }}
                color="primary"
                className={classes.switch}
              />
            }
            id="payBack"
            label={values.payBack ? "ON" : "OFF"}
            labelPlacement={"start"}
          />
        </Box>

        <TextField
          fullWidth
          placeholder="Description"
          label="Description"
          name="description"
          variant="outlined"
          size="small"
          error={touched.description && errors.description}
          value={values.description}
          onChange={handleChange}
          className={classes.textField}
          rows={2}
          multiline
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {touched?.description && errors?.description && (
                  <Tooltip title={errors.description} arrow>
                    <Button className={classes.errorMessage} disableRipple>
                      <ErrorIcon />
                    </Button>
                  </Tooltip>
                )}
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          fullWidth
          type="submit"
          size="large"
          className={classes.saveButton}
        >
          {id ? "Update" : "Save"}
        </Button>
      </form>
    </Box>
  );
};

export default CreateProduct;
