/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './AboutUs.less';
import withStyles from '../../decorators/withStyles';
import $ from 'jquery';
import MainContent from './MainContent/MainContent.js';

@withStyles(styles)
class AboutUs {
	
	static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    LoadData(){

    	$.ajax({
	        url: "http://service.shenyuan.org/AboutService/SearchForJs/PageIndex=1;PageSize=10;CallBack=successAboutUs_jsonpCallback",
	        type: "get",
	        dataType: "jsonp",
	        async: false,
	        jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
	        jsonpCallback: "successAboutUs_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名            
	    }).done(function (json) {
	        if(json){

	            React.render(<MainContent json={json} />, document.getElementById('aboutUs_Node'));


	            var markdown = require('marked');

                var htmlContent1 = markdown( json[0].Content );

                var htmlContent2 = markdown( json[1].Content );

                var htmlContent3 = markdown( json[2].Content );

                var htmlContent4 = markdown( json[3].Content );

               /* $('#hero .contentNode_AboutUs').html(htmlContent1);*/

                // $('#charge .contentNode_AboutUs').html(htmlContent2);
                
                // $('#service .contentNode_AboutUs').html(htmlContent3);

                // $('#aboutsUs .contentNode_AboutUs').html(htmlContent4);

	            var url = window.location.href;
    	
		        url = url.substr(url.indexOf('/AboutUs-') + ('/AboutUs-').length);
		        
		        if( url.length > 0){

		        	$("div[data-flag="+url+"]").click();

		        }else{
		        	
		        }
	        }else{

	            return false;
	        }
	    }.bind(this));
    }

    render() {
    	let title = '关于我们－人人留学';
        this.context.onSetTitle(title);
        return (
        	<div id="aboutUs_Node"></div>
        );
    }
    componentDidMount() {

    	this.LoadData();



	}
    
}

export default AboutUs;
