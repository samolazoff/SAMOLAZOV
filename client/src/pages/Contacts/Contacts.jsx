import './Contacts.scss';

import TitleBlock from '../../components/ui/TitleBlock/TitleBlock';
import ContactsSocial from '../../components/ContactsSocial/ContactsSocial';

const Contacts = () => {
    return (
        <section className='app-contacts'>
            <TitleBlock txt='Contacts'/>
            <div className="app-contacts-wrap">
                <div className="app-contacts-main">
                    <ul className="app-contacts-list">
                        <li className="app-contacts-item">
                            <img src=" " alt="telegram-icon" className="app-contacts-item__img" />
                            <span className="app-contacts-item__txt">@SamolazovRoman</span>
                        </li>
                        <li className="app-contacts-item">
                            <img src=" " alt="whatsapp-icon" className="app-contacts-item__img" />
                            <span className="app-contacts-item__txt">+48 789 047 614</span>
                        </li>
                        <li className="app-contacts-item">
                            <img src=" " alt="email-icon" className="app-contacts-item__img" />
                            <span className="app-contacts-item__txt">samalazau.raman@proton.me</span>
                        </li>
                    </ul>
                    <ContactsSocial/>
                </div>
                <form className='contacts-form' method="post">
                    <label htmlFor="nameUserContactForm">
                        <input type="text" name="nameUserContactForm" id="nameUserContactForm"/>
                    </label>
                    <label htmlFor="emailUserContactForm">
                        <input type="email" name="emailUserContactForm" id="emailUserContactForm"/>
                    </label>
                    <label htmlFor="txtUserContactForm">
                        <textarea name="txtUserContactForm" id="txtUserContactForm"></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contacts;