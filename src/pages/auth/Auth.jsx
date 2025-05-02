import React, { memo } from 'react';
import {Outlet, Navigate} from "react-router-dom";

const Auth = () => {
    let token = localStorage.getItem("access_token");

  return token ? <Outlet/> : <Navigate replace to={"/login"}/>
};

export default memo(Auth);
