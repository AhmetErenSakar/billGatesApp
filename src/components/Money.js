import React from 'react'


import { useSelector } from 'react-redux'

function Money() {

    const money = useSelector(state => state.money.money)

    return (
        <div className='Money'>${money}</div>
    )
}

export default Money