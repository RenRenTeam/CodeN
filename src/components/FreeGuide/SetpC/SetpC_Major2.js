
import React, { PropTypes } from 'react';

var Select = require('rc-select');
var Option = Select.Option;

import SelectStyles from "./SetpC.less"
import withStyles from '../../../decorators/withStyles'
@withStyles(SelectStyles)
export class SetpC_Major2 extends React.Component {
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
                <Option value="会计和金融" desc="会计和金融">会计和金融</Option>
                <Option value="经济学" desc="经济学">经济学</Option>
            </Select>
            <input type="hidden" id="HopeMajorName" className="inputHide" value={this.state.HopeMajorName}/>
          </div>
        )
    }

}


export default SetpC_Major2;
