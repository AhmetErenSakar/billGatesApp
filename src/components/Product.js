import { useState } from 'react'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { addProduct, removeProduct } from '../redux/moneySlice';



function Product({ item }) {

    const [price, setPrice] = useState();

    const money = useSelector(state => state.money.money)
    const dispatch = useDispatch();

    function add(id) {
        if (money >= price) {
            dispatch(addProduct(id));
        }
    }
    function remove(id) {
        dispatch(removeProduct(id));
    }

    return (
        <div className='Product'>
            <img src={item.link} alt={item.name} />
            <p>{item.name}</p>
            <h3 className='Price'>${item.price}</h3>
            <div className='butons'>
                <button className='Sell' onClick={() => remove({ id: item.id })}>Sell</button>
                <input value={item.count} placeholder={item.count} />
                <button className='Buy' onClick={() => {
                    add({ id: item.id })
                    setPrice(item.price)
                }}>Buy</button>
            </div>
        </div>
    )
}

export default Product