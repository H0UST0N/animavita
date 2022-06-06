import styled from "styled-components";

export const ButtonSC = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  padding: 20px 28px;
  height: 60px;
  outline: none;
  border: none;

  background: #fca311;
  border-radius: 4px;

  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  text-align: center;
  letter-spacing: 0.8px;
  text-transform: uppercase;

  color: #FFFFFF;

  &:hover {
    background-color: #14213d;
  }
`;
