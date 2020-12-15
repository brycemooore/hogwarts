import React, {Component} from 'react';


export default class HogTile extends Component{


    constructor(props){
        super(props);
        this.state = {
            dataShowing: false,
            hogShowing: true
        }
    }

    showData(){
       return (this.state.dataShowing ? null : "hidden")
    }

    showHog(){
        return (this.state.hogShowing ? null : "hidden");
    }

    handleDataShowingChange = (e) => {
        let currentState = this.state.dataShowing
        this.setState({dataShowing: !currentState});
    }

    handleHogShowingChange = (e) => {
        let currentState = this.state.hogShowing
        this.setState({hogShowing: !currentState});
    }

    render(){

        return(
            <div onClick={this.handleDataShowingChange} className={`ui eight wide column pigTile ${this.showHog()}`}>
                <h3>{this.props.data.name}</h3>
                <img className="minPigTile"alt="" src={require("../hog-imgs/" + this.props.data.name.toLowerCase().replace(/ /g, "_") + ".jpg")}/>
                <div className={`${this.showData()}`}>
                    <p className="hoggyText">Specialty: {this.props.data.specialty}</p>
                    <p className="hoggyText">Weight: {this.props.data.weight}</p>
                    <p className="hoggyText">Greased: {(this.props.data.greased).toString()}</p>
                    <p className="achievementText">Highest Medal: {this.props.data['highest medal achieved']}</p>
                </div>
                <div>
                    <button onClick={this.handleHogShowingChange} >Fly Away</button>
                </div>
            </div>
        )
    }
}