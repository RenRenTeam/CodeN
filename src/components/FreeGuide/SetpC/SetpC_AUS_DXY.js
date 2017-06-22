import React, { PropTypes } from 'react';

var Select = require('rc-select');
var Select2 = require('rc-select');
var Select3 = require('rc-select');
var Option = Select.Option;

var Radio = require('rc-radio');
import SetpC2 from '../SetpC/SetpC2';
import $ from 'jquery';
import SetpC_Major0 from '../SetpC/SetpC_Major0';
import SetpC_Major1 from '../SetpC/SetpC_Major1';
import SetpC_Major2 from '../SetpC/SetpC_Major2';
import SetpC_Major3 from '../SetpC/SetpC_Major3';
import SetpC_Major4 from '../SetpC/SetpC_Major4';
import SetpC_Major5 from '../SetpC/SetpC_Major5';
import SetpC_Major6 from '../SetpC/SetpC_Major6';
import SetpC_Major7 from '../SetpC/SetpC_Major7';
import SetpResule from '../SetpC/SetpResule';
import LoginPage from '../../LoginPage/LoginPage.js';
var Common = require('../../../utils/Common.js');
var Rest = require('../../../utils/rest');

import SelectStyles from "./SetpC.less";
import withStyles from '../../../decorators/withStyles';
@withStyles(SelectStyles)
class SetpC_AUS_DXY extends React.Component {
    constructor(props) {
        super(props);
        this.state = {disabled: false,
                      checked: null,
                      IMType:null,
                      SchoolType:null,
                      Major:null,
                      AvgScoreType:null,
                      LanguageType:null,
                      HopeMajor:null,
                      HopeMajorName:null};
    }

