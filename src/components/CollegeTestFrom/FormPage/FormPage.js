//FormPage.js
/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, {
    PropTypes
}
from 'react';
import $ from 'jquery';
import Common from '../../../utils/Common.js';

var Select = require('rc-select');
var Option = Select.Option;
class FormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xueli: '本科',
            selectOne: '',
            selectTwo: '',
            selectThree: '',
            showGeetest:false
        };
    }

    handleSelectOne(value) {
        this.setState({
            selectOne: value
        });
    }
    handleSelectTwo(value) {
        this.setState({
            selectTwo: value
        });
    }
    handleSelectThree(value) {

        this.setState({
            selectThree: value
        });
    }
    SelectXueli(e) {
        var valueXueLi=e.target.innerHTML;
        if(this.props.typeSchool=="高中"||"%E9%AB%98%E4%B8%AD"==this.props.typeSchool){
            if(valueXueLi=="高中"){
                this.setState({ xueli: valueXueLi});
            }else{
                Common.alert(this.props.schoolName+"只提供高中学历。");
            }
        }else{
            if(valueXueLi=="高中"){
                Common.alert(this.props.schoolName+"只提供高中以上学历。");
            }else{
                this.setState({ xueli: valueXueLi});
                
            }
        }
       
    }
    closeGeetest(){
        this.setState({showGeetest:false});
    }
    render() {
        return ( 
            <div className = "formContent" id = "test-box" >
            <div className={this.state.showGeetest?"geetestPagerTestDiv":"elementHidden"}>
                <div className="geetestPager">
                    <div id="geetestContainer" className="geetestContainer"></div>
                    <div className='geetBtnDiv'> <a className="geetestA" onClick={this.closeGeetest.bind(this)}>关闭</a></div>
                </div>
            </div>
                <div className = "title"> 测试我的录取机率 </div>
                    <div id = "testForm" >
                        <div className = "tr-dv">
                            <div className = "in-t"> 想申请的学历： </div> 
                            <div className = "xueli">
                                <div className = {this.state.xueli == "高中"?"item active" : "item"} onClick={this.SelectXueli.bind(this)}>高中</div>
                                <div className = {this.state.xueli == "本科"?"item active" : "item"} onClick={this.SelectXueli.bind(this)}>本科</div> 
                                <div className = {this.state.xueli == "硕士"?"item active" : "item"} onClick={this.SelectXueli.bind(this)}>硕士</div>

                                <div className = "clear" > < /div> 
                            </div> 
                            <div className = "clear"></div>
                        </div> 
                        <div className = "averageDv">
                            <div className = "in-t"> 平均分：</div> 
                            <div className = "average">
                                <input type = "text" placeholder = "四分制" className = "input-text"  id = "num-input"/>&nbsp;&nbsp;分
                            </div>
                            <div className = "clear"></div>
                        </div>
                        <div className = "averageDv">
                        <div className = "in-t" >最高学历：</div>
                        <div className = "average">
                            <Select value = {this.state.selectOne == '' ? "请选择" : this.state.selectOne} style={{width: 120,height: 25}} optionFilterProp="desc" renderDropdownToBody={true} onChange = {this.handleSelectOne.bind(this)}>
                                <Option value="请选择" desc="请选择">请选择</Option>
                                <Option value="硕士" desc="硕士">硕士</Option>
                                <Option value="本科" desc="本科">本科</Option>
                                <Option value="大专" desc="大专">大专</Option>
                                <Option value="高中" desc="高中">高中</Option>
                                <Option value="初中" desc="初中">初中</Option>
                            </Select>
                        </div>
                        < div className = "clear">< /div>
                    </div>
                    <div className = "averageDv">
                        <div className = "in-t">语言成绩：</div>
                        <div className = "average in-av">
                            <Select value = {this.state.selectTwo == '' ? "请选择" : this.state.selectTwo} style={{width: 120,height: 25}} optionFilterProp = "desc" renderDropdownToBody = {true} onChange = {this.handleSelectTwo.bind(this)} className="yuyanCj">
                                <Option value = "请选择" desc = "请选择">请选择</Option>
                                <Option value = "托福" desc = "托福">托福</Option>
                                <Option value = "雅思" desc = "雅思">雅思</Option>
                            </Select>
                            <input type = "text" placeholder = "" className = "input-text" id = "yyinput"/>&nbsp;&nbsp;分 
                            <div className = "clear">< /div>
                        </div>
                        <div className = "clear"></div>
                    </div>
                    <div className = "averageDv">
                        <div className = "in-t">出身校：</div>
                        <div className = "average" >
                            <Select value = {this.state.selectThree == '' ? "请选择" : this.state.selectThree} style = {{width: 120,height: 25}} optionFilterProp = "desc" renderDropdownToBody = {true} onChange = {this.handleSelectThree.bind(this)}>
                                <Option value = "请选择" desc = "请选择">请选择</Option>
                                <Option value = "985/211" desc = "985/211" >985/211</Option>
                                <Option value = "普通大学" desc = "普通大学">普通大学</Option>
                                <Option value = "高中" desc = "高中">高中</Option>
                                <Option value = "初中" desc = "初中">初中</Option>
                            </Select>
                        </div>
                        <div className = "clear">< /div>
                    </div>
                    <div className = "averageDv">
                    <div className = "in-t">姓名：</div>
                    <div className = "average" >
                        <input type="text" className="input-text" id = "nameInput"/>
                    </div>
                    <div className = "clear">< /div>
                </div>
                <div className = "averageDv">
                    <div className = "in-t">手机：</div>
                    <div className = "average">
                        <input type = "text" className = "input-text"  maxlength = "11" id = "mbInput"/>
                    </div>
                    <div className = "clear"></div>
                </div>
                <div className = "averageDv" >
                    <div className = "in-t">微信/QQ：</div>
                    <div className = "average" >
                        <input type = "text" className = "input-text" id = "weqqInput" />
                </div>
                
                <div className = "clear"></div></div>
                    
                    <button className = "button-normal start-bt" onClick = {this.StartTestGeetest.bind(this)}>开启测试</button>
                </div>
            </div>
        );
    }
    StartTestGeetest(){
       if(!window.embed_testPager.getValidate()){
            //Common.alert('请先拖动完成验证操作!');
            var self=this;
            this.setState({showGeetest:true});
            return;
        } 
        this.StartTest();
    }
    StartTest() {
        let xueliStr = this.state.xueli;
        let selectOneStr = this.state.selectOne;
        let selectTwoStr = this.state.selectTwo;
        let selectThreeStr = this.state.selectThree;
        this.props.toTest(xueliStr, selectOneStr, selectTwoStr, selectThreeStr);
    }
    geettestCallBack(){
        this.StartTest();
    }

    componentDidMount() {

        if(this.props.typeSchool=="高中"||"%E9%AB%98%E4%B8%AD"==this.props.typeSchool){ this.setState({ xueli:"高中" });
        }else{ this.setState({ xueli:"本科" }); }

        let urlArr = this.props.arrStr;
        if (urlArr != "0") {
            $.ajax({
                url: "http://service.shenyuan.org/FreeGuideService/LoadEntityForJs/FreeGuidSysno=" + _FreeGuidSysno + ";CallBack=FreeGuidSysnoCallBack",
                type: "get",
                dataType: "jsonp",
                async: false,
                jsonp: "callbackparam", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                jsonpCallback: "FreeGuidSysnoCallBack", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名            
            }).done(function(json) {
                if (json != null) {
                    $("#nameInput").val(json.Name);
                    $("#mbInput").val(json.Phone);
                    $("#weqqInput").val(json.IM);
                }

            }.bind(this));
        }
        var self=this;
        $.get(window.global.host + 'api/query/vcode').then(function(challenge){
            window.embed_testPager = new Geetest({ gt: "b6fa2ad4ca055777f9fd93431ad542e1", challenge: challenge, product: "float" }).appendTo("#geetestContainer");
            embed_testPager.onSuccess(function() {
                self.setState({showGeetest:false});
                self.StartTest();
            });
        });
      

    }




}

export default FormPage;
