import './About.scss';

import {Link} from 'react-router';

import TitleBlock from '../../components/ui/TitleBlock/TitleBlock';
import SubtitleBlock from '../../components/ui/SubtitleBlock/SubtitleBlock';
import Btn from '../../components/ui/Btn/Btn';

import imgMine from '../../assets/images/about/5373046436129799659.png';

import {works, blog} from '../../data/data.json';

const miniBlogPost = (item) => {

    const {id, title, data} = item;

    return (
        <li key={id} id={id} className='blog-mini-item'>
            <data value={data}>{data}</data>
            <Link to={id} className='blog-mini-item__title'>{title}</Link>
        </li>
    )
}
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
                <div className="work-mini">
                    <h3 className="title-block-mini">Last work</h3>
                    <div className="work-mini-content">
                        <Link to={works[0].link}>
                            <div className="work-mini-content-img-wrap">
                                <img src={works[0].img} alt="img_site" className="work-mini-content__img" />
                            </div>
                            <div className="work-mini-content-discribe">
                                <h3 className="work-mini-content__title">{works[0].title}</h3>
                                <span className="work-mini-content__txt">{works[0].description}</span>
                            </div>
                        </Link>
                    </div>
                    <Btn tage='link' href='/work' txt='More Works'/>
                </div>
                <div className="blog-mini">
                    <h3 className="title-block-mini">News</h3>
                    <ul className="blog-mini-list">
                        {
                            blog.map((itm) => {
                                return(
                                   miniBlogPost(itm)
                                )
                            })
                        }
                    </ul>
                    <Btn tage='link' href='/blog' txt='More News'/>
                </div>
            </section>
        </>
        
    );
};

export default About;