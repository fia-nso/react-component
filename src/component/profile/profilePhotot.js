import React from 'react';
import img from '../photo.jpeg'

const profilePhoto = () => {
    return (
        <div className='profile'>
            <img src={img} alt='' />
        </div>
    );
};

export default profilePhoto;