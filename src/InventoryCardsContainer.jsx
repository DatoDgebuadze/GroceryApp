import React from 'react';
import InventoryCards from './InventoryCards'; // Make sure to use the correct path to your InventoryCards component

export default function InventoryCardsContainer({ items, addToCart }) {
    return (
        <div className="Inventory-Container">
            {items.map((item) => (
                <InventoryCards
                    key={item.id}
                    image={item.image}
                    productName={item.productName}
                    brand={item.brand}
                    quantity={item.quantity}
                    price={item.price}
                    addToCart={addToCart} // Pass the addToCart function to InventoryCards
                />
            ))}

        </div>
    );
}
