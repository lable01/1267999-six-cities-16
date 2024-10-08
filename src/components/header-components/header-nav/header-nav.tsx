import { useAppSelector } from 'hooks/store';
import { userSelectors } from 'store/slices/user.ts';
import useAuth from 'hooks/use-auth';
import NavLogin from 'components/header-components/nav-login';
import NavLogout from 'components/header-components/nav-logout';

const HeaderNav = () => {
  const authorizationStatus = useAuth();
  const info = useAppSelector(userSelectors.info);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {info && authorizationStatus ? <NavLogout info={info} /> : <NavLogin />}
      </ul>
    </nav>
  );
};

export default HeaderNav;
