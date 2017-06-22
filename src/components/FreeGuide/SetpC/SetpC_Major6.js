
import React, { PropTypes } from 'react';

var Select = require('rc-select');
var Option = Select.Option;

import SelectStyles from "./SetpC.less"
import withStyles from '../../../decorators/withStyles'
@withStyles(SelectStyles)
export class SetpC_Major6 extends React.Component {
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
                <Option value="城镇和农村的规划和设计" desc="城镇和农村的规划和设计">城镇和农村的规划和设计</Option>
                <Option value="建筑与设计学" desc="建筑与设计学">建筑与设计学</Option>
                <Option value="建筑学" desc="建筑学">建筑学</Option>
                <Option value="戏剧和舞蹈" desc="戏剧和舞蹈">戏剧和舞蹈</Option>
                <Option value="艺术" desc="艺术">艺术</Option>
            </Select>
            <input type="hidden" id="HopeMajorName" className="inputHide" value={this.state.HopeMajorName}/>
          </div>
        )
    }

}


export default SetpC_Major6;
