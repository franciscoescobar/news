import React from "react";
import ListCard from "../ListCard";
import { ListWrapper } from "./styled";
import PropTypes from "prop-types";

const List = ({ noticias }) => (
  <ListWrapper>
    {noticias.map(noticia => (
      <ListCard noticia={noticia} key={noticia.news_id} />
    ))}
  </ListWrapper>
);
List.propTypes = {
  noticias: PropTypes.arrayOf(
    PropTypes.shape({
      news_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired
    })
  ).isRequired
};
export default List;
