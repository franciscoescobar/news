import React from "react";
import { Wrapper, LeftWrapper, RightWrapper } from "./styled";
const NewList = () => (
  <Wrapper>
    <LeftWrapper />
    <RightWrapper className="right-side">
      <h3 className="title">Titulo</h3>
      <small className="small">15:25 | Infobae</small>
    </RightWrapper>
  </Wrapper>
);

export default NewList;
