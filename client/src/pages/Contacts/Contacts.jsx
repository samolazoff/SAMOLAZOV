import './Contacts.scss';

import TitleBlock from '../../components/ui/TitleBlock/TitleBlock';
import ContactsSocial from '../../components/ContactsSocial/ContactsSocial';
import ContactsForm from '../../components/ContactsForm/ContactsForm';

import imgEmail from '../../assets/icons/icons8-email.png';
import imgTelegram from '../../assets/icons/icons8-telegram.svg';
import imgWhatsapp from '../../assets/icons/icons8-whatsapp.svg';

const Contacts = () => {
    return (
        <section className='app-contacts' id='contacts-form'>
            <TitleBlock txt='Contacts'/>
            <div className="app-contacts-wrap">
                <div className="app-contacts-main">
                    <ul className="app-contacts-list">
                        <li className="app-contacts-item">
                            <img src={imgTelegram} alt="telegram-icon" className="app-contacts-item__img" />
                            <span className="app-contacts-item__txt">@SamolazovRoman</span>
                        </li>
                        <li className="app-contacts-item">
                            <img src={imgWhatsapp} alt="whatsapp-icon" className="app-contacts-item__img" />
                            <span className="app-contacts-item__txt">+48 789 047 614</span>
                        </li>
                        <li className="app-contacts-item">
                            <img src={imgEmail} alt="email-icon" className="app-contacts-item__img" />
                            <span className="app-contacts-item__txt">samalazau.raman@proton.me</span>
                        </li>
                    </ul>
                    <ContactsSocial/>
                </div>
                <ContactsForm/>
            </div>
        </section>
    );
};

export default Contacts;