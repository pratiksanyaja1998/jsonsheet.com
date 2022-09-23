import React from 'react'

const ProductCard = (props) => {
    return (
        <div className="product-card">
            <img src={props?.item?.img} className="product-card-img" />
            <h6 className="product-card-title">{props?.item?.title}</h6>
            <p className="product-card-text">{props?.item?.description}</p>
        </div>
    );
};

export default ProductCard