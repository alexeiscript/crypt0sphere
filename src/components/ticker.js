import TickerAPI from "./tickerAPI"
import '../assets/scss/ticker.scss'

function Ticker() {

    const symbols = [
        {name: 'BTC'},
        {name: 'ETH'},
        {name: 'LTC'},
        {name: 'LINK'},
        {name: 'XRP'}
    ]

    return(
        <div className="price">
            {
                symbols.map((symbol, index) => {
                    return(
                        <div className="ticker-div">
                            <p>{symbol.name}</p>
                            <TickerAPI key={index} ticker={symbol.name}/>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Ticker