
import React, { PropTypes } from 'react';

var Select = require('rc-select');
var Option = Select.Option;

import SelectStyles from "./SetpC.less"
import withStyles from '../../../decorators/withStyles'
@withStyles(SelectStyles)
export class SetpC_Major3 extends React.Component {
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
                <Option value="会计学" desc="会计学">会计学</Option>
                <Option value="金融经济学" desc="金融经济学">金融经济学</Option>
                <Option value="企业管理/创业学" desc="企业管理/创业学">企业管理/创业学</Option>
                <Option value="工商管理" desc="工商管理">工商管理</Option>
                <Option value="国际管理学" desc="国际管理学">国际管理学</Option>
                
                <Option value="市场营销学" desc="市场营销学">市场营销学</Option>
                <Option value="供应链/物流学" desc="供应链/物流学">供应链/物流学</Option>
                <Option value="商业研究" desc="商业研究">商业研究</Option>
                <Option value="图书馆及信息系统管理" desc="图书馆及信息系统管理">图书馆及信息系统管理</Option>
                <Option value="土地及物业管理" desc="土地及物业管理">土地及物业管理</Option>
                <Option value="酒店休闲娱乐和旅游" desc="酒店休闲娱乐和旅游">酒店休闲娱乐和旅游</Option>
            </Select>
            <input type="hidden" id="HopeMajorName" className="inputHide" value={this.state.HopeMajorName}/>
          </div>
        )
    }

}


export default SetpC_Major3;
