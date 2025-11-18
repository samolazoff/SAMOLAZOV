import './About.scss';

import TitleBlock from '../../components/ui/TitleBlock/TitleBlock';
import SubtitleBlock from '../../components/ui/SubtitleBlock/SubtitleBlock';
import Btn from '../../components/ui/Btn/Btn';

import imgMine from '../../assets/images/about/5373046436129799659.png';

const About = () => {
    return (
        <>
            <section className='app-about'>
                <img src={imgMine} alt="img_mine" className="app-about__img" />
                <div className="app-about-content">
                    <TitleBlock txt='Hello, I am'/>
                    <SubtitleBlock txt="SAMOLAZOV ROMAN"/>
                    <span className="app-about-content__txt">I enjoy creating delightful, human-centered digital experiences. You have only one chance to become a full-fledged part of the Internet.</span>
                    <span className="app-about-content__txt app-about-content__txt_right">Let’s make it an amazing one!</span>
                    <Btn tage='link' href='#contacts-form' txt='Contacts Me'/>
            </div>
            </section>
            <section className="mini-pages">
                
            </section>
        </>
        
    );
};

export default About;