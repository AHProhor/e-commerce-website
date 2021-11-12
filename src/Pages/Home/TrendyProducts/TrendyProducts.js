import React, { useEffect, useState } from 'react';
import TrendyProduct from '../TrendyProduct/TrendyProduct';
import './TrendyProducts.css';

const TrendyProducts = () => {
    const [trendyProducts,setTrendyProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/trendyProducts')
        .then(res => res.json())
        .then(data => setTrendyProducts(data))
        
    }, [])
    return (
        <div>
            <h1 className="m-5 text-dark fw-bolder">Trendy Products</h1>
              <div className="trendyProductStyle">
                  {
                      trendyProducts.map(trendyProduct => <TrendyProduct
                        key={trendyProduct.id}
                        sendTrendyProduct ={trendyProduct}
                      ></TrendyProduct>)
                  }
              </div>
        </div>
    );
};

export default TrendyProducts;