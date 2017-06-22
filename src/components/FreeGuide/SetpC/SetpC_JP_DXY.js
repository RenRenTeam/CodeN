
import React, { PropTypes } from 'react';

var Select = require('rc-select');
var Select2 = require('rc-select');
var Select3 = require('rc-select');
var Option = Select.Option;
import $ from 'jquery';
var Radio = require('rc-radio');
import SetpC2 from './SetpC2';
var Rest = require('../../../utils/rest');
import LoginPage from '../../LoginPage/LoginPage.js';
var Common = require('../../../utils/Common.js');
import SelectStyles from "./SetpC.less";
import withStyles from '../../../decorators/withStyles';
import SetpResule from '../SetpC/SetpResule';
@withStyles(SelectStyles)
class SetpC_JP_DXY extends React.Component {
    constructor(props) {
        super(props);
        this.state = {disabled: false,
                      checked: null,
                      IMType:null,
                      EduBackground:null,
                      JLPT:null,
                      Honor:null,
                      SchoolType:null,
                      TOFFL:null,
                      GPA:null,
                      Major:null,
                      HopeMajor:null};
    }

    handleChange(e){
        this.setState({
            IMType:e
        });
    }
    handleChangeB(e){
        this.setState({
            EduBackground:e
        });
    }
    handleChangeC(e){
        this.setState({
            JLPT:e
        });
    }
    handleChangeD(e){
        this.setState({
            Honor:e
        });
    }
    handleChangeE(e){
        this.setState({
            SchoolType:e
        });
    }
    handleChangeF(e){
        this.setState({
            TOFFL:e
        });
    }
    handleChangeG(e){
        this.setState({
            GPA:e
        });
    }
    handleChangeH(e){
        this.setState({
            Major:e
        });
    }
    handleChangeI(e){
        this.setState({
            HopeMajor:e
        });
    }
    handleSubmit(e){
        e.preventDefault();
        var jsonEntity={
            EduBackground:e.target["EduBackground"].value,
            JLPT:e.target["JLPT"].value,
            Honor:e.target["Honor"].value,
            SchoolType:e.target["SchoolType"].value,
            TOFFL:e.target["TOFFL"].value,
            GPA:e.target["GPA"].value,
            Major:e.target["Major"].value,
            HopeMajor:e.target["HopeMajor"].value
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
        if(jsonEntity.EduBackground=="请选目前学历！"||jsonEntity.EduBackground==""||jsonEntity.EduBackground==null){
            Common.alert("请选择目前学历！");
            return;
        }
        if(jsonEntity.JLPT=="请选日语能力JLPT！"||jsonEntity.JLPT==""||jsonEntity.JLPT==null){
            Common.alert("请选择日语能力JLPT！");
            return;
        }
        if(jsonEntity.HonorHonor=="请选获得的荣誉！"||jsonEntity.Honor==""||jsonEntity.Honor==null){
            Common.alert("请选择获得的荣誉！");
            return;
        }
        if(jsonEntity.SchoolType=="请选就读学校类型！"||jsonEntity.SchoolType==""||jsonEntity.SchoolType==null){
            Common.alert("请选择就读学校类型！");
            return;
        }
        if(jsonEntity.TOFFL=="请选托福成绩！"||jsonEntity.TOFFL==""||jsonEntity.TOFFL==null){
            Common.alert("请选择托福成绩！");
            return;
        }
        if(jsonEntity.GPA=="请选GPA相关！"||jsonEntity.GPA==""||jsonEntity.GPA==null){
            Common.alert("请选择GPA相关！");
            return;
        }
        if(jsonEntity.Major=="请选目前所学专业！"||jsonEntity.Major==""||jsonEntity.Major==null){
            Common.alert("请选择目前所学专业！");
            return;
        }
        if(jsonEntity.HopeMajor=="请选希望就读专业！"||jsonEntity.HopeMajor==""||jsonEntity.HopeMajor==null){
            Common.alert("请选择希望就读专业！");
            return;
        }
        var Country="JP";
        var Type="研究生院";
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
                                            <Select value={this.state.EduBackground==null?"选目前学历":this.state.EduBackground} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeB.bind(this)}>
                                                <Option value="选目前学历" desc="选目前学历">选目前学历</Option>
                                                <Option value="大一在读" desc="大一在读">大一在读</Option>
                                                <Option value="大二在读" desc="大二在读">大二在读</Option>
                                                <Option value="大三在读" desc="大三在读">大三在读 </Option>
                                                <Option value="大四在读" desc="大四在读">大四在读</Option>
                                                <Option value="毕业" desc="毕业">毕业</Option>
                                            </Select>
                                            <input type="hide" id="EduBackground" className="inputHide" value={this.state.EduBackground}/>
                                        </dd>
                                        <dd>
                                            <Select value={this.state.JLPT==null?"选日语能力JLPT":this.state.JLPT} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeC.bind(this)}>
                                                <Option value="选日语能力JLPT" desc="选日语能力JLPT">选日语能力JLPT</Option>
                                                <Option value="1级（文科）" desc="1级（文科）">1级（文科）</Option>
                                                <Option value="2级（文科）" desc="2级（文科）">2级（文科）</Option>
                                                <Option value="2级以上（文科）" desc="2级以上（文科）">2级以上（文科）</Option>
                                                <Option value="2级以下（文科）" desc="2级以下（文科）">2级以下（文科）</Option>
                                                <Option value="1级（理科）" desc="1级（理科）">1级（理科）</Option>
                                                <Option value="2级（理科）" desc="2级（理科）">2级（理科）</Option>
                                                <Option value="2级以上（理科）" desc="2级以上（理科）">2级以上（理科）</Option>
                                                <Option value="2级以下（理科）" desc="2级以下（理科）">2级以下（理科）</Option>
                                            </Select>
                                            <input type="hide" id="JLPT" className="inputHide" value={this.state.JLPT}/>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <Select value={this.state.Honor==null?"选获得荣誉":this.state.Honor} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeD.bind(this)}>
                                                <Option value="选获得荣誉" desc="选获得荣誉">选获得荣誉</Option>
                                                <Option value="国家级论文发表" desc="国家级论文发表">国家级论文发表</Option>
                                                <Option value="省市级以上奖励" desc="省市级以上奖励">省市级以上奖励</Option>
                                                <Option value="日本交换生经历" desc="日本交换生经历">日本交换生经历 </Option>
                                                <Option value="日本颁发奖励" desc="日本颁发奖励">日本颁发奖励</Option>
                                                <Option value="无" desc="无">无</Option>
                                            </Select>
                                            <input type="hide" id="Honor" className="inputHide" value={this.state.Honor}/>
                                        </dd>
                                        <dd>
                                            <Select value={this.state.SchoolType==null?"选学校类型":this.state.SchoolType} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeE.bind(this)}>
                                                <Option value="选学校类型" desc="选学校类型">选学校类型</Option>
                                                <Option value="211" desc="211">211</Option>
                                                <Option value="985" desc="985">985</Option>
                                                <Option value="自考/成教" desc="自考/成教">自考/成教</Option>
                                                <Option value="一本" desc="一本">一本</Option>
                                                <Option value="二本" desc="二本">二本</Option>
                                                <Option value="三本" desc="三本">三本</Option>
                                            </Select>
                                            <input type="hide" id="SchoolType" className="inputHide" value={this.state.SchoolType}/>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <Select value={this.state.TOFFL==null?"选托福成绩":this.state.TOFFL} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeF.bind(this)}>
                                                <Option value="选托福成绩" desc="选托福成绩">选托福成绩</Option>
                                                <Option value="90分以上" desc="90分以上">90分以上</Option>
                                                <Option value="60-90" desc="60-90">60-90</Option>
                                                <Option value="60分以下" desc="60分以下">60分以下 </Option>
                                            </Select>
                                            <input type="hide" id="TOFFL" className="inputHide" value={this.state.TOFFL}/>
                                        </dd>
                                        <dd>
                                            <Select value={this.state.GPA==null?"选GPA相关":this.state.GPA} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeG.bind(this)}>
                                                <Option value="选GPA相关" desc="选GPA相关">选GPA相关</Option>
                                                <Option value="3.0以上" desc="3.0以上">3.0以上</Option>
                                                <Option value="2.0-3.0" desc="2.0-3.0">2.0-3.0</Option>
                                                <Option value="2.0以下" desc="2.0以下">2.0以下</Option>
                                            </Select>
                                            <input type="hide" id="GPA" className="inputHide" value={this.state.GPA}/>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <Select value={this.state.Major==null?"选目前专业":this.state.Major} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeH.bind(this)}>
                                                <Option value="选目前专业" desc="选目前专业">选目前专业</Option>
                                                <Option value="国内日语专业" desc="国内日语专业">国内日语专业</Option>
                                                <Option value="国内经济专业" desc="国内经济专业">国内经济专业</Option>
                                                <Option value="国内管理类专业" desc="国内管理类专业">国内管理类专业 </Option>
                                                <Option value="国内艺术相关专业" desc="国内艺术相关专业">国内艺术相关专业 </Option>
                                                <Option value="国内医药类相关专业" desc="国内医药类相关专业">国内医药类相关专业 </Option>
                                                <Option value="国内理工科类相关专业" desc="国内理工科类相关专业">国内理工科类相关专业 </Option>
                                                <Option value="其他专业" desc="其他专业">其他专业 </Option>
                                            </Select>
                                            <input type="hide" id="Major" className="inputHide" value={this.state.Major}/>
                                        </dd>
                                        <dd>
                                            <Select value={this.state.HopeMajor==null?"选希望就读专业":this.state.HopeMajor} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeI.bind(this)}>
                                                <Option value="选希望就读专业" desc="选希望就读专业">选希望就读专业</Option>
                                                <Option value="国内日语专业" desc="国内日语专业">国内日语专业</Option>
                                                <Option value="国内经济专业" desc="国内经济专业">国内经济专业</Option>
                                                <Option value="国内管理类专业" desc="国内管理类专业">国内管理类专业 </Option>
                                                <Option value="国内艺术相关专业" desc="国内艺术相关专业">国内艺术相关专业 </Option>
                                                <Option value="国内医药类相关专业" desc="国内医药类相关专业">国内医药类相关专业 </Option>
                                                <Option value="国内理工科类相关专业" desc="国内理工科类相关专业">国内理工科类相关专业 </Option>
                                                <Option value="其他专业" desc="其他专业">其他专业 </Option>
                                            </Select>
                                            <input type="hide" id="HopeMajor" className="inputHide" value={this.state.HopeMajor}/>
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

export default SetpC_JP_DXY;
