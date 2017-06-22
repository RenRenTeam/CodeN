/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './StudySolution.less';
import withStyles from '../../../decorators/withStyles';

import SetpA from '../SetpA/'
import SetpB from '../SetpB/'
import SetpC from '../SetpC/'
import SetpC_USA_ZX from '../SetpC/SetpC_USA_ZX'
import SetpC_USA_DX from '../SetpC/SetpC_USA_DX'
import SetpC_USA_DXY from '../SetpC/SetpC_USA_DXY'
import SetpC_JP_ZX from '../SetpC/SetpC_JP_ZX'
import SetpC_JP_DX from '../SetpC/SetpC_JP_DX'
import SetpC_JP_DXY from '../SetpC/SetpC_JP_DXY'
import SetpC_UK_ZX from '../SetpC/SetpC_UK_ZX'
import SetpC_UK_DX from '../SetpC/SetpC_UK_DX'
import SetpC_UK_DXY from '../SetpC/SetpC_UK_DXY'
import SetpC_AUS_ZX from '../SetpC/SetpC_AUS_ZX'
import SetpC_AUS_DX from '../SetpC/SetpC_AUS_DX'
import SetpC_AUS_DXY from '../SetpC/SetpC_AUS_DXY'
var Common = require('../../../utils/Common.js');

@withStyles(styles)
class StudySolution extends React.Component{
    constructor(props) {
        super(props);
        this.state = { Country: "美国" , current : "a", YTime : "2015", Type : "本科大四",SelectItem:new Array()};
    }
    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    GetSum(type,ytime){
        var typeValue=0;
        var ytimeValue=0;
        switch(type){
            case "初三": typeValue=1;break;
            case "高一": typeValue=2;break;
            case "高二": typeValue=3;break;
            case "高三在读或已毕业": typeValue=4;break;
            case "大专大一": typeValue=5;break;
            case "大专大二": typeValue=6;break;
            case "大专大三在读或已毕业": typeValue=8;break;
            case "本科大一": typeValue=9;break;
            case "本科大二": typeValue=10;break;
            case "本科大三": typeValue=11;break;
            case "本科大四或毕业已工作": typeValue=12;break;
            case "硕士在读或毕业已工作": typeValue=13;break;
        }
        switch(ytime){
            case "2016":ytimeValue=1;break;
            case "2017":ytimeValue=2;break;
            case "2018":ytimeValue=3;break;
        }
        return typeValue+ytimeValue;
    }

    componentDidMount() {
        if(this.state.current == "a"){
            var path = window.location.pathname;
            if(path.indexOf('?') > -1){
                path = path.substr(0,path.indexOf('?'));
            }
            //console.log(path);
            var self = this;
            Common.urldecode(path,'utf-8', function(str) {
                path = str;
                //console.log(path);
                var parm = path.split('_');
                //console.log("params" + parm);
                self.setState({
                     Country :parm[1],
                     YTime : parm[2],
                     Type : parm[3],
                     Sum:0
                });
                var CallbakCountry = function(e){
                  self.setState({Country:e,SelectItem:new Array()});
                }
                var CallbakType = function(e){

                  self.setState({Type:e,SelectItem:new Array()});
                  if(self.state.YTime!=null&&self.state.YTime!=""){
                    var sum = self.GetSum(e,self.state.YTime);
                    self.setState({Sum:sum});
                  }
                }
                var CallbakYTime = function(e){

                  self.setState({YTime:e,SelectItem:new Array()});
                  if(self.state.Type!=null&&self.state.Type!=""){
                    var sum = self.GetSum(self.state.Type,e);
                    self.setState({Sum:sum});
                  }
                }
                React.render(<SetpA Country={self.state.Country} YTime={self.state.YTime} Type={self.state.Type} CallbakCountry={CallbakCountry} CallbakType={CallbakType} CallbakYTime={CallbakYTime} />,
                  document.getElementById('div_setupA'));
            });
        }
    }



    Step1(){
        this.setState({SelectItem:new Array()});
        $(".rc-checkbox-checked").click();
        this.setState({current:"a"});
    }

    Step2(){
        if(this.state.Country=="请选择"||this.state.Country==""||this.state.Country==null){
            Common.alert("请选择想去的国家！");
            return;
        }
        if(this.state.YTime=="请选择"||this.state.YTime==""||this.state.YTime==null){
            Common.alert("请选择出国时间！");
            return;
        }
        if(this.state.Type=="请选择"||this.state.Type==""||this.state.Type==null){
            Common.alert("请选择目前就读的年级！");
            return;
        }
        var sum = this.GetSum(this.state.Type,this.state.YTime);
        this.setState({Sum:sum});
        this.setState({current:"b"});

    }

