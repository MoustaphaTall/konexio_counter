import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <button 
                onClick={this.props.onClickFn}
                style={{
                    width: 200,
                    height: 35,
                    color: "white",
                    backgroundColor: this.props.backColor
                }}
            >{this.props.children}</button>
        );
    }
}

export default Button;