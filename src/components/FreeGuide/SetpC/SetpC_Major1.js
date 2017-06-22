
import React, { PropTypes } from 'react';

var Select = require('rc-select');
var Option = Select.Option;

import SelectStyles from "./SetpC.less"
import withStyles from '../../../decorators/withStyles'
@withStyles(SelectStyles)
export class SetpC_Major1 extends React.Component {
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
                <Option value="一般工程" desc="一般工程">一般工程</Option>
                <Option value="化学工程" desc="化学工程">化学工程</Option>
                <Option value="土木工程" desc="土木工程">土木工程</Option>
                <Option value="建造学" desc="建造学">建造学</Option>
                <Option value="机械工程" desc="机械工程">机械工程</Option>
                <Option value="材料技术" desc="材料技术">材料技术</Option>
                <Option value="电气及电子工程" desc="电气及电子工程">电气及电子工程</Option>
                <Option value="航空和制造工程学" desc="航空和制造工程学">航空和制造工程学</Option>
                <Option value="计算机科学" desc="计算机科学">计算机科学</Option>
            </Select>
            <input type="hidden" id="HopeMajorName" className="inputHide" value={this.state.HopeMajorName}/>
          </div>
        )
    }

}


export default SetpC_Major1;
