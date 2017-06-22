/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Recommendation.less';
import withViewport from '../../../../decorators/withViewport';
import withStyles from '../../../../decorators/withStyles';
import $ from 'jquery';

@withStyles(styles)
class Recommendation {

  render() {

        let nodesStr="";
        let arrStr=this.props.data;
        let CountryStr=this.props.Country;
        if(arrStr&&arrStr.length>0){
            if(arrStr.length>5){  arrStr.length=5;  }
            //console.log(arrStr);
            nodesStr=this.props.data.map(function(obj){
                return(
                        <li>
                            <a href={"/AdvisoryDetail?id="+obj.Sysno+"&myData="+CountryStr}>
                                {obj.Title}
                            </a>
                        </li>
                    );
            });
        }
    return (
        <div className="right adPart">
            <div className="dv_title">
                <div>
                    <div className="left titleFont">相关推荐</div>
                    <div className="clear"></div>
                </div>
            </div>
            <div className="border_bottom"></div>
            <div className="contentUl">
                <ul>
                    {nodesStr}
                </ul>
            </div>
        </div>
    );
  }
    componentDidMount() {
       /* console.log("this is Recommendation");
        console.log(this.props.SysnoData);*/
    }

}

export default Recommendation;
