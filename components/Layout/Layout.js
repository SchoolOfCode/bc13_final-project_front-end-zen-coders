import Navbar from '../Navbar/Navbar.js';
import NavbarSm from '../Navbar/NavbarSm.js';
import NavbarSmTop from '../Navbar/NavbarSmTop.js';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <NavbarSm />
      <NavbarSmTop />
      {children}
    </>
  );
};

export default Layout;
