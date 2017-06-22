/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';
/*import Items from './Items/Items.js'*/



class ZhuanYe extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            major:'材料技术',

        };
    }

    chsngeState(e){
        this.setState({
            major:e.target.innerHTML
        });
        this.props.changeZhuanYe_Function(e);

    }
    render() {

        var items;

        var changeZhuanYe = this.chsngeState.bind(this);
        let major=this.state.major;
        if(this.props.json instanceof Array){
            items = this.props.json.map(function (item) {
                return (
                  
                         <li className={item.Major==major?"active":""}>
                            <a className="nofollow" onClick={changeZhuanYe}>{item}</a>
                        </li>
                    );
            });            
         }

        return (
            <div>
                <div className="title">按专业：</div>
                <ul className="college-filter-list">
                    {items}
                </ul>
            </div>
         );
    }
    componentDidMount(){
        this.setState({
            major:this.props.UKMajor
        });
    }
}

export default ZhuanYe;
