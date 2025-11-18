import './Layout.scss';

import { Outlet } from 'react-router';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <>
            <Header/>
            <main className='app-main'>
                <Outlet />
            </main>
            <Footer/>
        </>
    );
};

export default Layout;