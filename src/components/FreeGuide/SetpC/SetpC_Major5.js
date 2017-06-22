
import React, { PropTypes } from 'react';

var Select = require('rc-select');
var Option = Select.Option;

import SelectStyles from "./SetpC.less"
import withStyles from '../../../decorators/withStyles'
@withStyles(SelectStyles)
export class SetpC_Major5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {HopeMajorName:null};
    }
    handleChange(e) {
        this.setState({
          HopeMajorName: e
        })
    }

    render() {
        return (
          <div>
            <Select value={this.state.HopeMajorName==null?"选专业名称":this.state.HopeMajorName} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChange.bind(this)}>
                <Option value="选专业名称" desc="选专业名称">选专业名称</Option>
                <Option value="兽医" desc="兽医">兽医</Option>
                <Option value="医学" desc="医学">医学</Option>
                <Option value="医学和相关学" desc="医学和相关学">医学和相关学</Option>
                <Option value="影像学" desc="影像学">影像学</Option>
                <Option value="心理学" desc="心理学">心理学</Option>
                <Option value="护理" desc="护理">护理</Option>
                <Option value="牙科" desc="牙科">牙科</Option>
                <Option value="物理治疗学" desc="物理治疗学">物理治疗学</Option>
                <Option value="药物学和药剂" desc="药物学和药剂">药物学和药剂</Option>
                <Option value="解剖与生理学" desc="解剖与生理学">解剖与生理学</Option>
            </Select>
            <input type="hidden" id="HopeMajorName" className="inputHide" value={this.state.HopeMajorName}/>
          </div>
        )
    }

}


export default SetpC_Major5;
