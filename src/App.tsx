import React from 'react';
// import logo from './logo.svg';
import style from './App.module.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Content} from "./components/content/Content";

function App() {
    return (
        <div className={style.app}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
