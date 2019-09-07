




class Image extends React.Component {

  state = {
    img: "",
  }


  chooseImage = () => {
    if (this.props.type === "real") {

    }
    elsif (this.props.type === "fake") {
      
    }
  };

  handleClick = () => {
    this.chooseImage();
  };


  render() {
    return (
      <div className="Image">

        <img src={img} />

      </div>
    );
  }
  }
  
  export default Image;
  