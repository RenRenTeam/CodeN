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
                <a className="nofollow" onClick={this.props.changeYear_Function.bind(this)}>{this.props.json}</a>
            </li>
         );
    }
    componentDidMount(){
        

        $("#collegeRank-Year-node ul li").click(function(){

            $("#collegeRank-Year-node ul li").removeClass("active");

            $(this).addClass("active");
        });
    }
}

export default Items;
