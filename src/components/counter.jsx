import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count: 1,
        imageUrl:'https://picsum.photos/200'
    };
    render() {
        let classes = "badge m-4 badge-";
        classes+=this.state.count===0?"warning":"primary";
        return (
            <div>
                <img src={this.state.imageUrl}/>
            <span className={classes}>{this.checkValue()}</span>
        </div>
        );
    }
    checkValue() {
        const { count } = this.state;
        return count === 0 ? "zero" : count;
    }
}
export default Counter;