//CollegePage.js
//xyx 2015.8.28
/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
import React, { PropTypes } from 'react';
import $ from 'jquery';
import CollegeUtilFunc from '../../CollegeUtilFunc/CollegeUtilFunc.js';
/* Pageing */
require('rc-pagination/assets/index.css');
require('rc-select/assets/index.css');
var Pagination = require('rc-pagination');
var Select=require('rc-select');
var Pagination = require('rc-pagination');

class CollegePage extends React.Component{   

    changePage(key){ 
        let type=this.props.searchType;
        let indexSearch=this.props.noCountry;
        let searchStr=this.props.UserSearch;
        if(type){
              //let page=this.props.currentPage;  
            CollegeUtilFunc.UKMajorSearch(type,key);   
        }else if(indexSearch&&indexSearch=="true"){
            CollegeUtilFunc.indexSearchSchool(searchStr,key);
        }else{           
            if(!!searchStr&&searchStr.length>5){       
                CollegeUtilFunc.UserSearchSchool(searchStr[0],searchStr[1],key,15,searchStr[4],searchStr[5],""); 
            }
         
        }
       
  
    }

    render() {
        
        return ( 
              <div className="pageingDiv" >
                <input type="hidden" id="getSearchArrs" value={this.props.searchType} />
                <Pagination
                selectComponentClass={Select}
                showQuickJumper={true} showSizeChanger={true} pageSize={15} onChange={this.changePage.bind(this)} 
                total={this.props.totalCount} current={this.props.currentPage}  />
            </div>
        );
    }
    
}

export default CollegePage;
