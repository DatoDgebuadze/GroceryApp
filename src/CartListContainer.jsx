import React from 'react';
import CartList from './CartList.jsx';

export default function CartListContainer({ items, onRemove }) {
    return (
        <div className="CartList-Container">
            {items.length === 0 ? (
                <div>
                    <h2>Cart is Empty!</h2>
                </div>
            ) : (
                items.map((item) => (
                    <CartList
                        key={item.id}
                        productName={item.productName}
                        price={item.price}
                        brand = {item.brand} // Pass the image prop
                        onRemove={onRemove} // Pass the onRemove function
                        id={item.id}
                    />
                ))
            )}
        </div>
    );
}
