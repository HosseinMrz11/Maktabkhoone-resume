import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import SkillCard from "../components/SkillCard.js";

import "./SkillsSection.css";
import DownImg from "../components/DownImg.js";
import { Link, Element } from "react-scroll";

class SkillsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Fullpage className="third" background={this.props.background}>
          <h3 style={{ color: this.props.color }}> {data.sections[1].title}</h3>
          <div className="cards-wrapper">
            {data.sections[1].items.map(card => {
              return <SkillCard card={card} />;
            })}
          </div>
        </Fullpage>

        <Link
            activeClass="active"
            to="Turn"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            delay={0}
          >
            <DownImg background={this.props.background}/>
          </Link>
          <Element name="Turn" className="element" />
      </div>
    );
  }
}

export default SkillsSection;
