import React from "react";

class StarWars extends React.Component {
  constructor() {
    super();

    this.state = {
      loaded: false,
      name: null,
      height: null,
      homeWorld: null,
      films: [],
      gender: null,
    };
  }

  clickNow() {
    const randomNumber = Math.round(Math.random() * 82);
    const url = `https://swapi.dev/api/people/${randomNumber}/`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          loaded: true,
          name: data.name,
          height: data.height,
          homeWorld: data.homeworld,
          films: data.films,
          gender: data.gender,
        });
      });
    // console.log("clicked");
  }

  render() {
    return (
      <>
        <h1>This is star wars</h1>
        {this.state.loaded && (
          <div>
            <h2>Name: {this.state.name}</h2>
            <p>Height in cm: {this.state.height}</p>
            <p>
              Homeworld: <a href={this.state.homeWorld}>press the link</a>{" "}
            </p>
            <ul>
              <li>Films: {this.state.films}</li>
            </ul>
          </div>
        )}

        <button type="button" className="btn" onClick={() => this.clickNow()}>
          click
        </button>
      </>
    );
  }
}

export default StarWars;
