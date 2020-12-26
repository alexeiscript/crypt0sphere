import React, { Component } from 'react'
import Header from './header'

class PageWrapper extends Component {
    render() {
        return(
            <div>
                <Header />
                {this.props.children}
            </div>
        )
    }
}
export default PageWrapper
