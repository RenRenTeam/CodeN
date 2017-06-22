
import React, { PropTypes } from 'react';
import OpenClass from '../OpenClass.js';
import $ from 'jquery';

class GetOpenClassData  extends React.Component { 
    loadClassData(){
            let country=this.props.country;
             $.ajax({
                type: "get",
                url: "http://service.shenyuan.org/OpenClassForJsService/Search/Country="+country+";PageIndex=1;PageSize=10;CallBack=GetClassData",
                dataType: "jsonp",
                async:false,
                jsonp:"callbackparam",//
                jsonpCallback:"GetClassData",//自定义jsonp回调函数名称       
            }).done(function(json){
                if(json){
                     React.render(<OpenClass  data={json} flag={country}/>,document.getElementById("GetOpenClassDataAllCountry"));
                }
            });
    }

    render() {
        return (
                <div id="GetOpenClassDataAllCountry" flag={this.props.country}></div>
        );
    }

    componentDidMount() {
        this.loadClassData();
    }  
}

export default GetOpenClassData;

/*xyx 2015.8.21*/


