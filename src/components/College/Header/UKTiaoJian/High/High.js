/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery'
import CollegeUtilFunc from '../../../CollegeUtilFunc/CollegeUtilFunc.js';


class High extends React.Component{
  constructor(props) {
        super(props);
        this.state = {PlaceArea:'',SchoolNature:'',SchoolCharacteristic:'',SchoolDormitoryType:'',Tuition:'',Uniproperty:'',MoreFilter:false};
    }

    getDataAll(name,value){ 
        let UKSchoolPlaceArea=this.state.PlaceArea;
        let UKSchoolNature=this.state.SchoolNature;
        let UKSchoolCharacteristic=this.state.SchoolCharacteristic;
        let UKSchoolDormitoryType=this.state.SchoolDormitoryType;
        let UKSchoolTuition=this.state.Tuition;
        let UKSchoolUniproperty=this.state.Uniproperty;
        if("UKSchoolPlaceArea"==name){UKSchoolPlaceArea=value;}
        else if("UKSchoolNature"==name){UKSchoolNature=value;}
        else if("UKSchoolCharacteristic"==name){UKSchoolCharacteristic=value;}
        else if("UKSchoolDormitoryType"==name){UKSchoolDormitoryType=value;}
        else if("UKSchoolTuition"==name){UKSchoolTuition=value;}
        else if("UKSchoolUniproperty"==name){UKSchoolUniproperty=value;}

        let SearchArr=$("#txtSearch").val();
        if(!SearchArr){
            SearchArr="";
        }
        //传用户选择的选项用于分页查询
        //let test="PlaceArea=英格兰;SchoolNature=男女混校;SchoolCharacteristic=普通;SchoolDormitoryType=学校宿舍;Uniproperty=私立"
        let userSearch="PlaceArea="+UKSchoolPlaceArea+";SchoolNature="+UKSchoolNature+";SchoolCharacteristic="+
        UKSchoolCharacteristic+";SchoolDormitoryType="+UKSchoolDormitoryType+";Tuition="+UKSchoolTuition+";Uniproperty="+UKSchoolUniproperty;

        CollegeUtilFunc.UserSearchSchool("UK","高中",1,15,SearchArr,userSearch,"");
    }
    changeArea(e){
        let AreaVar=$(e.target).parent().attr("data-value");
        this.setState({
            PlaceArea:AreaVar
        }); 
        this.getDataAll("UKSchoolPlaceArea",AreaVar);
   
    }
    changeSchoolNature(e){
   
        let NatureVar=$(e.target).parent().attr("data-value");
        this.setState({
            SchoolNature:NatureVar
        }); 
        this.getDataAll("UKSchoolNature",NatureVar);
    }
    changeSchoolCharacteristic(e){   
        let CharacteristicVar=$(e.target).parent().attr("data-value");
        this.setState({
            SchoolCharacteristic:CharacteristicVar
        }); 
        this.getDataAll("UKSchoolCharacteristic",CharacteristicVar);
    }    
    changeSchoolDormitoryType(e){
        let DormitoryTypeVar=$(e.target).parent().attr("data-value");
        this.setState({
            SchoolDormitoryType:DormitoryTypeVar
        }); 
        this.getDataAll("UKSchoolDormitoryType",DormitoryTypeVar);
    }
    changeTuition(e){  
        let TuitionVar=$(e.target).parent().attr("data-value");
        this.setState({
            Tuition:TuitionVar
        });

        this.getDataAll("UKSchoolTuition",TuitionVar);
    }
    changeUniproperty(e){
    
        let UnipropertyVar=$(e.target).parent().attr("data-value");
        this.setState({
            Uniproperty:UnipropertyVar
        });

        this.getDataAll("UKSchoolUniproperty",UnipropertyVar);
    }
    changeMoreFilter(){
        this.setState({
            MoreFilter:!this.state.MoreFilter
        });
    }



