import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 20,

    "& a": {
      textDecoration: "none",
      color: "white",
    },
  },

  activePage: {
    textDecoration: "underline",

    "& a": {
      color: "orange",
    },
  },
}));
