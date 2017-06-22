//WishClickCountry.js
import React, { PropTypes } from 'react';
import HotSchoolWishModule from '../HotSchoolWishModule/HotSchoolWishModule.js';
import GetActionData from '../ActionInformation/GetActionData/GetActionData.js';
import $ from 'jquery';

function WishClickCountryEvent(str) {

		React.render(<HotSchoolWishModule flag={str}/>,document.getElementById('hotSchool'));
		
	    $.ajax({ 
            type: "get",
            url: "http://service.shenyuan.org/ArticleService/SearchForJS/"+str+",,,1,11",
            dataType: "jsonp",
            async:false,
            jsonp:"callbackparam",// 
            jsonpCallback:"success_jsonpCallback",//自定义jsonp回调函数名称       
        }).always(function(jsonAction){
            if(jsonAction&&jsonAction.length>=1){
            	React.render(<GetActionData data={jsonAction} />,document.getElementById('ActionInformationDiv'));
            }
        });
	  
}

export default { WishClickCountryEvent };

/*xyx 2015.8.21*/
