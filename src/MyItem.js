import React from "react";

//create our first component
class Item extends React.Component {
  clickMe() {
    alert("You clicked: " + this.props.name);
    console.log("You clicked: " + this.props.name);

    //this is how we access the props of a react element, in this case name
  }

  render() {
    return (
      <h1 onClick={() => this.clickMe()}>
        Hello World
        <br />
        My name is {this.props.name}
        <br />
        <small>this is a test</small>
      </h1>
    );
  }
}

export default Item;
