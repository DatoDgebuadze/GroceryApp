import React, { useState } from 'react';
import { products } from './Products.js';
import InventoryCardsContainer from './InventoryCardsContainer.jsx';
import CartListContainer from './CartListContainer.jsx';

export default function GroceriesApp() {
   const [cart, setCart] = useState([]);

   // Function to add items to the cart
   const addToCart = (item) => {
      setCart([...cart, { ...item, id: crypto.randomUUID() }]);
   };


   // function handleRemove(id) {
   //    // Call the onRemove function to remove the item from the cart
   //    setCart((prevList) => prevList.filter((i) => i.id !== id))
   // }


   const handleRemove = (id) => {
      // Use the setCart function to update the cart by filtering out the item to be removed
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
   };


   return (
      <div className="GroceriesApp-Container">
         <InventoryCardsContainer items={products} addToCart={addToCart} />
         <CartListContainer items={cart} onRemove={handleRemove} />
      </div>
   );
}
