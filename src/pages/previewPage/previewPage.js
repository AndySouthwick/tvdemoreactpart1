import React, {Component} from 'react'
import SideNav from '../../components/sideNav'

class PreviewPage extends Component {
    render(){
        return(
            <div>
                <SideNav title="Big Bang Theory" rating={true}/>
            </div>
        )
    }
}
export default PreviewPage