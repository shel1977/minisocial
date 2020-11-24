import React from 'react';
// import logo from './logo.svg';
import style from './App.module.css';
import {Header} from "./Header";
import {Footer} from "./Footer";

function App() {
  return (
    <div className={style.app}>
      <Header />
<div className={style.appContent}>

</div>
      <Footer />
    </div>
  );
}

export default App;
