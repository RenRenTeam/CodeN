/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
var Select = require('rc-select');
var Option = Select.Option;


import $ from 'jquery';
class HighSchool  extends React.Component  {

    constructor(props) {

        super(props);

        this.state = {Country:this.props.country,Diqu:"",area:"",Val:"按地区"};

     }
        render() {

            var aus_Arr=["按地区","北领地","南澳洲","新南威尔士州","昆士兰州","维多利亚州","首都"];

            var uk_Arr=["按地区","威尔士","苏格兰","英格兰"];

            var usa_Arr=["按地区","西北地区","加州、内华达州","西南地区","五大湖地区","大平原地区","密西西比河流域","东北地区","东南地区"];
           var usa_province={
                "按地区":"",
                "西北地区":"（华盛顿州、俄勒冈州、爱达荷州、蒙大拿州、怀俄明州）",
                "加州、内华达州":"（内华达州、加利福尼亚州）",
                "西南地区":"（科罗拉多州、新墨西哥州、亚利桑那州、犹他州）",
                "五大湖地区":"（明尼苏达州、威斯康星州、伊利诺州、密执安州、印地安那州、俄亥俄州）",
                "大平原地区":"（北达科他州、南达科他州、内布拉斯加州、堪萨斯州、俄克拉荷马州、德克萨斯州）",
                "密西西比河流域":"（密苏里州、密西西比州、肯塔基州、田纳西州、阿肯色州、路易斯安那州、亚拉巴马州）",
                "东北地区":"（缅因州、佛蒙特州、新罕布什尔州、马萨诸塞州、康涅狄格州、纽约州、罗得岛州、新泽西州、宾夕法尼亚州）",
                "东南地区":"（西弗吉尼亚州、弗吉尼亚州、北卡罗来纳州、南卡罗来纳州、乔治亚州、佛罗里达州、夏威夷州、阿拉斯加州）"
            };

            //var jp_Arr=["按地区","北海道","青森县","岩手县","宫城县","秋田县","山形县","福岛县","茨城县","枥木县","群马县","崎玉县","千叶县","东京都","神奈川县","新泻县","富山县","石川县","福井县","山梨县","长野县","岐阜县","静冈县","爱知县","三重县","滋贺县","京都府","大阪府","兵库县","奈良县","和歌山县","鸟取县","岛根县","冈山县","广岛县","山口县","德岛县","香川县","爱媛县","高知县","福冈县","佐贺县","长崎县","熊本县","大分县","宫崎县","鹿儿岛县","冲绳县"];

            if(this.state.Country == "AUS"){

                var nodes=aus_Arr.map(function(arrArr){

                    return(
                            <Option value={arrArr} desc={arrArr}>{arrArr}</Option>
                        );
                });

            }else if(this.state.Country == "UK"){

                var nodes=uk_Arr.map(function(arrArr){

                    return(
                            <Option value={arrArr} desc={arrArr}>{arrArr}</Option>
                        );
                });
            }else if(this.state.Country == "USA"){

                var nodes=usa_Arr.map(function(arrArr){

                    return(
                            <Option value={arrArr} desc={arrArr}>{arrArr+usa_province[arrArr]}</Option>
                        );
                });
            } 

            var countryNode=[];
            if(this.state.Country == "USA"){
                countryNode.push(
                        <div >
                            <dl>
                                <dd className="USAAreaCss">
                                    <Select className='bigselect' value={this.state.Val} style={{height:45}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.ChangePosition.bind(this)}>
                                        {nodes}
                                    </Select>
                                </dd>
                                <dd>
                                    <input type="text" className="school-name" placeholder="按名称" onChange={this.userInput.bind(this)} name="name" />
                                </dd>
                                <dd >
                                    
                                </dd>
                            </dl>
                        </div>
                    );
            }else{
                countryNode.push(
                    <div >
                        <dl>
                            <dd>
                                <Select value={this.state.Val} style={{height:45}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.ChangePosition.bind(this)}>
                                    {nodes}
                                </Select>
                            </dd>
                            <dd>
                                <input type="text" className="school-name" placeholder="按名称" onChange={this.userInput.bind(this)} name="name" />
                            </dd>
                            <dd >
                                
                            </dd>
                        </dl>
                    </div>
                );
            }

        return (
            <div id="high" className="search-box tab-content-box">
                {countryNode}
            </div>
        );
    }

    ChangePosition(e){ 
        if(e=="按地区"){e=""; }
         //this.setState({area:e,Val:e }); 
        this.props.changPositon(e);
    }
    userInput(e){
        this.props.changeName(e.target.value);
    }
    componentDidMount() {
        $(".bigselect").css("width","350px !important");
    }
}

export default HighSchool;
/**
 * xyx 2015.9.15
 */

/*<dd className={this.state.Country == "USA" ? "usaArea" : "hideBOx-ASD"}>
                        {this.state.area?(this.state.area+"包括："+usa_province[this.state.area]):""}
                    </dd>*/
