import React, { Component } from 'react'
import NumberFormat from 'react-number-format'

class TickerAPI extends Component {

    constructor(props) {
        super(props)

        this.state = {
            price: null,
        }

        this.pollPrice = this.pollPrice.bind(this)
    }

    componentDidMount() {
        this.pollPrice()
        setInterval(this.pollPrice, 100000);
    }

    pollPrice() {
        let symbol = this.props.ticker;
        let url = 'https://min-api.cryptocompare.com/data/price?fsym='+symbol+'&tsyms=USD';
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            this.setState(() => ({
                price: json.USD
            }))
        })
    }

    render() {
        return (
            <NumberFormat 
                displayType={'text'} 
                prefix={'$'} 
                value={this.state.price} 
                decimalScale={2} 
                thousandSeparator={true}
            />
            
        )
    }
}

export default TickerAPI
