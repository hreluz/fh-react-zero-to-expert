import { useState } from "react";

interface Props {
    name: string;
    quantity?: number;
}

export const ItemCounter = ({name, quantity = 1}: Props) => {

  const [counter, setCounter] = useState(quantity);

  const handleAdd = () => {
    setCounter(counter + 1);
  }

  const handleSubstract = () => {
    if(counter == 1) return;
    setCounter(counter - 1);
  }

  return (
    <section style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginTop: 10,
    }}>
        <span
            style={{
                width: 150
            }}
        >{name}</span>
        <button onClick={handleAdd}>+1</button>
        <span>{counter}</span>
        <button onClick={handleSubstract}>-1</button>
    </section>
  )
}
