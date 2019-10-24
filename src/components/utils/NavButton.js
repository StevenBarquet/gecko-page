import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class NavButton extends Component{
    render(){
        const { url, label, styles } = this.props
        return (
            <React.Fragment>
            <div className={styles}>
                <Link to={url}>
                    {label}
                </Link>
                <div className="nav-hover"></div>
            </div>
            </React.Fragment>
        )
    }
}

export default NavButton
