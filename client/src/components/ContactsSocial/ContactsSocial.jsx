import './ContactsSocial.scss';

import {Link} from 'react-router';

import imgFacebook from '../../assets/icons/icons8-facebook.svg';
import imgGit from '../../assets/icons/icons8-github.svg';
import imgInstagram from '../../assets/icons/icons8-instagram.svg';
import imgLinkdeen from '../../assets/icons/icons8-linkdeen.svg';

const ContactsSocial = () => {
    return (
        <ul className="contacts-social">
            <li className="contacts-social-item">
                <Link to='https://github.com/samolazoff' className='contacts-social__link'>
                    <img src={imgGit} alt="git-img" className="contacts-social__img" />
                </Link>
            </li>
            <li className="contacts-social-item">
                <Link to='https://instagram.com' className='contacts-social__link'>
                    <img src={imgInstagram} alt="instagram-img" className="contacts-social__img" />
                </Link>
            </li>
            <li className="contacts-social-item">
                <Link to='https://facebook.com' className='contacts-social__link'>
                    <img src={imgFacebook} alt="facebook-img" className="contacts-social__img" />
                </Link>
            </li>  
            <li className="contacts-social-item">
                <Link to='https://linkedin.com' className='contacts-social__link'>
                    <img src={imgLinkdeen} alt="linkedin-img" className="contacts-social__img" />
                </Link>
            </li>          
        </ul>
    );
};

export default ContactsSocial;