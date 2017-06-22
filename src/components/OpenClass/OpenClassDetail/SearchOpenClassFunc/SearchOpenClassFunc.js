//SearchOpenClassFunc.js
import React, { PropTypes } from 'react';
import MainContent from '../MainContent/MainContent.js';
import $ from 'jquery';

function searchClass(sysNo) {

		$.ajax({
            url: "http://service.shenyuan.org/OpenClassForJsService/LoadEntity/Sysno="+sysNo+";CallBack=openclassDetailCallBack",
            type: "get",
            dataType: "jsonp",
            async: false,
            jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
            jsonpCallback: "openclassDetailCallBack",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名            
        }).done(function (json) {        
            if(json){                
                React.render(<MainContent json={json} />, document.getElementById('nodeOpenClassDetail'));
                
            }else{

                return false;
            }
        }.bind(this));
	
	  
}

export default { searchClass }; 

/*xyx 2015.8.21*/
