/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes} from 'react';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link.js';
import styles from './NotFoundPage.less';

@withStyles(styles)
class NotFoundPage extends React.Component  {

           static contextTypes = {
                onSetTitle: PropTypes.func.isRequired
            };

          render() {
                    let title = '404－人人留学';
                    this.context.onSetTitle(title); 
                    return (
                      <div id = "notFound_Node" >
                              <img className = "title" src = "http://passport.shenyuan.org/WebResources/Default/images/404/title.png" / >
                              <img className = "content" src = "http://passport.shenyuan.org/WebResources/Default/images/404/content.png" / >
                              <div className = "iconPart" >
                                      <div className = "iconItem" >
                                            <a href = "/"  onClick={Link.handleClick}>
                                                    <i className = "icon iconA" > < /i>返回首页 
                                            </a> 
                                      </div> 
                                      <div className = "iconItem middle_div" >
                                              <a href = "/FreeGuide"  onClick={Link.handleClick} >
                                                    <i className = "icon iconB" > < /i>去申请 
                                              </a> 
                                      </div> 
                                      <div className = "iconItem" >
                                              <a href = "/College"  onClick={Link.handleClick} >
                                                      <i className = "icon iconC" > < /i>去院校库 
                                              </a> 
                                      </div> 
                                      <div className = "clear" > < /div> 
                              </div> 
                      </div>
                    );
          }
          componentDidMount() {
            $("#app").children().eq(0).css("height","100%");
          }
}

export default NotFoundPage;
