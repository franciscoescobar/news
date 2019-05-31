import styled from "styled-components";
export const Wrapper = styled.a`
  text-decoration: none;
  color: #000000;
  display: flex;
  width: 60%;
  height: 125px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  margin-bottom: 20px;
`;
export const LeftWrapper = styled.div`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  flex-basis: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
export const RightWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  flex: 1 1 600px;
  .title {
    font-size: 20px;
    font-weight: 300;
  }
  .small {
  }
`;
