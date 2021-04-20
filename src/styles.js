import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  backdrop: {
    zIndex: `${theme.zIndex.drawer + 1} !important`,
    color: "#fff",
  },
  loadingIcon: {
    "-ms-interpolation-mode": "bicubic",
    height: "100px",
    width: "100px",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
    marginBottom: "10px",
    flexWrap: "wrap",
  },
  logo: {
    "@media only screen and (min-width:1200px)": {
      width: "34%",
    },
    "@media only screen and (min-width:992px) and (max-width:1199px)": {
      width: "34%",
    },
    "@media only screen and (min-width: 768px) and (max-width: 991px)": {
      width: "33%",
    },
    "@media only screen and (min-width: 640px) and (max-width: 767px)": {
      width: "36%",
    },
    "@media only screen and (max-width: 639px)": {
      width: "50%",
    },
    height: "auto",
  },
  homeText: {
    display: "flex",
    alignItems: "center",
    color: "white",
    fontWeight: 700,
    "@media only screen and (min-width:1200px)": {
      fontSize: "2.3rem",
      margin: "2rem",
    },
    "@media only screen and (min-width:992px) and (max-width:1199px)": {
      fontSize: "1.9rem",
      margin: "1.6rem",
    },
    "@media only screen and (min-width: 768px) and (max-width: 991px)": {
      fontSize: "1.5rem",
      margin: "1.3rem",
    },
    "@media only screen and (min-width: 640px) and (max-width: 767px)": {
      fontSize: "1.2rem",
      margin: "1rem",
    },
    "@media only screen and (max-width: 639px)": {
      fontSize: "1.1rem",
      margin: "1rem",
    },
  },
}));
