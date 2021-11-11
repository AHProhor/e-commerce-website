import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AllProducts from '../AllProducts/AllProducts';

const TotallProducts = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AllProducts></AllProducts>
            <Footer></Footer>
        </div>
    );
};

export default TotallProducts;