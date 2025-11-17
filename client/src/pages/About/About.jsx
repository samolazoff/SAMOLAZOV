import './About.scss';

import TitleBlock from '../../components/ui/TitleBlock/TitleBlock';

const About = () => {
    return (
        <section className='app-about'>
            <div className="app-about-content">
                <TitleBlock txt='Hello, I AM'/>
                <h3 className="subtitle-block">SAMOLAZOV ROMAN</h3>
                <span className="app-about-content__txt">I enjoy creating delightful, human-centered digital experiences.</span>
                <span className="app-about-content__txt">You have only one chance to become a full-fledged part of the Internet. Let’s make it an amazing one.</span>
                <button>Contact Me</button>
           </div>
            
        </section>
    );
};

export default About;