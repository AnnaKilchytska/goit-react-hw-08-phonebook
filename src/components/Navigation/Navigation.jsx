import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Log in</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </nav>
  );
}

export default Navigation;
