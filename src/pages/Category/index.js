import React from "react";

const Home = ({ match }) => {
  const categories = [
    "Política",
    "Internacionales",
    "Tecnología",
    "Espectáculos",
    "Deportes"
  ];
  const categoryIndex = match.params.categoryId - 1;
  return <h1>Estoy en el Category {categories[categoryIndex]}</h1>;
};

export default Home;
