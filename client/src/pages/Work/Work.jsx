import './Work.scss';

import {Link} from 'react-router';

import TitleBlock from '../../components/ui/TitleBlock/TitleBlock';

import imgSite from '../../assets/images/work/site_1.png'

const Work = () => {
    return (
        <section className='app-work'>
            <TitleBlock txt='My work'/>
            <span className="app-work__subtitle">You can find my finished and current projects here. </span>
            <ul className="app-work-wrap">
                <li className='app-work-item'>
                    <Link to='/'>
                        <div className="app-work-item-img-wrap">
                            <img src={imgSite} alt="img_site" className="app-work-item__img" />
                        </div>
                        <div className="app-work-item-discribe">
                            <h3 className="app-work-item__title">Samolazov</h3>
                            <span className="app-work-item__txt">This is a multypage portfolio site for Samolazov. He is a web developer and freelancer</span>
                        </div>
                    </Link>
                </li>
                <li className='app-work-item'>
                    <Link to='/'>
                        <div className="app-work-item-img-wrap">
                            <img src={imgSite} alt="img_site" className="app-work-item__img" />
                        </div>
                        <div className="app-work-item-discribe">
                            <h3 className="app-work-item__title">Samolazov</h3>
                            <span className="app-work-item__txt">This is a multypage portfolio site for Samolazov. He is a web developer and freelancer</span>
                        </div>
                    </Link>
                </li>
                <li className='app-work-item'>
                    <Link to='/'>
                        <div className="app-work-item-img-wrap">
                            <img src={imgSite} alt="img_site" className="app-work-item__img" />
                        </div>
                        <div className="app-work-item-discribe">
                            <h3 className="app-work-item__title">Samolazov</h3>
                            <span className="app-work-item__txt">This is a multypage portfolio site for Samolazov. He is a web developer and freelancer</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </section>
    );
};

export default Work;