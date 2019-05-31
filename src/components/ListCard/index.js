import React from "react";
import { Wrapper, LeftWrapper, RightWrapper } from "./styled";
import PropTypes from "prop-types";

const ListCard = ({ noticia }) => (
  <Wrapper href={noticia.url}>
    <LeftWrapper style={{ backgroundImage: `url(${noticia.img_url})` }} />
    <RightWrapper className="right-side">
      <h3 className="title">{noticia.title}</h3>
      <small className="small">{`${new Date(
        noticia.date
      ).getHours()}:${new Date(noticia.date).getMinutes()} | ${
        noticia.source_name
      }`}</small>
    </RightWrapper>
  </Wrapper>
);

ListCard.propTypes = {
  noticia: PropTypes.shape({
    date: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    source_name: PropTypes.string.isRequired
  }).isRequired
};
export default ListCard;
