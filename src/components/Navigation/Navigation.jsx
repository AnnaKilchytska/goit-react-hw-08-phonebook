import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggenIn } from 'redux/auth/selectors';

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggenIn);

  return (
    <>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      {/* <NavLink to="/contacts">Contacts</NavLink> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense> */}
    </>
  );
}

export default Navigation;
