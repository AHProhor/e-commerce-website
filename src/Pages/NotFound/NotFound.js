
import React from 'react';
import img from '../../images/bannerimg/404img.png';
import Navigation from '../Shared/Navigation/Navigation';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className="notFoundStyle">
            <Navigation></Navigation>
            <img src={img} alt="" /><br />
        </div>
    );
};

export default NotFound;