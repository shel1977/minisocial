import React from 'react';
import style from './Blog.module.css';
import {blogDataType} from "./MyPage";

export function Blog (props: blogDataType) {
    return (
        <div className={style.postWrap}>
            <div className={style.separator}>
            </div>
            <div className={style.post}>
                <div className={style.postTitle}>
                    <span>{props.blogTitle}</span>
                </div>
                <div className={style.postCoverImage}>
                    <img src={props.blogImage} alt="blog"/>
                </div>
                <div className={style.postBodyText}>
                    {props.blogBodyText}
                </div>
            </div>
        </div>
    );
}

