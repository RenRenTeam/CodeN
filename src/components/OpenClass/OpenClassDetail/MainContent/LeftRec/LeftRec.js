/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';

class LeftRec extends React.Component{

    render() {
        var nodes = this.props.json.map(function(obj){

            var name = obj.NameStr;

            if(name.length > 3){
                name = name.substr(0,3);
            }

            return (
                    <li>
                        <div className="personnel-box">
                            <div className="img">
                                <img src={obj.HeadImg?obj.HeadImg:"http://passport.shenyuan.org/WebResources/Default/images/open-class/demo.jpg"} />
                            </div>
                            <div className="name">{name?name:"***"}</div>
                        </div>
                    </li>
                );
        });
        return (
            <li>
                {nodes}
            </li>
        );
    }
}

export default LeftRec;