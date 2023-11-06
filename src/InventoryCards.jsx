import React from 'react';

export default function InventoryCards({ image, productName, brand, quantity, price, addToCart }) {
    const handleAddToCart = () => {
        const item = {
            image,
            productName,
            brand,
            quantity,
            price,
        };

    
        addToCart(item);
    };


    return (
        <div className="Inventory-Card">
            <img src={image} alt={productName} />
            <h2 id="productName">{productName}</h2>
            <h2 id="brand">{brand}</h2>
            <h2 id="quantity">{quantity}</h2>
            <h2 id="price">{price}</h2>
            
            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
    );
}
