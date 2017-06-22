/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';

class Items extends React.Component{

    constructor(props) {
        
        super(props);
    }
    
    render() {

        return (
            <li>
                <a className="nofollow" onClick={this.props.changeZhuanYe.bind(this)}>{this.props.json}</a>
            </li>
         );
    }
    componentDidMount(){
        
        $("#collegeRank-ZhuanYe-node ul").children().eq(0).addClass("active");

        $("#collegeRank-ZhuanYe-node ul li").click(function(){

            $("#collegeRank-ZhuanYe-node ul li").removeClass("active");

            $(this).addClass("active");
        });
    }
}

export default Items;
