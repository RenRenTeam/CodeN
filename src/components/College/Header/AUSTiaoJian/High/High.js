/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery'
import CollegeUtilFunc from '../../../CollegeUtilFunc/CollegeUtilFunc.js';


class High extends React.Component{
  constructor(props) {
        super(props);
        this.state = {PlaceArea:''};
    }

    changeArea(e){
        let AreaVar=$(e.target).parent().attr("data-value");
        this.setState({
            PlaceArea:AreaVar
        }); 

        let SearchArr=$("#txtSearch").val();
        if(!SearchArr){
            SearchArr="";
        }
        //传用户选择的选项用于分页查询
        let userSearch="PlaceArea="+AreaVar;
        CollegeUtilFunc.UserSearchSchool("AUS","高中",1,15,SearchArr,userSearch,"");
   
    }
    

   render() {
        return (
            <div className="college-filter-box high">
                <div className="college-filter-options" data-group="PlaceArea">
                    <div className="title">所在地区：</div>
                    <ul className="college-filter-list" id="UKSchoolPlaceArea">
                        <li className={this.state.PlaceArea==""?"all active":"all"}   data-value=""><a className="nofollow" onClick={this.changeArea.bind(this)}>全部</a></li>
                        <li className={this.state.PlaceArea=="北领地"?"active":""} data-value="北领地"><a className="nofollow" onClick={this.changeArea.bind(this)}>北领地</a></li>
                        <li className={this.state.PlaceArea=="南澳洲"?"active":""} data-value="南澳洲"><a className="nofollow" onClick={this.changeArea.bind(this)}>南澳洲</a></li>
                        <li className={this.state.PlaceArea=="新南威尔士州"?"active":""} data-value="新南威尔士州"><a className="nofollow" onClick={this.changeArea.bind(this)}>新南威尔士州</a></li>
                        <li className={this.state.PlaceArea=="昆士兰州"?"active":""} data-value="昆士兰州"><a className="nofollow" onClick={this.changeArea.bind(this)}>昆士兰州</a></li>
                        <li className={this.state.PlaceArea=="维多利亚州"?"active":""} data-value="维多利亚州"><a className="nofollow" onClick={this.changeArea.bind(this)}>维多利亚州</a></li>
                        <li className={this.state.PlaceArea=="首都"?"active":""} data-value="首都"><a className="nofollow" onClick={this.changeArea.bind(this)}>首都</a></li>
                        <li className={this.state.PlaceArea=="西澳"?"active":""} data-value="西澳"><a className="nofollow" onClick={this.changeArea.bind(this)}>西澳</a></li>
                        <li className={this.state.PlaceArea=="塔斯马尼亚"?"active":""} data-value="塔斯马尼亚"><a className="nofollow" onClick={this.changeArea.bind(this)}>塔斯马尼亚</a></li>
                    </ul>
                </div>
            </div>
            
        );
    }

    componentWillReceiveProps(){    
        this.setState({
            PlaceArea:''
        });      
    }
    //dom加载完调用
    componentDidMount(){
        let search=this.props.search;
        if(search&&search.length>5){
            //$("#txtSearch").val(search[4]); 
            this.setState({
                PlaceArea:search[5]
            });  
        }
    }
}

export default High;
