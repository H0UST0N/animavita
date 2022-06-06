import styled from "styled-components";

export const Content = styled.div`
  overflow: hidden;
  background-color: #fca311;
  padding: 10px 15px;
  color: #14213d;
  font-size: larger;
  font-weight: bold;
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  background: #ffffff;
  border-radius: 30px;
  border: 2px solid #ffffff;
  padding: 10px;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #666360;

    &::placeholder {
      color: #666360;
    }
  }
`;