import './Layout.scss';

import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <>
            <main className='app-main'>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;