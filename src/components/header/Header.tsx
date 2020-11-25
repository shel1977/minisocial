import React from 'react';
import style from './Header.module.css';
import {TopMenu} from "./TopMenu";

export function Header() {
    return (
        <header className={style.appHeader}>
            <TopMenu/>
        </header>
    );
}

