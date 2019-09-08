import React from 'react';


class Image extends React.Component {

  state = {
    img: "",
  }


  chooseImage = () => {
    if (this.props.type === "real") {
      let num = Math.floor(Math.random() * 203) + 7;
      this.setState({img: "./real_images/res" + String(num)+ ".png"});
    }
    else if (this.props.type === "fake") {
      let num = Math.floor(Math.random() * 250);
      this.setState({img: "./fake_images/res" + String(num)+ ".jpg"});
    }
  };

  handleClick = () => {
    this.props.displayResult(this.props.type === "fake");
    this.chooseImage();
    this.props.reset();
    console.log("hey");
  };


  render() {
    return (
      <img src={this.state.img} onClick={this.handleClick} alt="image" />
    );
  }
  }
  
  export default Image;
  