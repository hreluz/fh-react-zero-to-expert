import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    {productName: 'Nintendo Switch 2', quantity: 5},
    {productName: 'Play Station 4', quantity: 6},
    {productName: 'Play Station 5', quantity: 3},
    {productName: 'Play Station 3', quantity: 5},
]

export function FirstStepsApp () {
    return (
        <>
            <h1>Shopping Cart</h1>
            {
                itemsInCart.map((item => (
                    <ItemCounter name={item.productName} quantity={item.quantity}/>
                )))
            }
        </>
    )
}