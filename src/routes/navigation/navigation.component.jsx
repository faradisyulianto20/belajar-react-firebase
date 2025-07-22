import './navigation.styles.jsx';
import { Fragment, useContext } from 'react';

// import Directory from '../../components/directory/directory.component'
import { Outlet, Link } from 'react-router-dom';

import Button from '../../components/button/button-component'
import CartIcon from '../../components/cart-icon/cart-icon.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { SignOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {

  const {currentUser} = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  console.log(currentUser);

  // const SignOutHandler = async () => {
  //   await SignOutUser();
  //   // console.log(res);
  //   setCurrentUser(null);
    
  // }
  

  return (<>
  <Fragment>
    <div className='navigation'>
        <Link to='/'>
            {/* <CrwnLogo className='logo'/> */}
            <Button buttonType='green'>Home</Button>
        </Link>
        <div className='nav-links-container'>
            <Link to='shop'><Button buttonType='green'>Shop</Button></Link>
            {
              currentUser ? (
                <>
                  <CartIcon> </CartIcon>
                  <Button buttonType='red' onClick={SignOutUser}>Sign Out</Button>
                </>
              ) : 
                <Link to='auth'><Button buttonType='green'>Sign In</Button></Link>
            }
        </div>
    </div>
    <Outlet />
  </Fragment>
  </>
   
  );
}

export default Navigation;