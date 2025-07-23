const CartItem = ({ cartItem}) => {
    const {name, quantity, imageUrl, price} = cartItem;
    return(
        <>
            <div className="list-row flex gap-3">
                <div className="w-10 h-10 relative overflow-hidden rounded">
                    <img src={imageUrl} className="absolute w-full h-full object-cover" />
                </div>
                <div>
                    <div>{name}</div>
                    <div className="text-xs font-semibold opacity-60">{quantity} : {quantity * price}$</div>
                </div>
            </div>
        </>
    )
}

export default CartItem