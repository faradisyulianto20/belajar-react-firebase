import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;
`;

export const CategoryContainer = styled.div`
  border: 1px solid #000;
  background-color: #ffffff;
  border-radius: 20px;
  overflow: hidden;

  &:hover {
    background-color: #00000027;
    cursor: pointer;
  }
`;

export const BackgroundImage = styled.div`
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  height: 200px;
  width: 350px;
  background-size: 100%;
  background-position: center;
  transition: background-size 1s ease;
  filter: blur(2px);

  &:hover {
    background-size: 110%;
    filter: blur(0px);
  }
`;

export const CategoryBodyContainer = styled.div`
  padding: 0em 1em;
`;

export const PageWrapper = styled.div`
  color: #000;
  font-family: 'Bebas Neue', sans-serif;
`;