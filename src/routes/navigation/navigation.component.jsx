import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import Button from '../../components/button/button-component';
import CartIcon from '../../components/cart-icon/cart-icon.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { SignOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavigationContainer,
  NavLinksContainer,
  StyledLink
} from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <StyledLink to='/'>
          <Button buttonType='green'>Home</Button>
        </StyledLink>

        <NavLinksContainer>
          <StyledLink to='shop'>
            <Button buttonType='green'>Shop</Button>
          </StyledLink>

          {currentUser ? (
            <>
              <CartIcon />
              <Button buttonType='red' onClick={SignOutUser}>
                Sign Out
              </Button>
            </>
          ) : (
            <StyledLink to='auth'>
              <Button buttonType='green'>Sign In</Button>
            </StyledLink>
          )}
        </NavLinksContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
