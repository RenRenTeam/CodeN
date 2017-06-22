//Major.js
/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
import React, { PropTypes } from 'react';
import $ from 'jquery';
import CollegeUtilFunc from '../../../../../CollegeUtilFunc/CollegeUtilFunc.js';

var Select = require('rc-select');
var Option = Select.Option;


class Major extends React.Component{
	   constructor(props) {
        super(props);
        this.state = {MajorNumArr:"",MajorNum:""};
    }

    render() {
    	var nodesB=this.props.data.map(function(obj){
              return(
                    <Option key={obj.Name} value={obj.Name} desc={obj.Name}  >{obj.Name}</Option>
                );
          });
        return (
        		<div>           
	                <div className="control Ranks_USA_UK_Node" id="div_ranks">
                   		<Select id="USA_MajorRanksB" defaultValue="请选择"   style={{width:220}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChange.bind(this)}>
	                		<Option value="请选择" desc="请选择"  >请选择</Option>
	                        {nodesB}
	                	</Select>
                    </div>
                    <div className="control Ranks_USA_UK_Node">
                        <button  type="button"  className="button-confirm" onClick={this.searchByMajor.bind(this)}>确定</button>
                    </div>
               </div>
        );
    }
    handleChange(e){
    	let valVar=e;
    	 this.setState({
                MajorNum:valVar
           });
    }
    
    searchByMajor(){
     	let numberM=this.state.MajorNum;
     	let num="";
     	if(numberM){
     		this.props.data.map(function(obj){
     			if(numberM==obj.Name){
     				num=obj.Sysno;
     			}
     		});
     	}
     	if(num){ 
            $("#txtSearch").val("");
     		let number="subrank="+num;
            this.props.clickEvent();
        	CollegeUtilFunc.UserSearchSchool("USA","大学",1,15,"",number,"");
     	}
      
    }

    //dom加载完调用
    componentDidMount(){
  
    }
}

export default Major;