  handleChange(e){
        this.setState({
            IMType:e
        });
    }
    handleChangeB(e){
        this.setState({
            SchoolType:e
        });
    }
    handleChangeC(e){
        this.setState({
            Major:e
        });
    }
    handleChangeD(e){
        this.setState({
            AvgScoreType:e
        });
    }
    handleChangeE(e){
        this.setState({
            LanguageType:e
        });
    }
    handleChangeF(e){
        this.setState({
            HopeMajor:e
        });
        document.getElementById('dd_HopeMajor').innerHTML="";
        if(e=="工科")
            React.render(<SetpC_Major1/>, document.getElementById('dd_HopeMajor'));
        else if(e=="经济金融")
            React.render(<SetpC_Major2/>, document.getElementById('dd_HopeMajor'));
        else if(e=="商科")
            React.render(<SetpC_Major3/>, document.getElementById('dd_HopeMajor'));
        else if(e=="社会科学")
            React.render(<SetpC_Major4/>, document.getElementById('dd_HopeMajor'));
        else if(e=="医药学")
            React.render(<SetpC_Major5/>, document.getElementById('dd_HopeMajor'));
        else if(e=="艺术")
            React.render(<SetpC_Major6/>, document.getElementById('dd_HopeMajor'));
        else if(e=="自然科学")
            React.render(<SetpC_Major7/>, document.getElementById('dd_HopeMajor'));
        else{
            React.render(<SetpC_Major0/>, document.getElementById('dd_HopeMajor'));
        }
    }
    handleChangeG(e){
        this.setState({
            HopeMajorName:e
        });
    }
    handleSubmit(e){
        e.preventDefault();
        //console.log(e);
        Common.errorLog(e);
        var jsonEntity={
            RecentSchool:e.target["RecentSchool"].value,
            SchoolType:e.target["SchoolType"].value,
            Major:e.target["Major"].value,
            MajorName:e.target["MajorName"].value,
            AvgScoreType:e.target["AvgScoreType"].value,
            AvgScore:e.target["AvgScore"].value,
            LanguageType:e.target["LanguageType"].value,
            LanguageScore:e.target["LanguageScore"].value,
            HopeMajor:e.target["HopeMajor"].value,
            HopeMajorName:e.target["HopeMajorName"].value
        };
        var entity = {
            Name:e.target["Name"].value,
            Sex:e.target["Sex"].value,
            IMType:e.target["IMType"].value,
            IM:e.target["IM"].value,
            Phone:e.target["Phone"].value,
            Grade:this.props.Type,
            Country:this.props.Country,
            OutYear:this.props.YTime,
            PlanName:this.props.SelectItem.join(";"),
            Level:this.props.Sum
        };
        if(entity.Name==""||entity.Name==null){
            Common.alert("请输入姓名！");
            return;
        }
        if(entity.IMType=="选联系方式"||entity.IMType==""||entity.IMType==null){
            Common.alert("请选择联系方式类型！");
            return;
        }if(entity.IM==""||entity.IM==null){
            Common.alert("请输入联系方式号码！");
            return;
        }if(entity.Phone==""||entity.Phone==null){
            Common.alert("请输入电话！");
            return;
        }
        if(jsonEntity.RecentSchool==""||jsonEntity.RecentSchool==null){
            Common.alert("请输入最近就读学校！");
            return;
        }
        if(jsonEntity.SchoolType=="选学校类型"||jsonEntity.SchoolType==""||jsonEntity.SchoolType==null){
            Common.alert("请选择学校类型！");
            return;
        }
        if(jsonEntity.Major=="选专业类型"||jsonEntity.Major==""||jsonEntity.Major==null){
            Common.alert("请选择目前就读专业！");
            return;
        }
        if(jsonEntity.MajorName==""||jsonEntity.MajorName==null){
            Common.alert("请输入专业名称！");
            return;
        }
        if(jsonEntity.AvgScoreType=="选成绩类型"||jsonEntity.AvgScoreType==""||jsonEntity.AvgScoreType==null){
            Common.alert("请选择成绩类型！");
            return;
        }
        if(jsonEntity.AvgScore==""||jsonEntity.AvgScore==null){
            Common.alert("请输入平均成绩！");
            return;
        }
        if(jsonEntity.LanguageType=="选语言考试类型"||jsonEntity.LanguageType==""||jsonEntity.LanguageType==null){
            Common.alert("请选择语言考试类型！");
            return;
        }
        if(jsonEntity.LanguageScore==""||jsonEntity.LanguageScore==null){
            Common.alert("请输入语言考试成绩！");
            return;
        }
        if(jsonEntity.HopeMajor=="选希望就读专业"||jsonEntity.HopeMajor==""||jsonEntity.HopeMajor==null){
            Common.alert("请选择希望就读的专业类型！");
            return;
        }
        if(jsonEntity.HopeMajorName=="选专业名称"||jsonEntity.HopeMajorName==""||jsonEntity.HopeMajorName==null){
            Common.alert("请选择希望就读专业名称！");
            return;
        }
        if (jsonEntity.AvgScoreType == "平均成绩") {
            jsonEntity.AvgScore = parseFloat(jsonEntity.AvgScore) / 2;
            $("#AvgScore").val(jsonEntity.AvgScore / 2);
        } else if (jsonEntity.AvgScoreType == "GPA") {
            jsonEntity.AvgScore = parseFloat(jsonEntity.AvgScore) * 12.5;
            $("#AvgScore").val(jsonEntity.AvgScore);
        }
        var Country="AUS";
        var Type="硕士";
        var Sum=this.props.Sum;
        var studentChoose=this.props.SelectItem;
        entity.JsonEntity=JSON.stringify(jsonEntity);
        if(Common.getCookie("userLoginSuccess")!=null&&Common.getCookie("userLoginSuccess").length > 0){
            entity.MemberSysnoStr=Common.getCookie("userLoginSuccess");
            Rest.post('/FreeGuideService/InsertFreeGuideForJs',
              {"CallBack":Date.now(),"ChildEntity":entity}
              ,function(responseText){
                    var str = responseText.text.split(';');
                    document.getElementById('educationBox').innerHTML="";
                    React.render(<SetpResule result={str} Sum={Sum} selectArr={studentChoose} Country={Country} Type={Type} />, document.getElementById('educationBox'));
                }
            );
        }else{
            document.getElementById("nodeRenRen_Login").innerHTML = "";
            React.render(<LoginPage />, document.getElementById('nodeRenRen_Login'));
        }
    }
    radHandleChange(e) {
        this.setState({
          r: e.target.value
        })
    }
    render() {
        return (
            <div>
                <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="title">3.请准确填写你的个人信息，我们会为你推荐最适合的方案</div>
                        <div className="ws-education1">
                            <div className="education-box">
                                <div className="content">
                                    <SetpC2 />
                                    <dl>
                                        <dd>
                                            <Select value={this.state.IMType==null?"选联系方式":this.state.IMType} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChange.bind(this)}>
                                                <Option value="选联系方式" desc="选联系方式">选联系方式</Option>
                                                <Option value="QQ" desc="QQ">QQ</Option>
                                                <Option value="微信" desc="微信">微信</Option>
                                            </Select>
                                            <input type="hide" id="IMType" className="inputHide" value={this.state.IMType}/>
                                        </dd>
                                        <dd>
                                            <input type="text" id="IM" placeholder="请输入号码" />
                                        </dd>
                                        <dd>
                                            <input type="text" id="Phone" placeholder="电话" />
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <Select value={this.state.SchoolType==null?"选学校类型":this.state.SchoolType} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeB.bind(this)}>
                                                <Option value="选学校类型" desc="选学校类型">选学校类型</Option>
                                                <Option value="985高校" desc="985高校">985高校</Option>
                                                <Option value="211高校" desc="211高校">211高校</Option>
                                                <Option value="普通高校" desc="普通高校">普通高校</Option>
                                                <Option value="大专" desc="大专">大专</Option>
                                                <Option value="高中" desc="高中">高中</Option>
                                            </Select>
                                            <input type="hide" id="SchoolType" className="inputHide" value={this.state.SchoolType}/>
                                        </dd>
                                        <dd>
                                            <input type="text" id="RecentSchool" placeholder="最近就读学校" />
                                        </dd>

