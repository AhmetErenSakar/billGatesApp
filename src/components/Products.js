import React from 'react'

import Product from './Product'
import { useSelector } from 'react-redux'

function Products() {

    const items = useSelector(state => state.money.items)

    console.log(items)
    return (
        <div className='Products'>
            {items.map(item => <Product key={item.id} item={item} />)}
        </div>
    )
}

export default Products