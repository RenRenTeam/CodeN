/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './College.less';
import withStyles from '../../decorators/withStyles';
import $ from 'jquery';
import Header from './Header/Header.js'
import List from './List/List.js';
import CollegePage from './CollegeReactjs/CollegePage/CollegePage.js';
import TotalCollegeCount from './CollegeReactjs/TotalCollegeCount/TotalCollegeCount.js';
import Footer from '../Footer';
import Ad from './Ad/Ad.js';
var EnterAnimation = require('enter-animation') ;


@withStyles(styles)
class College extends React.Component{	    
    static contextTypes = {
       onSetTitle: PropTypes.func.isRequired
    };
     constructor(props) {
        super(props);
        this.state = ({
          direction:'enter',
          upend:false,
          type:'right',
          interval:0.1,
          delay:0.7
        });
    }
    render() {
        let title = '院校库 - 人人留学';
        this.context.onSetTitle(title); 
        return ( 
            <div>
            <EnterAnimation interval={this.state.interval} type={this.state.type} upend={this.state.upend} direction={this.state.direction}>
                <div className="collegeHeader-Node">
                    <div id="AdPart_COLLEge_Node"></div>
                    <div id="countryHeard">

                    </div>
                    <div id="listOfCollege"></div>
                    <div className="list-box">
                        <div className="title" id="div_PageCount">
                            
                        </div>
                        <div id="div_SchoolList">
                            <div className="school_lb" id="searchSchoolList">

                            </div>
                            <div id="collegePageDiv">
                                
                            </div>
                        </div>
                    </div>
                </div>
                </EnterAnimation>
            </div>
        );
    }

     componentDidMount(){
        
       var url = window.location.href;
       url = url.substr(url.indexOf('/College-') + ('/College-').length);

       if( url == "AUS" || url == "USA" || url == "JP" || url == "UK"){ 

            React.render(<Header search={""} country={url}/>,document.getElementById('countryHeard'));                    
          /*  React.render(<CollegePage  totalCount={0} currentPage={1}/>,document.getElementById('collegePageDiv'));
            React.render(<TotalCollegeCount  Count={0}/>,document.getElementById('div_PageCount'));*/

       }else{

            React.render(<Header search={""} country="USA"/>,document.getElementById('countryHeard'));
    /*        React.render(<CollegePage  totalCount={0} currentPage={1}/>,document.getElementById('collegePageDiv'));
            React.render(<TotalCollegeCount  Count={0}/>,document.getElementById('div_PageCount'));*/
       
       }

       React.render(<Ad />,document.getElementById('AdPart_COLLEge_Node')); 
       React.render(<Footer />,document.getElementById('collegeLoadFooter')); 
            
    }
    
}

export default College;
