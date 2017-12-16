import React from "react";
import Hello from "./Hello";

import HeaderBackgroundImage from '../images/header.jpg';
require('../css/fullstack.css');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: ['李世民', '武则天', '亚历山大', '拿破仑', '希特伦', '帅气的风哥', '潇洒的诚哥', '隔壁老王', '落寞的背影', '飞天小猪侠', '奥特曼', '秦始皇'],
      personName: '李世民'
    }
  }
  addHeaderImg() {
    let headerBg = new Image();
    headerBg.src = HeaderBackgroundImage;
  }
  handleName(index) {
    this.setState({
      personName: this.state.person[index]
    });
  }
  getName() {
    return this.state.personName;
  }
  render () {

    return (
      <div>
        {this.addHeaderImg()}
        <Hello
          name={this.getName()}
          handleName = {this.handleName.bind(this)}
          len={this.state.person.length}
        />
      </div>
    )
  }
}