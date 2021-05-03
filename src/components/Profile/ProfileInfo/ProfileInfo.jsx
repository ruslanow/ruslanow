import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    debugger
    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={s.descriptionBlock}>
                {props.profile && props.profile.photos.large ?
                    <img width='205px' src={props.profile.photos.large}/> :
                    <img width='205px' src='https://im0-tub-ru.yandex.net/i?id=874d9d12842361ad716539e4d766353b&n=13'
                         alt=""/>}
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;