import React, { Component } from "react";

export class Help extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }
  componentWillMount(){
    window.location = this.state.route.loc;
  }
  render(){
    return (<section>Redirecting...</section>);
  }
}

export default Help;