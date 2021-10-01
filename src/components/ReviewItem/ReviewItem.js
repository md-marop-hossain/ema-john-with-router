import React from 'react';

const ReviewItem = (porps) => {
    const { name, price, quantity, key } = porps.product || {};

    return (
        <div className="product">
            <div>
                <h4>{name}</h4>
                <p>Price : {price}</p>
                <p>Quantity : {quantity}</p>
                <button onClick={() => porps.handleRemove(key)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;