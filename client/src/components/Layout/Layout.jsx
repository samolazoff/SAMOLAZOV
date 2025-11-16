import './Layout.scss';

import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <>
           <main className='app container'>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;