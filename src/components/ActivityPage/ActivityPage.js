/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './ActivityPage.less';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';
import AppActions from '../../actions/AppActions';
import $ from 'jquery';

@withStyles(styles)

class ActivityPage extends React.Component{

  static contextTypes = {
      onSetTitle: PropTypes.func.isRequired
  };

  render() {

    let title = '活动－人人留学';
    this.context.onSetTitle(title);

    return (
        <div>
          <div className="activityPage_Node activityPage_Node1">
            <img src = "http://7xnmna.com2.z0.glb.qiniucdn.com/activivtyB_Banner.jpg" className="activivty_Banner" />
            <img src = "http://7xnmna.com2.z0.glb.qiniucdn.com/activivtyB_Content.jpg" className="activivty_Content" />
          </div>
          <div className="activityPage_Node activityPage_Node2">
            <img src = "http://7xnmna.com2.z0.glb.qiniucdn.com/activivty_Banner.jpg" className="activivty_Banner" />
            <img src = "http://7xnmna.com2.z0.glb.qiniucdn.com/activivty_Content.jpg" className="activivty_Content" />
          </div>
        </div>
    );
  }
  componentDidMount() {

        var url = window.location.href;

        url = url.substr(url.indexOf('/ActivityPage-') + ('/ActivityPage-').length);
        
        var content = decodeURI(url.split('-')[0]);


        if(content == "owen"){
            $(".activityPage_Node2").hide();
        }else{
            $(".activityPage_Node1").hide();
        }
  }
}

export default ActivityPage;
