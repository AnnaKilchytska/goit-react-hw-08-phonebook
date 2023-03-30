import Layout from 'components/Layout/Layout';
import PrivateRoute from 'components/PrivatePoute';
import RestrictedRoute from 'components/RestrictedRoute';
import Contacts from 'pages/Contacts';
import HomePage from 'pages/HomePage';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import css from './App.module.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className={css.AppContainer}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                component={<Register />}
                redirectTo={'/contacts'}
              />
            }
          />

          <Route
            path="login"
            element={
              <RestrictedRoute component={<Login />} redirectTo={'/contacts'} />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute component={<Contacts />} redirectTo={'/login'} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
