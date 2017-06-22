/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';

import $ from 'jquery';
import Items from './Items/Items.js';

class List extends React.Component {

  render() {
    var arr = [];
    //console.log(this.props.flag);
    if (this.props.flag == "jp") {
      arr.push(
        <div className="list">
                       <div>
                            <div className="item">
                                <a href="http://dashan.rrliuxue.com/" target="_blank">
                                    <img src="http://passport.shenyuan.org/WebResources/Default/images/JP/act1.jpg" />
                                </a>
                            </div>
                            <div className="item">
                                <a href="http://one.rrliuxue.com/review/wl_review.shtml" target="_blank">
                                    <img src="http://passport.shenyuan.org/WebResources/Default/images/JP/act2.jpg" />
                                </a>
                            </div>
                        </div>
                    </div>
      );
    } else {
      arr.push(
        <div className="list">
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
                    </div>
      );
    }
    return (
      <div>
                {arr}
            </div>
      );
  }
  //dom加载完调用
  componentDidMount() {
    $(document).ready(function() {})
  }
}

export default List;
