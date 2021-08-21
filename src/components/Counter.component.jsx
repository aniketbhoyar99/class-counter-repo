import React from 'react';
class Counter extends React.Component {
    Component = '';
    state = {
        mainCounter: 0
    };

    constructor(props) {
        super(props)
        this.component = props.name;
        this.increament = this.increament.bind(this);
        this.decreament = this.decreament.bind(this);
    }
    increament() {
        this.setState({ mainCounter: this.state.mainCounter + 2 });
    }
    decreament() {
        this.setState({ mainCounter: this.state.mainCounter - 2 });
    }
    componentDidMount() {
        console.log("hi....this is didMount");
    }
    componentDidUpdate() {
        console.log("this is didupdate");
    }
    componentDidCatch() {
        console.log("this daidCatch.............");
    }
    componentWillUpdate() {
        console.log("this willUpdate");
    }
    componentWillUnmount() {
        console.log("this is component willunmount");
    }
    render() {
        return (
            <div>
                <p>{this.component}</p>
                <p>{this.state.mainCounter}</p>
                <button onClick={this.increament}>+</button>
                <button onClick={this.decreament}>-</button>
            </div>
        );
    }
}
export default Counter;