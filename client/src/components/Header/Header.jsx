import './Header.scss';

import {navigation} from '../../data/data.json';

import Logo from '../Logo/Logo';
import NavItem from '../NavItem/NavItem';

import Hamburger from 'hamburger-react';
import {useState} from 'react';

const Header = () => {

    const [isOpen, setOpen] = useState(false);

    const itemsNav = (navigation) => {
        return(
            <ul  className='app-header-nav-items'>
                {
                    navigation.map((itm, idx) => {
                        const {title, link} = itm;
                        return <NavItem title={title} link={link} key={idx}/>
                    })
                }
            </ul>
        )
    }

    return (
        <header className='app-header'>
            <Logo/>
            <nav className='app-header-nav-ds'>
                {itemsNav(navigation)}
            </nav>
            <nav className={(!isOpen)?'app-header-nav  d-none':'app-header-nav'}>
                {itemsNav(navigation)}
            </nav>
            <div className="wrap-hamburger">
                <Hamburger toggled={isOpen} toggle={setOpen}/>
            </div>
        </header>
    );
};

export default Header;
