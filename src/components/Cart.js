import React, {useState, useContext} from "react"
import {Context} from "./Context"
import CartItem from "./CartItem"

const Cart = () => {
    const [btnText, setBtnText] = useState("Place Order")

    const {cartItems, emptyCart} = useContext(Context)

    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    
    const placeOrder = () => {
        setBtnText("Ordering...")
        setTimeout(() => {
            setBtnText("Place Order")
            emptyCart()
        }, 2000)
    }

    return (
        <main className="cart-page">
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>

            {
                cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={placeOrder}>{btnText}</button>
                </div> :
                <p>Your cart is empty.</p>
            }
            
        </main>
    )
}

export default Cart
