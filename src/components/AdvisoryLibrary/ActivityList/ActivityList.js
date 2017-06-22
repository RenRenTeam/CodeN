/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './ActivityList.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';

@withStyles(styles)
class ActivityList {

  render() {
    return (
      <div className="activityList">
        <div className="title">活动</div>
        <div className="border"></div>
        <ul className="activityUl">
            <li>
            <a href="http://dashan.rrliuxue.com/" target="_blank">
                <div className="left img">
                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/renren-Activeity-1.jpg" />
                </div>
                <div className="right content">
                    1+3留美直通车<br />
                    高考不是唯一的出路！
                    <div className="bt-join">
                        <a href="http://dashan.rrliuxue.com/" target="_blank"><button className="button-line">立即查看</button></a>
                    </div>
                </div>
                <div className="clear"></div>
                </a>
            </li>
            <li>
            <a href="http://one.rrliuxue.com/review/wl_review.shtml" target="_blank">
                <div className="left img">
                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/renren-Activeity-2.jpg" />
                </div>
                <div className="right content">
                    人人留学 雅思访谈<br />
                    往期回顾
                    <div className="bt-join">
                        <a href="http://rrliuxue.com/review/wl_review.shtml" target="_blank"><button className="button-line">立即查看</button></a>
                    </div>
                </div>
                <div className="clear"></div>
                </a>
            </li>
            <li className="last">
            <a href="/ActivityPage-runningMan" target="_blank">
                <div className="left img">
                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/renren-Activeity-3.jpg" />
                </div>
                <div className="right content">
                    留学教育界的跑咖，激烈刺激的撕裂场面，以撕会友，用跑结缘！
                    <div className="bt-join">
                        <a href="/ActivityPage-runningMan" target="_blank"><button className="button-line">立即查看</button></a>
                    </div>
                </div>
                <div className="clear"></div>
                </a>
            </li>
        </ul>
    </div>
    );
  }

}

export default ActivityList;
