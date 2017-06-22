//UtilSearchActiveData.js
import React, { PropTypes } from 'react';
import Bachelor from '../StudyAbroadBox/Bachelor/Bachelor.js';
import $ from 'jquery';

function onClickSearch(country,typeSearch) {
		let countryStr=country;
        $.ajax({
                type: "get",
                url: "http://service.shenyuan.org/ArticleService/SearchForJS/"+countryStr+",,"+typeSearch+",1,20",
                dataType: "jsonp",
                async:false,
                jsonp:"callbackparam",//
                jsonpCallback:"success_jsonpCallback",//自定义jsonp回调函数名称       
            }).done(function(json){
                if(json&&json.length>=1){
                     React.render(<Bachelor flag={""} data={json} city= {country}/>,document.getElementById('major-tab-content'));
                }else{
                     React.render(<Bachelor flag={""} data={[]}  city= {country}/>,document.getElementById('major-tab-content'));
                }
            });	 
	
	  
}

export default { onClickSearch }; 

/*xyx 2015.8.21*/
