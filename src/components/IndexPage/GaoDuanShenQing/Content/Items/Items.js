/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import Link from '../../../../../utils/Link';
import $ from 'jquery';

class Items extends React.Component {

    constructor(props) {
        super(props);
    }
    ChangeTutordetail(){

        $("#tutor-detail").html("");

        if( this.props.json.Name.length > 0){

            var str = "";
            var name = this.props.json.Name;
            var zhanChang = this.props.json.Expertise;
            var star = this.props.json.StarStr;

            str += "<div class=\"tutor-detail\">";
            str += "            <div class=\"tutor-name\">"+name+"</div>";
            str += "            <div class=\"tutor-info\">";
            str += "                <div class=\"nickname\">昵称："+name+"</div>";
            str += "                <div class=\"star dark "+star+"\"></div>";
            str += "                <div class=\"speciality\">专长："+zhanChang+"</div>";
            str += "            </div>";
            str += "        </div>";

            $("#tutor-detail").html(str);

        }else{
            $("#tutor-detail").html("");
        }

    }
    
    render() {
        return (
            <li onClick={this.ChangeTutordetail.bind(this)}>
                <input type="hidden" className="sysNo" value={this.props.json.Sysno} />
                <img src={this.props.json.ImgUrlStr} /><br />
                <span>{this.props.json.Name}</span>
            </li>
        );
    }
    //dom加载完调用
    componentDidMount(){
        $("#tutorList").find("li").eq(0).addClass("active");
        $("#tutorList").find("li").click(function () {
            $(this).parent().find("li").removeClass("active");
            $(this).addClass("active");
        });

        //this.ChangeTutordetail.bind(this);
    }
}

export default Items;
