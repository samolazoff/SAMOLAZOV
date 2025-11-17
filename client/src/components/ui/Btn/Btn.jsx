import './Btn.scss';

import {NavLink, Link} from 'react-router';

const Btn = (props) => {

    const {tage, href, txt, type} = props;

    switch (tage) {
        case 'link':
            return(
                <Link to={href} className='app-btn'>
                    {txt}
                </Link>
            )
        case 'nav':
             return(
                <NavLink to={href} className='app-btn'>
                    {txt}
                </NavLink>
            )
        case 'btn':
            return(
                <button type={type} className='app-btn'>
                    {txt}
                </button>
            )
        default:
            break;
    }
   
};

export default Btn;