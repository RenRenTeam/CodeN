/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './CollegeRank.less';
import withStyles from '../../decorators/withStyles';
import $ from 'jquery';
import CollegeRankFunction from './CollegeRankFunction/CollegeRankFunction.js';
import Year from './Year/Year.js';
import ZhuanYe from './ZhuanYe/ZhuanYe.js';
import Table from './Table/Table.js';
import Link from '../../utils/Link.js';
var Pagination = require('rc-pagination');
var Select=require('rc-select');
var Rest = require('../../utils/rest');
var Common = require('../../utils/Common.js');  

@withStyles(styles)
class CollegeRank extends React.Component{

    constructor(props) {
        super(props);

        this.state = { 
            Area:'英国',
            Type:'综合排名',
            PingPai:'TIMES',
            Year:'2015',
            ZhuanYe:'', 
            USAType:'国家级大学排名',
            USASchool:'2013-2014泰晤士世界大学排名',
            USAZhuanye:"",
            flag:"-商科排名",
            tot:"",
            USAZhuanyeDaLei:"商科",
            currentPage:1
        };
    }

    //var Table = antd.Table;

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    hangeArea(e){ 

        this.setState({
            Area:e.target.innerHTML
        });

        this.state.Area = e.target.innerHTML;

        var state_Var = this.state;

        CollegeRankFunction(state_Var);

        if(this.state.Area == "英国"){

            $("#page").html("");

            this.state.Type = "综合排名";

            this.state.PingPai = "TIMES";

            this.state.Year = "2015";

            this.GetYear();
            
            this.GetZhuanYe();

        }else{

            this.state.Type = "美国大学本科排名";

            this.state.USASchool = "国家级大学排名";

            this.GetTableData(this.state.USAType);
        }

    }

    hangeType(e){

        this.setState({
            Type:e.target.innerHTML
        });

        this.state.Type = e.target.innerHTML;

        var state_Var = this.state;

        if(this.state.Area == "英国"){

            this.GetYear();

            this.GetZhuanYe();

            this.GetTableData();

        }else if(this.state.Area == "美国"){

            if(e.target.innerHTML == "世界大学排名"){

                this.setState({
                    USASchool:"2013-2014泰晤士世界大学排名"
                });

                this.GetTableData("2013-2014泰晤士世界大学排名");
            }

            else{

                this.setState({
                    USAZhuanye:"会计学",
                    USAZhuanyeDaLei:"商科",
                    flag:"-商科排名"
                });
                
                this.state.flag = "-商科排名";
                this.GetTableData("会计学");
            }

        }
        CollegeRankFunction(state_Var);
    }
    /*改变美国专业大类*/
    hangeUSAUSAZhuanyeDaLei(e){

        this.setState({
            USAZhuanyeDaLei:e.target.innerHTML
        });

        var e_Var = e.target.innerHTML;

        this.state.USAZhuanyeDaLei = e.target.innerHTML;

        if(e_Var == "商科"){

            this.state.USAZhuanye = "会计学";

        }else if(e_Var == "教育学"){

            this.state.USAZhuanye = "课程与导论";

        }else if(e_Var == "工程学"){

            this.state.USAZhuanye = "宇宙空间/航空/太空航行学";

        }else if(e_Var == "法学"){

            this.state.USAZhuanye="临床训练学";

        }else if(e_Var == "医学"){

            this.state.USAZhuanye="艾滋病学";

        }else if(e_Var == "科学"){

            this.state.USAZhuanye="化学";

        }else if(e_Var == "图书馆与信息研究"){

            this.state.USAZhuanye="档案保存";

        }else if(e_Var == "社会科学和人文科学"){

            this.state.USAZhuanye="社会学";

        }else if(e_Var == "医疗保健"){

            this.state.USAZhuanye="听力学";

        }else if(e_Var == "公共事务"){

            this.state.USAZhuanye="城市管理与城市政策";

        }else if(e_Var == "艺术类"){

            this.state.USAZhuanye="陶器制造";

        }
        this.state.flag = $(e.target).parent().attr("data-value");

        this.GetTableData(this.state.USAZhuanye);
    }
    /*改变美国专业*/
    hangeUSAZhuanye(e){

        this.setState({
            USAZhuanye:e.target.innerHTML
        });

        this.state.USAZhuanye = e.target.innerHTML;

        this.state.flag = $(e.target).parent().attr("data-value");

        this.GetTableData(e.target.innerHTML);
    }

    /*改变美国学校*/
    hangeUSASchool(e){ 

        this.setState({
            USASchool:e.target.innerHTML
        });

        this.state.USASchool = e.target.innerHTML;

        this.GetTableData(e.target.innerHTML);
    }

    changeSchoolType(e){

        this.setState({
            PingPai:e.target.innerHTML
        });

        this.state.PingPai = e.target.innerHTML;

        var state_Var = this.state;

         if(this.state.Area == "英国"){

            this.GetYear();

            this.GetZhuanYe();

            //this.GetTableData();
        }

         $("#collegeRank-Year-node ul li").removeClass("active");

         $("#collegeRank-Year-node ul").children().eq(0).addClass("active");

        CollegeRankFunction(state_Var);
    }

    changeYear(e){

        var e_Year = e.target.innerHTML;

        this.setState({
            Year:e_Year
        });

        this.state.Year = e.target.innerHTML;

        var state_Var = this.state;

        if(this.state.Area == "英国"){

            this.GetZhuanYe();

            this.GetTableData();
            
            CollegeRankFunction(state_Var);
        }
    }

    changeZhuanYe(e){

        var e_ZhuanYe = e.target.innerHTML;

        this.setState({
            ZhuanYe:e_ZhuanYe
        });

        this.state.ZhuanYe = e_ZhuanYe;

        var state_Var = this.state;

        this.GetTableData();
        
        CollegeRankFunction(state_Var);
    }

    /*美国排名类型*/
    hangeUSAType(e){

        var USAType = e.target.innerHTML;

        this.setState({
            ZhuanYe:USAType
        });

        this.state.USAType = USAType;

        this.GetTableData();
    }

