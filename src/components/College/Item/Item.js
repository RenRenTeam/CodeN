/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';
import Link from '../../../utils/Link';
import Common from '../../../utils/Common.js';

class Item extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      follow: "",
      likePush: true
    };

  }
  render() {
    return (
      <li>
                    <div className="xuexiao">
                        <div className="xuexiao_top">
                            {this.props.json.Name}<span className="xuexiao_top_x">|</span> <span className="xuexiao_zi">{this.props.json.EnglishName}</span>
                        </div>
                        <div className="xuexiao_bot">
                            <div className="xuexiao_bot_left">
                                <a className="eachGetHrefA" target="_blank"  href={1 == 1 ? "/CollegeDetail-" + this.props.country + "-" + this.props.school + "-" + this.props.json.Sysno : ""} >
                                    <img src={this.props.json.Logo} />
                                </a>
                            </div>
                            <div className="xuexiao_bot_right">
                                <div className="xuexiao_bot_right_top">
                                    <div className="bot_right_left" >
                                        <div className="left_zuo like"><img src="http://passport.shenyuan.org/WebResources/Default/images/college/like.png"  onClick={this.state.likePush ? this.likePush.bind(this) : ""} /></div>
                                        <div className="left_you left_you_num">{this.props.json.Follow}</div>
                                    </div>
                                    <div className="bot_right_left">
                                        <div className="left_zuo"><img src="http://passport.shenyuan.org/WebResources/Default/images/college/position.png" /></div>
                                        <div className="left_you">{this.props.json.PlaceArea}</div>
                                    </div>
                                </div>
                                <div className="right_bot">
                                    <div className="sc_paiming">

                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                </li>
      );
  }
  likePush(e) {
    var thisNode = $(e.target).parent().next();
    var follow_Var = this.state.follow;

    var country_Var = this.props.country;

    var type_Var = this.props.school;

    var sysNo_Var = this.props.json.Sysno;
    var thisPage = this;
    $.ajax({
      url: "http://service.shenyuan.org/UniversitySearchNodeJsService/Recommend/Country=" + country_Var + ";Type=" + type_Var + ";Sysno=" + sysNo_Var + "",
      type: "get",
      dataType: "jsonp",
      async: false,
      jsonp: "callbackparam", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
      jsonpCallback: "success_jsonpCallback", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
      success: function(json) {

        //this.state({follow:follow_Var + 1});

        //console.log(this.state.follow);

        var num = parseInt(thisNode.html()) + 1;

        //$(".left_you_num").html(num);
        thisNode.html(num);
        thisPage.setState({
          likePush: false
        });

      },
      error: function(e) {
        //console.log(e);
        Common.errorLog(e);
      }
    });
  }
  Add() {}
  //dom加载完调用
  componentDidMount() {

    var num = $(".left_you_num").html();

    this.setState({
      follow: num
    });

  }
}

export default Item;
