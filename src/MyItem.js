import React from "react";

//create our first component
class Item extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     clicks: 0,
  //     remain: 10,
  //   };
  // }

  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
      remain: 20,
    };
  }

  clickMe() {
    this.setState({
      clicks: this.state.clicks + 1,
      remain: this.state.remain - 1,
    });
  }

  // clickMe() {
  //   this.setState({
  //     clicks: this.state.clicks + 1,
  //     remain: this.state.remain - 1,
  //   });
  // alert("You clicked: " + this.props.name);
  // console.log("You clicked: " + this.props.name);

  //this is how we access the props of a react element, in this case name

  render() {
    return (
      <div>
        <h1 onClick={() => this.clickMe()}>
          Hello World from {this.props.name}
        </h1>
        <span>Counting: {this.state.clicks}</span>
        <br></br>
        <span>Remaining: {this.state.remain}</span>
      </div>
    );
  }
}

export default Item;
