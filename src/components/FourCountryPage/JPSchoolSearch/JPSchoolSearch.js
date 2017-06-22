import React, { PropTypes } from 'react';
import styles from './JPSchoolSearch.less';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';
import AreaSelect from './AreaSelect/AreaSelect.js';
var CSlider = require('react-slick');
var Select = require('rc-select');
var Option = Select.Option;
import $ from 'jquery';

@withStyles(styles)
class JPSchoolSearch  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jpHotSchool:"语言学校",
            name:"",
            jpArea:"",
            changeOne:"",
            changeTow:"1",
            changeThree:"1",
            UniversityInput:"",
            GraduateInput:""

        };
 
    }
    changeHotSchoolItem(e){
        let school=$(e.target).attr("data-value");
        //this.state.jpHotSchool = e.target.innerHTML;

         this.setState({
            jpHotSchool:school
        });
    }
    userInput(e){
        this.setState({
            name:e.target.value
        });
    }
    UniversityUserInput(e){
        this.setState({
            UniversityInput:e.target.value
        });
    }
    GraduateUserInput(e){
        this.setState({
            GraduateInput:e.target.value
        }); 
    }
    searchSchool(){
        let schoolType=this.state.jpHotSchool;
        window.location.href="/College-fourCountry-JP-"+schoolType+"-"+this.state.name+"-";
    }
    searchUniversity(){

        let tabSchool=this.state.jpHotSchool;
        let major=this.state.UniversityInput;
        window.location.href="/College-fourCountry-JP-"+tabSchool+"-"+""+"-"+major;
    }
    searchGraduate(){
        let tabSchool=this.state.jpHotSchool;
        let major=this.state.GraduateInput;
        window.location.href="/College-fourCountry-JP-"+tabSchool+"-"+""+"-"+major;
    }
    AreaChange(str){
        this.setState({
            jpArea:str
        }); 
        let tabSchool=this.state.jpHotSchool;
        window.location.href="/College-fourCountry-JP-"+tabSchool+"-"+""+"-"+str;

    }
    searchByType(){
        
    }

