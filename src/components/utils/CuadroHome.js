import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class CuadroHome extends Component{
    render(){
        const { text, label, styles, url } = this.props
        return (
            <React.Fragment>
            <div className={styles}>
                <div className="img-container"><img src={url} alt="label" width="100%"/></div>
                <h5>{label}</h5>
                <p>{text}</p>
            </div>
            </React.Fragment>
        )
    }
}

export default CuadroHome
