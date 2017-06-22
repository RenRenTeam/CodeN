/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import Link from '../../../../../utils/Link';
import $ from 'jquery'

class HuiGu {

  render() {

    return (
      <div className="past-reviews-box">
                    <div className="title">
                        <h3>往期回顾</h3>
                    </div>
                    <div className="past-class-list-box">
                        <div className="past-class-item">
                            <div className="past-class-img"><a href="http://one.rrliuxue.com/review/wl_review.shtml"><img src="http://7xnmna.com2.z0.glb.qiniucdn.com/renren-Activeity-2.jpg" /></a></div>
                            <div className="past-class-info">
                                <h5><a href="http://one.rrliuxue.com/review/wl_review.shtml">人人留学 雅思访谈</a></h5>
                                已预约：117人
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="past-class-item">
                            <div className="past-class-img"><img src="http://image.shenyuan.org/Images/20151115/%E5%8D%8E%E5%B1%B1%E8%AE%BA%E5%89%91315-23020151115155404.jpg" /></div>
                            <div className="past-class-info">
                                <h5>人生赢家——500强高管Omar.Wang邀你华山论剑</h5>
                                已预约：12人
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
      );
  }
}

export default HuiGu;
