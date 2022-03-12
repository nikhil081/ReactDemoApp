import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count: 1
    };
    render() {
        return (
            <div>
            <span>{this.checkValue()}</span>
        </div>
        );
    }
    checkValue() {
        const { count } = this.state;
        return count === 0 ? "zero" : count;
    }
}
export default Counter;