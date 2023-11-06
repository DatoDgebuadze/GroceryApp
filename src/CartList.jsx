export default function CartList({ productName, image, price, onRemove }) {
    function handleRemove() {
        // Call the onRemove function to remove the item from the cart
        onRemove(productName);
    }

    return (
        <div className="CartList-Card">
            <h2 id="productName">{productName}</h2>
            <h2 id="img">{Image}</h2>
            <h2 id="price">{price}</h2>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
}
