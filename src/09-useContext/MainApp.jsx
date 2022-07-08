import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomPage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";


export const MainApp = () => {
    return (
        <UserProvider>
            <Navbar />
            <hr/>

            <Routes>
                <Route path="/" element={ <HomePage/> }/>
                <Route path="login" element={ <LoginPage/> }/>
                <Route path="about" element={ <AboutPage/> }/>

                {/*<Route path="/*" element={ <LoginPage /> } />*/ }
                <Route path="/*" element={ <Navigate to="/about"/> }/>

            </Routes>
        </UserProvider>
    );
};