   render() {
        return (
            <div className="college-filter-box high">
                <div className="college-filter-options" data-group="PlaceArea">
                    <div className="title">所在地区：</div>
                    <ul className="college-filter-list" id="UKSchoolPlaceArea">
                        <li className={this.state.PlaceArea==""?"all active":"all"}   data-value=""><a className="nofollow" onClick={this.changeArea.bind(this)}>全部</a></li>
                        <li className={this.state.PlaceArea=="北爱尔兰"?"active":""} data-value="北爱尔兰"><a className="nofollow" onClick={this.changeArea.bind(this)}>北爱尔兰</a></li>
                        <li className={this.state.PlaceArea=="威尔士"?"active":""} data-value="威尔士"><a className="nofollow" onClick={this.changeArea.bind(this)}>威尔士</a></li>
                        <li className={this.state.PlaceArea=="苏格兰"?"active":""} data-value="苏格兰"><a className="nofollow" onClick={this.changeArea.bind(this)}>苏格兰</a></li>
                        <li className={this.state.PlaceArea=="英格兰"?"active":""} data-value="英格兰"><a className="nofollow" onClick={this.changeArea.bind(this)}>英格兰</a></li>
                    </ul>
                </div>
                <div className="college-filter-options" data-group="SchoolNature">
                    <div className="title">学校性质：</div>
                    <ul className="college-filter-list" id="UKSchoolNature">
                        <li className={this.state.SchoolNature==""?"all active":"all"} data-value=""><a className="nofollow" onClick={this.changeSchoolNature.bind(this)}>全部</a></li>
                        <li className={this.state.SchoolNature=="女子学校"?"active":""} data-value="女子学校"><a className="nofollow" onClick={this.changeSchoolNature.bind(this)}>女子学校</a></li>
                        <li className={this.state.SchoolNature=="男子学校"?"active":""} data-value="男子学校"><a className="nofollow" onClick={this.changeSchoolNature.bind(this)}>男子学校</a></li>
                        <li className={this.state.SchoolNature=="混合学校"?"active":""} data-value="混合学校"><a className="nofollow" onClick={this.changeSchoolNature.bind(this)}>混合学校</a></li>
                    </ul>
                </div>
                <div className="college-filter-options" data-group="SchoolCharacteristic">
                    <div className="title">学校特色：</div>
                    <ul className="college-filter-list" id="UKSchoolCharacteristic">
                        <li className={this.state.SchoolCharacteristic==""?"all active":"all"}  data-value=""><a className="nofollow" onClick={this.changeSchoolCharacteristic.bind(this)}>全部</a></li>
                        <li className={this.state.SchoolCharacteristic=="普通"?"active":""} data-value="普通"><a className="nofollow" onClick={this.changeSchoolCharacteristic.bind(this)}>普通</a></li>
                        <li className={this.state.SchoolCharacteristic=="艺术类"?"active":""} data-value="艺术类"><a className="nofollow" onClick={this.changeSchoolCharacteristic.bind(this)}>艺术类</a></li>
                        <li className={this.state.SchoolCharacteristic=="军事高中"?"active":""} data-value="军事高中"><a className="nofollow" onClick={this.changeSchoolCharacteristic.bind(this)}>军事高中</a></li>
                    </ul>
                </div>
                <div className={this.state.MoreFilter ? "college-filter-options filter-show filter-hide-USA" : "college-filter-options filter-hide-USA filter-hide"} data-group="SchoolDormitoryType">
                    <div className="title">住宿类型：</div>
                    <ul className="college-filter-list" id="UKSchoolDormitoryType">
                        <li className={this.state.SchoolDormitoryType==""?"all active":"all"}  data-value=""><a className="nofollow" onClick={this.changeSchoolDormitoryType.bind(this)}>全部</a></li>
                        <li className={this.state.SchoolDormitoryType=="学校宿舍"?"active":""} data-value="学校宿舍"><a className="nofollow" onClick={this.changeSchoolDormitoryType.bind(this)}>学校宿舍</a></li>
                        <li className={this.state.SchoolDormitoryType=="寄宿家庭"?"active":""} data-value="寄宿家庭"><a className="nofollow" onClick={this.changeSchoolDormitoryType.bind(this)}>寄宿家庭</a></li>
                        <li className={this.state.SchoolDormitoryType=="监护人陪读"?"active":""} data-value="监护人陪读"><a className="nofollow" onClick={this.changeSchoolDormitoryType.bind(this)}>监护人陪读</a></li>
                    </ul>
                </div>          
                <div className={this.state.MoreFilter ? "college-filter-options filter-show filter-hide-USA" : "college-filter-options filter-hide-USA filter-hide"} data-group="Uniproperty">
                    <div className="title">学校类型：</div>
                    <ul className="college-filter-list" id="UKSchoolUniproperty">
                        <li className={this.state.Uniproperty==""?"all active":"all"}  data-value=""><a className="nofollow" onClick={this.changeUniproperty.bind(this)}>全部</a></li>
                        <li className={this.state.Uniproperty=="公立"?"active":""} data-value="公立"><a className="nofollow" onClick={this.changeUniproperty.bind(this)}>公立</a></li>
                        <li className={this.state.Uniproperty=="私立"?"active":""} data-value="私立"><a className="nofollow" onClick={this.changeUniproperty.bind(this)}>私立</a></li>
                        <li className={this.state.Uniproperty=="教会"?"active":""} data-value="教会"><a className="nofollow" onClick={this.changeUniproperty.bind(this)}>教会</a></li>
                    </ul>
                </div>
                <div className="college-filter-more" id="moreUSA">
                    <button type="button" onClick={this.changeMoreFilter.bind(this)}>更多条件<i className={this.state.MoreFilter ? "i up" : "i"}></i></button>
                </div>
            </div>
            
        );
    }

    componentWillReceiveProps(){    
        this.setState({
            PlaceArea:'',
            SchoolNature:'',
            SchoolCharacteristic:'',
            SchoolDormitoryType:'',
            Tuition:'',
            Uniproperty:''
        });      
    }
    //dom加载完调用
    componentDidMount(){
        let search=this.props.search;
        if(search&&search.length>5){
           // $("#txtSearch").val(search[4]); 
            this.setState({
                PlaceArea:search[5]
            });  
        }
         
    }
}

export default High;
