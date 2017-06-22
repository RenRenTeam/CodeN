//AreaSelect.js
import React, { PropTypes } from 'react';

var Select = require('rc-select');
var Option = Select.Option;
import $ from 'jquery';

class AreaSelect  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
 
        };
 
    }
    handleChange(e){
    	//let valVar=e;

    	this.props.clickEvent(e);
     
    }
    render() {
    	let heightDown=this.props.downHeight;
    	let heightStr=this.props.heightStr;
    	let widthStr=this.props.widthStr;
        var style = {
            height:heightDown,
            overflow:"auto"

        }
        return (   
                <Select defaultValue={"全部"} style={{width:widthStr,height:heightStr}} showSearch={true} 
                optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChange.bind(this)} 
                dropdownMenuStyle={style}>
                        <Option value="" desc="全部" >全部</Option>
                        <Option value="1" desc="北海道" >北海道</Option>
                        <Option value="2" desc="青森" >青森</Option>
                        <Option value="3" desc="岩手" >岩手</Option>
                        <Option value="4" desc="宫城" >宫城</Option>
                        <Option value="5" desc="秋田" >秋田</Option>                       
                        <Option value="6" desc="山形" >山形</Option>                       
                        <Option value="7" desc="福岛" >福岛</Option>
                        <Option value="8" desc="茨城" >茨城</Option>
                        <Option value="9" desc="栃木" >栃木</Option>
                        <Option value="10" desc="群马" >群马</Option>
                        <Option value="11" desc="崎玉" >崎玉</Option>                       
                        <Option value="12" desc="千叶" >千叶</Option>
                        <Option value="13" desc="东京" >东京</Option>                       
                        <Option value="14" desc="神奈川" >神奈川</Option>
                        <Option value="15" desc="新泻" >新泻</Option>
                        <Option value="16" desc="富山" >富山</Option>
                        <Option value="17" desc="石川" >石川</Option>
                        <Option value="18" desc="福井" >福井</Option>
                        <Option value="19" desc="山梨" >山梨</Option>
                        <Option value="20" desc="长野" >长野</Option>
                        <Option value="21" desc="岐阜" >岐阜</Option>
                        <Option value="22" desc="静冈" >静冈</Option>
                        <Option value="23" desc="爱知" >爱知</Option>
                        <Option value="24" desc="三重" >三重</Option>
                        <Option value="25" desc="滋贺" >滋贺</Option>
                        <Option value="26" desc="京都府" >京都府</Option>
                        <Option value="27" desc="大阪府" >大阪府</Option>
                        <Option value="28" desc="兵库" >兵库</Option>
                        <Option value="29" desc="奈良" >奈良</Option>
                        <Option value="30" desc="和歌山" >和歌山</Option>
                        <Option value="31" desc="鸟取" >鸟取</Option>
                        <Option value="32" desc="岛根" >岛根</Option>
                        <Option value="33" desc="冈山" >冈山</Option>
                        <Option value="34" desc="广岛" >广岛</Option>
                        <Option value="35" desc="山口" >山口</Option>
                        <Option value="36" desc="德岛" >德岛</Option>
                        <Option value="37" desc="香川" >香川</Option>
                        <Option value="38" desc="爱媛" >爱媛</Option>
                        <Option value="39" desc="高知" >高知</Option>
                        <Option value="40" desc="福冈" >福冈</Option>
                        <Option value="41" desc="佐贺" >佐贺</Option>
                        <Option value="42" desc="长崎" >长崎</Option>
                        <Option value="43" desc="熊本" >熊本</Option>
                        <Option value="44" desc="请选择" >大分</Option>
                        <Option value="45" desc="宫崎" >宫崎</Option>
                        <Option value="46" desc="鹿儿岛" >鹿儿岛</Option>
                        <Option value="47" desc="冲绳" >冲绳</Option>
                </Select>                  
                                          
        );
    }
   componentDidMount() {
          
    }

}

export default AreaSelect;