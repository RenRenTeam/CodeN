//Ranks.js
import React, { PropTypes } from 'react';
import $ from 'jquery';

import Major from './Major/Major.js';
var Select = require('rc-select');
var Option = Select.Option;

class Ranks extends React.Component{     
    constructor(props) {
        super(props);
        this.state = {MajorA:"",MajorNumber:"",testdo:"1"};  
    }

    changeTest(){
        this.props.click();
    }

    render() {
    	var ranksFirst=this.props.data.map(function(obj){ 
    			return(
                    <Option key={obj.Name} value={obj.Name} desc={obj.Name}  >{obj.Name}</Option>
                );
    	});
        return (
        	<div className="college-filter-options" data-group="subrankG">
                <div className="title">专业排名：</div>
                <ul className="college-filter-list">
                    <li className="select USASelect">
                        <div className="control" >
                           	<Select  id="USA_MajorRanksA" defaultValue="请选择" style={{width:180,height:25}} optionFilterProp="desc"  renderDropdownToBody={true}   onChange={this.handleChange.bind(this)}>
                           			<Option value="请选择" desc="请选择"  >请选择</Option>
			                        {ranksFirst}
			                </Select>
                        </div>
                        <div id="USAMajorPage">
                           
                        </div> 
                    </li>
                </ul>
            
            </div>
            
        );
    }

    handleChange(e){
        let valVar=e;
        let MajorArr=this.state.MajorA;
        let num="flag";
        let func=this.changeTest.bind(this);
        MajorArr.map(function(obj,index){
            if(valVar==obj){
                num=index;
            }
        });    
        if(num=="flag"){
             React.render(<Major    data={[]}  />,document.getElementById('USAMajorPage'));
        }else{
          let MajorValue=MajorArr[num+1];
           $.ajax({
                url: "http://service.shenyuan.org/University_USAService/LoadUniversity_USAMajorForJs/"+MajorValue,
                type: "get",
                dataType: "jsonp",
                async:false,
                jsonp:"callbackparam",//
                jsonpCallback:"success_jsonpCallback_major",//自定义jsonp回调函数名称     
            }).always(function (json) {
                if(json&&json.length>0){
                    React.render(<Major   data={json} clickEvent={func} />,document.getElementById('USAMajorPage'));
                }else{
                    React.render(<Major   data={[]} clickEvent={func} />,document.getElementById('USAMajorPage'));
                }                 
            });
        }
    }

    setStateForRanks(){
          let arrMajor=[];
          this.props.data.map(function(obj){
                arrMajor.push(obj.Name,obj.Sysno);
          });
          this.setState({
                  MajorA:arrMajor
            });
    }


    //dom加载完调用
    componentDidMount(){
 		  this.setStateForRanks();
 		  React.render(<Major  data={[]}  />,document.getElementById('USAMajorPage'));
    }
 
}

export default Ranks;


