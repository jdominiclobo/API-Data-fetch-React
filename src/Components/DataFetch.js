import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonmock.hackerrank.com/api/articles")
      .then((response) => {
        setArticles(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="app">
      <h1>Article Authors</h1>
      <ul>
        {articles.map((article) => {
          return <li key={article.created_at}>{article.author}</li>;
        })}
      </ul>
    </div>
  );
};
export default DataFetching;
