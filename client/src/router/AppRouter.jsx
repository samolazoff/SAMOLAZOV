import { Routes, Route, BrowserRouter } from "react-router";

import Layout from "../components/Layout/Layout";

import About from "../pages/About/About";
import Work from "../pages/Work/Work";
import BLog from "../pages/Blog/Blog";
import Contacts from '../pages/Contacts/Contacts';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element  = {<Layout/>}>
                    <Route index element = {<About/>}/>
                    <Route path="work" element={<Work/>}/>
                    <Route path="blog" element={<BLog/>}/>
                    <Route path="contacts" element = {<Contacts/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;