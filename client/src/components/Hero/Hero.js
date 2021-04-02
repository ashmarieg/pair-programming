import React from "react";
import heroImage from "../../assets/SomeGoodBadAdviceHero.jpg";
import "./Hero.scss";

class Hero extends React.Component {
  render() {
    return (
      <div class="hero">
        <h1 className="hero__heading">Some Good Bad Advice</h1>
        <img className="hero__image" src={heroImage}></img>
        <h2 className="hero__subheading">For anyone needing advice! </h2>
      </div>
    );
  }
}

export default Hero;
