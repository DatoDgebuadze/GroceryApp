import React, { useState } from 'react';
import { products } from './Products.js';
import InventoryCardsContainer from './InventoryCardsContainer.jsx';
import CartListContainer from './CartListContainer.jsx';

export default function GroceriesApp() {
   const [cart, setCart] = useState([]);

   // Function to add items to the cart
   const addToCart = (item) => {
      setCart([...cart, item]);
   };

   return (
      <div>
         <InventoryCardsContainer items={products} addToCart={addToCart} />
         <CartListContainer items={cart} />
      </div>
   );
}
