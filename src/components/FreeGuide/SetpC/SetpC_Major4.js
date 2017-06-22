
import React, { PropTypes } from 'react';

var Select = require('rc-select');
var Option = Select.Option;

import SelectStyles from "./SetpC.less"
import withStyles from '../../../decorators/withStyles'
@withStyles(SelectStyles)
export class SetpC_Major4 extends React.Component {
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
                <Option value="东亚和南亚研究" desc="东亚和南亚研究">东亚和南亚研究</Option>
                <Option value="中东和非洲研究" desc="中东和非洲研究">中东和非洲研究</Option>
                <Option value="人类学" desc="人类学">人类学</Option>
                <Option value="伊比利亚语" desc="伊比利亚语">伊比利亚语</Option>
                <Option value="会计与金融" desc="会计与金融">会计与金融</Option>
                <Option value="俄罗斯和东欧语言" desc="俄罗斯和东欧语言">俄罗斯和东欧语言</Option>
                <Option value="凯尔特研究" desc="凯尔特研究">凯尔特研究</Option>
                <Option value="历史" desc="历史">历史</Option>
                <Option value="哲学" desc="哲学">哲学</Option>
                <Option value="德语" desc="德语">德语</Option>
                <Option value="意大利语" desc="意大利语">意大利语</Option>
                <Option value="政治" desc="政治">政治</Option>
                <Option value="政治与国际研究" desc="政治与国际研究">政治与国际研究</Option>
                <Option value="教育" desc="教育">教育</Option>
                <Option value="教育学" desc="教育学">教育学</Option>
                <Option value="法律" desc="法律">法律</Option>
                <Option value="法语" desc="法语">法语</Option>
                <Option value="社会学" desc="社会学">社会学</Option>
                <Option value="社会工作" desc="社会工作">社会工作</Option>
                <Option value="社会政策" desc="社会政策">社会政策</Option>
                <Option value="神学和宗教研究" desc="神学和宗教研究">神学和宗教研究</Option>
                <Option value="经典和古代历史" desc="经典和古代历史">经典和古代历史</Option>
                <Option value="经济学和计量经济学" desc="经济学和计量经济学">经济学和计量经济学</Option>
                <Option value="统计学与运筹学" desc="统计学与运筹学">统计学与运筹学</Option>
                <Option value="美国研究" desc="美国研究">美国研究</Option>
                <Option value="考古学" desc="考古学">考古学</Option>
                <Option value="英语" desc="英语">英语</Option>
                <Option value="语言学" desc="语言学">语言学</Option>
                <Option value="通信与传媒研究" desc="通信与传媒研究">通信与传媒研究</Option>
                <Option value="通信及传媒研究" desc="通信及传媒研究">通信及传媒研究</Option>
                <Option value="音乐" desc="音乐">音乐</Option>
            </Select>
            <input type="hidden" id="HopeMajorName" className="inputHide" value={this.state.HopeMajorName}/>
          </div>
        )
    }

}


export default SetpC_Major4;
