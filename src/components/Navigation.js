import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import "./Navigation.css";
class Navigation extends Component {
  render() {
    return (
      <div className="navbar" style={{ background: "transparent" }}>
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={0}
        >
          <a href="">درباره من</a>
        </Link>
        <Link
          activeClass="active"
          to="Skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
        <a href="">مهارت من</a>
        </Link>
      </div>
    );
  }
}

export default Navigation;
