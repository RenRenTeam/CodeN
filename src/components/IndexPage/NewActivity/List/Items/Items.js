/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';

import $ from 'jquery'

class Items extends React.Component {

  render() {

    return (
      <div>
                <div className="item">
                    <a href="http://dashan.rrliuxue.com/" target="_blank">
                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/renren-Activeity-1.jpg" />
                    </a>
                </div>
                <div className="item">
                    <a href="http://one.rrliuxue.com/review/wl_review.shtml" target="_blank">
                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/renren-Activeity-2.jpg" />
                    </a>
                </div>
            </div>
      );
  }
  //dom加载完调用
  componentDidMount() {}
}

export default Items;
