import MobileMenu from './MobileMenu';
// import MainMenu from './MainMenu';
import Search from './Search';
import Login from './Login';
import Cart from './Cart';
// import ShippingBanner from './ShippingBanner';
import Logo from './Logo';

function Header() {
  return (
    <div>
      <header className="header">

        <MobileMenu />
        <div className="mobileLogo">
          <Logo />
        </div>
        <div className="headerIcons">
          <Search />
          <Login />
          <Cart />
        </div>
      </header>
    </div>
  );
}

export default Header;
