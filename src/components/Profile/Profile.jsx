import React from 'react';
import s from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://wowmoon.ru/wp-content/uploads/2018/08/122058-World-of-Warcraft-Battle-for-Azeroth.jpg' />
            </div>
            <div>
                ava + description
        </div>
            <MyPosts />
        </div>
    )
}

export default Profile;