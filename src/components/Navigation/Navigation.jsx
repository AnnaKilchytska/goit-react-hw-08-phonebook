import { Suspense } from 'react';
// import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
// import { selectIsLoggenIn } from 'redux/auth/selectors';

function Navigation() {
  // const isLoggedIn = useSelector(selectIsLoggenIn);

  return (
    <nav>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Log in</NavLink>
      {/* {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>} */}
      <NavLink to="/contacts">Contacts</NavLink>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </nav>
  );
}

export default Navigation;
