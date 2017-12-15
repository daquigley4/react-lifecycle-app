import React, { Component } from 'react';

class Hooks extends Component {
  constructor(props) {
    super(props);
    console.log("Default props assigned!", props.test);
    this.state = {
      hooks: "yes",
      count: 0
    }
    console.log("State has been initialized.");

  }

  countUp = () => {
    let count = this.state.count;
    // console.time('countUp');
    console.log("1", this.state.count);

    this.setState({count: count + 1}, () => console.log("2", this.state.count));
    console.log("3", this.state.count);
    // this.setState({count: count + 1}, ()=> console.timeEnd('countUp'))
  }

  componentWillMount = () => {
    console.log("componentWillMount!");
    this.setState({count: 0});
  }

  componentDidMount = () => {
    console.log("componentDidMount!");

    setTimeout(function(){
      console.log('some data has just been fetched from the server...');
    }, 2000);
    // this.setState({count: 100});
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(`nextState: ${JSON.stringify(nextState)}`)

    console.log('shouldComponentUpdate has been executed!')
    if(this.state.count === 102) {return false}
     return true
  }

  componentWillUpdate(nextProps, nextState){

     console.log(`this.state: ${JSON.stringify(this.state)}`)
     console.log(`nextState: ${JSON.stringify(nextState)}`)

     console.log('componentWIllUpdate has been executed!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate has been executed');
  }

  render() {
    console.log("Render has been executed!");
    return (
      <div>HOOKS
        <h3 onClick={()=>this.countUp()}>Clicks: {this.state.count}</h3>
      </div>
    )
  }
}

Hooks.defaultProps = { test: 5 }

export default Hooks;
