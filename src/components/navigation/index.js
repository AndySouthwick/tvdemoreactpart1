import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'
class Navigation extends Component{
    render(){
        return(
            <nav className="topNav">
                <ul>
                    <li><Link to="/">Manage Page</Link></li>
                    <li><Link to="/preview-page">Preview Page</Link></li>
                </ul>
            </nav>
        )
    }
}
export default Navigation