/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';

class Success extends React.Component {
  closeYuYue() {
    $("#scheduleBox").hide();
    $(".reveal-modal-bg").hide();
  }
  render() {
    return (
      <div id="scheduleBox" className="reveal-modal">
                <a className="close-reveal-modal" onClick={this.closeYuYue}></a>
                <h3>预约-讲座</h3>
                <div className="message">
                    您已成功预约 <span>{this.props.json.StartDateStr}</span>的{this.props.json.Title}，<br />
                    主讲人：{this.props.json.TeacherName}<div className="speaker-img">
                        <img src={"http://image.shenyuan.org/Images/" + this.props.json.TeacherHeadImgStr} />
                    </div>
                </div>
            </div>
      );
  }
}

export default Success;
