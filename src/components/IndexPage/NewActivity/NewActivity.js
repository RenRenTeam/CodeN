/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './NewActivity.less';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery';
import List from './List/List.js';
import CSliserList  from './CSliserList/CSliserList.js';
var CSlider = require('react-slick');
import Common from "../../../utils/Common.js";

@withStyles(styles)
class NewActivity  extends React.Component{
    constructor(props) {
        super(props);
    }

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    loadActivityData(){

    }
    render() {
        return (
            <section className="new-activity">
                <h1>活动</h1>
                <div className="activity-box">
                    <div className="activity-slide">
                        <div id="leftListAct"></div>
                        <div className="clear"></div>
                    </div>
                </div>
                <div id="rightListAct"></div>
                <div className="clear"></div>
            </section>
        );
    }
    //dom加载完调用
    componentDidMount(){
            var flag = this.props.flag;
        $(document).ready(function(){
            $.ajax({
                url: "http://service.shenyuan.org/ActiveService/SearchForJs/PageIndex=1;PageSize=2;CallBack=success_NewActivty_jsonpCallback",
                type: "get",
                dataType: "jsonp",
                async: false,
                jsonp: "callbackparam",
                jsonpCallback: "success_NewActivty_jsonpCallback",
                success: function (json) {
                    React.render(<List json={json} flag={flag}/>, document.getElementById('rightListAct'));
                },
                error: function (e) {
                  //console.log(e);
                  Common.errorLog(e);
                }
            });

            $.ajax({
                url: "http://service.shenyuan.org/ActiveService/SearchForJs/PageIndex=1;PageSize=3;CallBack=success_NewActivtys_jsonpCallback",
                type: "get",
                dataType: "jsonp",
                async: false,
                jsonp: "callbackparam",
                jsonpCallback: "success_NewActivtys_jsonpCallback",
                success: function (json) {

                    React.render(<CSliserList json={json}  flag={flag}/>, document.getElementById('leftListAct'));
                },
                error: function (e) {
                  //console.log(e);
                  Common.errorLog(e);
                }
            });

        });
    }
}

export default NewActivity;
