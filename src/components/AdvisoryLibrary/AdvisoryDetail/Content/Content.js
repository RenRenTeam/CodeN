/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Content.less';
import withViewport from '../../../../decorators/withViewport';
import withStyles from '../../../../decorators/withStyles';
import $ from 'jquery';

@withStyles(styles)
class Content {

  render() {

    return (
            <div>
                <div className="title">{this.props.json.Title}</div>
                <div className="prefacePart">
                    <div className="preface">
                        <div className="left">
                            <span className="user themecolor">{this.props.json.Author}</span><span className="border">｜</span><span className="time">{this.props.json.PublisherDate}</span>
                        </div>
                        <div className="right">
                            <div className="left dv_button">
                                <button id="likeClickBtn" className="like"></button>
                            </div>
                            <div className="left">
                                <span id="likeNumUser" className="num">{this.props.json.Commend}</span>人觉得赞
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="content">
                    <div id="advisoryDetail_Content">

                    </div>
                    <div className="sharePart">
                    </div>
                </div>
            </div>
    );
  }

   loadingFunc(){
        if($("#pageloader_AdvisoryDetail")){ $("#pageloader_AdvisoryDetail").fadeOut();}
    }
    componentDidUpdate(){
        setTimeout(this.loadingFunc,900);
    }
  componentDidMount() {
        var str = "";
        str += "<div class=\"jiathis_style_32x32\">";
        str += "<a class=\"jiathis_button_cqq\"></a>";
        str += "<a class=\"jiathis_button_tsina\"></a>";
        str += "<a class=\"jiathis_button_renren\"></a>";
        str += "<a class=\"jiathis_button_baidu\"></a>";
        str += "<a class=\"jiathis_button_qzone\"></a>";
        str += "<a href=\"http://www.jiathis.com/share\" class=\"jiathis jiathis_txt jtico jtico_jiathis\" target=\"_blank\"></a>";
        str += "</div>";
        str += "<script type=\"text/javascript\" src=\"http://v3.jiathis.com/code/jia.js\" charset=\"utf-8\"></script>";

        $(".sharePart").append(str);

        // $(".eachGetHref").one("click", ".like", function () {
        let sysNum=this.props.json.Sysno;
        $("#likeClickBtn").click(function(){
            let $self = $(this);
            //let sysNo_Like =sysNum;
            $.ajax({
                url: "http://service.shenyuan.org/ArticleService/RecommendForJs/"+sysNum,
                type: "get",
                dataType: "jsonp",
                async: false,
                jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                success: function (json) {
                    //数字加1
                    //var num = $self.parents(".eachGetHref").find("span.num");
                    let num=$("#likeNumUser");
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

         setTimeout(this.loadingFunc,900);
    }

}

export default Content;
