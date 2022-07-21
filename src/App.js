import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

const Styles = {
  body: {
    backgroundColor: '#E3E4DB',
  }
}

function App() {
  return (
    <div style={Styles.body}>
      <Header/>
      <Section/>
      <Footer/>
    </div>
  );
}

export default App;
