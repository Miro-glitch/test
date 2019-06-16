import React from 'react';

class X extends React.Component {
    constructor() {
        super();
        this.state = {
          today:(15 + 17)/2
        }
    }

    render() {
     const yesterday = 15
     const tomorow = 17
     const today = (yesterday + tomorow)/2
     const { text } = this.props
      return (
        <React.Fragment>  
        <p>
            {text} {this.state.today}
        </p>
        <button onClick={()=> { this.setState({today: this.state.today + 1})}}> increase </button>
        </React.Fragment>
      )
    }
}


export default X
