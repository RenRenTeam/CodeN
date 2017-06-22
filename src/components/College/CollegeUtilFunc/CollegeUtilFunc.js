//CollegeUtilFunc.js
import React, { PropTypes } from 'react';
import $ from 'jquery';
import List from '../List/List.js';
import TotalCollegeCount from '../CollegeReactjs/TotalCollegeCount/TotalCollegeCount.js';
import CollegePage from '../CollegeReactjs/CollegePage/CollegePage.js';
import UKTiaoJian from '../Header/UKTiaoJian/UKTiaoJian.js';
import USATiaoJian from '../Header/USATiaoJian/USATiaoJian.js';
import JPTiaoJian from '../Header/JPTiaoJian/JPTiaoJian.js';
import AUSTiaoJian from '../Header/AUSTiaoJian/AUSTiaoJian.js';
import Header from '../Header/Header.js';




function UserSearchSchool(countryU,typeU,pageIndexU,pageSizeU,nameU,chooseArrU,flagSearch){		
			let currentPage=1;
			let schoolVar=typeU;
			let countryVar=countryU;
			let schoolClear=flagSearch; 
			if(!!pageIndexU){
				currentPage=pageIndexU; 
			}
			//点击条件或用户输入搜索保存搜索条件，传搜索条件过去主要是给分页查询用
		
			//let	searchFlag=countryU+"--"+typeU+"--"+pageIndexU+"--15--"+(nameU?nameU:"")+"--"+(chooseArrU?chooseArrU:"");
            let userSear=nameU?nameU:"";
            let userClicks=chooseArrU?chooseArrU:"";
			let searchFlag=[countryU,typeU,currentPage,pageSizeU,userSear,userClicks];
		
			let searchUrl="";
			if(!!chooseArrU){
				searchUrl="http://service.shenyuan.org/UniversitySearchNodeJsService/UniversitySearch/Country="+countryU+";Type="+typeU+";PageIndex="+pageIndexU+";PageSize=15;Name="+nameU+";"+chooseArrU
			}else{
				searchUrl="http://service.shenyuan.org/UniversitySearchNodeJsService/UniversitySearch/Country="+countryU+";Type="+typeU+";PageIndex="+pageIndexU+";PageSize=15;Name="+nameU
			}
			$.ajax({
                type: "get",
                url: searchUrl, 
                dataType: "jsonp",
                async:false,
                jsonp:"callbackparam",//
                jsonpCallback:"success_jsonpCallback",//自定义jsonp回调函数名称       
            }).done(function(json){
                if(json&&json.length>0){ 
                    React.render(<Header search={searchFlag} country={countryVar} noCountry={""} />,document.getElementById('countryHeard'));    
              		React.render(<List  DataSource={json}  country={countryVar} school={schoolVar}  />,document.getElementById('searchSchoolList'));
              		React.render(<TotalCollegeCount  Count={json[0].TotalCount}  />,document.getElementById('div_PageCount'));
              		React.render(<CollegePage  totalCount={json[0].TotalCount} currentPage={currentPage} UserSearch={searchFlag} searchType={""} noCountry={""} />,document.getElementById('collegePageDiv'));
              		//React.render( ,document.getElementById('collegePageDiv'));  
	
                }else{
                	let arr=[];
                    React.render(<Header search={searchFlag} country={countryVar} noCountry={""} />,document.getElementById('countryHeard'));   
                	React.render(<List  DataSource={arr}  country={countryVar} school={schoolVar}  />,document.getElementById('searchSchoolList'));
              		React.render(<TotalCollegeCount  Count={0}  />,document.getElementById('div_PageCount'));
              		React.render(<CollegePage  totalCount={0} currentPage={currentPage} UserSearch={searchFlag} searchType={""} noCountry={""} />,document.getElementById('collegePageDiv'));
    
                }
            });
}

function  UKMajorSearch(major,currentPage){
			let majorStr=major;
			let page=currentPage;
		 $.ajax({
                url: "http://service.shenyuan.org/University_RankingService/GetUniversityUKByRankingYXK/Type=专业排名;Brand=TIMES;Year=2014;Major="+major+";PageIndex="+currentPage+";PageSize=15;CallBack=getRankingMajor_jsonpCallback",//Year=年份;Brand=品牌;Major=材料技术;Type=类型
                type: "get",
                dataType: "jsonp",
                async:false,
                jsonp:"callbackparam",//
                jsonpCallback:"getRankingMajor_jsonpCallback",//自定义jsonp回调函数名称     
            }).done(function (json) {
                if(json&&json.length>0){
                	$("#UkSchoolArea").children("li").removeClass("active");
           		 	$("#UKSchoolRanks").children("li").removeClass("active");
            		$("#txtSearch").val("");
                    React.render(<Header search={""} country={""} noCountry={""} />,document.getElementById('countryHeard'));   
                    React.render(<List  DataSource={json}  country="UK" school="大学"  />,document.getElementById('searchSchoolList'));
                    React.render(<TotalCollegeCount  Count={json[0].TotalCount}  />,document.getElementById('div_PageCount'));
                    React.render(<CollegePage  totalCount={json[0].TotalCount} currentPage={page} UserSearch={""}  searchType={majorStr}  noCountry={""} />,document.getElementById('collegePageDiv'));
                }else{
                    //React.render(<UKRanksA  data={[]}  />,document.getElementById('UKMajorPage'));
                }
                
            });
}

function indexSearchSchool(searchStr,currentPage){
        let userSearch=searchStr;
        let page=currentPage;
       $.ajax({
            url: "http://service.shenyuan.org/UniversitySearchNodeJsService/UniversitySearchByName/Name="+searchStr+";Type=大学;PageIndex="+currentPage+";PageSize=15;CallBack=noTypeSchool_jsonpCallback",
            type: "get",
            dataType: "jsonp",
            async:false,
            jsonp:"callbackparam",//
            jsonpCallback:"noTypeSchool_jsonpCallback",//自定义jsonp回调函数名称     
        }).done(function (json) {
            if(json&&json.length>0){ 
                React.render(<Header search={userSearch} country={""} noCountry={"true"} />,document.getElementById('countryHeard'));  
                React.render(<List  DataSource={json}  country={""} school={""}  />,document.getElementById('searchSchoolList'));
                React.render(<TotalCollegeCount  Count={json[0].TotalCount}  />,document.getElementById('div_PageCount'));
                React.render(<CollegePage  totalCount={json[0].TotalCount} currentPage={page} UserSearch={userSearch}  searchType={""} noCountry={"true"} />,document.getElementById('collegePageDiv'));
            }else{
                React.render(<Header search={userSearch} country={""} noCountry={"true"} />,document.getElementById('countryHeard'));  
                React.render(<List  DataSource={[]}  country={""} school={""}  />,document.getElementById('searchSchoolList'));
                React.render(<TotalCollegeCount  Count={0}  />,document.getElementById('div_PageCount'));
                React.render(<CollegePage  totalCount={0} currentPage={page} UserSearch={userSearch} searchType={""} noCountry={"true"} />,document.getElementById('collegePageDiv'));
            }
            
        });

}

export default { UserSearchSchool,UKMajorSearch,indexSearchSchool}; 
/*xyx 2015.8.29*/

















