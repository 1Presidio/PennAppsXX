import React from 'react';


class Image extends React.Component {

  
  handleClick = () => {
    this.props.displayResult(this.props.num);
    this.props.reset();
  };

  render() {
    return (
      <img src={this.props.img} onClick={this.handleClick} alt="image" />
    );
  }
  }
  
  export default Image;
  