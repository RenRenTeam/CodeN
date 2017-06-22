
import React, { PropTypes } from 'react';
import $ from 'jquery';



class TotalCollegeCount extends React.Component{    

    render() {
    	
        return ( 
              <span >
              	共检索到 &nbsp;{this.props.Count}&nbsp; 所学校
              </span>
        );
    }
  
    
}

export default TotalCollegeCount;
//TotalCollegeCount.js
//xyx 2015.8.28
