import React from "react";
import Hero from "../../components/Hero/Hero";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero hero={Hero}></Hero>
      </div>
    );
  }
}
export default Home;
