import React from 'react';
import Image from './Image';
import './App.css';




class App extends React.Component {

  state = {
    order: 0,
    result: "",
  };

  chooseOrder = () => {
    this.setState({order: Math.random() > 0.5});
  };

  displayResult = (right) => {
    if (right) {
      this.setState({result: "Correct!"});
    }
    else {
      this.setState({result: "Not correct!"});
    }
  };


  render () {
    return (
      <div className="App">
        <header className="App-header">

          <p>
            {this.state.result}
          </p>
          
          <Image type={this.state.order ? "fake" : "real"} displayResult={this.displayResult}></Image>
          <Image type={this.state.order ? "real" : "fake"} displayResult={this.displayResult}></Image>


          <p>
            Which one is the <b>fake</b> person?
          </p>
          
  
        </header>
      </div>
    );
  }
  
}

export default App;
