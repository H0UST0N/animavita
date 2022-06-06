import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  margin-bottom: 4rem;
  justify-content: center;
  text-align: center;
  
  @media(min-width: 300px) {
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export const Content = styled.div`
  min-height: 90vh;
  width: 90vw;
  margin: 2rem auto;
  max-width: 1500px;
`;

export const HomeHeader = styled.h1`
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
