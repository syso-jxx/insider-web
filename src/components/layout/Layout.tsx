import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = () => {
  const location = useLocation();
  const pathsToHideSidebar = ['/signin', '/signup'];

  const isShowSidebar = !pathsToHideSidebar.includes(location.pathname);

  return (
    <div className='scrollbar-hide'>
      <Header />
      <div className='flex'>
        {isShowSidebar && <Sidebar />}
        <main className='flex-1'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
