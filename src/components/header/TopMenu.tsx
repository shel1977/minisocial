import React from 'react';
import style from './TopMenu.module.css';

export function TopMenu() {
    return (
        <div className={style.topMenu}>
            <span> my page </span>
            <span> message </span>
            <span> news </span>
            <span> setting </span>
        </div>
    );
}

