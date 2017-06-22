/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './List.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import MainContent from '../MainContent/MainContent.js';
import $ from 'jquery';
import Common from '../../../utils/Common.js';
var EnterAnimation = require('enter-animation') ;
@withStyles(styles)
export class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
          direction:'enter',
          upend:false,
          type:'right',
          interval:0.1,
          delay:0.7
        });
    }

    render() {
        var items = this.props.data.map(function (item) {
            return (<MainContent json={item} enter-data={{type:'top',queueId:1}} />)
        });

        return (
            <div>
                <EnterAnimation interval={this.state.interval} type={this.state.type} upend={this.state.upend} direction={this.state.direction}>
                <div className="appenHtml">
                    {items}
                </div>
                </EnterAnimation>
                <div id="div_next"></div>
            </div>
        );
    }
    componentDidMount() {
        // $(".eachGetHref").one("click", ".like", function () {
        $(".eachGetHref .like").click(function(){
            var $self = $(this);
            var sysNo_Like = $self.next().html();
            $.ajax({
                url: "http://service.shenyuan.org/ArticleService/RecommendForJs/"+sysNo_Like,
                type: "get",
                dataType: "jsonp",
                async: false,
                jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                success: function (json) {
                    //数字加1
                    var num = $self.parents(".eachGetHref").find("span.num");
                    num.text(parseInt(num.text(), 10) + 1);
                    //动画
                    css3Commend(num);

                    $self.prop("disabled", true);

                },
                error: function (e) {
                    //console.log(e);
                    Common.errorLog(e);
                }
            });

        });

        function css3Commend(control,options) {
            var commend = $(".commend");

            if (commend.length == 0) {
                commend = $("<div class=\"commend\">+1</div>");
                $("body").append(commend);
            }

            commend.stop(true, true).hide();

            var $self = $(control);
            if ($self.length > 0) {
                commend.appendTo($self.parent());
            }

            var top = -($self.outerHeight(true) + commend.height());
            var left = 0;
            commend.css("margin-top", top + "px");
            commend.css("margin-left", left + "px");


            commend.show().animate({ marginTop: top - 10 }, 300).fadeOut(100);;

            return $self;
        };
    }


}

export default List;
