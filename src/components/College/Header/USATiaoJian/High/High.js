/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import CollegeUtilFunc from '../../../CollegeUtilFunc/CollegeUtilFunc.js';
/*import USAAreaData from '../USAAreaData/USAAreaData.js';*/
import $ from 'jquery';

class High extends React.Component{
    constructor(props) {
        super(props);
        this.state = {AreaUSA:'',SchoolNature:'',SchoolCharacteristic:'',SchoolDormitoryType:'',Tuition:'',Uniproperty:'',MoreFilter:false};
    }


    changeArea(e){
        let USAArea=$(e.target).parent().attr("data-value");
        this.setState({
            AreaUSA:USAArea
        }); 
        this.toGetData("USASchoolArea",USAArea);

    }
    changeSchoolNature(e){

        let USANature=$(e.target).parent().attr("data-value");
        this.setState({
            SchoolNature:USANature
            }); 
        this.toGetData("USASchoolNature",USANature);

    }
    changeSchoolCharacteristic(e){

        let USACharacteristic=$(e.target).parent().attr("data-value");
        this.setState({
            SchoolCharacteristic:USACharacteristic
        }); 
        this.toGetData("USASchoolCharacteristic",USACharacteristic);

    }    
    changeSchoolDormitoryType(e){
  
        let USADormitoryType=$(e.target).parent().attr("data-value");
        this.setState({
            SchoolDormitoryType:USADormitoryType
        }); 
        this.toGetData("USASchoolDormitoryType",USADormitoryType);

    }
    changeTuition(e){

        let USATuition=$(e.target).parent().attr("data-value");
        this.setState({
            Tuition:USATuition
        }); 
        this.toGetData("USATuition",USATuition);

    }
    changeUniproperty(e){

        let USAUniproperty=$(e.target).parent().attr("data-value");
        this.setState({
            Uniproperty:USAUniproperty
        }); 
        this.toGetData("USAUniproperty",USAUniproperty);

    }
    changeMoreFilter(){
        this.setState({
            MoreFilter:!this.state.MoreFilter 
        });
    }

