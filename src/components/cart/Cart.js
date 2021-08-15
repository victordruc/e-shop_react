import { useState } from "react"

const Cart = ({count})=> {
    return (
            <button>cart ({count})</button>
    )
}

const AddToCartButton = ({setCount, count})=> {
    return (
            <button onClick={()=>setCount(++count)}>+</button>
    )

}

const HOC =({cartCount})=> {
    let [count, setCount] = useState(cartCount)
    return (
        <>
            <Cart count={count}/>
            <AddToCartButton setCount={setCount} count={count}/>
        </>
    )
}

export default HOC