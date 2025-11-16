import './NavItem.scss';

import {NavLink} from 'react-router';

const NavItem = (props) => {

    const {title, link} = props;

    return (
        <li className='nav-item'>
            <NavLink to={link}>{title}</NavLink>
        </li>
    );
};

export default NavItem;