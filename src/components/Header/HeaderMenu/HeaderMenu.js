//HeaderMenu.js
/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import Link from '../../../utils/Link';
import $ from 'jquery';

class HeaderMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: "one"
    };
  }

  changeState(e) {
    let dataStr = $(e.target).attr("data-value");
    this.props.click(dataStr);
  }
  render() {

    return (

      <ul className="menu" id="menu">
            <li><label data-value="/"  className={this.props.data == "/" ? "active" : ""} onClick={this.changeState.bind(this)} ><a className="home-menu " data-value="/" href="/" onClick={Link.handleClick} ></a></label><div className="bg"></div></li>
            <li><label data-value="/FreeGuide"  className={this.props.data == "/FreeGuide" ? "active" : ""} onClick={this.changeState.bind(this)}><a className="free-menu" data-value="/FreeGuide" href="/FreeGuide" onClick={Link.handleClick} ></a></label><div className="bg"></div></li>
            <li><label data-value="/OpenClass"  className={this.props.data == "/OpenClass" ? "active" : ""} onClick={this.changeState.bind(this)} ><a className="open-class-menu" data-value="/OpenClass" href="/OpenClass" onClick={Link.handleClick}  ></a></label><div className="bg"></div></li>
            <li><label data-value="/AdvisoryLibrary"  className={this.props.data == "/AdvisoryLibrary" ? "active" : ""} onClick={this.changeState.bind(this)} ><a className="news-menu" data-value="/AdvisoryLibrary" href="/AdvisoryLibrary" onClick={Link.handleClick} ></a></label><div className="bg"></div></li>
            <li><label data-value="/College"  className={this.props.data == "/College" ? "active" : ""} onClick={this.changeState.bind(this)} ><a className="college-menu" data-value="/College" href="/College" onClick={Link.handleClick} ></a></label><div className="bg"></div></li>
          </ul>
      );
  }
  componentDidMount() {
    //高端申请导航备份
    // <li className="disabled"><label data-value="six" ><a className="tutor-menu" href="#" ></a></label><div className="bg"></div></li>
    // 雅思导航
    // <li><label><a className="yasi-menu" href="http://yasi.rrliuxue.com/" target="_blank" ></a></label><div className="bg"></div></li>
  }
}

export default HeaderMenu;
