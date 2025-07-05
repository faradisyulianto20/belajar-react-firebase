import './navigation.styles.scss';
import { Fragment } from 'react/jsx-runtime';

// import Directory from '../../components/directory/directory.component'
import { Outlet, Link } from 'react-router-dom';

import Button from '../../components/button/button-component'

const Navigation = () => {

  return (<>
  <Fragment>
    <div className='navigation'>
        <Link to='/'>
            {/* <CrwnLogo className='logo'/> */}
            <Button buttonType='green'>Home</Button>
        </Link>
        <div className='nav-links-container'>
            <Link to='shop'><Button buttonType='green'>Shop</Button></Link>
            <Link to='auth'><Button buttonType='green'>Sign In</Button></Link>
        </div>
    </div>
    <Outlet />
  </Fragment>
  </>
   
  );
}

export default Navigation;