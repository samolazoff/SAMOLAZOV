import './Work.scss';

import {Link} from 'react-router';

import TitleBlock from '../../components/ui/TitleBlock/TitleBlock';

import {works} from '../../data/data.json';

const workItem = (link, title, description, img, idx) => {
    return (
        <li className='app-work-item' key={idx}>
            <Link to={link}>
                <div className="app-work-item-img-wrap">
                    <img src={img} alt="img_site" className="app-work-item__img" />
                </div>
                <div className="app-work-item-discribe">
                    <h3 className="app-work-item__title">{title}</h3>
                    <span className="app-work-item__txt">{description}</span>
                </div>
            </Link>
        </li>
    )
}

const Work = () => {
    return (
        <section className='app-work'>
            <TitleBlock txt='My work'/>
            <span className="app-work__subtitle">You can find my finished and current projects here. </span>
            <ul className="app-work-wrap">
                {
                    works.map((itm, idx) => {
                        const {link, title, description, img} = itm;
                        return(
                            workItem(link, title, description, img, idx)
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default Work;