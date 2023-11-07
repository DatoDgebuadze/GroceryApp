export default function CartList({ productName, brand, price, onRemove, id }) {


    return (
        <div className="CartList-Container">
            <h2 id="productName">{productName}</h2>
            <h2 id="brand">{brand}</h2>
            <h2 id="price">{price}</h2>
            <button onClick={() => onRemove(id)}>Remove</button>
        </div>
    );
}
