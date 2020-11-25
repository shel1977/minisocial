import React from 'react';
import style from './Content.module.css';
import {MyPage} from "./my_page/MyPage";

export function Content() {
  return (
      <div className={style.appContent}>
        <MyPage/>
      </div>
  );
}

