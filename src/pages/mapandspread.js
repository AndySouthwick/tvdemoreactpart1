import React, {Component} from 'react'

export default class CreateList extends Component{
    state = {
        listItem: '',
        list: []
    }

    updateList = (listItem) => {
        this.setState((prev, list)=> ({
            listItem,
            list: [...prev.list, listItem]
        })
        )
    }
    renderNumberList = () => {
        console.log('this was ran')
        const filteredNumbers = this.state.list.filter((listItem, index) => {
            console.log(listItem)
                return listItem < 4
        })
       return filteredNumbers.map((num, i) => {
           return <li key={i}>{num}</li>
       })

    //     this.state.list.map((listItem, i) => {
    //     return <li key={i}>{listItem}</li>
    // })
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <input type="text" onChange={(event) => {
                    this.setState({
                        listItem: Number(event.target.value)
                    })
                }}/>
                <button onClick={() => this.updateList(this.state.listItem)}>submit</button>
                <ul>
                    { this.renderNumberList()}

                </ul>
            </div>
        )
    }
}