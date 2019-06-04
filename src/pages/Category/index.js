import React, { useEffect, useState } from "react";
import List from "../../components/List";
import Title from "../../components/Title";
import LoadingLine from "../../components/LoadingLine";
const Category = ({ match }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const categories = [
    "Política",
    "Internacionales",
    "Tecnología",
    "Espectáculos",
    "Deportes"
  ];
  const categoryIndex = match.params.categoryId - 1;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.canillitapp.com/news/category/${match.params.categoryId}`
        );
        const json = await response.json();
        const lastNews = json.slice(0, 21);
        setNews(lastNews);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [match.params.categoryId]);
  return (
    <>
      {loading ? <LoadingLine /> : null}
      <Title title={categories[categoryIndex]} />
      {error ? <h1>{error}</h1> : <List noticias={news} />}
    </>
  );
};

export default Category;
