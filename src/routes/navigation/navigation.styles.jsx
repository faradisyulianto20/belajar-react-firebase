import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  font-weight: bold;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  background-color: #000;
  padding: 1rem;
  border-radius: 2rem;
  transition: all 0.3s ease;

  &:hover {
    color: #000;
    background-color: #c7c6c6;
  }
`;
