
import React, { PropTypes } from 'react';

var Select = require('rc-select');
var Option = Select.Option;

import SelectStyles from "./SetpC.less"
import withStyles from '../../../decorators/withStyles'
@withStyles(SelectStyles)
export class SetpC_Major7 extends React.Component {
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
                <Option value="农业与林业学" desc="农业与林业学">农业与林业学</Option>
                <Option value="化学" desc="化学">化学</Option>
                <Option value="地球和海洋科学" desc="地球和海洋科学">地球和海洋科学</Option>
                <Option value="地理和区域研究" desc="地理和区域研究">地理和区域研究</Option>
                <Option value="地理和环境科学" desc="地理和环境科学">地理和环境科学</Option>
                <Option value="地质学" desc="地质学">地质学</Option>
                <Option value="数学" desc="数学">数学</Option>
                <Option value="材料科学" desc="材料科学">材料科学</Option>
                <Option value="物理与天文学" desc="物理与天文学">物理与天文学</Option>
                <Option value="物理和天文" desc="物理和天文">物理和天文</Option>
                <Option value="环境科学" desc="环境科学">环境科学</Option>
                <Option value="生物科学" desc="生物科学">生物科学</Option>
                <Option value="营养学" desc="营养学">营养学</Option>
            </Select>
            <input type="hidden" id="HopeMajorName" className="inputHide" value={this.state.HopeMajorName}/>
          </div>
        )
    }

}


export default SetpC_Major7;
