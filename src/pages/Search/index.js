import React from "react";

const Home = ({ match }) => {
  const query = match.params.query;
  return <h1>Estoy en el Search. Resultados de : {query}</h1>;
};
export default Home;
