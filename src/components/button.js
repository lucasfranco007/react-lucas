import React, { Component } from "react"



class ClassButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.initialValue ?? 0,
        };

        this.suma = this.add.bind()
        this.resta = this.rest.bind();

    };

    add = () => {
        return this.setState({ value: this.state.value + 1 });

    };
    rest = () => {
        return this.setState({ value: this.state.value - 1 });
    };


    render() {
        return (
            <div>
                <button onClick={this.suma}> sumar</button>
                <p>{this.state.value}</p>
                <button onClick={this.resta}>restar</button>
            </div>
        );
    };
};


export default ClassButton;


