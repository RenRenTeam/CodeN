/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import WishClickCountry from '../WishUtilReactjs/WishClickCountry/WishClickCountry.js';
import $ from 'jquery';

class XiangQuDeGuoJia  extends React.Component{

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="box">
                <div className="wish-country"> 
                    <h1>想去的国家</h1>
                    <ul id="wishCountry">
                        <li  data-country="UK"  >
                            
                                <img src="http://passport.shenyuan.org/WebResources/Default/images/wish/UK.png"  /><br />
                                英国<div className="bg"   id="UK"></div>
                                <div className="activeicon"  ></div>
                           
                        </li>
                        <li className="active" data-country="USA" >
                            
                                <img src="http://passport.shenyuan.org/WebResources/Default/images/wish/USA.png" /><br />
                                美国<div className="bg"   id="USA"></div>
                                <div className="activeicon"  ></div>
                           
                        </li>
                        <li data-country="AUS" >
                           
                                <img src="http://passport.shenyuan.org/WebResources/Default/images/wish/AUS.png" /><br />
                                澳洲<div className="bg"    id="AUS"></div>
                                <div className="activeicon" ></div>
                           
                        </li>
                        <li data-country="JP" >
                   
                                <img src="http://passport.shenyuan.org/WebResources/Default/images/wish/JP.png" /><br />
                                日本<div className="bg"    id="JP" ></div>
                                <div className="activeicon" ></div>
                          
                        </li>
                    </ul>
                    <div className="clear"></div>
                </div>
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){
       $(document).ready(function(){
            $("#wishCountry").find("li").click(function () {
                var box = $(this).parent();
                $(this).parent().find("li").removeClass("active");
                $(this).addClass("active");
                
                var country = box.find("li.active").data("country");
                WishClickCountry.WishClickCountryEvent(country);
              /*  if (country) {
                    var index = schoolcontainer.find(".school-container#" +country+ "Wish").index();
                    schoolcontainer.animate({ marginLeft: "-" + (index * 1024) + "px" }, 400);

                }*/
            });
        })
    }

}

export default XiangQuDeGuoJia;
