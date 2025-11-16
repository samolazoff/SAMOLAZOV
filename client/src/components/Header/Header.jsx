import './Header.scss';

import {navigation} from '../../data/data.json';

import Logo from '../Logo/Logo';
import NavItem from '../NavItem/NavItem';

const Header = () => {
    return (
        <header className='app-header'>
            <Logo/>
            <nav className="app-header-nav">
                <ul  className="app-header-nav-items">
                    {
                        navigation.map((itm, idx) => {
                            const {title, link} = itm;
                            return <NavItem title={title} link={link} key={idx}/>
                        })
                    }
                </ul>
                
            </nav>
        </header>
    );
};

export default Header;
