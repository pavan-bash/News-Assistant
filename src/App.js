import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles";
import { scroller } from "react-scroll";
import wordsToNumbers from "words-to-numbers";
import Backdrop from "@material-ui/core/Backdrop";
import loading from "./loading.gif";

const alanKey =
  "06b944328a2b366151ba8ff29976e5ae2e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = "News Assistant";

    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        setOpen(false);
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prev) => prev + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText("Please try again");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening");
          }
        } else if (command === "loading") {
          setOpen((open) => !open);
        }
      },
    });
  }, []);

  useEffect(() => {
    scroller.scrollTo(activeArticle, {
      delay: 0,
      duration: 0,
      smooth: "easeInOutQuart",
    });
  }, [activeArticle]);

  return (
    <div className="app">
      {!newsArticles.length && (
        <div className={classes.logoContainer}>
          <div className={classes.homeText}>
            Hi, I am your voice based news assistant.
          </div>
          <img
            className={classes.logo}
            src="https://wallpaperaccess.com/full/1398372.jpg"
            alt="Home Page"
          />
        </div>
      )}
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      <Backdrop
        className={classes.backdrop}
        open={open}
        onClick={() => {
          setOpen(false);
        }}
      >
        <img className={classes.loadingIcon} src={loading} alt="loading" />
      </Backdrop>
    </div>
  );
}

export default App;
