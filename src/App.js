import React from 'react';
import Button from './components/Button'
import Counter from './components/Counter'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1
    }
    
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }
  
  incrementCount() {    
    this.setState({ count: this.state.count + 1 });    
  }

  decrementCount() {
    if (this.state.count !== 0) {
      this.setState({ count: this.state.count - 1 });      
    }    
  }

  render() {
    return (
      <div style={{textAlign: "center"}}>          
            <h1>Counter</h1>
            <Counter 
              count={this.state.count}
              incrementFn={this.incrementCount} 
              decrementFn={this.decrementCount}
            />                    
      </div>
    );
  }
}

export default App;