
import React, { PropTypes } from 'react';

var Select = require('rc-select');
var Select2 = require('rc-select');
var Select3 = require('rc-select');
var Option = Select.Option;

var Radio = require('rc-radio');
import SetpC2 from '../SetpC/SetpC2';
import SetpResule from '../SetpC/SetpResule';
import $ from 'jquery';
//

import LoginPage from '../../LoginPage/LoginPage.js';
var Common = require('../../../utils/Common.js');  
var Rest = require('../../../utils/rest');
import SelectStyles from "./SetpC.less";
import withStyles from '../../../decorators/withStyles';
@withStyles(SelectStyles)
class SetpC_USA_ZX extends React.Component {
    constructor(props) {
        super(props);
        this.state = {disabled: false,
                      checked: null,
                      IMType:null,
                      SchoolType:null,
                      AvgScoreType:null,
                      LanguageType:null,
                      Area:null,
                      SchoolNature:null,
                      SchoolCharacteristics:null,
                      AccommodationType:null,
                      TuitionRange:null,
                      SchoolClasses:null,
                      r: '普通课程',
                      studentSex:"1"
                  };
    }    
    checkSex(str){
        this.setState({
          studentSex: str
        })
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
            AvgScoreType:e
        });
    }
    handleChangeD(e){
        this.setState({
            LanguageType:e
        });
    }
    handleChangeE(e){
        this.setState({
            Area:e
        });
    }
    handleChangeF(e){
        this.setState({
            SchoolNature:e
        });
    }
    handleChangeG(e){
        this.setState({
            SchoolCharacteristics:e
        });
    }
    handleChangeH(e){
        this.setState({
            AccommodationType:e
        });
    }
    handleChangeI(e){
        this.setState({
            TuitionRange:e
        });
    }
    handleChangeJ(e){
        this.setState({
            SchoolClasses:e
        });
    }

    UserSearchSchool(str,Sum,Country,Type,AreaStr){ 
            var studentChoose=this.props.SelectItem;    
            let searchUrl="http://service.shenyuan.org/UniversitySearchNodeJsService/UniversitySearch/Country=USA;Type=高中;PageIndex=1;PageSize=4;Name=;"+AreaStr          
            $.ajax({
                type: "get",
                url: searchUrl, 
                dataType: "jsonp",
                async:false,
                jsonp:"callbackparam",//
                jsonpCallback:"success_jsonpCallback",//自定义jsonp回调函数名称       
            }).done(function(json){
                var schooolData=[];
                if(json){schooolData=json;}
                 React.render(<SetpResule selectArr={studentChoose}  result={str} Sum={Sum} Country={Country} Type={Type} schoool={schooolData} />, document.getElementById('educationBox'));
  
            });
    }

    handleSubmit(e){
        e.preventDefault();
        var jsonEntity={
            StudyCourse:this.state.r,
            RecentSchool:e.target["RecentSchool"].value,
            SchoolType:e.target["SchoolType"].value,
            AvgScoreType:e.target["AvgScoreType"].value,
            AvgScore:e.target["AvgScore"].value,
            LanguageType:e.target["LanguageType"].value,
            LanguageScore:e.target["LanguageScore"].value,
            MathAvgScore:e.target["MathAvgScore"].value,
            Area:e.target["Area"].value,
            SchoolNature:e.target["SchoolNature"].value,
            SchoolCharacteristics:e.target["SchoolCharacteristics"].value,
            AccommodationType:e.target["AccommodationType"].value,
            TuitionRange:e.target["TuitionRange"].value,
            SchoolClasses:e.target["SchoolClasses"].value
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
        if(entity.IMType=="选联系类型"||entity.IMType==""||entity.IMType==null){
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
        if(jsonEntity.MathAvgScore==""||jsonEntity.MathAvgScore==null){
            Common.alert("请输入数学平均成绩！");
            return;
        }
        if(jsonEntity.Area=="选区域"||jsonEntity.Area==""||jsonEntity.Area==null){
            Common.alert("请选择区域！");
            return;
        }
        if(jsonEntity.SchoolNature=="选学校性质"||jsonEntity.SchoolNature==""||jsonEntity.SchoolNature==null){
            Common.alert("请选择学校性质！");
            return;
        }
        if(jsonEntity.SchoolCharacteristics=="选学校特色"||jsonEntity.SchoolCharacteristics==""||jsonEntity.SchoolCharacteristics==null){
            Common.alert("请选择学校特色！");
            return;
        }
        if(jsonEntity.AccommodationType=="选住宿类型"||jsonEntity.AccommodationType==""||jsonEntity.AccommodationType==null){
            Common.alert("请选择住宿类型！");
            return;
        }
        if(jsonEntity.TuitionRange=="选学费范围"||jsonEntity.TuitionRange==""||jsonEntity.TuitionRange==null){
            Common.alert("请选择学费范围！");
            return;
        }
        if(jsonEntity.SchoolClasses=="选学校类型"||jsonEntity.SchoolClasses==""||jsonEntity.SchoolClasses==null){
            Common.alert("请选择学校类型！");
            return;
        }
        if (jsonEntity.AvgScoreType == "平均成绩") {
            jsonEntity.AvgScore = parseFloat(jsonEntity.AvgScore) / 2;
            $("#AvgScore").val(jsonEntity.AvgScore / 2);
        } else if (jsonEntity.AvgScoreType == "GPA") {
            jsonEntity.AvgScore = parseFloat(jsonEntity.AvgScore) * 12.5;
            $("#AvgScore").val(jsonEntity.AvgScore);
        }
        var Country="USA";
        var Type="高中";
        var Sum=this.props.Sum;
        if(entity.Level>4){
            Type="大学";
        }
        var self=this;
        entity.JsonEntity=JSON.stringify(jsonEntity);
        if(Common.getCookie("userLoginSuccess")!=null&&Common.getCookie("userLoginSuccess").length > 0){
            entity.MemberSysnoStr=Common.getCookie("userLoginSuccess");
            Rest.post('/FreeGuideService/InsertFreeGuideForJs',  
              {"CallBack":Date.now(),"ChildEntity":entity}
              ,function(responseText){
                    var str = responseText.text.split(';');
                    document.getElementById('educationBox').innerHTML="";
                    let userSearch="Area="+jsonEntity.Area+";SchoolNature="+jsonEntity.SchoolNature+";SchoolCharacteristic="+
                    jsonEntity.SchoolCharacteristics+";SchoolDormitoryType="+jsonEntity.AccommodationType+";Tuition="+";Uniproperty="+jsonEntity.SchoolClasses;
                    self.UserSearchSchool(str,Sum,Country,Type,userSearch);

                    //React.render(<SetpResule result={str} Sum={Sum} Country={Country} Type={Type} />, document.getElementById('educationBox'));
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
        var node=[];
        var nodeS=[];
        node.push(
               <Option value="男子学校" desc="男子学校">男子学校</Option>
            );

        nodeS.push(
               <Option value="女子学校" desc="女子学校">女子学校</Option>
            );
        return (
            <div>
                <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="title">3.请准确填写你的个人信息，我们会为你推荐最适合的方案</div>
                        <div className="ws-education1">
                            <div className="education-box">
                                <div className="content">
                                    <SetpC2 clickFunc={this.checkSex.bind(this)}  />
                                    <dl>
                                        <dd>
                                            <Radio value="普通课程" name="radio_StudyCourse" checked = {this.state.r === '普通课程'} onChange={this.radHandleChange.bind(this)} disabled={this.state.disabled}/>
                                            <label for="male">普通课程</label>&nbsp;&nbsp;
                                            <Radio value="A-level课程" name="radio_StudyCourse" checked = {this.state.r === 'A-level课程'} onChange={this.radHandleChange.bind(this)} disabled={this.state.disabled}/>
                                            <label for="male">A-level课程</label>&nbsp;&nbsp;
                                            <Radio value="IB课程" name="radio_StudyCourse" checked = {this.state.r === 'IB课程'} onChange={this.radHandleChange.bind(this)} disabled={this.state.disabled}/>
                                            <label for="male">IB课程</label>&nbsp;&nbsp;
                                            <Radio value="其他国际课程" name="radio_StudyCourse" checked = {this.state.r === '其他国际课程'} onChange={this.radHandleChange.bind(this)} disabled={this.state.disabled}/>
                                            <label for="male">其他国际课程</label>&nbsp;&nbsp;
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>                                            
                                            <Select value={this.state.IMType==null?"选联系类型":this.state.IMType} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChange.bind(this)}>
                                                <Option value="选联系类型" desc="选联系类型">选择联系方式</Option>
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
                                            <Select value={this.state.SchoolType==null?"选学校类型":this.state.SchoolType} style={{width:180,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeB.bind(this)}>
                                                <Option value="选学校类型" desc="选学校类型">选择学校类型</Option>
                                                <Option value="国家重点" desc="国家重点 ">国家重点</Option>
                                                <Option value="省/直辖市重点/国际班" desc="省/直辖市重点/国际班">省/直辖市重点/国际班</Option>
                                                <Option value="市/区重点" desc="市/区重点">市/区重点</Option>
                                                <Option value="普通中学" desc="普通中学">普通中学</Option>
                                            </Select>
                                            <input type="hide" id="SchoolType" className="inputHide" value={this.state.SchoolType}/>
                                        </dd>
                                        <dd>
                                            <input type="text" id="RecentSchool" placeholder="就读学校" />
                                        </dd>
                                      
                                    </dl>
                                    <dl>
                                        <dd>
                                            <Select value={this.state.AvgScoreType==null?"选成绩类型":this.state.AvgScoreType} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeC.bind(this)}>
                                                <Option value="选成绩类型" desc="选成绩类型">选择成绩类型</Option>
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
                                            <Select value={this.state.LanguageType==null?"选语言考试类型":this.state.LanguageType} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeD.bind(this)}>
                                                <Option value="选语言考试类型" desc="选语言考试类型">选择语言考试类型</Option>
                                                <Option value="雅思" desc="雅思">雅思</Option>
                                                <Option value="托福" desc="托福">托福</Option>
                                                <Option value="平时英语成绩" desc="平时英语成绩">平时英语成绩</Option>
                                            </Select>
                                            <input type="hide" id="LanguageType" className="inputHide" value={this.state.LanguageType}/>
                                        </dd>
                                        <dd>
                                            <input type="text" id="LanguageScore" placeholder="语言成绩" />
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <input type="text" id="MathAvgScore" placeholder="数学平均成绩" />
                                        </dd>
                                    </dl>
                                    <dl className="chooseTitle"><label>择校需求:</label></dl>
                                    <dl>
                                        <dd className="USAAreaCss">
                                            <Select className='bigselect' value={this.state.Area==null?"选区域":this.state.Area} style={{width:768,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeE.bind(this)}>
                                                <Option   value="选区域" desc="选区域">选择地区</Option>
                                                <Option value="西北地区" desc="西北地区">西北地区（华盛顿州、俄勒冈州、爱达荷州、蒙大拿州、怀俄明州）</Option>
                                                <Option value="加州、内华达州" desc="加州、内华达州">加州、内华达州（内华达州、加利福尼亚州）</Option>
                                                <Option value="西南地区" desc="西南地区">西南地区（科罗拉多州、新墨西哥州、亚利桑那州、犹他州）</Option>
                                                <Option value="五大湖区" desc="五大湖区">五大湖区（明尼苏达州、威斯康星州、伊利诺州、密执安州、印地安那州、俄亥俄州）</Option>
                                                <Option value="大平原地区" desc="大平原地区">大平原地区（北达科他州、南达科他州、内布拉斯加州、堪萨斯州、俄克拉荷马州、德克萨斯州）</Option>
                                                <Option value="密西西比河流域" desc="密西西比河流域">密西西比河流域（密苏里州、密西西比州、肯塔基州、田纳西州、阿肯色州、路易斯安那州、亚拉巴马州）</Option>
                                                <Option value="东北地区" desc="东北地区">东北地区（缅因州、佛蒙特州、新罕布什尔州、马萨诸塞州、康涅狄格州、纽约州、罗得岛州、新泽西州、宾夕法尼亚州）</Option>
                                                <Option value="东南地区" desc="东南地区">东南地区（西弗吉尼亚州、弗吉尼亚州、北卡罗来纳州、南卡罗来纳州、乔治亚州、佛罗里达州、夏威夷州、阿拉斯加州）</Option>
                                            </Select>
                                            <input type="hide" id="Area" className="inputHide" value={this.state.Area}/>
                                        </dd>
                                        <dd>
                                            <Select value={this.state.SchoolNature==null?"选学校性质":this.state.SchoolNature} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeF.bind(this)}>
                                                <Option value="选学校性质" desc="选学校性质">选择学校性质</Option>
                                                <Option value="混合学校" desc="混合学校">混合学校</Option>
                                                {this.state.studentSex=="1"?node:nodeS}
                                            </Select>
                                            <input type="hide" id="SchoolNature" className="inputHide" value={this.state.SchoolNature}/>
                                        </dd>
                                        <dd>
                                            <Select value={this.state.SchoolCharacteristics==null?"选学校特色":this.state.SchoolCharacteristics} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeG.bind(this)}>
                                                <Option value="选学校特色" desc="选学校特色">选择学校特色</Option>
                                                <Option value="普通" desc="普通">普通</Option>
                                                <Option value="艺术类" desc="艺术类">艺术类</Option>
                                                <Option value="军事高中" desc="军事高中">军事高中</Option>
                                            </Select>
                                            <input type="hide" id="SchoolCharacteristics" className="inputHide" value={this.state.SchoolCharacteristics}/>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <Select value={this.state.AccommodationType==null?"选住宿类型":this.state.AccommodationType} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeH.bind(this)}>
                                                <Option value="选住宿类型" desc="选住宿类型">选择住宿类型</Option>
                                                <Option value="学校宿舍" desc="学校宿舍">学校宿舍</Option>
                                                <Option value="寄宿家庭" desc="寄宿家庭">寄宿家庭</Option>
                                                <Option value="监护人陪读" desc="监护人陪读">监护人陪读</Option>
                                            </Select>
                                            <input type="hide" id="AccommodationType" className="inputHide" value={this.state.AccommodationType}/>
                                        </dd>
                                        <dd>
                                            <Select value={this.state.TuitionRange==null?"选学费范围":this.state.TuitionRange} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeI.bind(this)}>
                                                <Option value="选学费范围" desc="选学费范围">选择学费范围</Option>
                                                <Option value="1万以下" desc="1万以下">1万以下</Option>
                                                <Option value="1－2万" desc="1－2万">1－2万</Option>
                                                <Option value="2－3万" desc="2－3万">2－3万</Option>
                                                <Option value="3－4万" desc="3－4万">3－4万</Option>
                                                <Option value="4－5万" desc="4－5万">4－5万</Option>
                                                <Option value="5万以上" desc="5万以上">5万以上</Option>
                                            </Select>
                                            <input type="hide" id="TuitionRange" className="inputHide" value={this.state.TuitionRange}/>
                                        </dd>
                                        <dd>
                                            <Select value={this.state.SchoolClasses==null?"选学校类型":this.state.SchoolClasses} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeJ.bind(this)}>
                                                <Option value="选学校类型" desc="选学校类型">选择学校类型</Option>
                                                <Option value="公立" desc="公立">公立</Option>
                                                <Option value="私立" desc="私立">私立</Option>
                                                <Option value="教会" desc="教会">教会</Option>
                                            </Select>
                                            <input type="hide" id="SchoolClasses" className="inputHide" value={this.state.SchoolClasses}/>
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
    componentDidMount() {
        $(".rc-select-dropdown rc-select-dropdown--below").css("width","760px");
    }


}

export default SetpC_USA_ZX;
