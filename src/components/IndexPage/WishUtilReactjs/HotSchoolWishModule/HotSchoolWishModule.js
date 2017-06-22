//HotSchoolWishModule.js
import React, { PropTypes } from 'react';
import Link from '../../../../utils/Link';
import $ from 'jquery';

class HotSchoolWishModule extends React.Component{

    constructor(props) {
        super(props);
        this.state =
        {
            hotSchool_City:'USA'
        };
    }  

   render() {

        var flag=this.props.flag;

        this.state.hotSchool_City = flag;

        return (
            <div>
                <ul className={this.state.hotSchool_City == "UK" ? "hot-box" : "hide"} >
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-240"}>剑桥大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-241"}>牛津大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-252"}>萨里大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-246"}>巴斯大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-245"}>杜伦大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-250"}>约克大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-267"}>伦敦大学皇家霍洛威学院</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-257"}>谢菲尔德大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-265"}>曼彻斯特大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-248"}>伦敦大学学院</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-255"}>伯明翰大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-258"}>纽卡斯尔大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-242"}>伦敦政治经济学院</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-243"}>圣安德鲁斯大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-259"}>南安普顿大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-266"}>伦敦大学国王学院</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-261"}>爱丁堡大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-262"}>诺丁汉大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-264"}>格拉斯哥大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-251"}>兰卡斯特大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-273"}>卡地夫大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-254"}>布里斯托大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-249"}>华威大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-270"}>利兹大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-275"}>利物浦大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-260"}>拉夫堡大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-253"}>莱斯特大学</a></li>                    
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-247"}>埃克塞特大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-244"}>帝国理工学院</a></li>                    
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-256"}>东英吉利亚大学</a></li>             
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-276"}>伦敦玛丽女王学院</a></li>
                    <li className="more"><a onClick={Link.handleClick}  href="/College-fourCountry-UK-大学--">更多</a></li> 
                </ul>

                <ul className={this.state.hotSchool_City == "USA" ? "hot-box" : "hide"} >
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-25749"}>纽约理工大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-25259"}>丹佛大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-24961"}>德雷塞尔大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-24958"}>佩斯大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-25839"}>费尔雷迪克森大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-24990"}>卡内基梅隆大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-25021"}>宾夕法尼亚大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-25022"}>康奈尔大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-24921"}>布朗大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-24996"}>莱斯大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-25018"}>哥伦比亚大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-24904"}>圣地亚哥州立大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-24991"}>乔治华盛顿大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-24978"}>纽约大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-25025"}>罗切斯特大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-24922"}>伊利诺伊大学香槟分校</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-25023"}>南加州大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-24983"}>东北大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-24971"}>加州大学欧文分校</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-24933"}>迈阿密大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-24975"}>华盛顿大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-25029"}>波士顿大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-24923"}>福特汉姆大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-24985"}>马里兰大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-25028"}>加州大学洛杉矶分校</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-25149"}>佩珀代因大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-25033"}>雪城大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-26027"}>弗吉尼亚大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-24989"}>范德堡大学</a></li>
                    <li className="more"><a onClick={Link.handleClick}  href="/College-fourCountry-USA-大学--">更多</a></li> 
                </ul>


                <ul className={this.state.hotSchool_City == "AUS" ? "hot-box" : "hide"} >
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-1"}>澳大利亚国立大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-2"}>墨尔本大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-3"}>悉尼大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-5"}>新南维尔士大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-4"}>昆士兰大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-8"}>阿德雷德大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-6"}>莫纳士大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-7"}>西澳大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-22"}>邦德大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-19"}>迪肯大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-16"}>格里菲斯大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-20"}>拉筹伯大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-9"}>麦考瑞大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-12"}>昆士兰科技大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-1054"}>墨尔本皇家理工大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-15"}>纽卡斯尔大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-36"}>阳光海岸大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-21"}>塔斯马尼亚大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-10"}>悉尼科技大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-11"}>卧龙岗大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-13"}>科廷大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-18"}>詹姆斯库克大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-26"}>莫道克大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-25"}>斯威本科技大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-27"}>堪培拉大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-24"}>查尔斯达尔文大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-23"}>弗林德斯大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-28"}>西悉尼大学</a></li>
                    <li><a onClick={Link.handleClick} href={"CollegeDetail-"+flag+"-大学-31"}>维多利亚大学</a></li>
                    <li className="more"><a onClick={Link.handleClick}  href="/College-fourCountry-AUS-大学--">更多</a></li> 
                </ul>


                <ul className={this.state.hotSchool_City == "JP" ? "hot-box" : "hide"} >
                    <li><a href="" onClick={Link.handleClick}>行知学园日本语学校</a></li>
                    <li><a href="/CollegeDetail-JP-%E8%AF%AD%E8%A8%80%E5%AD%A6%E6%A0%A1-862" onClick={Link.handleClick}>优尼塔斯日本語学校</a></li>
                    <li><a href="/CollegeDetail-JP-%E8%AF%AD%E8%A8%80%E5%AD%A6%E6%A0%A1-869" onClick={Link.handleClick}>外語ビジネス専門学校</a></li>
                    <li><a href="/CollegeDetail-JP-%E8%AF%AD%E8%A8%80%E5%AD%A6%E6%A0%A1-877" onClick={Link.handleClick}>LABO日本语教育研修所</a></li>
                    <li><a href="/CollegeDetail-JP-%E8%AF%AD%E8%A8%80%E5%AD%A6%E6%A0%A1-893" onClick={Link.handleClick}>ISI日本语学校</a></li>
                    <li><a href="/CollegeDetail-JP-%E8%AF%AD%E8%A8%80%E5%AD%A6%E6%A0%A1-943" onClick={Link.handleClick}>Elite日本语学校（精英日本语学校）</a></li>
                    <li><a href="/CollegeDetail-JP-%E8%AF%AD%E8%A8%80%E5%AD%A6%E6%A0%A1-878" onClick={Link.handleClick}>三峰日本语学校</a></li>
                    <li><a href="/CollegeDetail-JP-%E8%AF%AD%E8%A8%80%E5%AD%A6%E6%A0%A1-934" onClick={Link.handleClick}>双葉外語日本語学校</a></li>
                    <li><a href="/CollegeDetail-JP-%E8%AF%AD%E8%A8%80%E5%AD%A6%E6%A0%A1-883" onClick={Link.handleClick}>東京中央日本語学院</a></li>
                    <li><a href="/CollegeDetail-JP-%E8%AF%AD%E8%A8%80%E5%AD%A6%E6%A0%A1-879" onClick={Link.handleClick}>大原日本語学院</a></li>
                    <li><a href="/CollegeDetail-JP-%E8%AF%AD%E8%A8%80%E5%AD%A6%E6%A0%A1-901" onClick={Link.handleClick}>ARC日本语学校</a></li>
                    <li><a href="" onClick={Link.handleClick}>メロス言語学院( 池袋)</a></li> 
                    <li><a href="/CollegeDetail-JP-%E8%AF%AD%E8%A8%80%E5%AD%A6%E6%A0%A1-863" onClick={Link.handleClick}>飞鸟学院</a></li>
                    <li><a href="/CollegeDetail-JP-%E8%AF%AD%E8%A8%80%E5%AD%A6%E6%A0%A1-942" onClick={Link.handleClick}>早稻田言语学院</a></li>
                    <li><a href="/CollegeDetail-JP-%E8%AF%AD%E8%A8%80%E5%AD%A6%E6%A0%A1-882" onClick={Link.handleClick}>東京环球外語学院</a></li>
                    <li><a href="/CollegeDetail-JP-%E8%AF%AD%E8%A8%80%E5%AD%A6%E6%A0%A1-900" onClick={Link.handleClick}>草苑日本语学校</a></li>
                    <li><a href="/CollegeDetail-JP-%E8%AF%AD%E8%A8%80%E5%AD%A6%E6%A0%A1-895" onClick={Link.handleClick}>赤门会日本语学校</a></li>
                    <li><a href="/CollegeDetail-JP-%E8%AF%AD%E8%A8%80%E5%AD%A6%E6%A0%A1-892" onClick={Link.handleClick}>东京三立学院</a></li>
                    <li><a href="/CollegeDetail-JP-%E8%AF%AD%E8%A8%80%E5%AD%A6%E6%A0%A1-857" onClick={Link.handleClick}>東京言語教育学院</a></li>
                    <li><a href="/CollegeDetail-JP-%E8%AF%AD%E8%A8%80%E5%AD%A6%E6%A0%A1-909" onClick={Link.handleClick}>东京工科大学附属日本语学校</a></li>
                    <li><a href="" onClick={Link.handleClick}>ABK学馆日本语学校</a></li>
                    <li className="more"><a onClick={Link.handleClick}  href="/College-fourCountry-JP-大学--">更多</a></li> 
                </ul>
            </div>
        );
    }
    componentDidMount(){

      
    }

}

export default HotSchoolWishModule;
/**
 * xyx 2015.8.27
 */
