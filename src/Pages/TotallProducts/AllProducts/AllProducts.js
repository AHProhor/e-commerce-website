import React from 'react';
import Allproduct from '../AllProduct/Allproduct';
import './AllProducts.css';
const allProducts = [
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
    {
        id:7,
        name: 'Phoebe 2-Light Wisteria Table Lamp',
        img:'https://i.ibb.co/Y8fSjb9/3121046c0626c24c-8058-w300-h300-b1-p10.jpg',
        details:'Since these are hand crafted products, the exact color of glass pieces may vary. Colors of the glass will appear darker and less vibrant when not illuminated. Handmade glass will vary from one piece to the other.',
        price: '$200'
    },
    {
        id:8,
        name: 'Phoebe 2-Light Wisteria Table Lamp',
        img:'https://i.ibb.co/yyvdJ5z/c8c1844c0a3b6cd1-2915-w300-h300-b1-p10.jpg',
        details:'Since these are hand crafted products, the exact color of glass pieces may vary. Colors of the glass will appear darker and less vibrant when not illuminated. Handmade glass will vary from one piece to the other.',
        price: '$400'
    },
    {
        id:9,
        name: 'Phoebe 2-Light Wisteria Table Lamp',
        img:'https://i.ibb.co/ngv356Q/c4517d8c056f924a-4914-w300-h300-b1-p10.jpg',
        details:'Since these are hand crafted products, the exact color of glass pieces may vary. Colors of the glass will appear darker and less vibrant when not illuminated. Handmade glass will vary from one piece to the other.',
        price: '$200'
    },
    {
        id:10,
        name: 'Phoebe 2-Light Wisteria Table Lamp',
        img:'https://i.ibb.co/pjVdSFY/77912c650b4d2191-9598-w300-h300-b1-p10.jpg',
        details:'Since these are hand crafted products, the exact color of glass pieces may vary. Colors of the glass will appear darker and less vibrant when not illuminated. Handmade glass will vary from one piece to the other.',
        price: '$200'
    },
    {
        id:11,
        name: 'Phoebe 2-Light Wisteria Table Lamp',
        img:'https://i.ibb.co/5GgRgGN/d3b184000a95d675-6267-w300-h300-b1-p10.jpg',
        details:'Since these are hand crafted products, the exact color of glass pieces may vary. Colors of the glass will appear darker and less vibrant when not illuminated. Handmade glass will vary from one piece to the other.',
        price: '$200'
    },
    {
        id:12,
        name: 'Phoebe 2-Light Wisteria Table Lamp',
        img:'https://i.ibb.co/5Wzt43y/d4d1e1f0063aa29c-7867-w300-h300-b1-p10.jpg',
        details:'Since these are hand crafted products, the exact color of glass pieces may vary. Colors of the glass will appear darker and less vibrant when not illuminated. Handmade glass will vary from one piece to the other',
        price: '$200'
    },
    {
        id:13,
        name: 'Phoebe 2-Light Wisteria Table Lamp',
        img:'https://i.ibb.co/1K250QH/d5f141b809b6c9c7-2633-w300-h300-b1-p10.jpg',
        details:'Since these are hand crafted products, the exact color of glass pieces may vary. Colors of the glass will appear darker and less vibrant when not illuminated. Handmade glass will vary from one piece to the other.',
        price: '$200'
    },
    {
        id:14,
        name: 'Phoebe 2-Light Wisteria Table Lamp',
        img:'https://i.ibb.co/KXPTSYp/d9b1c8970626be4d-6850-w300-h300-b1-p10.jpg',
        details:'Since these are hand crafted products, the exact color of glass pieces may vary. Colors of the glass will appear darker and less vibrant when not illuminated. Handmade glass will vary from one piece to the other.',
        price: '$400'
    },
    {
        id:15,
        name: 'Phoebe 2-Light Wisteria Table Lamp',
        img:'https://i.ibb.co/Q9rkvzN/4171b0da0afb6e8a-2671-w300-h300-b1-p10.jpg',
        details:'Since these are hand crafted products, the exact color of glass pieces may vary. Colors of the glass will appear darker and less vibrant when not illuminated. Handmade glass will vary from one piece to the other.',
        price: '$200'
    },
    {
        id:16,
        name: 'Phoebe 2-Light Wisteria Table Lamp',
        img:'https://i.ibb.co/Nxr7GNx/e8f1aebf06be53fc-6637-w300-h300-b1-p10.jpg',
        details:'Since these are hand crafted products, the exact color of glass pieces may vary. Colors of the glass will appear darker and less vibrant when not illuminated. Handmade glass will vary from one piece to the other.',
        price: '$200'
    },
    {
        id:17,
        name: 'Phoebe 2-Light Wisteria Table Lamp',
        img:'https://i.ibb.co/c8C5M9y/e8513ed6058ddf9a-5563-w300-h300-b1-p10.jpg',
        details:'Since these are hand crafted products, the exact color of glass pieces may vary. Colors of the glass will appear darker and less vibrant when not illuminated. Handmade glass will vary from one piece to the other.',
        price: '$200'
    },
    {
        id:18,
        name: 'Phoebe 2-Light Wisteria Table Lamp',
        img:'https://i.ibb.co/mNWdyB6/fb914fa804e6275c-0509-w300-h300-b1-p10.jpg',
        details:'Since these are hand crafted products, the exact color of glass pieces may vary. Colors of the glass will appear darker and less vibrant when not illuminated. Handmade glass will vary from one piece to the other',
        price: '$200'
    },
    {
        id:19,
        name: 'Phoebe 2-Light Wisteria Table Lamp',
        img:'https://i.ibb.co/cb2gNyZ/8ec185f506f952f4-5688-w300-h300-b1-p10.jpg',
        details:'Since these are hand crafted products, the exact color of glass pieces may vary. Colors of the glass will appear darker and less vibrant when not illuminated. Handmade glass will vary from one piece to the other.',
        price: '$200'
    },
    {
        id:20,
        name: 'Phoebe 2-Light Wisteria Table Lamp',
        img:'https://i.ibb.co/PCwydxw/52e1323d082b3f79-3764-w300-h300-b1-p10.jpg',
        details:'Since these are hand crafted products, the exact color of glass pieces may vary. Colors of the glass will appear darker and less vibrant when not illuminated. Handmade glass will vary from one piece to the other',
        price: '$200'
    },
]
const AllProducts = () => {
    return (
        <div>
            <h1 className="m-5 text-dark fw-bolder"> ALL Products </h1>
              <div className="productStyle">
                  {
                      allProducts.map(allProduct => <Allproduct
                      key={allProduct.id}
                      sendAllProduct={allProduct}
                      ></Allproduct>)
                  }
              </div>
        </div>
    );
};

export default AllProducts;