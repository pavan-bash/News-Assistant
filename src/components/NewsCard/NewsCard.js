import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import classNames from "classnames";

function NewsCard({ article, i, activeArticle }) {
  const classes = useStyles();

  const [description, setDescrption] = useState("");
  const [publishedAt, setPublishedAt] = useState("");
  const [source, setSource] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [urlToImage, setUrlToImage] = useState("");

  useEffect(() => {
    setDescrption(article.description);
    setPublishedAt(article.publishedAt);
    setSource(article.source);
    setTitle(article.title);
    setUrl(article.url);
    setUrlToImage(
      article.hasOwnProperty("image") ? article.image : article.urlToImage
    );
  }, [article]);

  return (
    <Card
      className={classNames(
        classes.card,
        activeArticle === i ? classes.activeCard : null
      )}
      name={i}
    >
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className={classes.media}
          image={
            urlToImage ||
            "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
          }
        />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography className={classes.title} gutterBottom>
          {title}
        </Typography>
        <CardContent>
          <Typography
            className={classes.description}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            window.open(url, "_blank");
          }}
        >
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default NewsCard;
