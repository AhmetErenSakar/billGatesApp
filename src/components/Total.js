import React from 'react'


import { useSelector } from 'react-redux'

function Total() {

    const money = useSelector(state => state.money.money)
    const baskets = useSelector(state => state.money.basket)

    let totalMoney = 100000000000 - money;
    console.log(money, 'Total');

    return (
        <div className='Total'>
            <h1>List</h1>
            {
                baskets.length > 0 &&
                baskets.map((basket, idx) => {
                    return (<div key={idx}>
                        <h2>Name:{basket.name} X Count:{basket.count} X Price:{basket.price}$ </h2>
                    </div>)
                })
            }
            <h1>spended Money: ${totalMoney}</h1>
            <h1>Total: ${money}</h1>
        </div>
    )
}

export default Total