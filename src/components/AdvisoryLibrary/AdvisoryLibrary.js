/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './AdvisoryLibrary.less';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';


import Body from './Body/Body.js';
import ActivityList from './ActivityList/ActivityList.js';
import $ from 'jquery'

@withStyles(styles)
class AdvisoryLibrary { 

  static contextTypes = { 
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = '资讯库 - 人人留学';
    this.context.onSetTitle(title);
    return (
      <section className="advistory-box">
        <div className="tabs-box">
            <div id="loadAdvisoryBody">

            </div>
            <ActivityList />
            <div className="clear"></div>
        </div>
    </section>
    );
  }
  componentDidMount() { 
      var url = window.location.href;
      url = url.substr(url.indexOf('/AdvisoryLibrary') + ('/AdvisoryLibrary').length+1);
      if(!url){url="";}
      React.render(<Body country={url}/>,document.getElementById('loadAdvisoryBody'));  
    
  }
}

export default AdvisoryLibrary;
