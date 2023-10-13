import React, { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import "./jokesStyles.scss";

const pageTitle= "Jokes for Days: Endless Entertainment";
const errorMessage = "There is an Error!!! Please refresh the page.";

export default function Jokes() {
  const [page, setPage] = useState(1);
  const [jokeList, setJokeList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMoreJokes, setHasMoreJokes] = useState(false);

  const loadMoreJokes = () => {
    setPage(page + 1);
  };

  const getBtnText = () => {
    if (isLoading) {
      return "Wait I'm Loading Jokes for you";
    } else if (!hasMoreJokes) {
      return "No More Jokes there !!!";
    }
    return "Load More Jokes";
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://icanhazdadjoke.com/search?page=${page}`, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setIsLoading(false);
        if (response && response.results) {
          if (response.results.length > 0) {
            setJokeList([...jokeList, ...response.results]);
            setHasMoreJokes(true);
          } else {
            setHasMoreJokes(false);
          }
        }
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
        window.scroll(0, 0);
      });
  }, [page]);

  return (
    <div className="jokes_page">
      <h2 className="page_heading">{pageTitle}</h2>

      {isError ? (
        <p>{errorMessage}</p>
      ) : (
        <>
          <ul>
            {jokeList &&
              jokeList.map((element) => (
                <li key={element.id}>{element.joke}</li>
              ))}
          </ul>

          <button
            disabled={isLoading || !hasMoreJokes}
            className="load_more"
            onClick={loadMoreJokes}
          >
            {getBtnText()}
          </button>
        </>
      )}
      <Footer />
    </div>
  );
}
