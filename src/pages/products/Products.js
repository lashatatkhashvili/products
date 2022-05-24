import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Button,
  Box,
  Typography,
} from "@material-ui/core";
import { selectProducts } from "../../reducers/products/products.selectors";
import { deleteProduct } from "../../reducers/products/products.actions";

import useStyle from "./Products.style";

const Products = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(selectProducts);

  const handleRemove = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleUpdate = (id) => {
    navigate(`/create-product?id=${id}`);
  };

  if (!products?.length)
    return (
      <Typography className={classes.noProducts}>No Products Found</Typography>
    );
  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Pay Back</TableCell>
            <TableCell>Description</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.map((product) => (
            <TableRow key={product.title}>
              <TableCell component="th" scope="row" width="20%">
                {product.title}
              </TableCell>
              <TableCell component="th" scope="row" width="20%">
                {product.price}
              </TableCell>
              <TableCell component="th" scope="row" width="20%">
                {product.payBack ? "Yes" : "No"}
              </TableCell>
              <TableCell component="th" scope="row" width="30%">
                {product.description}
              </TableCell>

              <TableCell align="center" width="10%">
                <Box display="flex">
                  <Button onClick={() => handleUpdate(product.id)}>Edit</Button>
                  <Button onClick={() => handleRemove(product.id)}>X</Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Products;
