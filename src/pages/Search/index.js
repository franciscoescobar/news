import React, { useEffect, useState } from "react";
import List from "../../components/List";
import Title from "../../components/Title";
import LoadingLine from "../../components/LoadingLine";
import { useDebounce } from "use-debounce";
const Search = ({ match }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const query = match.params.query;
  const [value] = useDebounce(query, 800);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.canillitapp.com/search/${value}`
        );
        const json = await response.json();
        const lastNews = json.slice(0, 21);
        setNews(lastNews);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
      return () => {};
    };
    fetchData();
  }, [value]);
  return (
    <>
      {loading ? <LoadingLine /> : null}

      {query ? (
        <Title title={`Resultados de: ${query}`} />
      ) : (
        <Title title={`No hay resultados de: ""`} />
      )}
      {error ? <h1>{error}</h1> : <List noticias={news} />}
    </>
  );
};

export default Search;