    GetYear(e){

        var state_Var = this.state;

        var type_Var = this.state.Type;

        var pingPai_Var = this.state.PingPai;

        var year_Var = this.state.Year;

        $.ajax({
            url: "http://service.shenyuan.org/University_RankingService/GetRankingYear/Brand="+pingPai_Var+";Type="+type_Var+";CallBack=getRankingYear_jsonpCallback",
            type: "get",
            dataType: "jsonp",
            async: false,
            jsonp: "callbackparam",
            jsonpCallback: "getRankingYear_jsonpCallback",
        }).done(function (json) {

            if(json && json.length >= 0){

                React.render(<Year json = {json} changeYear_Function={this.changeYear.bind(this)} year={json[0].Year} getData={this.GetTableData.bind(this)} />, document.getElementById('collegeRank-Year-node'));               

                this.state.Year = json[0].Year;

                this.setState({Year:json[0].Year});

                $("#collegeRank-Year-node ul").children().eq(0).addClass("active");
            }else{

                $("#collegeRank-Year-node").html("");

                this.state.Year = "";
            }
        }.bind(this));
    }
    
    GetZhuanYe(){

        var state_Var = this.state;

        var type_Var = this.state.Type;

        var pingPai_Var = this.state.PingPai;

        var year_Var = this.state.Year;
        var MajorStr=this.state.ZhuanYe;
        if(!MajorStr){MajorStr="材料技术";}

        $.ajax({
            url: "http://service.shenyuan.org/University_RankingService/GetRankingMajor/Year="+year_Var+";Brand="+pingPai_Var+";Type="+type_Var+";CallBack=getRankingMajor_jsonpCallback",
            type: "get",
            dataType: "jsonp",
            async: false,
            jsonp: "callbackparam",
            jsonpCallback: "getRankingMajor_jsonpCallback",
        }).done(function (json) {
            if(json && json[0].Major != ""){

                React.render(<ZhuanYe UKMajor={MajorStr} json = {json} changeZhuanYe_Function={this.changeZhuanYe.bind(this)} />, document.getElementById('collegeRank-ZhuanYe-node'));
            }else{

                $("#collegeRank-ZhuanYe-node").html("");

                this.state.ZhuanYe = "";
            }

        }.bind(this));
    }

