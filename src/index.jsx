import React, {memo} from 'react';
import {Route, Routes} from "react-router-dom";
import Recipes from "./pages/recipes/Recipes.jsx";
import Layout from "./layout/Layout.jsx";
import Users from "./pages/users/Users.jsx";
import Product from "./pages/product/Product.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Login from "./pages/login/Login.jsx";
import Blog from "./pages/dashboard/blog/Blog.jsx";
import Settings from "./pages/dashboard/settings/Settings.jsx";
import Auth from "./pages/auth/Auth.jsx";
import User from "./pages/user/User.jsx";

const MainRouters = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/recipes" element={<Recipes/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/user/:id" element={<User/>}/>
                <Route path="*" element={<div><h2>404</h2></div>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Auth/>}>
                <Route path="/dashboard" element={<Dashboard/>}>
                    <Route path="blog" element={<Blog/>}/>
                    <Route path="settings" element={<Settings/>}/>
                </Route>
            </Route>
        </Routes>
    );
};

export default memo(MainRouters);
