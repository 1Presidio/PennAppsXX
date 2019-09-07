import React from 'react';
import Image from 'Image';
import './App.css';




class App extends React.Component {

  state = {
    order: 0,
  };

  chooseOrder = () => {
    this.setState(Math.random() > 0.5);
  };


  render () {
    return (
      <div className="App">
        <header className="App-header">
          
          <Image type={this.state.order ? "fake" : "real"}></Image>
          <Image type={this.state.order ? "real" : "fake"}></Image>


          <p>
            Which one is the <b>fake</b> person?
          </p>
          
  
        </header>
      </div>
    );
  }
  
}

export default App;
