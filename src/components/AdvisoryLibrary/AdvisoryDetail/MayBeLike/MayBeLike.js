/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './MayBeLike.less';
import withViewport from '../../../../decorators/withViewport';
import withStyles from '../../../../decorators/withStyles';
import $ from 'jquery';
import LikeList from './LikeList/LikeList.js';
import Common from '../../../../utils/Common.js';


@withStyles(styles)
class MayBeLike {

  render() {
    return (
        <div className="maybeInstered">
            <div className="border_bottom">
                <div className="titleFont">
                    <div className="left">你可能感兴趣</div>
                    <div className="right change"><a href="javascript:void();" onClick={this.changeLoad.bind(this)}>换一换</a></div>
                    <div className="clear"></div>
                </div>
            </div>
            <div id="likeMessage"></div>
        </div>
    );
  }
  changeLoad(){
            let Sysno = this.props.Sysno;
            let country=this.props.Country;
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
                        React.render(<LikeList data={json} Country={country} />, document.getElementById('likeMessage'));
                     }else{
                        //React.render(<LikeList data={[]} Country={""}   />, document.getElementById('likeMessage'));
                     }


                },
                error: function (e) {
                    //console.log(e);
                    Common.errorLog(e);
                }
            });
  }
  componentDidMount() {
    React.render(<LikeList data={this.props.data}  Country={this.props.Country}   />, document.getElementById('likeMessage'));
    $(document).ready(function(){
        $(".imgUl li").hover(function () {
            var $this = $(this);
            $this.stop();
            $this.children().eq(1).animate({ "margin-top": "-45px" }, 300);
        }, function () {
            var $this = $(this);
            $this.stop();
            $this.children().eq(1).animate({ "margin-top": "0px" }, 300);
        });

    });




  }
}

export default MayBeLike;
