import React, { Component } from "react";
import logo from './logo.svg';
import "./App.css";
import Titles from "./sections/TitlesAndIcon";
import Abouts from "./sections/AboutSection";
import Skills from "./sections/SkillsSection";
import Turn from "./sections/TurnSection";
import Navigation from "./components/Navigation";
import SnowStorm from "react-snowstorm";
import { Link, Element } from "react-scroll";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
      b_first: "black",
      b_second: "green",
      b_third: "blue",
      b_four: "red",
      pluser: 0
    };
  }
  changeColor = () => {
  
    let col =  "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
    let bcol =  "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
    
      this.setState({
        color: col,
        b_first: bcol,
        b_second: bcol,
        b_third: bcol,
        b_four: bcol,
        pluser: this.state.pluser + 1
      });
  };
  render() {
    return (
      <div className="App">
      <SnowStorm animationInterval = {10} snowCharacter = {"*"} flakesMax = {500} />
        <Element name="Home" className="element" />
        <Navigation background={this.state.background} />
        <div className="changetheme">
          <img onClick={this.changeColor} src="images/thm.png" alt="" />
        </div>

        <Titles
          color={this.state.color}
          background={this.state.b_first}
        />
        <Abouts
          color={this.state.color}
          background={this.state.b_second}
        />
        <Skills
          color={this.state.color}
          background={this.state.b_third}
        />
        <Turn
          color={this.state.color}
          background={this.state.b_four}
        />
      </div>
    );
  }
}

export default App;
