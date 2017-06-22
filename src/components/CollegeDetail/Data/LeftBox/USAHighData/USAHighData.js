/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';

import $ from 'jquery';
import TabsOne from './TabsOne/TabsOne.js';
import TabsTwo from './TabsTwo/TabsTwo.js';

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json: props.json,
      tab: '学校介绍',
    };
  }
  render() {
    return (
      <div className="tabs-box tabs-line">
                <div id="div_tabs" className="tabs">
                    <div className={this.state.tab == "学校介绍" ? "item selected" : "item"} data-content="#tabContent1" onClick={this.openTabsOne.bind(this)}>学校介绍</div>
                    <div className={this.state.tab == "图库" ? "item selected" : "item"} data-content="#tabContent2" onClick={this.openTabsTwo.bind(this)}>图库</div>
                </div>
                <div id="tabContent1-Content-Data" className="tab-content"></div>
            </div>
      );
  }
  //dom加载完调用
  componentDidMount() {

    if (!!this.props.json[0]) {
      let content = this.props.json[0].ExContent;

      React.render(<TabsOne Content={this.props.json[0].ExContent} />, document.getElementById('tabContent1-Content-Data'));

      let markdown = require('marked');

      let htmlContent = markdown(content);

      document.getElementById('tabContent1-Content-Data').innerHTML = htmlContent;
    }

  }
  openTabsOne(e) {
    this.setState({
      tab: e.target.innerHTML
    });
    if (!!this.props.json[0]) {
      //console.log(this.props.json[0]);
      let content = this.props.json[0].ExContent;
      React.render(<TabsOne Content={this.props.json[0].ExContent} />, document.getElementById('tabContent1-Content-Data'));
      let markdown = require('marked');

      let htmlContent = markdown(content);

      document.getElementById('tabContent1-Content-Data').innerHTML = htmlContent;
    }

  }
  openTabsTwo(e) {
    this.setState({
      tab: e.target.innerHTML
    });
    if (!!this.props.jsonPic) {
      React.render(<TabsTwo Content={this.props.jsonPic} />, document.getElementById('tabContent1-Content-Data'));
    }

  }
}

export default Data;
