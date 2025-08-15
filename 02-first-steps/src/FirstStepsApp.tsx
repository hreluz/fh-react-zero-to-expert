import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp () {
    return (
        <>
            <h1>Shopping Cart</h1>
            <ItemCounter name="Switch 2" quantity={30}/>
            <ItemCounter name="Super Switch"/>
        </>
    )
}