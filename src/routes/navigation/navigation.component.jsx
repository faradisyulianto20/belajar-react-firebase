import './navigation.styles.scss';
import { Fragment, useContext } from 'react';

// import Directory from '../../components/directory/directory.component'
import { Outlet, Link } from 'react-router-dom';

import Button from '../../components/button/button-component'

import { UserContext } from '../../contexts/user.context';
import { SignOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {

  const {currentUser} = useContext(UserContext);
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
                <Button buttonType='red' onClick={SignOutUser}>Sign Out</Button>
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