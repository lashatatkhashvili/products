import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  createContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  createForm: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    width: "100%",
    maxWidth: 800,
  },

  textField: {
    width: "100%",
  },

  errorMessage: {
    width: "20px",
    height: "20px",
    minWidth: "20px",

    borderRadius: "50%",

    cursor: "default",

    "& .MuiButton-label": {
      width: "20px",
    },

    "&:hover": {
      backgroundColor: "#fff",
      boxShadow: "none",
    },
  },

  saveButton: {
    backgroundColor: "#5ebe84",
    color: "white",

    "&:hover": {
      backgroundColor: "#5ebe84",
    },
  },

  payBackContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
