import React, { Component } from 'react';

class Increment extends Component {
    constructor(props) {
      super(props);
      this.state = {
        clicks: 0,
        show: true
      };
    }
  
    IncrementItem = () => {
      this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseItem = () => {
      this.setState({ clicks: this.state.clicks - 1 });
    }
   
  
    render() {
      return (
        <div className='increment'>
          <button onClick={this.IncrementItem}>Increase Quantity</button>
          <button onClick={this.DecreaseItem}>Decrease Quantity</button>
          { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
        </div>
      );
    }
  }

  
  export default Increment;