                                    </dl>
                                    <dl>
                                        <dd>
                                            <Select value={this.state.Major==null?"选专业类型":this.state.Major} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeC.bind(this)}>
                                                <Option value="选专业类型" desc="选专业类型">选专业类型</Option>
                                                <Option value="工科" desc="工科">工科</Option>
                                                <Option value="经济金融" desc="经济金融">经济金融</Option>
                                                <Option value="商科" desc="商科">商科</Option>
                                                <Option value="社会科学" desc="社会科学">社会科学</Option>
                                                <Option value="医药学" desc="医药学">医药学</Option>
                                                <Option value="艺术" desc="艺术">艺术</Option>
                                                <Option value="自然科学" desc="自然科学">自然科学</Option>
                                            </Select>
                                            <input type="hide" id="Major" className="inputHide" value={this.state.Major}/>
                                        </dd>
                                        <dd>
                                            <input type="text" id="MajorName" placeholder="目前专业名称" />
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <Select value={this.state.AvgScoreType==null?"选成绩类型":this.state.AvgScoreType} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeD.bind(this)}>
                                                <Option value="选成绩类型" desc="选成绩类型">选成绩类型</Option>
                                                <Option value="平均成绩" desc="平均成绩">平均成绩</Option>
                                                <Option value="GPA" desc="GPA">GPA</Option>
                                            </Select>
                                            <input type="hide" id="AvgScoreType" className="inputHide" value={this.state.AvgScoreType}/>
                                        </dd>
                                        <dd>
                                            <input type="text" id="AvgScore" placeholder="平均成绩" />
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <Select value={this.state.LanguageType==null?"选语言考试类型":this.state.LanguageType} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeE.bind(this)}>
                                                <Option value="选语言考试类型" desc="选语言考试类型">选语言考试类型</Option>
                                                <Option value="雅思" desc="雅思">雅思</Option>
                                                <Option value="托福" desc="托福">托福</Option>
                                                <Option value="六级" desc="六级">六级</Option>
                                                <Option value="四级" desc="四级">四级</Option>
                                                <Option value="专八" desc="专八">专八</Option>
                                                <Option value="专四" desc="专四">专四</Option>
                                                <Option value="平时英语成绩" desc="平时英语成绩">平时英语成绩</Option>
                                            </Select>
                                            <input type="hide" id="LanguageType" className="inputHide" value={this.state.LanguageType}/>
                                        </dd>
                                        <dd>
                                            <input type="text" id="LanguageScore" placeholder="语言考试成绩" />
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <Select value={this.state.HopeMajor==null?"选希望就读专业":this.state.HopeMajor} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeF.bind(this)}>
                                                <Option value="选希望就读专业" desc="选希望就读专业">选希望就读专业</Option>
                                                <Option value="工科" desc="工科">工科</Option>
                                                <Option value="经济金融" desc="经济金融">经济金融</Option>
                                                <Option value="商科" desc="商科">商科</Option>
                                                <Option value="社会科学" desc="社会科学">社会科学</Option>
                                                <Option value="医药学" desc="医药学">医药学</Option>
                                                <Option value="艺术" desc="艺术">艺术</Option>
                                                <Option value="自然科学" desc="自然科学">自然科学</Option>
                                            </Select>
                                            <input type="hide" id="HopeMajor" className="inputHide" value={this.state.HopeMajor}/>
                                        </dd>
                                        <dd id="dd_HopeMajor">
                                            <Select value={this.state.HopeMajorName==null?"选专业名称":this.state.HopeMajorName} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeG.bind(this)}>
                                                <Option value="选专业名称" desc="选专业名称">选专业名称</Option>
                                            </Select>
                                            <input type="hide" id="HopeMajorName" className="inputHide" value={this.state.HopeMajorName}/>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="bottom-bg"></div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="buttonDv">
                            <input type="submit" className="button-normal" value="完成确定选校方案" />
                        </div>
                    </form>
            </div>
            )
    }

}

export default SetpC_AUS_DXY;
