import './Blog.scss';

import TitleBlock from '../../components/ui/TitleBlock/TitleBlock';

import showContentBlogItem from '../../utils/showContentBlogItem.js';

import {blog} from '../../data/data.json';

const itemBlog = (id, data, title, txt, idx) => {
    return(
        <li className="app-blog-item" id={id+''} key={idx}>
            <div className="app-blog-item-content-wrap">
                <div className="app-blog-item-show">
                    <data value={data}>{data}</data>
                    <h3 className="app-blog-item__title">{title}</h3>
                </div>
                <button type="button" className='btn-set' id='btn-on' onClick={showContentBlogItem} data-id = {id}>+</button>
                <button type="button" className='btn-set d-none' id='btn-off' onClick={showContentBlogItem} data-id = {id}>-</button>
            </div>
            <div className="app-blog-item-content d-none">{txt}</div>
        </li>
    )
}

const Blog = () => {
    return (
        <section className='app-blog'>
           <TitleBlock txt='Blog, news, notes'/>
           <ul className="app-blog-wrap">
               {
                    blog.map((item, idx) => {
                        const {id, data, title, txt} = item;
                        return (
                            itemBlog(id, data, title, txt, idx)
                        )
                    })
                }
           </ul>
            
        </section>
    );
};

export default Blog;