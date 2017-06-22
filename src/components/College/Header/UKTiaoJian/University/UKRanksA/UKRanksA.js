//ukRansA.js
/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import List from '../../../../List/List.js';
import $ from 'jquery';
import TotalCollegeCount from '../../../../CollegeReactjs/TotalCollegeCount/TotalCollegeCount.js';
import CollegeUtilFunc from '../../../../CollegeUtilFunc/CollegeUtilFunc.js';
import CollegePage from '../../../../CollegeReactjs/CollegePage/CollegePage.js';
var Select = require('rc-select');
var Option = Select.Option;


class UKRanksA extends React.Component{
      constructor(props) {
        super(props);
        this.state = {MajorNum:""};
    }

    render() {
        var nodes=this.props.data.map(function(obj){
              return(
                    <Option key={obj.Major} value={obj.Major} desc={obj.Major}  >{obj.Major}</Option>
                );
          });
        var style = {
            height:300,
            overflow:"auto"
        }
        return (
            
                <div>
                    <div id="ukSchoolRanksA" className="control" >
                        <Select  id="UK_MajorRanksA" defaultValue="请选择" style={{width:200,height:25}} showSearch={true} 
                        optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChange.bind(this)} 
                        dropdownMenuStyle={style}>
                                <Option value="请选择" desc="请选择" >请选择</Option>
                                {nodes}
                        </Select>           
                    </div>
                    <div className="control Ranks_USA_UK_Node">
                        <button  type="button" className="button-confirm" onClick={this.searchByMajor.bind(this)}>确定</button>
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
        if(numberM){
            this.props.click();
            CollegeUtilFunc.UKMajorSearch(numberM,1);
        }
      
    }
    //dom加载完调用
    componentDidMount(){

    }
}

export default UKRanksA;









