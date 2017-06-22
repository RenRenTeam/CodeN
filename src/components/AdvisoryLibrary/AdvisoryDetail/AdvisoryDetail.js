/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './AdvisoryDetail.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery';
import Recommendation from './Recommendation/Recommendation.js';
import MayBeLike from './MayBeLike/MayBeLike.js';
import Content from './Content/Content.js';
import Common from '../../../utils/Common.js';


@withStyles(styles)
class AdvisoryDetail {
static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = '资讯库详细 - 人人留学';
    this.context.onSetTitle(title);
    return (
      <section className="advistory-box">
        <div>
            <div className="left article">
                <div id="contentAdvisoryDetail"></div>
                <div id="leftTopLiks"></div>
            </div>
            <div id="bottomRecommendation"></div>
            <div className="clear"></div>
        </div>
    </section>
    );
  }
    componentDidMount() {
            var Sysno = getQueryString("id");
            let country=getQueryString("myData");
            $(document).ready(function(){
                $.ajax({
                    url: "http://service.shenyuan.org/ArticleService/LoadEntityForJS/"+Sysno,
                    type: "get",
                    dataType: "jsonp",
                    async: false,
                    jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                    jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                    success: function (json) {
                        React.render(<Content json={json}/>,document.getElementById('contentAdvisoryDetail'));

                        var markdown = require('marked');
                        var htmlContent = markdown( json.Content );
                        document.getElementById('advisoryDetail_Content').innerHTML = htmlContent;

                    },
                    error: function (e) {
                        Common.errorLog(e);
                        //console.log(e);
                    }
                }).then(function(){
                    //.reverse()反转数组
                       $.ajax({
                            url: "http://service.shenyuan.org/ArticleService/SearchAbout/PageIndex=1;PageSize=10;Country="+country+";Tag=;Title=;Sysno="+Sysno,
                            type: "get",
                            dataType: "jsonp",
                            async: false,
                            jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                            jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                            success: function (json) {
                                 if(json&&json.length>0){
                                    let arr=json;
                                    React.render(<Recommendation data={arr}  Country={country} />, document.getElementById('bottomRecommendation'));
                                    React.render(<MayBeLike data={arr} Country={country} Sysno={Sysno} />, document.getElementById('leftTopLiks'));
                                 }else{

                                    React.render(<Recommendation data={[]}  Country={""}   />, document.getElementById('bottomRecommendation'));
                                    React.render(<MayBeLike data={[]} Country={""} Sysno={Sysno}  />, document.getElementById('leftTopLiks'));
                                 }


                            },
                            error: function (e) {
                                Common.errorLog(e);
                                //console.log(e);
                            }
                        });




                });
            });

            function getQueryString(name) {
                    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                    var r = window.location.search.substr(1).match(reg);
                    if (r != null) return unescape(r[2]); return null;
            }

    }

}

export default AdvisoryDetail;
