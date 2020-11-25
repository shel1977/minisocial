import React from 'react';
import style from './MyPage.module.css';
import {Blog} from "./Blog";

export type blogDataType = {
    blogTitle: string
    blogImage: string
    blogBodyText: string
}

export function MyPage() {


    return (
        <div className={style.myPageWrap}>
            <div className={style.myPage}>
                <div className={style.myPageHead}>
                    <div>
                        <img className={style.headImagePicture}
                             src='https://pbs.twimg.com/media/CPHqg0QUAAEJp7J.jpg'
                             alt='user head'/>
                    </div>

                    <div>
                        <img className={style.headUserPicture}
                             src='https://cdn.photosight.ru/img/f/0fa/6469948_xlarge.jpg'
                             alt='user'/>
                    </div>

                    <div className={style.headUserInfo}>
                        <div className={style.headUserName}>
                            <span>Nastya Petrova</span>
                        </div>
                        <div className={style.headUserLocation}>
                            <span>Russia, Moscow</span>
                        </div>
                    </div>
                </div>
                <Blog blogTitle='Our Earth is so beautiful'
                      blogImage='https://i.blogs.es/c69878/23390966376_819762cb17_h/1366_2000.jpg'
                      blogBodyText='There, are a lot of blue rivers and lakes on the Earth. Its oceans are full of wonders. There are high mountains covered with snow and wonderful fields and forests full of different plants and animals. The sun shines high up in the blue sky. At night we can see the moon and millions of stars. One season comes after another and brings changes in weather and nature. There are so many wonderful places to visit and interesting things to see. Nature gives people its riches to live and enjoy.'/>
                <Blog blogTitle='We can’t live without fresh air'
                      blogImage='https://img4.goodfon.ru/original/2048x1365/7/cc/devushka-derevo-priroda-2.jpg'
                      blogBodyText='We can’t live without fresh air, clean water, sunshine and a lot of things which we take from the nature. That’s why we must take care of it. We must keep our rivers and lakes, forests and towns clean. We must take care of each plant and each animal. We must plant flowers — not pick them up, feed birds and animals in winter — not kill them. Then we’ll be happy to live on the most beautiful planet in the Universe.'/>
                <Blog blogTitle='Many people prefer travelling by car'
                      blogImage='https://wallpaperscave.ru/images/original/18/06-15/women-mood-57911.jpg'
                      blogBodyText='They don’t have to buy tickets. They don’t have to carry heavy luggage. They can stop wherever they wish and spend as much time as they like at any place.'/>

            </div>
        </div>
    );
}