    Step3(){
        if(this.state.SelectItem.length<=0){
            Common.alert("请先勾选方案！");
            return;
        }
        this.setState({current:"c"});
        var country = this.state.Country;
        var sum=this.state.Sum;
        document.getElementById("educationBox").innerHTML="";
        if(sum>=1&&sum<=5){
            switch(country){
                case "美国":
                    React.render(<SetpC_USA_ZX Country={this.state.Country} YTime={this.state.YTime} Type={this.state.Type} Sum={this.state.Sum} SelectItem={this.state.SelectItem} />, document.getElementById('educationBox'));
                    break;
                case "英国":
                    React.render(<SetpC_UK_ZX Country={this.state.Country} YTime={this.state.YTime} Type={this.state.Type} Sum={this.state.Sum} SelectItem={this.state.SelectItem} />, document.getElementById('educationBox'));
                    break;
                case "日本":
                    React.render(<SetpC_JP_ZX Country={this.state.Country} YTime={this.state.YTime} Type={this.state.Type} Sum={this.state.Sum} SelectItem={this.state.SelectItem} />, document.getElementById('educationBox'));
                    break;
                case "澳洲":
                    React.render(<SetpC_AUS_ZX Country={this.state.Country} YTime={this.state.YTime} Type={this.state.Type} Sum={this.state.Sum} SelectItem={this.state.SelectItem} />, document.getElementById('educationBox'));
                    break;
            }
        }
        else if(sum>=10){
            switch(country){
                case "美国":
                    React.render(<SetpC_USA_DXY Country={this.state.Country} YTime={this.state.YTime} Type={this.state.Type} Sum={this.state.Sum} SelectItem={this.state.SelectItem} />, document.getElementById('educationBox'));
                    break;
                case "英国":
                    React.render(<SetpC_UK_DXY Country={this.state.Country} YTime={this.state.YTime} Type={this.state.Type} Sum={this.state.Sum} SelectItem={this.state.SelectItem} />, document.getElementById('educationBox'));
                    break;
                case "日本":
                    React.render(<SetpC_JP_DXY Country={this.state.Country} YTime={this.state.YTime} Type={this.state.Type} Sum={this.state.Sum} SelectItem={this.state.SelectItem} />, document.getElementById('educationBox'));
                    break;
                case "澳洲":
                    React.render(<SetpC_AUS_DXY Country={this.state.Country} YTime={this.state.YTime} Type={this.state.Type} Sum={this.state.Sum} SelectItem={this.state.SelectItem} />, document.getElementById('educationBox'));
                    break;
            }
        }else{
            switch(country){
                case "美国":
                    React.render(<SetpC_USA_DX Country={this.state.Country} YTime={this.state.YTime} Type={this.state.Type} Sum={this.state.Sum} SelectItem={this.state.SelectItem} />, document.getElementById('educationBox'));
                    break;
                case "英国":
                    React.render(<SetpC_UK_DX Country={this.state.Country} YTime={this.state.YTime} Type={this.state.Type} Sum={this.state.Sum} SelectItem={this.state.SelectItem} />, document.getElementById('educationBox'));
                    break;
                case "日本":
                    React.render(<SetpC_JP_DX Country={this.state.Country} YTime={this.state.YTime} Type={this.state.Type} Sum={this.state.Sum} SelectItem={this.state.SelectItem} />, document.getElementById('educationBox'));
                    break;
                case "澳洲":
                    React.render(<SetpC_AUS_DX Country={this.state.Country} YTime={this.state.YTime} Type={this.state.Type} Sum={this.state.Sum} SelectItem={this.state.SelectItem} />, document.getElementById('educationBox'));
                    break;
            }
        }
    }



    CallbakChange(e){
      //var flag = true, oSelectItem = new Array();

      if(this.state.SelectItem.length == 0){
        //oSelectItem.push(e);
        this.setState({SelectItem:[e]});
      }else{
        var flag = false, oSelectItem = this.state.SelectItem;
        oSelectItem.map(function(obj){
            obj==e?flag = true:"";
        });
        if(!flag){oSelectItem.push(e);this.setState({SelectItem:oSelectItem});}
      /*  //oSelectItem = this.state.SelectItem;
        for (var i = 0; i < oSelectItem.length ; i++) {
            if(oSelectItem[i] == e){flag = false;}else{

            }
        }*/

       /* if(flag){
          oSelectItem.push(e);
          this.setState({SelectItem:oSelectItem});
        }else{
          var newoSelectItem = new Array();
          for (var i = 0; i < oSelectItem.length ; i++) {
              if(oSelectItem[i] != e){ newoSelectItem.push(oSelectItem[i]);}
          }
          this.setState({SelectItem:newoSelectItem});
        }*/
      }

    }

    render() {
        let title = '免费办理－人人留学';
        this.context.onSetTitle(title);
        return (
            <div>
                <section className="study-abroad-box">
                    <div className="sectionStep1" id="sectionStep1">
                        <div className="stepDv">
                            <ul className="stepUl">
                                <li className={this.state.current == "a" ? "item itema current" : "item itema"} onClick={this.Step1.bind(this)}><i className="icon"></i>填写留学计划</li>
                                <li className={this.state.current == "b" ? "item itemb current" : "item itemb"} onClick={this.Step2.bind(this)}><i className="icon"></i>确定留学方案</li>
                                <li className={this.state.current == "c" ? "item itemc current" : "item itemc"} onClick={this.Step3.bind(this)}><i className="icon"></i>定制选校方案</li>
                                <div className="clear"></div>
                            </ul>
                            <div className="stepProgress">
                                <div className={this.state.current == "a" ? "yellow-dv" : this.state.current == "b" ? "yellow-dv step2Width" : "yellow-dv step3Width"}></div>
                            </div>
                        </div>
                        <div className={this.state.current == "a" ? "contentDv current" : "contentDv"} id="stepContentBoxA">
                            <div id="div_setupA"></div>
                            <div className="buttonDv">
                                <button className="button-normal" onClick={this.Step2.bind(this)}>获取留学方案</button>
                            </div>
                        </div>
                        <div className={this.state.current == "b" ? "contentDv current" : "contentDv"} id="stepContentBoxB">
                            <SetpB Country={this.state.Country} YTime={this.state.YTime} Type={this.state.Type} Sum={this.state.Sum} CallbakChange={this.CallbakChange.bind(this)}/>
                            <div className="buttonDv">
                                <button className="button-normal" onClick={this.Step3.bind(this)}>下一步，选择学校</button>
                            </div>
                        </div>
                        <div className={this.state.current == "c" ? "contentDv current" : "contentDv"} id="educationBox">

                        </div>
                    </div>
                </section>
            </div>
        );
    }

}

export default StudySolution;
