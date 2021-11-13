import React from 'react';
import soon from '../../../images/bannerimg/coming-soon-1.jpg';
import Navigation from '../../Shared/Navigation/Navigation';
import './Payment.css';

const Payment = () => {
    return (
        <>
        <Navigation></Navigation>
        <div className="imgStyle">
            <img src={soon} alt="" />
        </div>
        </>
    );
};

export default Payment;