/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
var Select = require('rc-select');
var Option = Select.Option;
import styles from "./Select.less";
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link.js';

@withStyles(styles)
class XiangDuDeZhuanYe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userSearch:""};
    }
    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };
  
    render() { 
        return (
            <div className="box full">
                <div className="wish-speciality">
                    <h1>想读的大学</h1>  
                    <div className="beInterestedSchoolInputDv">
                        <input type = "text" placeholder = "请输入您感兴趣的学校" onChange={this.inputChange.bind(this)}  className="beInterestedSchoolInput" />
                        <a href={"/College-index-"+this.state.userSearch+""} onClick={Link.handleClick} ><div className="inputConfirmBtn"></div></a>
                    </div>
                    <div className="countryBox"> 
                        <div className="item"><a href="/College-index-UK-大学" onClick={Link.handleClick}><i className="one"></i>英 国</a></div>
                        <div className="item item_left"><a href="College-index-USA-大学" onClick={Link.handleClick}><i className="three"></i>美 国</a></div>
                        <div className="item"><a href="College-index-AUS-大学" onClick={Link.handleClick}><i className="two"></i>澳 洲</a></div>
                        <div className="item item_left"><a href="College-index-JP-大学" onClick={Link.handleClick}><i className="four"></i>日 本</a></div>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        );
    }
    inputChange(e){
        this.setState({
            userSearch:e.target.value
        });
    }
}

export default XiangDuDeZhuanYe;
