import React, {Component} from 'react'


class CentralBoxHome extends Component{
    render(){
        const { text, styles, url } = this.props
        return (
            <React.Fragment>
            <div className={styles}>
                <div className="img-container"><img src={url} alt="label" width="100%"/></div>
                <p>{text}</p>
            </div>
            </React.Fragment>
        )
    }
}

export default CentralBoxHome
