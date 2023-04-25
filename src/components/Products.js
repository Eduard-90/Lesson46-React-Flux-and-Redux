import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {

  const coffee = useSelector((state) => state.coffee)
  const isLoggedIn = useSelector((state) => state.isLoggedIn)

  const dispatchFunc = useDispatch();

  const increment = () => {
    dispatchFunc({ type: 'incrementCoffee' })
  }
  const decrement = () => {
    dispatchFunc({ type: 'decrementCoffee' })
  }

  const increase = () => {
    dispatchFunc({ type: 'increase', number: 10 })
  }

  return (
    <>
      <div className='product'>
        <span>{`Coffee: ${coffee}`}</span>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        {isLoggedIn && <button onClick={increase}>+10</button>}
      </div>
      <div className='product'>
        <span>{`Sugar: 0`}</span>
        <button>+</button>
        <button>-</button>
        {isLoggedIn && <button onClick={increase}>+10</button>}
      </div>
    </>
  )
}

export default Products