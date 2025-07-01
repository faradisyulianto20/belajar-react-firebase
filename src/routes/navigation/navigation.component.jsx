import './navigation.styles.scss';
import { Fragment } from 'react/jsx-runtime';

// import Directory from '../../components/directory/directory.component'
import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {

  return (<>
  <Fragment>
    <div className='navigation'>
        <Link className='nav-link' to='/'>
            {/* <CrwnLogo className='logo'/> */}Home
        </Link>
        <div className='nav-links-container'>
            <Link className='nav-link' to='shop'>Shop</Link>
            <Link className='nav-link' to='signIn'>Sign In</Link>
        </div>
    </div>
    <Outlet />
  </Fragment>
  </>
   
  );
}

export default Navigation;