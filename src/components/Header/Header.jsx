import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggenIn } from 'redux/auth/selectors';

function Header() {
  const isLoggedIn = useSelector(selectIsLoggenIn);

  return <>{isLoggedIn ? <UserMenu /> : <Navigation />}</>;
}
export default Header;
