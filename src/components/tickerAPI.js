import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NumberFormat from 'react-number-format'

export const TickerAPI = (props) => {
    const [price, setPrice] = useState();

    const getPrice = () => {
        let symbol = props.ticker;
        axios.get('https://min-api.cryptocompare.com/data/price?fsym='+symbol+'&tsyms=USD')
        .then((response) => setPrice(response.data))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        getPrice()
        setInterval(getPrice, 10000)
    }, [])

    // handling undefined error -> checking initial price
    if (!price) {
        return null;
    }

    return (
        <NumberFormat 
            displayType={'text'} 
            prefix={'$'} 
            value={price.USD} 
            decimalScale={2} 
            thousandSeparator={true}
        />
    )
}
