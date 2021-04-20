import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 200,
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottom: "8px solid white",
  },
  activeCard: {
    borderBottom: "8px solid #22289a",
    boxShadow: "0 0 1rem 0 #22289a",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 16px",
  },
  title: {
    padding: "0 16px",
    fontSize: "1.3rem",
    fontWeight: 400,
    lineHeight: "1.5rem",
    height: "4.5rem",
    overflow: "hidden",
  },
  cardActions: {
    padding: "0 16px 4px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  description: {
    fontSize: "14px",
    height: "5rem",
    overflow: "hidden",
  },
});
