/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';

import $ from 'jquery';
import TabsOne from './TabsOne/TabsOne.js';
import TabsTwo from './TabsTwo/TabsTwo.js';

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: '学校介绍'
    };

  }
  render() {
    return (
      <div className="tabs-box tabs-line" id="speacil">
                <div id="div_tabs" className="tabs">
                    <div className={this.state.tab == "学校介绍" ? "item selected" : "item"} data-content="#tabContent1"  >学校介绍</div>
                </div>
                <div id="tabContent1-Content-Data" className="tab-content">
                        <iframe  src={1 == 1 ? "http://one.rrliuxue.com/iframeForNode.shtml?id=" + this.props.Sysno : ""}
      frameborder="0" marginheight="0" marginwidth="0" scrolling="no" id="iframepage" height="1000" />
                </div>
            </div>
      );
  }
  //dom加载完调用
  componentDidMount() {
    if (!!this.props.json) {
      React.render(<TabsOne Content={this.props.json[0].Content} />, document.getElementById('tabContent1-Content-Data'));
    } else {

    }

  }
  openTabsOne(e) {

    $("#tabContent1-Content-Data").html("");

    this.setState({
      tab: e.target.innerHTML
    });

    var sysNo = this.props.Sysno;

    var html = "<iframe src=\"http://one.rrliuxue.com/iframeForNode.shtml?id=\"+sysNo frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\" scrolling=\"no\" id=\"iframepage\" />";

    $("#tabContent1-Content-Data").append(html);

  }
}

export default Data;
