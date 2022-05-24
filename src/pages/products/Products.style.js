import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  container: {
    height: "90vh",
    overflowY: "visible",
    boxSizing: "border-box",
    padding: "20px 0",
  },
  head: {
    background: "white",
    position: "sticky",
    top: 0,
    marginBottom: 50,
    zIndex: 9999,
  },
  table: {
    minWidth: 650,
  },

  noProducts: {
    marginTop: 50,
    textAlign: "center",
  },
}));
