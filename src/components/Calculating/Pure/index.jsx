import {PureComponent, Component} from 'react';

class Pure extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
    
    setInterval(() => {
      this.setState({
        counter: 0
      });
    }, 1000);
  }
  
  render() {
    return <b>Counter: {this.state.counter}</b>
  }
}

export default Pure;