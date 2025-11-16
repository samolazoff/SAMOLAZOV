import { Routes, Route, BrowserRouter } from "react-router";

import Layout from "../components/Layout/Layout";

// import Home from "../pages/Home/Home";
// import Contacts from '../pages/Contacts/Contacts';
// import Work from "../pages/Work/Work";
// import BLog from "../pages/Blog/Blog";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element  = {<Layout/>}>
                    {/* <Route index element = {<Home/>}/>
                    <Route path="contacts" element = {<Contacts/>}/>
                    <Route path="work" element={<Works/>}/>
                    <Route path="blog" element={<BLog/>}/> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;