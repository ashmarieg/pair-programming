import React from "react";

class Hero extends React.Component {
  render() {
    return (
      <div class="hero">
        <h1 className="hero__heading">Some Good Bad Advice</h1>
        <img
          className="hero__image"
          src="../../assets/SomeGoodBadAdviceHero.jpg"
        ></img>
        <h2 className="hero__subheading">Know anyone </h2>
      </div>
    );
  }
}

export default Hero;
