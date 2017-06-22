
import React, { PropTypes } from 'react';
import styles from './CountryEducationStudyAbroad.less';
import withStyles from '../../../decorators/withStyles';
import UtilSearchActiveData from '../UtilSearchActiveData/UtilSearchActiveData';
import Link from '../../../utils/Link';

import Bachelor from '../StudyAbroadBox/Bachelor/Bachelor.js';
import $ from 'jquery';

@withStyles(styles)
class CountryEducationStudyAbroad  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userClick:'留学信息',JPUserClick:"留学申请"};
    }

    searchActive(e){
        let dataStr=$(e.target).attr("data-value");
        let countryStr=this.props.country;
        //let tab=arr[1];
        this.setState({
            userClick:dataStr
        }); 
        UtilSearchActiveData.onClickSearch(countryStr,dataStr); 
    }
    JPSearchActive(e){
        let JPDataStr=$(e.target).attr("data-value");
        let countryStr=this.props.country;
        //let tab=arr[1];
        this.setState({
            JPUserClick:JPDataStr
        }); 
        UtilSearchActiveData.onClickSearch(countryStr,JPDataStr);   
    }
    render() {
        var coun=this.props.country;
        var nodes=[];
        if(coun=="JP"){
            nodes.push(
                <div className="major-tabs-box">
                    <div className="major-tabs"> 
                        <div className={this.state.JPUserClick=="留学申请"?"item bachelor selected":"item bachelor"} data-content="#bachelor" data-value="留学申请"  >
                            <div className="title" data-value="留学申请" onClick={this.JPSearchActive.bind(this)} >留学申请</div>
                            <div className="more"><a  onClick={Link.handleClick} href="/AdvisoryLibrary-JP" >查看全部 ></a></div>
                            <div className="clear"></div>
                        </div>
                        <div className={this.state.JPUserClick=="院校专业"?"item master selected":"item master"} data-content="#master" data-value="院校专业"    >
                            <div className="title" data-value="院校专业"  onClick={this.JPSearchActive.bind(this)} >院校专业</div>
                            <div className="more"><a onClick={Link.handleClick} href="/AdvisoryLibrary-JP" >查看全部 ></a></div>
                            <div className="clear"></div>
                        </div>
                        <div className={this.state.JPUserClick=="签证材料"?"item high selected":"item high"} data-content="#high" data-value="签证材料"   >
                            <div className="title" data-value="签证材料"  onClick={this.JPSearchActive.bind(this)} >签证材料</div>
                            <div className="more"><a onClick={Link.handleClick} href="/AdvisoryLibrary-JP" >查看全部 ></a></div>
                            <div className="clear"></div>
                        </div>
                        <div className={this.state.JPUserClick=="行前准备"?"item yimin selected":"item yimin"} data-content="#yimin" data-value="行前准备"   >
                            <div className="title" data-value="行前准备"  onClick={this.JPSearchActive.bind(this)} >行前准备</div>
                            <div className="more"><a onClick={Link.handleClick} href="/AdvisoryLibrary-JP" >查看全部 ></a></div>
                            <div className="clear"></div>
                        </div>
                        <div className={this.state.JPUserClick=="奖学金"?"item new jxj selected":"item new jxj"}  data-content="#new"  data-value="奖学金"   >
                            <div className="title" data-value="奖学金"   onClick={this.JPSearchActive.bind(this)}  >奖学金</div>
                            <div className="more"><a onClick={Link.handleClick} href="/AdvisoryLibrary-JP" >查看全部 ></a></div>
                            <div className="clear"></div>
                        </div>
                        <div className={this.state.JPUserClick=="生活经验"?"item peixun selected":"item peixun"} data-content="#peixun" data-value="生活经验"   >
                            <div className="title"  data-value="生活经验" onClick={this.JPSearchActive.bind(this)} >生活经验</div>
                            <div className="more"><a onClick={Link.handleClick} href="/AdvisoryLibrary-JP" >查看全部 ></a></div>
                            <div className="clear"></div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="major-tab-content" id="major-tab-content" flag="jp"></div>
                </div>
                );
        }else{
            nodes.push(
                <div className="major-tabs-box">
                    <div className="major-tabs"> 
                        <div className={this.state.userClick=="留学信息"?"item bachelor selected":"item bachelor"} data-content="#bachelor" data-value="留学信息"  >
                            <div className="title" data-value="留学信息" onClick={this.searchActive.bind(this)} >留学信息</div>
                            <div className="more"><a  onClick={Link.handleClick} href={"/AdvisoryLibrary-"+this.props.country} >查看全部 ></a></div>
                            <div className="clear"></div>
                        </div>
                        <div className={this.state.userClick=="签证信息"?"item master selected":"item master"} data-content="#master" data-value="签证信息"    >
                            <div className="title" data-value="签证信息"  onClick={this.searchActive.bind(this)} >签证信息</div>
                            <div className="more"><a onClick={Link.handleClick} href={"/AdvisoryLibrary-"+this.props.country} >查看全部 ></a></div>
                            <div className="clear"></div>
                        </div>
                        <div className={this.state.userClick=="工作信息"?"item high selected":"item high"} data-content="#high" data-value="工作信息"   >
                            <div className="title" data-value="工作信息"  onClick={this.searchActive.bind(this)} >工作信息</div>
                            <div className="more"><a onClick={Link.handleClick} href={"/AdvisoryLibrary-"+this.props.country} >查看全部 ></a></div>
                            <div className="clear"></div>
                        </div>
                        <div className={this.state.userClick=="移民信息"?"item yimin selected":"item yimin"} data-content="#yimin" data-value="移民信息"   >
                            <div className="title" data-value="移民信息"  onClick={this.searchActive.bind(this)} >移民信息</div>
                            <div className="more"><a onClick={Link.handleClick} href={"/AdvisoryLibrary-"+this.props.country} >查看全部 ></a></div>
                            <div className="clear"></div>
                        </div>
                        <div className={this.state.userClick=="学校新闻"?"item new selected":"item new"} data-content="#new" data-value="学校新闻"   >
                            <div className="title" data-value="学校新闻"  onClick={this.searchActive.bind(this)} >学校新闻</div>
                            <div className="more"><a onClick={Link.handleClick} href={"/AdvisoryLibrary-"+this.props.country} >查看全部 ></a></div>
                            <div className="clear"></div>
                        </div>
                        <div className={this.state.userClick=="英语培训"?"item peixun selected":"item peixun"} data-content="#peixun" data-value="英语培训"   >
                            <div className="title"  data-value="英语培训" onClick={this.searchActive.bind(this)} >英语培训</div>
                            <div className="more"><a onClick={Link.handleClick} href={"/AdvisoryLibrary-"+this.props.country} >查看全部 ></a></div>
                            <div className="clear"></div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="major-tab-content" id="major-tab-content"></div>
                </div>
            );  
        }
        return (
           <section className="country-education-study-abroad">
              {nodes}
            </section>
        );
    }

    componentDidMount() {
   /*      $(".major-tabs-box .major-tabs .item").click(function(){
                    $(".major-tabs-box .major-tabs .item").removeClass("selected");
                    $(this).addClass("selected"); 
            });*/
        let countryFlag=this.props.country;
        if(countryFlag=="JP"){
            UtilSearchActiveData.onClickSearch(this.props.country,"留学申请");
        }else{
            UtilSearchActiveData.onClickSearch(this.props.country,"留学信息");
        }
        
         //this.loadData();
       //React.render(<Bachelor data={this.props.data} flag="本科留学"  />,document.getElementById('major-tab-content'));
    }  
}

export default CountryEducationStudyAbroad;
/**
 * xyx 2015.8.21
 */
 