    toGetData(name,value){
        let USASchoolArea=this.state.AreaUSA;
        let USASchoolNature=this.state.SchoolNature;
        let USASchoolCharacteristic=this.state.SchoolCharacteristic;
        let USASchoolDormitoryType=this.state.SchoolDormitoryType;
        let USATuition=this.state.Tuition;
        let USAUniproperty=this.state.Uniproperty;
        if("USASchoolArea"==name){ USASchoolArea=value;}
        else if("USASchoolNature"==name){ USASchoolNature=value;}
        else if("USASchoolCharacteristic"==name){ USASchoolCharacteristic=value;}
        else if("USASchoolDormitoryType"==name){ USASchoolDormitoryType=value;}
        else if("USATuition"==name){ USATuition=value;}
        else if("USAUniproperty"==name){ USAUniproperty=value;}
       
        let SearchArr=$("#txtSearch").val(); 
        if(!SearchArr){
            SearchArr="";
        }
        //传用户选择的选项用于分页查询
        let userSearch="Area="+USASchoolArea+";SchoolNature="+USASchoolNature+";SchoolCharacteristic="+
        USASchoolCharacteristic+";SchoolDormitoryType="+USASchoolDormitoryType+";Tuition="+USATuition+";Uniproperty="+USAUniproperty;

        //let AreaArr="Area="+e.target.innerHTML;
        CollegeUtilFunc.UserSearchSchool("USA","高中",1,15,SearchArr,userSearch,"");

    }
    render() {
       
        return (
            <div className="college-filter-box high USA-high">
                <div className="college-filter-options" data-group="PlaceArea">
                    <div className="title">所在地区：</div>
                    <ul className="college-filter-list" id="USASchoolArea">
                   <li className={this.state.AreaUSA==""?"all active":"all"}  data-value="" ><a className="nofollow" onClick={this.changeArea.bind(this)}>全部</a></li>
                        <li className={this.state.AreaUSA=="西北地区"?"active":""} data-value="西北地区"><a className="nofollow" onClick={this.changeArea.bind(this)}>西北地区</a></li>
                        <li className={this.state.AreaUSA=="加州、内华达州"?"active":""} data-value="加州、内华达州"><a className="nofollow" onClick={this.changeArea.bind(this)}>加州、内华达州</a></li>
                        <li className={this.state.AreaUSA=="西南地区"?"active":""} data-value="西南地区"><a className="nofollow" onClick={this.changeArea.bind(this)}>西南地区</a></li>
                        <li className= {this.state.AreaUSA=="五大湖地区"?"active":""} data-value="五大湖地区"><a className="nofollow" onClick={this.changeArea.bind(this)}>五大湖地区</a></li>
                        <li className={this.state.AreaUSA=="大平原地区"?"active":""} data-value="大平原地区"><a className="nofollow" onClick={this.changeArea.bind(this)}>大平原地区</a></li>
                        <li className={this.state.AreaUSA=="密西西比河流域"?"active":""} data-value="密西西比河流域"><a className="nofollow" onClick={this.changeArea.bind(this)}>密西西比河流域</a></li>
                        <li className={this.state.AreaUSA=="东北地区"?"active":""} data-value="东北地区"><a className="nofollow" onClick={this.changeArea.bind(this)}>东北地区</a></li>
                        <li className={this.state.AreaUSA=="东南地区"?"active":""} data-value="东南地区"><a className="nofollow" onClick={this.changeArea.bind(this)}>东南地区</a></li>
                    </ul>
                </div>           
                <div className="college-filter-options" data-group="SchoolNature">
                    <div className="title">学校性质：</div>
                    <ul className="college-filter-list" id="USASchoolNature">
                        <li className={this.state.SchoolNature==""?"all active":"all"}   data-value=""><a className="nofollow" onClick={this.changeSchoolNature.bind(this)}>全部</a></li>
                        <li className={this.state.SchoolNature=="女子学校"?"active":""} data-value="女子学校"><a className="nofollow" onClick={this.changeSchoolNature.bind(this)}>女子学校</a></li>
                        <li className={this.state.SchoolNature=="男子学校"?"active":""} data-value="男子学校"><a className="nofollow" onClick={this.changeSchoolNature.bind(this)}>男子学校</a></li>
                        <li className={this.state.SchoolNature=="混合学校"?"active":""} data-value="混合学校"><a className="nofollow" onClick={this.changeSchoolNature.bind(this)}>混合学校</a></li>
                    </ul>
                </div>
                <div className="college-filter-options" data-group="SchoolCharacteristic">
                    <div className="title">学校特色：</div>
                    <ul className="college-filter-list" id="USASchoolCharacteristic">
                        <li className= {this.state.SchoolCharacteristic==""?"all active":"all"} data-value=""><a className="nofollow" onClick={this.changeSchoolCharacteristic.bind(this)}>全部</a></li>
                        <li className= {this.state.SchoolCharacteristic=="普通"?"active":""} data-value="普通"><a className="nofollow" onClick={this.changeSchoolCharacteristic.bind(this)}>普通</a></li>
                        <li className= {this.state.SchoolCharacteristic=="艺术类"?"active":""} data-value="艺术类"><a className="nofollow" onClick={this.changeSchoolCharacteristic.bind(this)}>艺术类</a></li>
                        <li className={this.state.SchoolCharacteristic=="军事高中"?"active":""} data-value="军事高中"><a className="nofollow" onClick={this.changeSchoolCharacteristic.bind(this)}>军事高中</a></li>
                    </ul>
                </div>
                <div className={this.state.MoreFilter ? "college-filter-options filter-show filter-hide-USA" : "college-filter-options filter-hide-USA filter-hide"} data-group="SchoolDormitoryType">
                    <div className="title">住宿类型：</div>
                    <ul className="college-filter-list" id="USASchoolDormitoryType">
                        <li className={this.state.SchoolDormitoryType==""?"all active":"all"}  data-value=""><a className="nofollow" onClick={this.changeSchoolDormitoryType.bind(this)}>全部</a></li>
                        <li className={this.state.SchoolDormitoryType=="学校宿舍"?"active":""} data-value="学校宿舍"><a className="nofollow" onClick={this.changeSchoolDormitoryType.bind(this)}>学校宿舍</a></li>
                        <li className={this.state.SchoolDormitoryType=="寄宿家庭"?"active":""} data-value="寄宿家庭"><a className="nofollow" onClick={this.changeSchoolDormitoryType.bind(this)}>寄宿家庭</a></li>
                        <li className={this.state.SchoolDormitoryType=="监护人陪读"?"active":""} data-value="监护人陪读"><a className="nofollow" onClick={this.changeSchoolDormitoryType.bind(this)}>监护人陪读</a></li>
                    </ul>
                </div>  
                <div className={this.state.MoreFilter ? "college-filter-options filter-show filter-hide-USA" : "college-filter-options filter-hide-USA filter-hide"} data-group="Uniproperty">
                    <div className="title">学校类型：</div>
                    <ul className="college-filter-list" id="USAUniproperty">
                        <li className= {this.state.Uniproperty==""?"all active":"all"}  data-value=""><a className="nofollow" onClick={this.changeUniproperty.bind(this)}>全部</a></li>
                        <li className= {this.state.Uniproperty=="公立"?"active":""} data-value="公立"><a className="nofollow" onClick={this.changeUniproperty.bind(this)}>公立</a></li>
                        <li className= {this.state.Uniproperty=="私立"?"active":""} data-value="私立"><a className="nofollow" onClick={this.changeUniproperty.bind(this)}>私立</a></li>
                        <li className= {this.state.Uniproperty=="教会"?"active":""} data-value="教会"><a className="nofollow" onClick={this.changeUniproperty.bind(this)}>教会</a></li>
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
            AreaUSA:'',
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
            //$("#txtSearch").val(search[4]); 
            this.setState({
                AreaUSA:search[5]
            });  
        }
      
    } 
}

export default High;
