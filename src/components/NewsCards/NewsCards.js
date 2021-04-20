import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyles from "./styles";
import "./NewsCards.css";

function NewsCards({ articles, activeArticle }) {
  const classes = useStyles();

  const infoCards = [
    {
      index: 1,
      color: "#00838f",
      title: "Latest News",
      text: "Give me the latest news",
    },
    {
      index: 2,
      color: "#1565c0",
      title: "News by Categories",
      info: "Business, Entertainment, Health, Science, Sports, Technology",
      text: "Give me the latest Technology news",
    },
    {
      index: 3,
      color: "#4527a0",
      title: "News by Terms",
      info: "Bitcoin, PlayStation 5, Smartphones, Joe Biden...",
      text: "What's up with PlayStation 5",
    },
    {
      index: 4,
      color: "#283593",
      title: "News by Sources",
      info: "CNN, BBC, Fox, Google",
      text: "Give me the news from CNN",
    },
  ];

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              className={classes.infoCard}
              key={infoCard.index}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant="h5">{infoCard.title}</Typography>
                {infoCard.info && (
                  <Typography style={{ fontSize: "17px" }}>
                    <strong>{infoCard.title.split(" ")[2]}:</strong>
                    <br />
                    {infoCard.info}
                  </Typography>
                )}
                <Typography style={{ fontSize: "17px" }}>
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <React.Fragment>
      <div className="commandContainer">
        <div className="commandCard">
          <p className="commandTitle">Try Saying: </p>
          <p className="command">Open article number [4]</p>
        </div>
        <div className="commandCard">
          <p className="commandTitle">Try Saying: </p>
          <p className="command">Go back</p>
        </div>
      </div>
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {articles.map((article, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              style={{ display: "flex" }}
              key={i + 1}
            >
              <NewsCard article={article} activeArticle={activeArticle} i={i} />
            </Grid>
          ))}
        </Grid>
      </Grow>
    </React.Fragment>
  );
}

export default NewsCards;
