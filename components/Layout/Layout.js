import Navbar from '../Navbar/Navbar.js';
import NavbarSm from '../Navbar/NavbarSm.js';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <NavbarSm />
      {children}
    </>
  );
};

export default Layout;
