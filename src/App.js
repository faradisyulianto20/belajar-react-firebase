import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getRedirectResult } from 'firebase/auth';
import { auth, createUserDocumentFromAuth } from './utils/firebase/firebase.utils';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication-component';
import Shop from './routes/shop/shop.component'

const App = () => {
  useEffect(() => {
    const checkRedirect = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          console.log('User dari redirect:', result.user);
          await createUserDocumentFromAuth(result.user);
        } else {
          // console.log('Tidak ada hasil redirect');
        }
      } catch (error) {
        console.error('Error saat getRedirectResult:', error);
      }
    };

    checkRedirect();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
