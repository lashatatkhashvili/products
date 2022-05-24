import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import useStyle from "./Nav.style";

const Nav = () => {
  const classes = useStyle();
  const { pathname, search } = useLocation();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          className={`${pathname === "/create-product" && classes.activePage}`}
        >
          <Link to="/create-product">
            {search ? "Update Product" : "Create Product"}
          </Link>
        </Typography>
      </Toolbar>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          className={`${pathname === "/products" && classes.activePage}`}
        >
          <Link to="/products">Products</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Nav;