/*    searchSchoolUniversity(){
        window.location.href="/College-fourCountry-JP-大学-"+this.state.name+"-";
    }
    searchSchoolGraduate(){
        window.location.href="/College-fourCountry-JP-研究生院-"+this.state.name+"-";
    }*/
    changeOne(e){
        let numOne=$(e.target).attr("data-num");
        this.setState({
            changeOne:numOne
        }); 
        window.location.href="/College-fourCountry-JP-语言学校-"+""+"-"+"order="+numOne;
    }
    changeTow(e){
        let numTow=$(e.target).attr("data-num");
        this.setState({
            changeTow:numTow
        }); 
        window.location.href="/College-fourCountry-JP-大学-"+""+"-";
    }
    changeThree(e){
        let numThree=$(e.target).attr("data-num");
        this.setState({
            changeThree:numThree
        }); 
        window.location.href="/College-fourCountry-JP-研究生院-"+""+"-";
    }
 
    render() {
        var settings = { 
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
        };
        return (
           <section className="country-hot-school">
                <div className="content">
                    <div className="country-search-school">
                        <h2>院校搜索</h2>
                        <div className="country-search-school-box search-tabs-box">
                            <div className="leftPart tabs">
                                <div className={this.state.jpHotSchool == "语言学校" ? "item selected" : "item"} data-value="语言学校" data-content="#high" onClick={this.changeHotSchoolItem.bind(this)}>语言学校</div>
                                <div className={this.state.jpHotSchool == "大学" ? "item selected" : "item"} data-value="大学" data-content="#postgraduate" onClick={this.changeHotSchoolItem.bind(this)}>日本大学</div>
                                <div className={this.state.jpHotSchool == "研究生院" ? "item selected" : "item"} data-value="研究生院" data-content="#language" onClick={this.changeHotSchoolItem.bind(this)}>大学院</div>
                                <div className={this.state.jpHotSchool == "日本高中" ? "item selected" : "item"} data-value="日本高中" data-content="#specialized" onClick={this.changeHotSchoolItem.bind(this)}>日本高中</div>
                                <div className={this.state.jpHotSchool == "直招大学" ? "item selected" : "item"} data-value="直招大学" data-content="#zhiZhao"  onClick={this.changeHotSchoolItem.bind(this)}>直招大学</div>
                            </div>
                            <div className="tab-content rightPart">
                                <div id="high" className={this.state.jpHotSchool == "语言学校" ? "search-box tab-content-box" : "tab-content-box-hide"}>
                                    <div className="searchLanguage">
                                        <div className="inputDv">
                                            <div className="title">按名称：</div> 
                                            <div className="inputBg">
                                                <input type="text" onChange={this.userInput.bind(this)} />
                                                <a href="#" className="withName" onClick={this.searchSchool.bind(this)}></a>
                                            </div>
                                            <div className="clear"></div> 
                                        </div>
                                        <div className="inputDv inputDvMargin"> 
                                            <div className="title">按地区：</div> 
                                            <div className="">
                                                <AreaSelect heightStr="43" widthStr="223" downHeight="300" defaultVal="全部" clickEvent={this.AreaChange.bind(this)} />
                                              
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <ul className="byConti">
                                            <li className="title" >按条件：</li>
                                            <li className={this.state.changeOne=="Newenroll"?"item current":"item"} onClick={this.changeOne.bind(this) } data-num="Newenroll">学校规模</li>
                                            <li className={this.state.changeOne=="Tuition"?"item current":"item"} onClick={this.changeOne.bind(this)} data-num="Tuition">学费多少</li>
                                            <li className={this.state.changeOne=="Buildtime"?"item current":"item"} onClick={this.changeOne.bind(this)} data-num="Buildtime">成立时间</li>
                                            <li className={this.state.changeOne=="Satline"?"item current":"item"} onClick={this.changeOne.bind(this)} data-num="Satline">升学指导</li>
                                            <li className={this.state.changeOne=="Studentquantity"?"item current":"item"} onClick={this.changeOne.bind(this)} data-num="Studentquantity">按国际化程度(中国学生所占比例)</li>
                                            <li className={this.state.changeOne=="Enrollquantity"?"item current":"item"} onClick={this.changeOne.bind(this)} data-num="Enrollquantity">打工方便度</li>
                                            <div className="clear"></div>
                                        </ul>
                                        <div className="noticeFont"><span className="notcieRed">*</span>不清楚自己能上哪所大学，点击<a href="/FreeGuide" onClick={Link.handleClick}>这里</a>赶快测测你能考入哪些学校吧！</div>
                                    </div>
                                </div>
                                <div id="postgraduate" className={this.state.jpHotSchool == "大学" ? "search-box tab-content-box" : "tab-content-box-hide"}>
                                    <div className="searchLanguage">
                                        <div className="inputDv">
                                            <div className="title">按名称：</div>
                                            <div className="inputBg">
                                                <input type="text" onChange={this.userInput.bind(this)} />
                                                <a href="#" className="withName" onClick={this.searchSchool.bind(this)}></a>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="inputDv inputDvMargin">
                                            <div className="title">按专业：</div>
                                            <div className="inputBg">
                                                <input type="text" placeholder="专业搜索" onChange={this.UniversityUserInput.bind(this)} />
                                                <a href="#" className="withName" onClick={this.searchUniversity.bind(this)}></a>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <ul className="byConti">
                                            <li className="title" >按条件：</li>
                                            <li className={this.state.changeTow=="1"?"item current":"item"} onClick={this.changeTow.bind(this) } data-num="1">所在地区</li>
                                            <li className={this.state.changeTow=="2"?"item current":"item"} onClick={this.changeTow.bind(this) } data-num="2">大学类别</li>
                                            <li className={this.state.changeTow=="3"?"item current":"item"} onClick={this.changeTow.bind(this) } data-num="3">入学月份</li>
                                            <li className={this.state.changeTow=="4"?"item current":"item"} onClick={this.changeTow.bind(this) } data-num="4">留考EJU方式</li>
                                            <li className={this.state.changeTow=="5"?"item current":"item"} onClick={this.changeTow.bind(this) } data-num="5">校内考方式</li>
                                            <div className="clear"></div>
                                        </ul>
                                        <div className="noticeFont"><span className="notcieRed">*</span>不清楚自己能上哪所大学，点击<a href="/FreeGuide" onClick={Link.handleClick}>这里</a>赶快测测你能考入哪些学校吧！</div>
                                    </div>
                                </div>
                                <div id="language" className={this.state.jpHotSchool == "研究生院" ? "search-box tab-content-box" : "tab-content-box-hide"}>
                                    <div className="searchLanguage">
                                        <div className="inputDv">
                                            <div className="title">按名称：</div>
                                            <div className="inputBg">
                                                <input type="text" onChange={this.userInput.bind(this)} />
                                                <a href="#" className="withName" onClick={this.searchSchool.bind(this)}></a>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <div className="inputDv inputDvMargin">
                                            <div className="title">按专业：</div>
                                            <div className="inputBg">
                                                <input type="text" placeholder="专业搜索" onChange={this.GraduateUserInput.bind(this)} />
                                                <a href="#" className="withName" onClick={this.searchGraduate.bind(this)} ></a>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                        <ul className="byConti">
                                            <li className="title">按条件：</li>
                                            <li className={this.state.changeThree=="1"?"item current":"item"} onClick={this.changeThree.bind(this) } data-num="1">所在地区</li>
                                            <li className={this.state.changeThree=="2"?"item current":"item"} onClick={this.changeThree.bind(this) } data-num="2">大学类别</li>
                                            <li className={this.state.changeThree=="3"?"item current":"item"} onClick={this.changeThree.bind(this) } data-num="3">入学月份</li>
                                            <li className={this.state.changeThree=="4"?"item current":"item"} onClick={this.changeThree.bind(this) } data-num="4">留考EJU方式</li>
                                            <li className={this.state.changeThree=="5"?"item current":"item"} onClick={this.changeThree.bind(this) } data-num="5">校内考方式</li>
                                            <div className="clear"></div>
                                        </ul>
                                        <div className="noticeFont"><span className="notcieRed">*</span>不清楚自己能上哪所大学，点击<a href="/FreeGuide" onClick={Link.handleClick}>这里</a>赶快测测你能考入哪些学校吧！</div>
                                    </div>
                                </div>
                                <div id="specialized" className={this.state.jpHotSchool=="日本高中" ? "search-box tab-content-box" : "tab-content-box-hide"}>
                                            <div className="sdatitle">由于涉及到日本的教育制度以及学生的管理问题，目前能接纳招收中国留学生的高中并不多，以下罗列是较热门且有一定招生能力的学校。</div>
                                            <ul className="schUl">
                                                    <li>
                                                              <a href="/CollegeDetail-JP-高中-914" onClick={Link.handleClick}>
                                                                        <div className="topContent">
                                                                                  <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-school-search-high-1.jpg" />
                                                                        </div>
                                                                        <div className="titleSchool">村上学园 柏原高等学校</div>
                                                              </a>
                                                    </li>
                                                    <li>
                                                              <a href="/CollegeDetail-JP-高中-917" onClick={Link.handleClick}>
                                                                        <div className="topContent">
                                                                                  <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-school-search-high-2.jpg" />
                                                                        </div>
                                                                        <div className="titleSchool">村上学园 敬爱高级中学</div>
                                                              </a>
                                                    </li>
                                                    <li>
                                                              <a href="/CollegeDetail-JP-高中-919" onClick={Link.handleClick}>
                                                                        <div className="topContent">
                                                                                  <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-school-search-high-3.jpg" />
                                                                        </div>
                                                                        <div className="titleSchool">明德义塾高等学校</div>
                                                              </a>
                                                    </li>
                                                    <li>
                                                              <a href="/CollegeDetail-JP-高中-923" onClick={Link.handleClick}>
                                                                        <div className="topContent">
                                                                                  <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-school-search-high-4.jpg" />
                                                                        </div>
                                                                        <div className="titleSchool">鹿岛学园高等学校</div>
                                                              </a>
                                                    </li>
                                                    <li>
                                                              <a href="/CollegeDetail-JP-高中-920" onClick={Link.handleClick}>
                                                                        <div className="topContent">
                                                                                  <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-school-search-high-5.jpg" />
                                                                        </div>
                                                                        <div className="titleSchool">京都两洋高等学校</div>
                                                              </a>
                                                    </li>
                                                    <li>
                                                              <a href="/CollegeDetail-JP-高中-912" onClick={Link.handleClick}>
                                                                        <div className="topContent">
                                                                                  <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-school-search-high-6.jpg" />
                                                                        </div>
                                                                        <div className="titleSchool">仙台育英学园高等学校</div>
                                                              </a>
                                                    </li>
                                                    <li>
                                                              <a href="/CollegeDetail-JP-高中-913" onClick={Link.handleClick}>
                                                                        <div className="topContent">
                                                                                  <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-school-search-high-7.jpg" />
                                                                        </div>
                                                                        <div className="titleSchool">千叶晓星高等学校</div>
                                                              </a>
                                                    </li>
                                                    <li>
                                                              <a href="/CollegeDetail-JP-高中-2491" onClick={Link.handleClick}>
                                                                        <div className="topContent">
                                                                                  <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-school-search-high-8.jpg" />
                                                                        </div>
                                                                        <div className="titleSchool">翔凛中学校·高等学校</div>
                                                              </a>
                                                    </li>
                                            </ul>
                                </div>
                                <div id="zhiZhao" className={this.state.jpHotSchool=="直招大学" ? "search-box tab-content-box" : "tab-content-box-hide"}>
                                        <div className="sdatitle">日本90%以上大学都不在海外直接招生留学生，此处只罗列部分直招大学了，如你想考取日本名校，可先去日本就读语文学校过渡。
</div>
                                          <ul className="schUl">
                                                    <li>
                                                              <a href="/CollegeDetail-JP-大学-2317" onClick={Link.handleClick}>
                                                                        <div className="topContent">
                                                                                  <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-school-search-un-1.jpg" />
                                                                        </div>
                                                                        <div className="titleSchool">东京福祉大学</div>
                                                              </a>
                                                    </li>
                                                    <li>
                                                              <a href="/CollegeDetail-JP-大学-2911" onClick={Link.handleClick}>
                                                                        <div className="topContent">
                                                                                  <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-school-search-un-2.jpg" />
                                                                        </div>
                                                                        <div className="titleSchool">中部学院大学</div>
                                                              </a>
                                                    </li>
                                                    <li>
                                                              <a href="/CollegeDetail-JP-大学-2530" onClick={Link.handleClick}>
                                                                        <div className="topContent">
                                                                                  <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-school-search-un-3.jpg" />
                                                                        </div>
                                                                        <div className="titleSchool">大阪产业大学</div>
                                                              </a>
                                                    </li>
                                                    <li>
                                                              <a href="/CollegeDetail-JP-大学-3027" onClick={Link.handleClick}>
                                                                        <div className="topContent">
                                                                                  <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-school-search-un-4.jpg" />
                                                                        </div>
                                                                        <div className="titleSchool">长崎国际大学</div>
                                                              </a>
                                                    </li>
                                                    <li>
                                                              <a href="/CollegeDetail-JP-大学-3091" onClick={Link.handleClick}>
                                                                        <div className="topContent">
                                                                                  <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-school-search-un-5.jpg" />
                                                                        </div>
                                                                        <div className="titleSchool">东日本国际大学</div>
                                                              </a>
                                                    </li>
                                                    <li>
                                                              <a href="/CollegeDetail-JP-大学-2491" onClick={Link.handleClick}>
                                                                        <div className="topContent">
                                                                                  <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-school-search-un-6.jpg" />
                                                                        </div>
                                                                        <div className="titleSchool">宇都宫共和大学</div>
                                                              </a>
                                                    </li>
                                                    <li>
                                                              <a href="/CollegeDetail-JP-大学-2607" onClick={Link.handleClick}>
                                                                        <div className="topContent">
                                                                                  <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-school-search-un-7.jpg" />
                                                                        </div>
                                                                        <div className="titleSchool">关东学园大学</div>
                                                              </a>
                                                    </li>
                                                    <li>
                                                              <a href="/CollegeDetail-JP-大学-2761" onClick={Link.handleClick}>
                                                                        <div className="topContent">
                                                                                  <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-school-search-un-8.jpg" />
                                                                        </div>
                                                                        <div className="titleSchool">琦玉工业大学</div>
                                                              </a>
                                                    </li>
                                          </ul>
                                </div>

                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                    
                    <div className="country-school-list">
                        <h2>热门学校</h2>
                        <div className="hot-school-box">
                            <ul className="bxslider" id="hotSchoolBxslider">
                                <CSlider {...settings}>
                                    <li>
                                        <a href="/CollegeDetail-JP-大学-2969" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-hotSchool-1.jpg" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/CollegeDetail-JP-大学-2650" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-hotSchool-2.jpg" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/CollegeDetail-JP-大学-3093" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-hotSchool-3.jpg" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/CollegeDetail-JP-大学-2699" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-hotSchool-4.jpg" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/CollegeDetail-JP-大学-2106" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-hotSchool-5.jpg" />
                                        </a>
                                    </li>
                                </CSlider>
                            </ul>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>

            </section>
        );
    }
   componentDidMount() {
          
    }

}

export default JPSchoolSearch;