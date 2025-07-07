const CartItem = ({ cartItem}) => {
    const {name, quantity, imageUrl, price} = cartItem;
    return(
        <>
            <div className="list-row flex gap-3">
                <div><img src={imageUrl} className="w-10 rounded-xl"/></div>
                <div>
                    <div>{name}</div>
                    <div className="text-xs uppercase font-semibold opacity-60">{quantity}</div>
                </div>
            </div>
        </>
    )
}

export default CartItem