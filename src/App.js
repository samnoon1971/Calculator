
import './App.css';
import Display from "./component/Display";
import calculate from "./logic/calculate";
import ButtonPanel from "./component/ButtonPanel"
import React from "react";

export default class App extends React.Component{
  state = {
    total: null,
    next: null,
    operation: null,
  };
  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  }
  render(){
    return(
        <div className="component-app">
          <Display value={this.state.next || this.state.total || "0"} />
          <ButtonPanel clickHandler={this.handleClick} />
          <footer id="footerName">S M Samnoon Abrar</footer>
        </div>
    );
  }
}