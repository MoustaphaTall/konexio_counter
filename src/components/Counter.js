import React from 'react';
import Button from './Button'

class Counter extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.count}</h2>
                <Button onClickFn={this.props.incrementFn} backColor="green">+</Button>
                <Button onClickFn={this.props.decrementFn} backColor="red">-</Button>
            </div>
        );
    }
}

export default Counter;