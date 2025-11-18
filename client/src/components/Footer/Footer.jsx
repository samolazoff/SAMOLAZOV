import './Footer.scss';

import {Link} from 'react-router';

import NavItem from '../NavItem/NavItem';

import {navigation} from '../../data/data.json'

const Footer = () => {

    const today = new Date();

    return (
        <footer className='app-footer'>
            <div className="app-footer-author-wrap">
                <div className="social-panel-mini"></div>
                <div className="app-footer-author">
                    <time dateTime={today.getFullYear()}>{today.getFullYear()}</time>
                    <Link to='/'>@Samolazoff</Link>
                </div>
            </div>
            <nav className="app-footer-nav">
                <ul className="app-footer-nav-items">
                    {
                        navigation.map((itm, idx) => {
                            const {title, link} = itm;
                            return <NavItem title={title} link={link} key={idx}/>
                        })
                    }
                </ul>
            </nav>
            
        </footer>
    );
};

export default Footer;