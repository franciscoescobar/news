import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const StyledTitle = styled.h1`
  margin: 20px;
`;
const Title = ({ title }) => <StyledTitle>{title}</StyledTitle>;
Title.propTypes = {
  title: PropTypes.string.isRequired
};
export default Title;
