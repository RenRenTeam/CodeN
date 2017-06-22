
import React, { PropTypes } from 'react';

import Select, {Option} from 'rc-select';
import 'rc-select/assets/index.css';

import SelectStyles from "./Select.less";
import withStyles from '../../../decorators/withStyles';

@withStyles(SelectStyles)
class SetpA extends React.Component{
    constructor(props) {
        super(props);     
        this.state={Country : this.props.Country,YTime : this.props.YTime,Type : this.props.Type};
    }

    handleChangeYTime(e){
      this.setState({YTime:e,electItem:new Array()}); 
      this.props.CallbakYTime(e);
    }

    handleChangeType(e){
      this.setState({Type : e,electItem:new Array()});
      this.props.CallbakType(e);
    }

    handleChangeCountry(e){
      this.setState({Country : e,electItem:new Array()});      
      this.props.CallbakCountry(e);
    }



    componentWillUnmount() {
        if(this.props.Country != this.state.Country){
          this.setState({Country:this.props.Country});
        }
        this.setState({Country:this.props.Country})
    }

 

    render() {
        //console.log("<span>"+this.props.Country+"</span>");
        //this.getElementsByClassName('rc-select-selection__rendered')[0].innerHTML = "<span>"+this.props.Country+"</span>";
        return (
            <div>
                <div className="title">
                  1.确认并完善你的留学计划，获取最适合你的留学方案
                </div>
                <div className="wantToGo">
                    <div>
                        想去的国家：
                        <label for="aus" className="fond-country">
                          <Select style={{width:150,height:45}} defaultValue={this.state.Country} value={this.state.Country} onChange={this.handleChangeCountry.bind(this)}>
                            <Option value="请选择" desc="请选择">请选择</Option>
                            <Option value="美国" desc="美国">美国</Option>
                            <Option value="英国" desc="英国">英国</Option>
                            <Option value="日本" desc="日本">日本</Option>
                            <Option value="澳洲" desc="澳洲">澳洲</Option>
                          </Select>
                        </label>
                    </div>
                </div>
                <div className="planeGoTo">
                    <div className="selectDv">
                        <div className="left lin40">计划出国时间：</div>
                        <div className="boSelect">
                            <Select style={{width:150,height:45}} defaultValue={this.state.YTime} value={this.state.YTime} onChange={this.handleChangeYTime.bind(this)}>
                              <Option value="请选择" desc="请选择">计划出国时间</Option>
                              <Option value="2018" desc="2018">2018</Option>
                              <Option value="2017" desc="2017">2017</Option>
                              <Option value="2016" desc="2016">2016</Option>
                          </Select>
                        </div>
                        <div className="left lin40">&nbsp;&nbsp;</div>
                        <div className="clear"></div>
                    </div>
                    <div className="selectD">
                        <div className="left lin40">目前就读年级：</div>
                        <div className="boSelect">
                            <Select defaultValue={this.state.Type} value={this.state.Type} style={{width:270,height:45}} onChange={this.handleChangeType.bind(this)}>              
                              <Option value="请选择" desc="请选择">目前就读年级</Option>
                              <Option value="硕士在读或毕业已工作">硕士在读或毕业已工作</Option>
                              <Option value="本科大四或毕业已工作">本科大四或毕业已工作</Option>
                              <Option value="本科大三">本科大三</Option>
                              <Option value="本科大二">本科大二</Option>
                              <Option value="本科大一">本科大一</Option>
                              <Option value="大专大三在读或已毕业">大专大三在读或已毕业</Option>
                              <Option value="大专大二">大专大二</Option>
                              <Option value="大专大一">大专大一</Option>
                              <Option value="高三在读或已毕业">高三在读或已毕业</Option>
                              <Option value="高二">高二</Option>
                              <Option value="高一">高一</Option>
                              <Option value="初三">初三</Option>
                            </Select>
                        </div>
                        <div className="left lin40">&nbsp;&nbsp;年</div>
                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        );        
    }
}

export default SetpA;
