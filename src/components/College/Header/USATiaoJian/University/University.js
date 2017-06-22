/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from '../../../../WebResources/Default/css/select.less';
import withStyles from '../../../../../decorators/withStyles';
import $ from 'jquery';
import CollegeUtilFunc from '../../../CollegeUtilFunc/CollegeUtilFunc.js';
/*import USAAreaData from '../USAAreaData/USAAreaData.js';*/
import Ranks from './Ranks/Ranks.js';

var Select = require('rc-select');
var Option = Select.Option;

@withStyles(styles)
class University extends React.Component{  
    constructor(props) {
        super(props);
       this.state = {USAArea:'',Ranks:'',Major:null,MajorB:null};
    }

    changeArea(e){
    
        let AreaVar=$(e.target).parent().attr("data-value");
        this.setState({
            USAArea:AreaVar
        }); 
        this.USASearchDo("USAArea_U",AreaVar);

       
    }
    changeRanks(e){
        let RanksVar=$(e.target).parent().attr("data-value");
        this.setState({
            Ranks:RanksVar
        }); 
        $("#USAInputRanks1").val("");
        $("#USAInputRanks2").val("");
        this.USASearchDo("USARanks_U",RanksVar);
    }
    userInputRanks(e){
        let input1=$("#USAInputRanks1").val();
        let input2=$("#USAInputRanks2").val();
        let num1=parseInt(input1); 
        let num2=parseInt(input2);
        if(num1&&num2){
            $("#USAInputRanks1").val(num1);
            $("#USAInputRanks2").val(num2);
            let userRanks=num1+"-"+num2;
            this.setState({
                Ranks:userRanks
            }); 
            this.USASearchDo("USARanks_U",userRanks);     
        } 
    }

    USASearchDo(name,value){
        let USAArea_U=this.state.USAArea;
        let USARanks_U=this.state.Ranks;
        if("USAArea_U"==name){USAArea_U=value;}
        else if("USARanks_U"==name){USARanks_U=value;}
        if(!USAArea_U){USAArea_U="";}
        if(!USARanks_U){USARanks_U="";}
        let SearchArr=$("#txtSearch").val();
        if(!SearchArr){ SearchArr=""; }

        let userSearch="Area="+USAArea_U+";Ranks="+USARanks_U;
        CollegeUtilFunc.UserSearchSchool("USA","大学",1,15,SearchArr,userSearch,"");
    }

    //获取专业信息
  /*  getMajor(typ){
    }*/
    render() {
        return (
            <div className="college-filter-box university">
                <div className="college-filter-options" data-group="Area">
                    <div className="title">所在地区：</div>
                    <ul className="college-filter-list" id="USAArea_U">
                        <li className={this.state.USAArea==""?"all active":"all"}  data-value="" ><a className="nofollow" onClick={this.changeArea.bind(this)}>全部</a></li>
                        <li className={this.state.USAArea=="西北地区"?"active":""}  data-value="西北地区"><a className="nofollow" onClick={this.changeArea.bind(this)}>西北地区</a></li>
                        <li className={this.state.USAArea=="加州、内华达州"?"active":""} data-value="加州、内华达州"><a className="nofollow" onClick={this.changeArea.bind(this)}>加州、内华达州</a></li>
                        <li className={this.state.USAArea=="西南地区"?"active":""} data-value="西南地区"><a className="nofollow" onClick={this.changeArea.bind(this)}>西南地区</a></li>
                        <li className={this.state.USAArea=="五大湖地区"?"active":""} data-value="五大湖地区"><a className="nofollow" onClick={this.changeArea.bind(this)}>五大湖地区</a></li>
                        <li className={this.state.USAArea=="大平原地区"?"active":""} data-value="大平原地区"><a className="nofollow" onClick={this.changeArea.bind(this)}>大平原地区</a></li>
                        <li className={this.state.USAArea=="密西西比河流域"?"active":""} data-value="密西西比河流域"><a className="nofollow" onClick={this.changeArea.bind(this)}>密西西比河流域</a></li>
                        <li className={this.state.USAArea=="东北地区"?"active":""} data-value="东北地区"><a className="nofollow" onClick={this.changeArea.bind(this)}>东北地区</a></li>
                        <li className={this.state.USAArea=="东南地区"?"active":""}data-value="东南地区"><a className="nofollow" onClick={this.changeArea.bind(this)}>东南地区</a></li>
                    </ul>
                </div>
                <div className="college-filter-options" data-group="综合排名">
                    <div className="title">综合排名：</div>
                    <ul className="college-filter-list" id="USARanks_U">
                        <li className={this.state.Ranks==""?"all active":"all"}  data-value=""><a className="nofollow" onClick={this.changeRanks.bind(this)}>全部</a></li>
                        <li className={this.state.Ranks=="1-10"?"active":""} data-value="1-10"><a className="nofollow" onClick={this.changeRanks.bind(this)}>1-10名</a></li>
                        <li className={this.state.Ranks=="10-20"?"active":""} data-value="10-20"><a className="nofollow" onClick={this.changeRanks.bind(this)}>10-20名</a></li>
                        <li className={this.state.Ranks=="20-50"?"active":""} data-value="20-50"><a className="nofollow" onClick={this.changeRanks.bind(this)}>20-50名</a></li>
                        <li className={this.state.Ranks=="50-100"?"active":""} data-value="50-100"><a className="nofollow" onClick={this.changeRanks.bind(this)}>50-100名</a></li>
                        <li className="input">
                            <input className="number" data-name="start" type="text" id="USAInputRanks1" />
                            <em>-</em>
                            <input className="number" data-name="end" type="text" id="USAInputRanks2"  />
                            <button type="button" className="button-confirm" onClick={this.userInputRanks.bind(this)}>确定</button>
                        </li>
                    </ul>
                </div>
                <div id="USARanksPage">

                </div>
                
            </div>
        );
    }

    componentWillReceiveProps(){    
        this.setState({
          USAArea:"",
            Ranks:"" 
        });      
    }
    changeChoose(){
        this.setState({
          USAArea:"removeClass",
            Ranks:"removeClass" 
        });  
    }
    //dom加载完调用
    componentDidMount(){ 
            let search=this.props.search;
            if(search&&search.length>5){
                //$("#txtSearch").val(search[4]); 
                this.setState({
                    USAArea:search[5]
                });  
            }

            let func=this.changeChoose.bind(this);
            $.ajax({
                url: "http://service.shenyuan.org/University_USAService/LoadUniversity_USAMajorForJs/0",
                type: "get",
                dataType: "jsonp",
                async:false,
                jsonp:"callbackparam",//
                jsonpCallback:"success_jsonpCallback_major",//自定义jsonp回调函数名称     
            }).done(function (json) {
                if(json&&json.length>0){
                    React.render(<Ranks  data={json} click={func} />,document.getElementById('USARanksPage'));
                }else{
                    React.render(<Ranks  data={[]}  click={func}  />,document.getElementById('USARanksPage'));
                }
                
            });
         //React.render(<RanksB  data={[]}  />,document.getElementById('div_ranks'));
      
    }
 
}

export default University;

//University.defaultPro