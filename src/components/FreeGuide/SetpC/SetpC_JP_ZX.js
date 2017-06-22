
import React, { PropTypes } from 'react';

var Select = require('rc-select');
var Select2 = require('rc-select');
var Select3 = require('rc-select');
var Option = Select.Option;
import $ from 'jquery';
var Radio = require('rc-radio');
var Rest = require('../../../utils/rest');
import SetpC2 from './SetpC2';
import LoginPage from '../../LoginPage/LoginPage.js';
var Common = require('../../../utils/Common.js');
import SelectStyles from "./SetpC.less";
import withStyles from '../../../decorators/withStyles';
import SetpResule from '../SetpC/SetpResule';
@withStyles(SelectStyles)
class SetpC_JP_ZX extends React.Component {
    constructor(props) {
        super(props);
        this.state = {disabled: false,
                      checked: null,
                      IMType:null,
                      JapaneseType:null,
                      JapaneseGrade:null};
    }

    handleChange(e){
        this.setState({
            IMType:e
        });
    }
    handleChangeB(e){
        this.setState({
            JapaneseType:e
        });
    }
    handleChangeC(e){
        this.setState({
            JapaneseGrade:e
        });
    }

    handleSubmit(e){
        e.preventDefault();
        var jsonEntity={
            RecentSchool:e.target["RecentSchool"].value,
            JapaneseType:e.target["JapaneseType"].value,
            JapaneseGrade:e.target["JapaneseGrade"].value,
            JapaneseScore:e.target["JapaneseScore"].value
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
        if(jsonEntity.JapaneseType=="选日语成绩类型"||jsonEntity.JapaneseType==""||jsonEntity.JapaneseType==null){
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
        var Country="JP";
        var Type="高中";
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
                                            <input type="text" id="RecentSchool" placeholder="就读学校" />
                                        </dd>
                                        <dd>
                                            <Select value={this.state.JapaneseType==null?"选日语成绩类型":this.state.JapaneseType} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeB.bind(this)}>
                                                <Option value="选日语成绩类型" desc="选日语成绩类型">选日语成绩类型</Option>
                                                <Option value="JLPT" desc="JLPT">JLPT</Option>
                                                <Option value="J-TEST" desc="J-TEST">J-TEST</Option>
                                                <Option value="BJT" desc="BJT">BJT</Option>
                                                <Option value="NAT" desc="NAT">NAT</Option>
                                                <Option value="无" desc="无">无</Option>
                                                <Option value="艺术" desc="艺术">艺术</Option>
                                            </Select>
                                            <input type="hide" id="JapaneseType" className="inputHide" value={this.state.JapaneseType}/>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <Select value={this.state.JapaneseGrade==null?"选日语等级":this.state.JapaneseGrade} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeC.bind(this)}>
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
                                            <input type="text" id="JapaneseScore" placeholder="成绩" />
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

export default SetpC_JP_ZX;