    GetTableData(ele,pageindex,year){

        var con_Year;
        if(!year || year == ""){con_Year = this.state.Year;}
        else{ con_Year = year; }


        var pageindex_Var;

        if(!pageindex){pageindex_Var = 1; }
        else{pageindex_Var = pageindex;}

        $("#div_rank").html("");
        var flag = this.state.flag;
        if(this.state.Area == "美国"){

            if(ele){
                var svc;
                if(this.state.Type == "美国研究生院排名"){ svc = ele+flag;}
                else{svc = ele;}
            }else{ return false;}

            var fenyeFunction = this.fenYe.bind(this);
            var totalCount = "";

            Rest.post('/University_RankingService/GetUniversityUSAByRanking',  
              {"CallBack":Date.now(),"ChildEntity":{
                "PageIndex":pageindex_Var,"PageSize":20,"TypeMsg":svc}
              },function(responseText){
                if(responseText.text){

                    var json = eval('(' + responseText.text + ')');

                    totalCount = json[0].TotalCount;
                    if(pageindex_Var == 1){
                        fenyeFunction(totalCount);
                    }
                    var Table = antd.Table;

                    var entityList = new Array();

                    for (var i = 0; i < json.length; i++) {

                        var ent = json[i];

                        ent["Rank"] = json[i].Rank;

                        ent["Name"] = json[i].Name;

                        ent["Logo"] = json[i].Logo;

                        ent["Zaidu"] = json[i].ZaiDu;

                        ent["ShenQing"] = json[i].ShenQing;

                        ent["XiangQu"] = json[i].XiangQu;

                        ent["UniversitySysno"] = json[i].UniversitySysno;

                        entityList.push(ent);
                    };

                    var columns = new Array();

                    columns.push({
                      title: "", dataIndex: "Rank", sorter: true});

                    columns.push({ title: "学校Logo", dataIndex: "Logo" });

                    columns.push({title: "学校名称",dataIndex: "Name"});

                    columns.push({title: "在读人数",dataIndex: "Zaidu"});

                    columns.push({ title: "申请人数", dataIndex: "ShenQing" });

                    columns.push({ title: "想去人数", dataIndex: "XiangQu"});

                    columns.push({ title: "UniversitySysno",dataIndex: "UniversitySysno"});


                    React.render(<Table columns={columns} dataSource={entityList} pagination={false}  showQuickJumper={true}/>,document.getElementById("div_rank"));


                    $(".ant-table-thead tr").eq(0).find("th").last().remove();

                    $(".ant-table-thead tr").eq(0).append("<th style='width:45px;'>免费评估</th>");

                    $(".ant-table-tbody .ant-table-row").each(function(index){

                        var htmlA =  $(this).children().eq(2).children().html();

                        var id = $(this).children().last().text();

                        $(this).children().eq(2).children().html("<a class='schoolNameHrefs' href = '/CollegeDetail-USA-大学-"+id+"'>"+htmlA+"</a>");

                        var src = $(this).children().eq(1).text().replace(/\"/g, "");

                        $(this).children().eq(1).html("<img src="+src+" />");

                        $(this).find("td").last().remove();

                        var name = $(this).children().eq(2).children().html();

                        $(this).append("<td><a  href='/CollegeTestFrom-USA-大学-"+id+"-"+htmlA+"'  target='_blank'>免费评估</a></td>");

                    });
                }else{
                    return false;
                }
            });
        }
        else if(this.state.Area == "英国"){

            var con = {
                Year : con_Year,
                Brand:this.state.PingPai,
                Major:this.state.ZhuanYe,
                Type:this.state.Type
            }

            var Table = antd.Table;
            Rest.post('/University_RankingService/GetUniversityUKByRanking',{"CallBack":Date.now(),"ChildEntity":con},function(rep){

                if(rep.status == 200){
                    var json = eval('(' + rep.text + ')');

                    var entityList = new Array();

                    for (var i = 0; i < json.length; i++) {
                        var ent = eval('(' + json[i].Content + ')');
                        ent["Sysno"] = json[i].UniversitySysno;
                        entityList.push(ent);
                    };


                    var columns = new Array();

                    columns.push({
                      title: "Ranking",
                      dataIndex: "Ranking",
                      sorter: true
                    });
                    columns.push({
                      title: "University Name",
                      dataIndex: "UniversityName"
                    });
                    if(entityList && entityList.length > 0){
                        var propertys = Object.keys(entityList[0]);
                        for (var i = 0; i < propertys.length ; i++) {
                            if(propertys[i] != "Status" 
                                && propertys[i] != "Sysno"
                                && propertys[i] != "Ranking" 
                                && propertys[i] != "UniversityName"
                                && propertys[i] != "EnglishName"
                                && propertys[i] != "Type"
                                && propertys[i] != "Year"
                                && propertys[i] != "Brand"
                                && propertys[i] != "status"
                                && propertys[i] != "MajorUrl"
                                && propertys[i] != "Type2"){
                                columns.push({
                                  title: propertys[i],
                                  dataIndex: propertys[i]
                                });

                            }
                        }
                    }
                    columns.push({
                      title: "Sysno",
                      dataIndex: "Sysno"
                    });

                    var dataSource = new Table.DataSource({
                          data: entityList,

                          getPagination: function(result) {
                            return {
                              total: 500,
                              pageSize: 5
                            }
                          },

                          getParams: function(pagination, filters, sorter) {

                            var params = {
                              pageSize: 5,
                              currentPage: 1,
                              sortField: sorter.field,
                              sortOrder: sorter.order
                            };
                            for (var key in filters) {
                              params[key] = filters[key];
                            }
                            return params;
                          }
                        });
                

                    React.render(<Table columns={columns} dataSource={entityList} pagination={false} />,document.getElementById("div_rank"));
                    
                    $(".ant-table-thead tr").eq(0).find("th").last().remove();
                    $(".ant-table-thead tr").eq(0).append("<th style='width:45px;'>免费评估</th>");

                    $(".ant-table-tbody .ant-table-row").each(function(index){


                        var htmlAb=  $(this).children().eq(1).children().text();

                        var id = $(this).children().last().text();

                        $(this).find("td").last().remove();

                        //console.log(id + "------" + htmlAb);

                        $(this).append("<td><a href='/CollegeTestFrom-UK-大学-"+id+"-"+htmlAb+"' >免费评估</a></td>");

                        $(this).children().eq(1).children().html("<a href = '/CollegeDetail-UK-大学-"+id+"'>"+htmlAb+"</a>");

                        //console.log(id+"             "+htmlAb);



                    });

                    

                    //$("#collegeRankNumS").html(json.length);


                }else{

                    this.state.ZhuanYe = "";

                    //$("#collegeRankNumS").html("0");

                    $("#getUniversityUKByRanking").html("暂无数据");

                    $("#year_Var").html(con.Year);

                    $("#pinPai_Var").html(con.Brand);

                    $("#type_Var").html(con.Type);
                }
                
            }.bind(this));
        }

    }

    render() {

        let title = '大学排名－人人留学';
        this.context.onSetTitle(title);

        return (
            <section className="content">
                <div className="rank-tabs-box">
                    <div className="rankHeader">
                        <div className="title">排名查询</div>
                        <div className="clear"></div>
                    </div>
                    <div className="college-filter-box high">
                        <div className="college-filter-options" data-group="PlaceArea">
                            <div className="title">按国家：</div>
                            <ul className="college-filter-list" id="counsadtry_node">
                                <li className={this.state.Area=="英国" ? "active" : ""} data-value="英国"><a className="nofollow" onClick={this.hangeArea.bind(this)}>英国</a></li>
                                <li className={this.state.Area=="美国" ? "active" : ""}  data-value="美国"><a className="nofollow" id="usaSADX_XZC" onClick={this.hangeArea.bind(this)}>美国</a></li>
                            </ul>
                        </div>
                        <div className={this.state.Area=="英国"?"college-filter-options":"college-filter-options college-filter-options-hide"} data-group="PlaceArea" id="collegeRank-Type-node-a">
                            <div className="title">按类型：</div>
                            <ul className="college-filter-list">
                                <li className={this.state.Type=="综合排名" ? "active" : ""} data-value="综合排名"><a className="nofollow" onClick={this.hangeType.bind(this)}>综合排名</a></li>
                                <li className={this.state.Type=="专业排名" ? "active" : ""}  data-value="专业排名"><a className="nofollow" onClick={this.hangeType.bind(this)}>专业排名</a></li>
                            </ul>
                        </div>
                        <div className={this.state.Area=="美国"?"college-filter-options":"college-filter-options college-filter-options-hide"} data-group="PlaceArea" id="collegeRank-Type-node-b">
                            <div className="title">按类型：</div>
                            <ul className="college-filter-list">
                                <li className={this.state.Type=="美国大学本科排名" ? "active" : ""} data-value="美国大学本科排名"><a className="nofollow" onClick={this.hangeType.bind(this)}>美国大学本科排名</a></li>
                                <li className={this.state.Type=="美国研究生院排名" ? "active" : ""}  data-value="美国研究生院排名"><a className="nofollow" onClick={this.hangeType.bind(this)}>美国研究生院排名</a></li>
                                <li className={this.state.Type=="世界大学排名" ? "active" : ""}  data-value="世界大学排名"><a className="nofollow" onClick={this.hangeType.bind(this)}>世界大学排名</a></li>
                            </ul>
                        </div>
                        <div className={this.state.Area=="美国" && this.state.Type == "美国大学本科排名"?"college-filter-options":"college-filter-options college-filter-options-hide"} data-group="PlaceArea" id="collegeRank-Type-usa-nation-school">
                            <div className="title">排名类型：</div>
                            <ul className="college-filter-list">
                                <li className={this.state.USASchool=="国家级大学排名" ? "active" : ""} data-value="国家级大学排名"><a className="nofollow" onClick={this.hangeUSASchool.bind(this)}>国家级大学排名</a></li>
                                <li className={this.state.USASchool=="文理院校排名" ? "active" : ""}  data-value="文理院校排名"><a className="nofollow" onClick={this.hangeUSASchool.bind(this)}>文理院校排名</a></li>
                            </ul>
                        </div>
                        <div className={this.state.Area=="美国" && this.state.Type == "美国研究生院排名"?"college-filter-options":"college-filter-options college-filter-options-hide"} data-group="PlaceArea" id="collegeRank-Type-node-b collegeRank-Type-node-flag">
                            <div className="title">按专业：</div>
                            <ul className="college-filter-list">
                                <li className={this.state.USAZhuanyeDaLei=="商科" ? "active" : ""} data-value="-商科排名"><a className="nofollow" onClick={this.hangeUSAUSAZhuanyeDaLei.bind(this)}>商科</a></li>
                                <li className={this.state.USAZhuanyeDaLei=="教育学" ? "active" : ""} data-value="-教育学排名"><a className="nofollow" onClick={this.hangeUSAUSAZhuanyeDaLei.bind(this)}>教育学</a></li>
                                <li className={this.state.USAZhuanyeDaLei=="工程学" ? "active" : ""} data-value="-工程学排名"><a className="nofollow" onClick={this.hangeUSAUSAZhuanyeDaLei.bind(this)}>工程学</a></li>
                                <li className={this.state.USAZhuanyeDaLei=="法学" ? "active" : ""} data-value="-法学排名"><a className="nofollow" onClick={this.hangeUSAUSAZhuanyeDaLei.bind(this)}>法学</a></li>
                                <li className={this.state.USAZhuanyeDaLei=="医学" ? "active" : ""} data-value="-医学排名"><a className="nofollow" onClick={this.hangeUSAUSAZhuanyeDaLei.bind(this)}>医学</a></li>
                                <li className={this.state.USAZhuanyeDaLei=="科学" ? "active" : ""} data-value="-科学排名"><a className="nofollow" onClick={this.hangeUSAUSAZhuanyeDaLei.bind(this)}>科学</a></li>
                                <li className={this.state.USAZhuanyeDaLei=="图书馆与信息研究" ? "active" : ""} data-value="-图书馆与信息研究排名"><a className="nofollow" onClick={this.hangeUSAUSAZhuanyeDaLei.bind(this)}>图书馆与信息研究</a></li>
                                <li className={this.state.USAZhuanyeDaLei=="社会科学和人文科学" ? "active" : ""} data-value="-社会科学和人文科学排名"><a className="nofollow" onClick={this.hangeUSAUSAZhuanyeDaLei.bind(this)}>社会科学和人文科学</a></li>
                                <li className={this.state.USAZhuanyeDaLei=="医疗保健" ? "active" : ""} data-value="-医疗保健排名"><a className="nofollow" onClick={this.hangeUSAUSAZhuanyeDaLei.bind(this)}>医疗保健</a></li>
                                <li className={this.state.USAZhuanyeDaLei=="公共事务" ? "active" : ""} data-value="-公共事务排名"><a className="nofollow" onClick={this.hangeUSAUSAZhuanyeDaLei.bind(this)}>公共事务</a></li>
                                <li className={this.state.USAZhuanyeDaLei=="艺术类" ? "active" : ""} data-value="-艺术类排名"><a className="nofollow" onClick={this.hangeUSAUSAZhuanyeDaLei.bind(this)}>艺术类</a></li>
                                
                            </ul>
                        </div>
                        <div className={this.state.Area=="美国" && this.state.Type == "美国研究生院排名" && this.state.USAZhuanyeDaLei == "商科"?"college-filter-options":"college-filter-options college-filter-options-hide"} data-group="PlaceArea" id="collegeRank-Type-node-b collegeRank-Type-node-flag">
                            <div className="title">专业分类：</div>
                            <ul className="college-filter-list">
                                <li className={this.state.USAZhuanye=="会计学" ? "active" : ""} data-value="-商科排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>会计学</a></li>
                                <li className={this.state.USAZhuanye=="企业管理/创业学" ? "active" : ""} data-value="-商科排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>企业管理/创业学</a></li>
                                <li className={this.state.USAZhuanye=="高级工商管理硕士" ? "active" : ""} data-value="-商科排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>高级工商管理硕士</a></li>
                                <li className={this.state.USAZhuanye=="金融学" ? "active" : ""} data-value="-商科排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>金融学</a></li>
                                <li className={this.state.USAZhuanye=="信息系统管理学" ? "active" : ""} data-value="-商科排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>信息系统管理学</a></li>
                                <li className={this.state.USAZhuanye=="国际" ? "active" : ""} data-value="-商科排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>国际</a></li>
                                <li className={this.state.USAZhuanye=="管理学" ? "active" : ""} data-value="-商科排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>管理学</a></li>
                                <li className={this.state.USAZhuanye=="市场营销学" ? "active" : ""} data-value="-商科排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>市场营销学</a></li>
                                <li className={this.state.USAZhuanye=="非盈利" ? "active" : ""} data-value="-商科排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>非盈利</a></li>
                                <li className={this.state.USAZhuanye=="在职工商管理硕士" ? "active" : ""} data-value="-商科排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>在职工商管理硕士</a></li>
                                <li className={this.state.USAZhuanye=="生产/运营学" ? "active" : ""} data-value="-商科排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>生产/运营学</a></li>
                                <li className={this.state.USAZhuanye=="供应链/物流学" ? "active" : ""} data-value="-商科排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>供应链/物流学</a></li>
                            </ul>
                        </div>
                        <div className={this.state.Area=="美国" && this.state.Type == "美国研究生院排名" && this.state.USAZhuanyeDaLei == "教育学"?"college-filter-options":"college-filter-options college-filter-options-hide"} data-group="PlaceArea" id="collegeRank-Type-node-b">
                            <div className="title">专业分类：</div>
                            <ul className="college-filter-list">
                                <li className={this.state.USAZhuanye=="课程与导论" ? "active" : ""} data-value="-教育学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>课程与导论</a></li>
                                <li className={this.state.USAZhuanye=="教育管理和监管学" ? "active" : ""} data-value="-教育学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>教育管理和监管学</a></li>
                                <li className={this.state.USAZhuanye=="教育政策学" ? "active" : ""} data-value="-教育学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>教育政策学</a></li>
                                <li className={this.state.USAZhuanye=="教育心理学" ? "active" : ""} data-value="-教育学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>教育心理学</a></li>
                                <li className={this.state.USAZhuanye=="初级师范教育学" ? "active" : ""} data-value="-教育学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>初级师范教育学</a></li>
                                <li className={this.state.USAZhuanye=="高等教育管理学" ? "active" : ""} data-value="-教育学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>高等教育管理学</a></li>
                                <li className={this.state.USAZhuanye=="中级师范教育学" ? "active" : ""} data-value="-教育学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>中级师范教育学</a></li>
                                <li className={this.state.USAZhuanye=="特殊教育学" ? "active" : ""} data-value="-教育学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>特殊教育学</a></li>
                                <li className={this.state.USAZhuanye=="学生咨询和个人服务学" ? "active" : ""} data-value="-教育学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>学生咨询和个人服务学</a></li>
                                <li className={this.state.USAZhuanye=="技术与职业教育" ? "active" : ""} data-value="-教育学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>技术与职业教育</a></li>
                            </ul>
                        </div>
                        <div className={this.state.Area=="美国" && this.state.Type == "美国研究生院排名" && this.state.USAZhuanyeDaLei == "工程学"?"college-filter-options":"college-filter-options college-filter-options-hide"} data-group="PlaceArea" id="collegeRank-Type-node-b">
                            <div className="title">专业分类：</div>
                            <ul className="college-filter-list">
                                <li className={this.state.USAZhuanye=="宇宙空间/航空/太空航行学" ? "active" : ""} data-value="-工程学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>宇宙空间/航空/太空航行学</a></li>
                                <li className={this.state.USAZhuanye=="生物/农业学" ? "active" : ""} data-value="-工程学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>生物/农业学</a></li>
                                <li className={this.state.USAZhuanye=="生物医学/生物工程学" ? "active" : ""} data-value="生物物工程学"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>生物医学/生物工程学</a></li>
                                <li className={this.state.USAZhuanye=="化工" ? "active" : ""} data-value="-工程学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>化工</a></li>
                                <li className={this.state.USAZhuanye=="城市学" ? "active" : ""} data-value="-工程学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>城市学</a></li>
                                <li className={this.state.USAZhuanye=="计算机学" ? "active" : ""} data-value="-工程学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>计算机学</a></li>
                                <li className={this.state.USAZhuanye=="电学/电子学/通信工程学" ? "active" : ""} data-value="-工程学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>电学/电子学/通信工程学</a></li>
                                <li className={this.state.USAZhuanye=="环境学/环境健康学" ? "active" : ""} data-value="-工程学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>环境学/环境健康学</a></li>
                                <li className={this.state.USAZhuanye=="工业学/制造学/系统学" ? "active" : ""} data-value="-工程学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>工业学/制造学/系统学</a></li>
                                <li className={this.state.USAZhuanye=="材料" ? "active" : ""} data-value="-工程学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>材料</a></li>
                                <li className={this.state.USAZhuanye=="机械学" ? "active" : ""} data-value="-工程学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>机械学</a></li>
                                <li className={this.state.USAZhuanye=="原子能学" ? "active" : ""} data-value="-工程学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>原子能学</a></li>
                            </ul>
                        </div>
                        <div className={this.state.Area=="美国" && this.state.Type == "美国研究生院排名" && this.state.USAZhuanyeDaLei == "法学"?"college-filter-options":"college-filter-options college-filter-options-hide"} data-group="PlaceArea" id="collegeRank-Type-node-b">
                            <div className="title">专业分类：</div>
                            <ul className="college-filter-list">
                                <li className={this.state.USAZhuanye=="临床训练学" ? "active" : ""} data-value="-法学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>临床训练学</a></li>
                                <li className={this.state.USAZhuanye=="纠纷解决机制学" ? "active" : ""} data-value="-法学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>纠纷解决机制学</a></li>
                                <li className={this.state.USAZhuanye=="环境学" ? "active" : ""} data-value="-法学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>环境学</a></li>
                                <li className={this.state.USAZhuanye=="卫生保健法" ? "active" : ""} data-value="-法学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>卫生保健法</a></li>
                                <li className={this.state.USAZhuanye=="知识产权法" ? "active" : ""} data-value="-法学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>知识产权法</a></li>
                                <li className={this.state.USAZhuanye=="国际法" ? "active" : ""} data-value="-法学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>国际法</a></li>
                                <li className={this.state.USAZhuanye=="法律文书写作" ? "active" : ""} data-value="-法学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>法律文书写作</a></li>
                                <li className={this.state.USAZhuanye=="在职法学" ? "active" : ""} data-value="-法学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>在职法学</a></li>
                                <li className={this.state.USAZhuanye=="税法学" ? "active" : ""} data-value="-法学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>税法学</a></li>
                                <li className={this.state.USAZhuanye=="辩护学" ? "active" : ""} data-value="-法学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>辩护学</a></li>
                            </ul>
                        </div>
                        <div className={this.state.Area=="美国" && this.state.Type == "美国研究生院排名" && this.state.USAZhuanyeDaLei == "医学"?"college-filter-options":"college-filter-options college-filter-options-hide"} data-group="PlaceArea" id="collegeRank-Type-node-b">
                            <div className="title">专业分类：</div>
                            <ul className="college-filter-list">
                                <li className={this.state.USAZhuanye=="艾滋病学" ? "active" : ""} data-value="-医学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>艾滋病学</a></li>
                                <li className={this.state.USAZhuanye=="药品与酒精滥用" ? "active" : ""} data-value="-医学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>药品与酒精滥用</a></li>
                                <li className={this.state.USAZhuanye=="家用医学" ? "active" : ""} data-value="-医学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>家用医学</a></li>
                                <li className={this.state.USAZhuanye=="老年医学" ? "active" : ""} data-value="-医学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>老年医学</a></li>
                                <li className={this.state.USAZhuanye=="内科医学" ? "active" : ""} data-value="-医学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>内科医学</a></li>
                                <li className={this.state.USAZhuanye=="小儿科" ? "active" : ""} data-value="-医学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>小儿科</a></li>
                                <li className={this.state.USAZhuanye=="乡土医学" ? "active" : ""} data-value="-医学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>乡土医学</a></li>
                                <li className={this.state.USAZhuanye=="女性健康" ? "active" : ""} data-value="-医学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>女性健康</a></li>
                                <li className={this.state.USAZhuanye=="生物科学" ? "active" : ""} data-value="-医学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>生物科学</a></li>
                            </ul>
                        </div>
                        <div className={this.state.Area=="美国" && this.state.Type == "美国研究生院排名" && this.state.USAZhuanyeDaLei == "科学"?"college-filter-options":"college-filter-options college-filter-options-hide"} data-group="PlaceArea" id="collegeRank-Type-node-b">
                            <div className="title">专业分类：</div>
                            <ul className="college-filter-list">
                                <li className={this.state.USAZhuanye=="化学" ? "active" : ""} data-value="-科学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>化学</a></li>
                                <li className={this.state.USAZhuanye=="计算机科学" ? "active" : ""} data-value="-科学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>计算机科学</a></li>
                                <li className={this.state.USAZhuanye=="地球科学" ? "active" : ""} data-value="-科学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>地球科学</a></li>
                                <li className={this.state.USAZhuanye=="数学" ? "active" : ""} data-value="-科学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>数学</a></li>
                                <li className={this.state.USAZhuanye=="物理学" ? "active" : ""} data-value="-科学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>物理学</a></li>
                                <li className={this.state.USAZhuanye=="统计学" ? "active" : ""} data-value="-科学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>统计学</a></li>
                            </ul>
                        </div>
                        <div className={this.state.Area=="美国" && this.state.Type == "美国研究生院排名" && this.state.USAZhuanyeDaLei == "图书馆与信息研究"?"college-filter-options":"college-filter-options college-filter-options-hide"} data-group="PlaceArea" id="collegeRank-Type-node-b">
                            <div className="title">专业分类：</div>
                            <ul className="college-filter-list">
                                <li className={this.state.USAZhuanye=="档案保存" ? "active" : ""} data-value="-图书馆与信息研究排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>档案保存</a></li>
                                <li className={this.state.USAZhuanye=="数字图书馆" ? "active" : ""} data-value="-图书馆与信息研究排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>数字图书馆</a></li>
                                <li className={this.state.USAZhuanye=="卫生事业" ? "active" : ""} data-value="-图书馆与信息研究排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>卫生事业</a></li>
                                <li className={this.state.USAZhuanye=="法律图书馆" ? "active" : ""} data-value="-图书馆与信息研究排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>法律图书馆</a></li>
                                <li className={this.state.USAZhuanye=="学校图书馆媒体" ? "active" : ""} data-value="-图书馆与信息研究排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>学校图书馆媒体</a></li>
                                <li className={this.state.USAZhuanye=="儿童及青少年服务" ? "active" : ""} data-value="-图书馆与信息研究排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>儿童及青少年服务</a></li>
                            </ul>
                        </div>
                        <div className={this.state.Area=="美国" && this.state.Type == "美国研究生院排名" && this.state.USAZhuanyeDaLei == "社会科学和人文科学"?"college-filter-options":"college-filter-options college-filter-options-hide"} data-group="PlaceArea" id="collegeRank-Type-node-b">
                            <div className="title">专业分类：</div>
                            <ul className="college-filter-list">
                                <li className={this.state.USAZhuanye=="社会学" ? "active" : ""} data-value="-社会科学和人文科学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>社会学</a></li>
                                <li className={this.state.USAZhuanye=="经济学" ? "active" : ""} data-value="-社会科学和人文科学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>经济学</a></li>
                                <li className={this.state.USAZhuanye=="英语" ? "active" : ""} data-value="-社会科学和人文科学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>英语</a></li>
                                <li className={this.state.USAZhuanye=="历史学" ? "active" : ""} data-value="-社会科学和人文科学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>历史学</a></li>
                                <li className={this.state.USAZhuanye=="政治学" ? "active" : ""} data-value="-社会科学和人文科学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>政治学</a></li>
                                <li className={this.state.USAZhuanye=="心理学" ? "active" : ""} data-value="-社会科学和人文科学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>心理学</a></li>
                                <li className={this.state.USAZhuanye=="犯罪学" ? "active" : ""} data-value="-社会科学和人文科学排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>犯罪学</a></li>
                            </ul>
                        </div>
                        <div className={this.state.Area=="美国" && this.state.Type == "美国研究生院排名" && this.state.USAZhuanyeDaLei == "医疗保健"?"college-filter-options":"college-filter-options college-filter-options-hide"} data-group="PlaceArea" id="collegeRank-Type-node-b">
                            <div className="title">专业分类：</div>
                            <ul className="college-filter-list">
                                <li className={this.state.USAZhuanye=="听力学" ? "active" : ""} data-value="-医疗保健排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>听力学</a></li>
                                <li className={this.state.USAZhuanye=="临床心理学" ? "active" : ""} data-value="-医疗保健排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>临床心理学</a></li>
                                <li className={this.state.USAZhuanye=="医疗保健管理" ? "active" : ""} data-value="-医疗保健排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>医疗保健管理</a></li>
                                <li className={this.state.USAZhuanye=="护理" ? "active" : ""} data-value="-医疗保健排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>护理</a></li>
                                <li className={this.state.USAZhuanye=="麻醉护理" ? "active" : ""} data-value="-医疗保健排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>麻醉护理</a></li>
                                <li className={this.state.USAZhuanye=="助产护理" ? "active" : ""} data-value="-医疗保健排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>助产护理</a></li>
                                <li className={this.state.USAZhuanye=="职业治疗法" ? "active" : ""} data-value="-医疗保健排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>职业治疗法</a></li>
                                <li className={this.state.USAZhuanye=="药学" ? "active" : ""} data-value="-医疗保健排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>药学</a></li>
                                <li className={this.state.USAZhuanye=="理疗" ? "active" : ""} data-value="-医疗保健排名排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>理疗</a></li>
                                <li className={this.state.USAZhuanye=="医师助理" ? "active" : ""} data-value="-医疗保健排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>医师助理</a></li>
                                <li className={this.state.USAZhuanye=="公共卫生" ? "active" : ""} data-value="-医疗保健排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>公共卫生</a></li>
                                <li className={this.state.USAZhuanye=="康复咨询" ? "active" : ""} data-value="-医疗保健排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>康复咨询</a></li>
                                <li className={this.state.USAZhuanye=="社会服务" ? "active" : ""} data-value="-医疗保健排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>社会服务</a></li>
                                <li className={this.state.USAZhuanye=="语音语言病理学" ? "active" : ""} data-value="-医疗保健排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>语音语言病理学</a></li>
                                <li className={this.state.USAZhuanye=="兽医" ? "active" : ""} data-value="-医疗保健排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>兽医</a></li>
                            </ul>
                        </div>
                        <div className={this.state.Area=="美国" && this.state.Type == "美国研究生院排名" && this.state.USAZhuanyeDaLei == "公共事务"?"college-filter-options":"college-filter-options college-filter-options-hide"} data-group="PlaceArea" id="collegeRank-Type-node-b">
                            <div className="title">专业分类：</div>
                            <ul className="college-filter-list">
                                <li className={this.state.USAZhuanye=="城市管理与城市政策" ? "active" : ""} data-value="-公共事务排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>城市管理与城市政策</a></li>
                                <li className={this.state.USAZhuanye=="环境政策与管理" ? "active" : ""} data-value="-公共事务排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>环境政策与管理</a></li>
                                <li className={this.state.USAZhuanye=="卫生政策与管理" ? "active" : ""} data-value="-公共事务排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>卫生政策与管理</a></li>
                                <li className={this.state.USAZhuanye=="信息技术管理" ? "active" : ""} data-value="-公共事务排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>信息技术管理</a></li>
                                <li className={this.state.USAZhuanye=="非营利组织管理" ? "active" : ""} data-value="-公共事务排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>非营利组织管理</a></li>
                                <li className={this.state.USAZhuanye=="公共财政与预算" ? "active" : ""} data-value="-公共事务排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>公共财政与预算</a></li>
                                <li className={this.state.USAZhuanye=="公共管理学" ? "active" : ""} data-value="-公共事务排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>公共管理学</a></li>
                                <li className={this.state.USAZhuanye=="公共政策分析" ? "active" : ""} data-value="-公共事务排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>公共政策分析</a></li>
                                <li className={this.state.USAZhuanye=="社会政策" ? "active" : ""} data-value="-公共事务排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>社会政策</a></li>
                            </ul>
                        </div>
                        <div className={this.state.Area=="美国" && this.state.Type == "美国研究生院排名" && this.state.USAZhuanyeDaLei == "艺术类"?"college-filter-options":"college-filter-options college-filter-options-hide"} data-group="PlaceArea" id="collegeRank-Type-node-b">
                            <div className="title">专业分类：</div>
                            <ul className="college-filter-list">
                                <li className={this.state.USAZhuanye=="陶器制造" ? "active" : ""} data-value="-艺术类排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>陶器制造</a></li>
                                <li className={this.state.USAZhuanye=="平面造型设计" ? "active" : ""} data-value="-艺术类排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>平面造型设计</a></li>
                                <li className={this.state.USAZhuanye=="工业设计" ? "active" : ""} data-value="-艺术类排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>工业设计</a></li>
                                <li className={this.state.USAZhuanye=="室内设计" ? "active" : ""} data-value="-艺术类排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>室内设计</a></li>
                                <li className={this.state.USAZhuanye=="多媒体视频通信" ? "active" : ""} data-value="-艺术类排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>多媒体视频通信</a></li>
                                <li className={this.state.USAZhuanye=="美术" ? "active" : ""} data-value="-艺术类排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>美术</a></li>
                                <li className={this.state.USAZhuanye=="摄影" ? "active" : ""} data-value="-艺术类排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>摄影</a></li>
                                <li className={this.state.USAZhuanye=="版画" ? "active" : ""} data-value="-艺术类排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>版画</a></li>
                                <li className={this.state.USAZhuanye=="雕刻" ? "active" : ""} data-value="-艺术类排名"><a className="nofollow" onClick={this.hangeUSAZhuanye.bind(this)}>雕刻</a></li>
                            </ul>
                        </div>
                        <div className={this.state.Area=="美国" && this.state.Type == "世界大学排名"?"college-filter-options":"college-filter-options college-filter-options-hide"} data-group="PlaceArea" id="collegeRank-Type-usa-world-school">
                            <div className="title">按学校：</div>
                            <ul className="college-filter-list">
                                <li className={this.state.USASchool=="2013-2014泰晤士世界大学排名" ? "active" : ""} data-value="2013-2014泰晤士世界大学排名"><a className="nofollow" onClick={this.hangeUSASchool.bind(this)}>2013-2014泰晤士世界大学排名</a></li>
                                <li className={this.state.USASchool=="2013上海交大世界大学排名" ? "active" : ""}  data-value="2013上海交大世界大学排名"><a className="nofollow" onClick={this.hangeUSASchool.bind(this)}>2013上海交大世界大学排名</a></li>
                                <li className={this.state.USASchool=="2013-2014QS世界大学排名" ? "active" : ""}  data-value="2013-2014QS世界大学排名"><a className="nofollow" onClick={this.hangeUSASchool.bind(this)}>2013-2014QS世界大学排名</a></li>
                                <li className={this.state.USASchool=="2013金融时报全球MBA排名" ? "active" : ""}  data-value="2013金融时报全球MBA排名"><a className="nofollow" onClick={this.hangeUSASchool.bind(this)}>2013金融时报全球MBA排名</a></li>
                            </ul>
                        </div>
                        <div className={this.state.Type == "综合排名" && this.state.Area=="英国" ? "college-filter-options":"college-filter-options college-filter-options-hide"} data-group="SchoolType" id="collegeRank-PaiMing-node" >
                            <div className="title">按品牌：</div>
                            <ul className="college-filter-list">
                                <li className={this.state.PingPai=="TIMES" ? "active" : ""} data-value="TIMES"><a className="nofollow" onClick={this.changeSchoolType.bind(this)}>TIMES</a></li>
                                <li className={this.state.PingPai=="GUARDIAN" ? "active" : ""} data-value="GUARDIAN"><a className="nofollow" onClick={this.changeSchoolType.bind(this)}>GUARDIAN</a></li>
                                <li className={this.state.PingPai=="WORLD-TIMES" ? "active" : ""} data-value="WORLD-TIMES"><a className="nofollow" onClick={this.changeSchoolType.bind(this)}>WORLD-TIMES</a></li>
                                <li className={this.state.PingPai=="CUG" ? "active" : ""} data-value="CUG"><a className="nofollow" onClick={this.changeSchoolType.bind(this)}>CUG</a></li>
                                <li className={this.state.PingPai=="USNEWS" ? "active" : ""} data-value="USNEWS"><a className="nofollow" onClick={this.changeSchoolType.bind(this)}>USNEWS</a></li>
                                <li className={this.state.PingPai=="A-LEVEL" ? "active" : ""} data-value="A-LEVEL"><a className="nofollow" onClick={this.changeSchoolType.bind(this)}>A-LEVEL</a></li>
                                <li className={this.state.PingPai=="QS" ? "active" : ""} data-value="QS"><a className="nofollow" onClick={this.changeSchoolType.bind(this)}>QS</a></li>
                                <li className={this.state.PingPai=="CWUR" ? "active" : ""} data-value="CWUR"><a className="nofollow" onClick={this.changeSchoolType.bind(this)}>CWUR</a></li>
                                <li className={this.state.PingPai=="ARWU" ? "active" : ""} data-value="ARWU"><a className="nofollow" onClick={this.changeSchoolType.bind(this)}>ARWU</a></li>
                            </ul>
                        </div>
                        <div  className={this.state.Type == "专业排名" && this.state.Area=="英国"? "college-filter-options":"college-filter-options college-filter-options-hide"} data-group="SchoolType" id="collegeRank-PinPai-node" >
                            <div className="title">按品牌：</div>
                            <ul className="college-filter-list">
                                <li className={this.state.PingPai=="TIMES" ? "active" : ""} data-value="TIMES"><a className="nofollow" onClick={this.changeSchoolType.bind(this)}>TIMES</a></li>
                                <li className={this.state.PingPai=="GUARDIAN" ? "active" : ""} data-value="GUARDIAN"><a className="nofollow" onClick={this.changeSchoolType.bind(this)}>GUARDIAN</a></li>
                                <li className={this.state.PingPai=="CUG" ? "active" : ""} data-value="CUG"><a className="nofollow" onClick={this.changeSchoolType.bind(this)}>CUG</a></li>
                                <li className={this.state.PingPai=="QS" ? "active" : ""} data-value="QS"><a className="nofollow" onClick={this.changeSchoolType.bind(this)}>QS</a></li>
                                <li className={this.state.PingPai=="RAE" ? "active" : ""} data-value="RAE"><a className="nofollow" onClick={this.changeSchoolType.bind(this)}>RAE</a></li>
                                <li className={this.state.PingPai=="REF" ? "active" : ""} data-value="REF"><a className="nofollow" onClick={this.changeSchoolType.bind(this)}>REF</a></li>
                            </ul>
                        </div>
                        <div className={this.state.Area=="英国"?"college-filter-options":"college-filter-options college-filter-options-hide"}  data-group="Year" id="collegeRank-Year-node"></div>
                        <div className={this.state.Area=="英国"?"college-filter-options":"college-filter-options college-filter-options-hide"}  data-group="ZhuanYe" id="collegeRank-ZhuanYe-node"></div>
                    </div>
                    <div id="nodeMiddleContent"></div>
                    <div className="schIntro">
                        <div className="title">
                            <font id="year_Var">{this.state.Area=="英国"?this.state.Year:""}</font>
                            <font className="orange" id="pinPai_Var">{this.state.Area=="英国"?this.state.PingPai:""}</font>{this.state.Area=="英国"?this.state.Area:''}
                            <font id="type_Var">{this.state.Type}</font>
                        </div>
                        
                        <div className="clear"></div>
                    </div>
                    <div id="div_rank">

                    </div>
                    <div className="pageingDiv" id="page"></div>
                    <div className="clear"></div>
                </div>
            </section>
        );
    }
    componentDidMount(){


        var url = window.location.href;

        url = url.substr(url.indexOf('/CollegeRank-') + ('/CollegeRank-').length);

        var arr = [];
        
        var aREA = decodeURI(url.split('-')[0]);

        var dalei = decodeURI(url.split('-')[1]);

        var xiaolei = decodeURI(url.split('-')[2]);

        if(aREA == "UK" || aREA == "USA"){

            if(aREA == "USA"){

                if( dalei+"" == "undefined"){

                     this.state.Area = "美国";

                    this.setState({Area:"美国"});

                    var dalei_Var = dalei.substr(0,dalei.length-2);

                    this.state.Type = "美国大学本科排名";

                    this.setState({Type:"美国大学本科排名"});

                    this.state.USASchool ="国家级大学排名";

                    this.state.USAZhuanye ="国家级大学排名";

                    this.setState({USAZhuanye:"国家级大学排名"});

                    this.GetTableData(this.state.USAZhuanye);

                }else if( xiaolei+"" == "undefined"){

                        this.state.Area = "美国";

                        this.setState({Area:"美国"});

                        this.state.Type = "美国研究生院排名";

                        this.setState({Type:"美国研究生院排名"});

                        this.state.flag = "-商科排名"; 

                        this.state.USAZhuanye=="会计学"

                        this.setState({USAZhuanye:"会计学"});

                        this.GetTableData("会计学");


                }else{

                    this.state.Area = "美国";

                    this.setState({Area:"美国"});

                    var dalei_Var = dalei.substr(0,dalei.length-2);

                    this.state.flag = "-"+dalei; 

                    this.state.USAZhuanye = xiaolei;

                    this.state.Type = "美国研究生院排名";

                    this.state.USAZhuanyeDaLei = "图书馆与信息研究";

                    this.setState({Type:"美国研究生院排名"});

                    this.setState({USAZhuanyeDaLei:dalei_Var});

                    this.GetTableData(this.state.USAZhuanye);
                }

            }else if(aREA == "UK"){
                 if( dalei+"" == "undefined"){
                    
                    this.state.Area = "英国";
                    this.setState({Area:"英国"});
                    this.state.Type = "综合排名";
                    this.state.PingPai = "TIMES";
                    this.state.ZhuanYe=dalei;
                   

                    this.state.Year = "2015";
                    this.setState({Year:"2015"});
                    this.GetYear();
                    this.GetZhuanYe();
                    let UKstate = this.state;               
                    CollegeRankFunction(UKstate);


                    //this.GetTableData();

                }else{

                    this.state.Area = "英国";
                    this.setState({Area:"英国"});
                    this.state.Type = "专业排名";
                    this.state.PingPai = "TIMES";
                    this.state.ZhuanYe=dalei;
                   

                    this.state.Year = "2014";
                    this.setState({Year:"2014"});
                    this.GetYear();
                    this.GetZhuanYe();
                    let UKstate = this.state;               
                    CollegeRankFunction(UKstate);


                    this.GetTableData();
                }
            }

            
            
        }else{
            
            this.state.Type = "综合排名";
            this.state.PingPai = "TIMES";
            this.setState({Area:"英国"});
            this.GetYear();       
            this.GetZhuanYe();

            let UKstate = this.state;         

            CollegeRankFunction(UKstate);

            //this.GetTableData();
        }

    }

    fenYe(tot){

        var t_Var = tot;

        //var Pagination = antd.Pagination;

        React.render(<Pagination  showSizeChanger={true} selectComponentClass={Select} current={this.state.currentPage} showQuickJumper={true}  onChange={this.onChangePage.bind(this)} total={t_Var} pageSize={20}/>,document.getElementById("page"));
    }
    onChangePage(page) {


        var ele;

        if(this.state.Type == "美国研究生院排名"){           
            ele = this.state.USAZhuanye;
        }else{

            ele = this.state.USASchool;
        }
        this.GetTableData(ele,page);
        this.setState({
            currentPage:page
        });

    }

}

export default CollegeRank;
