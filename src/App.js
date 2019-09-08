import React from 'react';
import Image from './Image';
import './App.css';

class App extends React.Component {
  state = {
    order: false,
    result: "",
    img1: "",
    img2: "",
  };

  componentDidMount = () => {
    this.chooseImage();
  };

  chooseOrder = () => {
    this.setState({ order: Math.random() > 0.5 });
  };

  displayResult = (num) => {
    if (num == this.state.order) {
      this.setState({ result: "Correct!" });
    }
    else {
      this.setState({ result: "Not correct!" });
    }
  };

  chooseImage = () => {
    let numReal = Math.floor(Math.random() * 103) + 7;
    let numFake = Math.floor(Math.random() * 250);
    if (this.state.order) {
      this.setState({ img1: "./real_images/res" + String(numReal) + ".png", img2: "./fake_images/res" + String(numFake) + ".jpg" });
    }
    else {
      this.setState({ img1: "./fake_images/res" + String(numFake) + ".jpg", img2: "./real_images/res" + String(numReal) + ".png" });
    }
  };

  reset = () => {
    this.chooseOrder();
    this.chooseImage();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> The GAN Game </h1>
          <p>
            {this.state.result}
          </p>
          <Image img={this.state.img1} num="0" displayResult={this.displayResult} reset={this.reset}></Image>
          <Image img={this.state.img2} num="1" displayResult={this.displayResult} reset={this.reset}></Image>
          <p>
            Which one is the <b>fake</b> person?
          </p>
          <p>
            Made by Kevin Hong (1presidio), Evan Feder (EvanFeder), and Daniel Lee (dj59205).
          </p>
          <p>
            https://www.1presidio.github.io/
          </p>
        </header>
      </div>
    );
  }
}

export default App;
