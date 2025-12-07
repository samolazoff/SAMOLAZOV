import { Routes, Route, BrowserRouter } from "react-router";

import Layout from "../components/Layout/Layout";

import About from "../pages/About/About";
import Work from "../pages/Work/Work";

// import Contacts from '../pages/Contacts/Contacts';
// import BLog from "../pages/Blog/Blog";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element  = {<Layout/>}>
                    <Route index element = {<About/>}/>
                    <Route path="work" element={<Work/>}/>

                    {/* <Route path="contacts" element = {<Contacts/>}/> */}
                    {/* <Route path="blog" element={<BLog/>}/> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;