import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/shared/Header";
import Home from "./components/Home";
import Footer from "./components/shared/Footer";
import NotFound from "./components/shared/Error404";
import Personas from "./components/Personas";
import Fibonacci from "./components/Fibonacci";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <div className="wpthemeClear"></div>
                <div className="wpthemeMainContent" style={{ height: "auto"}}>
                    <div className="wpthemeInner">
                        <Routes>
                            <Route exact path="/" element={<Home />}></Route>
                            <Route exact path="/personas" element={<Personas />}></Route>
                            <Route exact path="/fibonacci" element={<Fibonacci />}></Route>
                            <Route path="*" element={<NotFound />}></Route>
                        </Routes>
                    </div>
                </div>
                <div className="wpthemeClear"></div>
                <Footer />
            </BrowserRouter>
        );
    }
}

export default Router;