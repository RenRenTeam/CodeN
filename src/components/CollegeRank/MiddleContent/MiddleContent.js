/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';



class MiddleContent extends React.Component{
    
    render() {

        var area_Var = this.props.area;

        var type_Var = this.props.type;

        var leiXing = this.props.leiXing;

        var contnet;

        var imgSrc;
        

        if(area_Var == "英国" && type_Var == "TIMES" && leiXing == "综合排名"){

            imgSrc = "http://passport.shenyuan.org/WebResources/Default/images/collegeRank/zonghe/TIMES.jpg";

            contnet = "自2004年11月以来，《泰晤士高等教育》与国际高等教育研究机构——QS合作，在每年的秋季公布世界大学排名。《泰晤士高等教育》自2010年改为与加拿大汤森路透集团（Thomson Reuters，即路透社）合作，并在以往排名标准的基础上继续完善，推出了THE（Times Higher Education）World University Rankings《泰晤士高等教育》全球大学排名。排名主要依据经济活动与创新（如获得产业界研究经费指数），国际化程度（如国际学生与当地学生比例），制度化指标（如学校师资），研究指标。新标准主要包括教学能力（Teaching，占30%）、研究能力（Research，占30%）、论文引用（Citation，占32.5%）、商业融资（Industry Income，占2.5%）和国际化程度（International mix，占5%）5个大项和13个细分标准。新标准将重点放在大学的研究、教学品质及知识转移。";
        
        }else if(area_Var == "英国" && type_Var == "GUARDIAN" && leiXing == "综合排名"){

            imgSrc = "http://passport.shenyuan.org/WebResources/Default/images/collegeRank/zonghe/GUARDIAN.jpg";

            contnet = "《卫报》（The Guardian）建立了独特的大学 排名评估方法，与其他一些排名榜有所区别。《卫报》的排名榜是按照全国学生普查（National Student Survey，NSS）对即将毕业的本科生所作的调查的结果计分的，主要按照学生对有关大学的教学等方面的评价打分，从某种程度上而言具有相对的客观性。《卫报》排名榜的主要目的是协助打算上大学本科的学生挑选科目，因此该排名清楚的显示了学生与教职员的素质以及大学研究与教学的水平。《卫报》的排名榜也详细列出各大学不同科目的排名。";
        
        }else if(area_Var == "英国" && type_Var == "WORLD-TIMES" && leiXing == "综合排名"){
            
            imgSrc = "http://passport.shenyuan.org/WebResources/Default/images/collegeRank/zonghe/WORLD-TIMES.jpg";

            contnet = "THE世界大学排名是由英国泰晤士高等教育（Times Higher Education）参照汤姆森路透社（Thomson Reuters）数据库，独立设定指标排列发布的年度前500名世界大学排名榜。1971年之前，英国泰晤士高等教育增刊（Times Higher Education）是属于英国泰晤士报（The times）的一部分，2005年，英国泰晤士报（The times）老板鲁伯特·默多克将TSL Education（包括本增刊）以2.35亿英镑的价格出售给一家私募基金公司。英国泰晤士高等教育（Times Higher Education）是独立于英国泰晤士报（The times）的一家刊物。";
        
        }else if(area_Var == "英国" && type_Var == "CUG" && leiXing == "综合排名"){
            
            imgSrc = "http://passport.shenyuan.org/WebResources/Default/images/collegeRank/zonghe/CUG.jpg";
                        
            contnet = "《完全大学指南》(Complete Universi ty Guide) 英国大学排名由著名的英国报社《独立报》(Independent)参与制订，首次发表于2007年，该排名的所有数据来源于英国高等教育统计署，《完全大学指南》2010年的英国大学排名基于以下九个指标：学生满意度、研究质量、入学标准、师生比例、学术服务开支、学校设施开支、优等学位比例、毕业率和就业率。此外，《完全大学指南》还对英国大学按照不同的专业进行排名。";
        
        }else if(area_Var == "英国" && type_Var == "USNEWS" && leiXing == "综合排名"){
            
            imgSrc = "http://passport.shenyuan.org/WebResources/Default/images/collegeRank/zonghe/USNEWS.jpg";
                        
            contnet = "《美国新闻与世界报道》(U.S.News & Wor ld Report)1983年开始对美国大学及其院系进行排名，1985年以后每年更新一次，该排名具有较高的知名度。此排行榜的依据主要分为两个部分:一是各大学或学院自己提供的具体资料数据；二是来自校外教授或行政人员的“声誉”调查。第一部分的数据包括6年内毕业率和1年后转学率、录取新生的要求、教学条件、用于每个学生的支出、预计和实际学生毕业比例、校友捐赠；第二部分是大学同行评审调查，对象是校长、教务长、招生部门主管等。该排行榜一直是美国学生、家长和中学教师最重要的一本升学参考读物，也是中国学生留美选校的最主要指标。虽然一些大学对此排名有不同看法，但其影响力至今不减。";
        
        }else if(area_Var == "英国" && type_Var == "A-LEVEL" && leiXing == "综合排名"){
            
            imgSrc = "http://passport.shenyuan.org/WebResources/Default/images/collegeRank/zonghe/A-LEVEL.jpg";
                                    
            contnet = "英国高中课程（General Certificate of Education Advanced Level ）简称A-Level课程，它是英国的普通中等教育证书考试高级水平课程，是英国的全民课程体系，也是英国学生的大学入学考试课程，就像我国的高考一样，A-Level课程证书被几乎所有英语授课的大学作为招收新生的入学标准。 在中国开设A-Level课程旨在为中国学生提供进入国外大学的有效途径，具体目标为：培养在国内初高中成绩优秀的学生进入世界顶尖大学；培养在国内初高中成绩中等的学生进入世界一流大学；培养在国内初高中成绩一般的学生考取适合自己的大学。";
        
        }else if(area_Var == "英国" && type_Var == "MACLEAN-DOCTOR" && leiXing == "综合排名"){

            imgSrc = "http://passport.shenyuan.org/WebResources/Default/images/collegeRank/zonghe/MACLEAN-DOCTOR.jpg";
                                    
            contnet = "一年一度的Maclean's大学排行榜是加拿大唯一的一份大学排行榜单。该杂志于1991年加拿大大学进行排名，至今已经举办了18届。麦克林排名是将所有大学分成三个类别——分别是“医学院和博士类大学”，“综合性大学”，和“基础类大学”。其中基础类大学重点在本科教育，并有比较少的研究生项目。综合类大学拥有大量研究项目和广泛的本科和研究生水平的课程。医博类大学都拥有广泛的博士项目，并且都有医学院。因此三大类主要是根据大学课程设置而划分的。三个类别之间并无优劣之分。评价体系中共针对六大指标进行评比，分别是学生情况和班级数量，师资力量，研究经费和运行预算，学生奖学金和学生服务占预算比例，图书馆的规模和藏书量和学校声誉。";
        
        }else if(area_Var == "英国" && type_Var == "MACLEAN" && leiXing == "综合排名"){
            
            imgSrc = "http://passport.shenyuan.org/WebResources/Default/images/collegeRank/zonghe/MACLEAN-DOCTOR.jpg";
                                    
            contnet = "一年一度的Maclean's大学排行榜是加拿大唯一的一份大学排行榜单。该杂志于1991年加拿大大学进行排名，至今已经举办了18届。麦克林排名是将所有大学分成三个类别——分别是“医学院和博士类大学”，“综合性大学”，和“基础类大学”。其中基础类大学重点在本科教育，并有比较少的研究生项目。综合类大学拥有大量研究项目和广泛的本科和研究生水平的课程。医博类大学都拥有广泛的博士项目，并且都有医学院。因此三大类主要是根据大学课程设置而划分的。三个类别之间并无优劣之分。评价体系中共针对六大指标进行评比，分别是学生情况和班级数量，师资力量，研究经费和运行预算，学生奖学金和学生服务占预算比例，图书馆的规模和藏书量和学校声誉。";
        
        }else if(area_Var == "英国" && type_Var == "MACLEAN-BASIC" && leiXing == "综合排名"){
            
            imgSrc = "http://passport.shenyuan.org/WebResources/Default/images/collegeRank/zonghe/MACLEAN-DOCTOR.jpg";
                                    
            contnet = "一年一度的Maclean's大学排行榜是加拿大唯一的一份大学排行榜单。该杂志于1991年加拿大大学进行排名，至今已经举办了18届。麦克林排名是将所有大学分成三个类别——分别是“医学院和博士类大学”，“综合性大学”，和“基础类大学”。其中基础类大学重点在本科教育，并有比较少的研究生项目。综合类大学拥有大量研究项目和广泛的本科和研究生水平的课程。医博类大学都拥有广泛的博士项目，并且都有医学院。因此三大类主要是根据大学课程设置而划分的。三个类别之间并无优劣之分。评价体系中共针对六大指标进行评比，分别是学生情况和班级数量，师资力量，研究经费和运行预算，学生奖学金和学生服务占预算比例，图书馆的规模和藏书量和学校声誉。";
        
        }else if(area_Var == "英国" && type_Var == "QS" && leiXing == "综合排名"){
            
            imgSrc = "http://passport.shenyuan.org/WebResources/Default/images/collegeRank/zonghe/QS.jpg";
                                    
            contnet = "QS世界大学排名（英文：QS World University Rankings；简称 QS rankings），是由教育组织Quacquarelli Symonds（QS）所发表的年度世界大学排名。排名包括主要的世界大学综合排名及学科排名。另外，QS还推出了两个独立的地区性排名，即《QS亚洲大学排名》及《QS拉丁美洲大学排名》，而这两个地区排名的准则在某些方面都与原本主要的世界大学排名有所不同。QS一开始是和泰晤士高等教育组织合作，两者在2004年起每年都联合发表泰晤士高等教育-QS世界大学排名。后来两者解散，至2010年开始推出各自的排名。QS世界大学排名继续采用固有的排名准则，并与《美国新闻与世界报道》等传媒机构合作推出世界排名。";
        
        }else if(area_Var == "英国" && type_Var == "CWUR" && leiXing == "综合排名"){
            
            imgSrc = "http://passport.shenyuan.org/WebResources/Default/images/collegeRank/zonghe/CWUR.jpg";
                                    
            contnet = "Center For World University Rankings(简称CWUR),全球大学排名。CWUR总部在沙特阿拉伯的Jeddah，CWUR自称排名是世界上唯一不依赖调查和各大学提供数据，而是通过教学质量、毕业生就业率以及教师素质在内的8个指标评定出每年世界上最好的1000个大学排行榜。";
        
        }else if(area_Var == "英国" && type_Var == "ARWU" && leiXing == "综合排名"){
            
            imgSrc = "http://passport.shenyuan.org/WebResources/Default/images/collegeRank/zonghe/ARWU.jpg";
                                    
            contnet = "上海交通大学“世界大学学术排名”是全球第一个发布的世界大学排名，被国际权威机构和著名专家公认为世界上最为科学、最为权威和最为广泛采用的世界大学排名。该排名列出了世界大学500强；还排列出五大领域和五大学科世界大学100强。上海交通大学把世界大学500强中排名在1-20名的大学定义为世界顶尖大学；排在21-100名的大学定义为世界一流大学。本排名的最初目的是分析中国大学在世界大学体系中的位置，找出与世界一流大学的差距，加快中国世界一流大学建设的进程。目前上海交通大学世界大学排名已经成为众多国际机构、各国政府、各国大学、国际学生和家长以及全世界雇主参考的最重要的世界大学排名。";
        
        }else if(area_Var == "英国" && type_Var == "TIMES" && leiXing == "专业排名"){
            
            imgSrc = "http://passport.shenyuan.org/WebResources/Default/images/collegeRank/zhuanye/TIMES.jpg";
            
            contnet = "自2004年11月以来，《泰晤士高等教育》与国际高等教育研究机构——QS合作，在每年的秋季公布世界大学排名。《泰晤士高等教育》自2010年改为与加拿大汤森路透集团（Thomson Reuters，即路透社）合作，并在以往排名标准的基础上继续完善，推出了THE（Times Higher Education）World University Rankings《泰晤士高等教育》全球大学排名。排名主要依据经济活动与创新（如获得产业界研究经费指数），国际化程度（如国际学生与当地学生比例），制度化指标（如学校师资），研究指标。新标准主要包括教学能力（Teaching，占30%）、研究能力（Research，占30%）、论文引用（Citation，占32.5%）、商业融资（Industry Income，占2.5%）和国际化程度（International mix，占5%）5个大项和13个细分标准。新标准将重点放在大学的研究、教学品质及知识转移。";
        
        }else if(area_Var == "英国" && type_Var == "GUARDIAN" && leiXing == "专业排名"){
            
            imgSrc = "http://passport.shenyuan.org/WebResources/Default/images/collegeRank/zhuanye/GUARDIAN.jpg";            
            
            contnet = "《卫报》（The Guardian）建立了独特的大学 排名评估方法，与其他一些排名榜有所区别。《卫报》的排名榜是按照全国学生普查（National Student Survey，NSS）对即将毕业的本科生所作的调查的结果计分的，主要按照学生对有关大学的教学等方面的评价打分，从某种程度上而言具有相对的客观性。《卫报》排名榜的主要目的是协助打算上大学本科的学生挑选科目，因此该排名清楚的显示了学生与教职员的素质以及大学研究与教学的水平。《卫报》的排名榜也详细列出各大学不同科目的排名。";
        
        }else if(area_Var == "英国" && type_Var == "CUG" && leiXing == "专业排名"){
            
            imgSrc = "http://passport.shenyuan.org/WebResources/Default/images/collegeRank/zhuanye/CUG.jpg";            
            
            contnet = "《完全大学指南》(Complete Universi ty Guide) 英国大学排名由著名的英国报社《独立报》(Independent)参与制订，首次发表于2007年，该排名的所有数据来源于英国高等教育统计署，《完全大学指南》2010年的英国大学排名基于以下九个指标：学生满意度、研究质量、入学标准、师生比例、学术服务开支、学校设施开支、优等学位比例、毕业率和就业率。此外，《完全大学指南》还对英国大学按照不同的专业进行排名。";
        
        }else if(area_Var == "英国" && type_Var == "QS" && leiXing == "专业排名"){
            
            imgSrc = "http://passport.shenyuan.org/WebResources/Default/images/collegeRank/zhuanye/QS.jpg";            
            
            contnet = "QS世界大学排名（英文：QS World University Rankings；简称 QS rankings），是由教育组织Quacquarelli Symonds（QS）所发表的年度世界大学排名。排名包括主要的世界大学综合排名及学科排名。另外，QS还推出了两个独立的地区性排名，即《QS亚洲大学排名》及《QS拉丁美洲大学排名》，而这两个地区排名的准则在某些方面都与原本主要的世界大学排名有所不同。QS一开始是和泰晤士高等教育组织合作，两者在2004年起每年都联合发表泰晤士高等教育-QS世界大学排名。后来两者解散，至2010年开始推出各自的排名。QS世界大学排名继续采用固有的排名准则，并与《美国新闻与世界报道》等传媒机构合作推出世界排名。";
        
        }else if(area_Var == "英国" && type_Var == "RAE" && leiXing == "专业排名"){
            
            imgSrc = "http://passport.shenyuan.org/WebResources/Default/images/collegeRank/zhuanye/RAE.jpg";            
            
            contnet = "英国大学最新研究评估考核（Research Assessment Exercise），简称RAE，是业界公认的、对申请英国大学硕士课程最具指导作用的英国大学排名,是英国高等教育基金委员会对英国高等教育机构的研究质量进行的系统全面的测评，大约每五年进行一次。前几次的RAE排名分别发布于1986、1989、1992、1996 2001和2008。英国大学排名RAE(the Research Assessment Exercise)于2014年将正式更名为REF(The Research Excellence Framework)。";
        
        }else if(area_Var == "英国" && type_Var == "REF" && leiXing == "专业排名"){
            
            imgSrc = "http://passport.shenyuan.org/WebResources/Default/images/collegeRank/zhuanye/REF.jpg";            
            
            contnet = "REF排名为原RAE排名，2014正式更名为REF。REF排名是对英国大学所有学科的科研质量评估，是由四所英国高等教育机构联合评选出，评定的结果将会被用来分配至下一个REF排名期间大学的研究经费，这四所英国高等教育机构分别是：英格兰高等教育基金委员会England Higher Education Funding Council (HEFCE)，苏格兰高等教育基金管理委员会Funding Council (SFC)，威尔士高等教育拨款委员会the Higher Education Funding Council(HEFCW)，北爱尔兰就业与学习部Department for Employment and Learning (DEL)。";
        
        }else{

            imgSrc = "";            
            
            contnet = "暂无数据。";
        
        }
        return (
            <div className="deta">
                <div className="img">
                    <img src={imgSrc} />
                </div>
                <div className="conten">
                    {contnet}
                </div>
                <div className="clear"></div>
            </div>
        );
    }
    componentDidMount(){
        
    }
}

export default MiddleContent;
