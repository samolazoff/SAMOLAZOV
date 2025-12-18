import './ContactsForm.scss';

import Btn from '../ui/Btn/Btn';

const ContactsForm = () => {
    return (
       <form className='contacts-form' method="post">
            <label htmlFor="nameUserContactForm">
                <input type="text" name="nameUserContactForm" id="nameUserContactForm" placeholder='Enter your name'/>
            </label>
            <label htmlFor="emailUserContactForm">
                <input type="email" name="emailUserContactForm" id="emailUserContactForm" placeholder='Enter your email'/>
            </label>
            <label htmlFor="txtUserContactForm">
                <textarea name="txtUserContactForm" id="txtUserContactForm" placeholder='What do you want to ask!?'></textarea>
            </label>
            <Btn tage= 'btn' txt = 'Send' type ='submit'/>
        </form>
    );
};

export default ContactsForm;