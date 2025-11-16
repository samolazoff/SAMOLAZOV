import './Logo.scss';

import {NavLink} from 'react-router';

const Logo = () => {
    return (
        <NavLink to='/'>
            <h1 className="logo"/>
        </NavLink>
    );
};

export default Logo;