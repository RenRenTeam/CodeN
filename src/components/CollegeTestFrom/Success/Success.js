/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';

class Success  extends React.Component{	  
    constructor(props) {

        super(props);

        this.state =
        {
            qqChatMan:''
        };
    }   
    render() {
       

        if(this.props.country == "美国"){

            /*华逸珣*/
            this.state.qqChatMan = "1423401931";

        }else if(this.props.country == "英国"){
            
            /*茅沄沄*/
            this.state.qqChatMan = "3264259821";

        }else if(this.props.country == "澳大利亚"){
            
            /*邵亚楠*/
            this.state.qqChatMan = "207506653";

        }else{

            /*李婷*/
            this.state.qqChatMan = "1456531390";

        }


        return (
            <div className="resultForm" id="test-result">
                <img src="http://passport.shenyuan.org/WebResources/Default/images/testForm/flowerA.png" className="flowerA" />
                <img src="http://passport.shenyuan.org/WebResources/Default/images/testForm/flowerB.png" className="flowerB" />
                <div className="formContent">
                    <div className="resultFont">
                        您有<font className="percent">60%</font>的机率可以申请到<br />
                        <span id="schoolName">{this.props.nameSchool}</span>
                    </div>
                    <div className="pl-tel">
                        以上信息仅供参考，如想获得更准确的测试结果，<br />
                        请联系人人留学的老师哦！
                    </div>
                    <div className="telDv">
                        <img src="http://passport.shenyuan.org/WebResources/Default/images/tel.png" />
                        <span className="tel">021-31576350</span>
                    </div>
                    <a href={"http://wpa.qq.com/msgrd?v=3&uin="+this.state.qqChatMan+"&site=qq&menu=yes"} target="_blank">
                        <button className="bt-qq button-normal">咨询老师</button>
                    </a>
                </div>
            </div>
            
        );
    }
    componentDidMount() {
  
    }
}

export default Success;
