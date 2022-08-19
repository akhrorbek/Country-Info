import React from 'react';
import '../Hero/Hero.scss';
const Hero = () => {
    return (
        <div className='hero mb-5'>
            <div className='container d-flex align-items-center justify-content-between'>
                <input className='hero__input form-control shadow-sm bg-body rounded' type="text" placeholder='Search country....☺' />
                <select className="hero__select form-select shadow-sm bg-body rounded">
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceaina">Oceania</option>
                </select>
            </div>
        </div>
    );
};

export default Hero;