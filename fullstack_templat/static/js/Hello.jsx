var $ = require('jquery');
import React from "react";
require('../css/fullstack.css');

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Hello' + this.props.name + '!'
    };
    // this binding is necessary to make `this` work in the callback
    this.getPythonHello = this.getPythonHello.bind(this);
  }
  getPythonHello() {
    $.get('http://127.0.0.1:5000/hello', (data) => {
      console.log(data);
      this.personaliseGreeting(data);
    })
  }
  personaliseGreeting(greeting) {
    let len = this.props.len;
    let index = Math.floor(Math.random()*len);
    this.props.handleName(index);
    this.setState({
      greeting: greeting + ' ' + this.props.name + '!'
    });
  }
  render () {
    return (
      <div className="header-contents col-md-8 col-md-offset-4">
        <h1>{this.state.greeting}</h1>
        <hr/>
        <button type="button" className="btn btn-lg btn-danger" onClick={this.getPythonHello}>
          Say Hello!
        </button>
      </div>
    )
  }
}