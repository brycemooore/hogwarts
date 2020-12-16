import React, {Component} from 'react';
import HogTile from './HogTile'
import Filter from './Filter'

export default class HogBox extends Component{

    constructor(props){
        super(props)
        this.state = {
            hogs: this.props.hogs,
            greased: false, 
            sort: "none"

        }
    }

    filteredHogs(){
        return (this.state.greased ? this.props.hogs.filter(hog => hog.greased === true) : this.props.hogs)
        //return (this.state.greased && this.props.hogs.filter(hog =>hog.greased === true))
    }

    sortHogs(hogs){
        switch(this.state.sort){
            case "none":
                return hogs 
            case "name":
                return hogs.sort((hogA, hogB) => this.compareItems(hogA.name, hogB.name))
            case "weight":
                return hogs.sort((hogA, hogB) => this.compareItems(hogA.weight ,hogB.weight))
            default:
                console.log("shouldn't see this");
        }
    }

    compareItems(a, b){ 
        return (a > b ?  1 : (a < b ? -1 : 0))
    }

    changeSort = (e) => {
        this.setState({sort: e.currentTarget.value})
    }

    changeFilter = () => {
        this.setState({greased: !this.state.greased})
    }

    generateHogs(){
        return this.sortHogs(this.filteredHogs()).map((hog, index) => <HogTile key={index} data={hog}/>)
    }

    render(){
        return(
            <div>
                <Filter changeFilter={this.changeFilter} changeSort={this.changeSort}/>
                <div className="ui grid container indexWrapper">
                    {this.generateHogs()}
                </div>
            </div>
        )
    }
}