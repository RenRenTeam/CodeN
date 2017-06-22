
import React, { PropTypes } from 'react';

var Select = require('rc-select');
var Select2 = require('rc-select');
var Select3 = require('rc-select');
var Option = Select.Option;
var Common = require('../../../utils/Common.js');
var Radio = require('rc-radio');
import SetpC2 from './SetpC2';
import $ from 'jquery';
import LoginPage from '../../LoginPage/LoginPage.js';
import SelectStyles from "./SetpC.less";
var Rest = require('../../../utils/rest');
import withStyles from '../../../decorators/withStyles';
import SetpResule from '../SetpC/SetpResule';
@withStyles(SelectStyles)
class SetpC_JP_DX extends React.Component {
    constructor(props) {
        super(props);
        this.state = {disabled: false,
                      checked: null,
                      IMType:null,
                      SchoolType:null,
                      JapaneseType:null,
                      JapaneseGrade:null,
                      HopeMajor:null,
                      SchoolClasses:null,
                      EnrollmentMonth:null,
                      CloseDate:null,
                      IsEJU:null,
                      IsEnglishTest:null,
                      IsToJP:null};
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
            JapaneseType:e
        });
    }
    handleChangeE(e){
        this.setState({
            JapaneseGrade:e
        });
    }
    handleChangeF(e){
        this.setState({
            HopeMajor:e
        });
    }
    handleChangeG(e){
        this.setState({
            SchoolClasses:e
        });
    }
    handleChangeH(e){
        this.setState({
            EnrollmentMonth:e
        });
    }
    handleChangeI(e){
        this.setState({
            CloseDate:e
        });
    }
    handleChangeJ(e){
        this.setState({
            IsEJU:e
        });
    }
    handleChangeK(e){
        this.setState({
            IsEnglishTest:e
        });
    }
    handleChangeL(e){
        this.setState({
            IsToJP:e
        });
    }
    handleSubmit(e){
        e.preventDefault();
        var jsonEntity={
            RecentSchool:e.target["RecentSchool"].value,
            SchoolType:e.target["SchoolType"].value,
            Major:e.target["Major"].value,
            MajorName:e.target["MajorName"].value,
            JapaneseType:e.target["JapaneseType"].value,
            JapaneseGrade:e.target["JapaneseGrade"].value,
            JapaneseScore:e.target["JapaneseScore"].value,
            HopeMajor:e.target["HopeMajor"].value,
            HopeMajorName:e.target["HopeMajorName"].value,
            SchoolClasses:e.target["SchoolClasses"].value,
            EnrollmentMonth:e.target["EnrollmentMonth"].value,
            CloseDate:e.target["CloseDate"].value,
            IsEJU:e.target["IsEJU"].value,
            IsEnglishTest:e.target["IsEnglishTest"].value,
            IsToJP:e.target["IsToJP"].value
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
            Level:this.props.Sum,
            JsonEntity:JSON.stringify(jsonEntity)
        };
        if(entity.Name==""||entity.Name==null){
            Common.alert("请输入姓名！");
            return;
        }
        if(entity.IMType=="选联系方式"||entity.IMType==""||entity.IMType==null){
            Common.alert("请选择联系方式类型！");
            return;
        }
        if(entity.IM==""||entity.IM==null){
            Common.alert("请输入联系方式号码！");
            return;
        }
        if(entity.Phone==""||entity.Phone==null){
            Common.alert("请输入电话！");
            return;
        }
        if(jsonEntity.RecentSchool==""||jsonEntity.RecentSchool==null){
            Common.alert("请输入就读学校！");
            return;
        }
        if(jsonEntity.SchoolType=="选学校类型"||jsonEntity.SchoolType==""||jsonEntity.SchoolType==null){
            Common.alert("请选择就读学校类型！");
            return;
        }
        if(jsonEntity.Major=="选专业类型"||jsonEntity.Major==""||jsonEntity.Major==null){
            Common.alert("请选择专业类型！");
            return;
        }
        if(jsonEntity.MajorName==""||jsonEntity.MajorName==null){
            Common.alert("请输入专业名称！");
            return;
        }
        if(jsonEntity.JapaneseType=="选日语考试类型"||jsonEntity.JapaneseType==""||jsonEntity.JapaneseType==null){
            Common.alert("请选择日语考试类型！");
            return;
        }
        if(jsonEntity.JapaneseGrade=="选日语等级"||jsonEntity.JapaneseGrade==""||jsonEntity.JapaneseGrade==null){
            Common.alert("请选择日语等级！");
            return;
        }
        if(jsonEntity.JapaneseScore==""||jsonEntity.JapaneseScore==null){
            Common.alert("请输入日语考试成绩！");
            return;
        }
        if(jsonEntity.HopeMajor=="选希望就读专业"||jsonEntity.HopeMajor==""||jsonEntity.HopeMajor==null){
            Common.alert("请选择希望就读的专业类型！");
            return;
        }
        if(jsonEntity.HopeMajorName==""||jsonEntity.HopeMajorName==null){
            Common.alert("请输入希望就读的专业名称！");
            return;
        }
        if(jsonEntity.SchoolClasses=="选学校性质"||jsonEntity.SchoolClasses==""||jsonEntity.SchoolClasses==null){
            Common.alert("请选择希望就读的学校类型！");
            return;
        }
        if(jsonEntity.EnrollmentMonth=="选开学月份"||jsonEntity.EnrollmentMonth==""||jsonEntity.EnrollmentMonth==null){
            Common.alert("请选择入学月份！");
            return;
        }
        if(jsonEntity.CloseDate=="选截止日期"||jsonEntity.CloseDate==""||jsonEntity.CloseDate==null){
            Common.alert("请选择截止日期！");
            return;
        }
        if(jsonEntity.IsEJU=="选是否留考EJU"||jsonEntity.IsEJU==""||jsonEntity.IsEJU==null){
            Common.alert("请选择是否需要留考EJU！");
            return;
        }
        if(jsonEntity.IsEnglishTest=="选是否需要英语考试"||jsonEntity.IsEnglishTest==""||jsonEntity.IsEnglishTest==null){
            Common.alert("请选择是否需要英语考试！");
            return;
        }
        if(jsonEntity.IsToJP=="选是否参加校内考"||jsonEntity.IsToJP==""||jsonEntity.IsToJP==null){
            Common.alert("请选择是否需要赴日参加校内考！");
            return;
        }
        var Country="JP";
        var Type="大学";
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
        //console.log(entity);
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
                                                <Option value="社会学科" desc="社会学科">社会学科</Option>
                                                <Option value="医药科" desc="医药科">医药科</Option>
                                                <Option value="艺术" desc="艺术">艺术</Option>
                                                <Option value="自然学科" desc="自然学科">自然学科</Option>
                                            </Select>
                                            <input type="hide" id="Major" className="inputHide" value={this.state.Major}/>
                                        </dd>
                                        <dd>
                                            <input type="text" id="MajorName" placeholder="目前就读专业名称" />
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <Select value={this.state.JapaneseType==null?"选日语考试类型":this.state.JapaneseType} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeD.bind(this)}>
                                                <Option value="选日语考试类型" desc="选日语考试类型">选日语考试类型</Option>
                                                <Option value="JLPT" desc="JLPT">JLPT</Option>
                                                <Option value="J-TEST" desc="J-TEST">J-TEST</Option>
                                                <Option value="BJT" desc="BJT">BJT</Option>
                                                <Option value="NAT" desc="NAT">NAT</Option>
                                                <Option value="无" desc="无">无</Option>
                                                <Option value="艺术" desc="艺术">艺术</Option>
                                            </Select>
                                            <input type="hide" id="JapaneseType" className="inputHide" value={this.state.JapaneseType}/>
                                        </dd>
                                        <dd>
                                            <Select value={this.state.JapaneseGrade==null?"选日语等级":this.state.JapaneseGrade} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeE.bind(this)}>
                                                <Option value="选日语等级" desc="选日语等级">选日语等级</Option>
                                                <Option value="N1" desc="N1 ">N1</Option>
                                                <Option value="N2" desc="N2">N2</Option>
                                                <Option value="N3" desc="N3">N3</Option>
                                                <Option value="N4" desc="N4">N4</Option>
                                                <Option value="N5" desc="N5">N5</Option>
                                            </Select>
                                            <input type="hide" id="JapaneseGrade" className="inputHide" value={this.state.JapaneseGrade}/>
                                        </dd>
                                        <dd>
                                            <input type="text" id="JapaneseScore" placeholder="日语成绩" />
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <Select value={this.state.HopeMajor==null?"选希望就读专业":this.state.HopeMajor} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeF.bind(this)}>
                                                <Option value="选希望就读专业" desc="选希望就读专业">选希望就读专业</Option>
                                                <Option value="工科" desc="工科">工科</Option>
                                                <Option value="经济金融" desc="经济金融">经济金融</Option>
                                                <Option value="商科" desc="商科">商科</Option>
                                                <Option value="社会学科" desc="社会学科">社会学科</Option>
                                                <Option value="医药科" desc="医药科">医药科</Option>
                                                <Option value="艺术" desc="艺术">艺术</Option>
                                                <Option value="自然学科" desc="自然学科">自然学科</Option>
                                            </Select>
                                            <input type="hide" id="HopeMajor" className="inputHide" value={this.state.HopeMajor}/>
                                        </dd>
                                        <dd>
                                            <input type="text" id="HopeMajorName" placeholder="希望就读的专业名称" />
                                        </dd>
                                    </dl>
                                    <dl className="chooseTitle"><label>择校需求:</label></dl>
                                    <dl>
                                        <dd>
                                            <Select value={this.state.SchoolClasses==null?"选学校性质":this.state.SchoolClasses} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeG.bind(this)}>
                                                <Option value="选学校性质" desc="选学校性质">选学校性质</Option>
                                                <Option value="国立" desc="国立">国立</Option>
                                                <Option value="公立" desc="公立">公立</Option>
                                                <Option value="私立" desc="私立">私立</Option>
                                            </Select>
                                            <input type="hide" id="SchoolClasses" className="inputHide" value={this.state.SchoolClasses}/>
                                        </dd>
                                        <dd>
                                            <Select value={this.state.EnrollmentMonth==null?"选开学月份":this.state.EnrollmentMonth} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeH.bind(this)}>
                                                <Option value="选开学月份" desc="选开学月份">选开学月份</Option>
                                                <Option value="1月" desc="1月">1月</Option>
                                                <Option value="3月" desc="3月">3月</Option>
                                                <Option value="4月" desc="4月">4月</Option>
                                                <Option value="5月" desc="5月">5月</Option>
                                                <Option value="9月" desc="9月">9月</Option>
                                                <Option value="10月" desc="10月">10月</Option>
                                            </Select>
                                            <input type="hide" id="EnrollmentMonth" className="inputHide" value={this.state.EnrollmentMonth}/>
                                        </dd>
                                        <dd>
                                            <Select value={this.state.CloseDate==null?"选截止日期":this.state.CloseDate} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeI.bind(this)}>
                                                <Option value="选截止日期" desc="选截止日期">选截止日期</Option>
                                                <Option value="1月" desc="1月">1月</Option>
                                                <Option value="2月" desc="2月">2月</Option>
                                                <Option value="3月" desc="3月">3月</Option>
                                                <Option value="4月" desc="4月">4月</Option>
                                                <Option value="5月" desc="5月">5月</Option>
                                                <Option value="6月" desc="6月">6月</Option>
                                                <Option value="7月" desc="7月">7月</Option>
                                                <Option value="8月" desc="8月">8月</Option>
                                                <Option value="9月" desc="9月">9月</Option>
                                                <Option value="10月" desc="10月">10月</Option>
                                                <Option value="11月" desc="11月">11月</Option>
                                                <Option value="12月" desc="12月">12月</Option>
                                            </Select>
                                            <input type="hide" id="CloseDate" className="inputHide" value={this.state.CloseDate}/>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <Select value={this.state.IsEJU==null?"选是否留考EJU":this.state.IsEJU} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeJ.bind(this)}>
                                                <Option value="选是否留考EJU" desc="选是否留考EJU">选是否留考EJU</Option>
                                                <Option value="需要留考EJU" desc="需要留考EJU">需要留考EJU</Option>
                                                <Option value="不需要留考EJU" desc="不需要留考EJU">不需要留考EJU</Option>
                                            </Select>
                                            <input type="hide" id="IsEJU" className="inputHide" value={this.state.IsEJU}/>
                                        </dd>
                                        <dd>
                                            <Select value={this.state.IsEnglishTest==null?"选是否需要英语考试":this.state.IsEnglishTest} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeK.bind(this)}>
                                                <Option value="选是否需要英语考试" desc="选是否需要英语考试">选是否需要英语考试</Option>
                                                <Option value="不需要英语考试" desc="不需要英语考试">不需要英语考试</Option>
                                                <Option value="举办校内英语考试" desc="举办校内英语考试">举办校内英语考试</Option>
                                                <Option value="需要托福成绩" desc="需要托福成绩">需要托福成绩</Option>
                                                <Option value="其他" desc="其他">其他</Option>
                                            </Select>
                                            <input type="hide" id="IsEnglishTest" className="inputHide" value={this.state.IsEnglishTest}/>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <Select value={this.state.IsToJP==null?"选是否参加校内考":this.state.IsToJP} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeL.bind(this)}>
                                                <Option value="选是否参加校内考" desc="选是否参加校内考">选是否参加校内考</Option>
                                                <Option value="可以海外直接申请，无需来日参加入学考试" desc="可以海外直接申请，无需来日参加入学考试">可以海外直接申请，无需来日参加入学考试</Option>
                                                <Option value="可以海外直接申请，但需来日参加入学考试" desc="可以海外直接申请，但需来日参加入学考试">可以海外直接申请，但需来日参加入学考试</Option>

                                            </Select>
                                            <input type="hide" id="IsToJP" className="inputHide" value={this.state.IsToJP}/>
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

export default SetpC_JP_DX;
