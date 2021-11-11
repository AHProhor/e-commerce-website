import React from 'react';
import TrendyProduct from '../TrendyProduct/TrendyProduct';
import './TrendyProducts.css';
const trendyProducts = [
    {
        id:1,
        name: 'Phoebe 2-Light Wisteria Table Lamp',
        img:'https://i.ibb.co/MhYSxZr/66e1335804c7df3e-0035-w300-h300-b1-p10.jpg',
        details:'Since these are hand crafted products, the exact color of glass pieces may vary. Colors of the glass will appear darker and less vibrant when not illuminated. Handmade glass will vary from one piece to the other.',
        price: '$200'
    },
    {
        id:2,
        name: 'Phoebe 2-Light Wisteria Table Lamp',
        img:'https://i.ibb.co/Db5B1Zf/99f1252f07599b92-1535-w300-h300-b1-p10.jpg',
        details:'Since these are hand crafted products, the exact color of glass pieces may vary. Colors of the glass will appear darker and less vibrant when not illuminated. Handmade glass will vary from one piece to the other.',
        price: '$400'
    },
    {
        id:3,
        name: 'Phoebe 2-Light Wisteria Table Lamp',
        img:'https://i.ibb.co/Q9rkvzN/4171b0da0afb6e8a-2671-w300-h300-b1-p10.jpg',
        details:'Since these are hand crafted products, the exact color of glass pieces may vary. Colors of the glass will appear darker and less vibrant when not illuminated. Handmade glass will vary from one piece to the other.',
        price: '$200'
    },
    {
        id:4,
        name: 'Phoebe 2-Light Wisteria Table Lamp',
        img:'https://i.ibb.co/pjVdSFY/77912c650b4d2191-9598-w300-h300-b1-p10.jpg',
        details:'Since these are hand crafted products, the exact color of glass pieces may vary. Colors of the glass will appear darker and less vibrant when not illuminated. Handmade glass will vary from one piece to the other.',
        price: '$200'
    },
    {
        id:5,
        name: 'Phoebe 2-Light Wisteria Table Lamp',
        img:'https://i.ibb.co/5vVrSMy/807126ac0fb3110c-6484-w300-h300-b1-p10.jpg',
        details:'Since these are hand crafted products, the exact color of glass pieces may vary. Colors of the glass will appear darker and less vibrant when not illuminated. Handmade glass will vary from one piece to the other.',
        price: '$200'
    },
    {
        id:6,
        name: 'Phoebe 2-Light Wisteria Table Lamp',
        img:'https://i.ibb.co/kq9ZBkW/962188ec056f93b8-9703-w300-h300-b1-p10.jpg',
        details:'Since these are hand crafted products, the exact color of glass pieces may vary. Colors of the glass will appear darker and less vibrant when not illuminated. Handmade glass will vary from one piece to the other',
        price: '$200'
    },
]





const TrendyProducts = () => {
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