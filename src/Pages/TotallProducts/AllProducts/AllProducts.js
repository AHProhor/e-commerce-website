import React, { useEffect, useState } from 'react';
import Allproduct from '../AllProduct/Allproduct';
import './AllProducts.css';

const AllProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h1 className="m-5 text-dark fw-bolder"> ALL Products </h1>
              <div className="productStyle">
                  {
                      products.map(allProduct => <Allproduct
                      key={allProduct.id}
                      sendAllProduct={allProduct}
                      ></Allproduct>)
                  }
              </div>
        </div>
    );
};

export default AllProducts;