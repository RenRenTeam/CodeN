//CollegeData.js
import React, { PropTypes } from 'react';
import styles from './College.less';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery';
import Header from '../Header/Header.js'
import List from '../List/List.js';
import CollegePage from '../CollegeReactjs/CollegePage/CollegePage.js';
import TotalCollegeCount from '../CollegeReactjs/TotalCollegeCount/TotalCollegeCount.js';


class CollegeData extends React.Component{      

/*    constructor(props) {
        super(props);
        this.state = {pageIndex:1,country:"USA",list:{},totalCount:0,current:1,fildList:new Array(),school:"高中"};
    }*/    
    render() {
        return ( 
                <div className="collegeHeader-Node">
                    <section className="plan">
                        <a href="/college-recommend.aspx">
                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/index-Ad-plan.jpg" /></a>
                        <div className="clear"></div>
                    </section>
                    <Header   searchCondition={this.props.search} />
                    <div id="listOfCollege"></div> 

                    <div className="list-box">
                        <div className="title" >
                            <TotalCollegeCount  Count={this.props.Count}/>
                        </div>
                        <div id="div_SchoolList">
                            <div className="school_lb" id="searchSchoolList">
                            	
                            </div> 
                           	<CollegePage search={this.props.search}  totalCount={this.props.Count} currentPage={this.props.currentPage}/>
                        </div>
                    </div>
                </div>
        );
    }

     componentDidMount(){
       //React.render(<TotalCollegeCount  Count={0}/>,document.getElementById('div_PageCount'));
       //React.render(<CollegePage  totalCount={0} currentPage={1}/>,document.getElementById('collegePageDiv'));
    }
    
}

export default CollegeData;


