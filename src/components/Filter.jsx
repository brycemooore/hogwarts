import React, { Component } from 'react';

export default class Filter extends Component {

    render(){
        return(
            <div className=" filterWrapper">
                <div className="ui toggle checkbox">
                    <label htmlFor="greased?">Greased?  </label>
                    <input onChange={this.props.changeFilter} type="checkbox" id="greased?" />

                </div><br/>
                <input onChange={this.props.changeSort} name="sort" type="radio" id="name" value="name"/>
                <label htmlFor="name">  Sort By Name  </label>
                <input onChange={this.props.changeSort} name="sort" type="radio" id="weight" value="weight"/>
                <label htmlFor="weight">  Sort By Weight  </label><br/>
            </div>
        )
    }
}