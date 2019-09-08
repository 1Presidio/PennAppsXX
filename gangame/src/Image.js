import React from 'react';


class Image extends React.Component {

  state = {
    img: "",
  }


  chooseImage = () => {
    if (this.props.type === "real") {

    }
    else if (this.props.type === "fake") {

    }
  };

  handleClick = () => {
    this.props.displayResult(this.props.type === "fake");
    this.chooseImage();
  };


  render() {
    return (
      <img src={this.state.img} onClick={this.handleClick} />
    );
  }
  }
  
  export default Image;
  