/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from '../SchoolSearch/SchoolSearch.less';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';

import HighSchool from '../SchoolSearch/HighSchool/HighSchool.js'
import University from '../SchoolSearch/University/University.js'
import CollegeUtilFunc from '../../College/CollegeUtilFunc/CollegeUtilFunc.js';

import $ from 'jquery';

@withStyles(styles)
class SchoolSearch_Other  extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            country:"USA",
            schoolType:"大学",
            position:"",
            name:"",
            type:""
        };
    }
    changPositon(str){
        this.setState({
            position:str
        }); 
    }
    changeName(userInput){
        this.setState({
            name:userInput
        }); 
    }
    render() {

       

        return (
            <div className="country-search-school">
                <h2>院校搜索</h2>
                <div className="country-search-school-box">
                    <div  >
                        <input type="hidden" id="country" value="JP" />
                        <div className="search-tabs-box">
                            <div className="tabs">
                                <div className={this.state.schoolType=="大学"?"item selected last":"item last"} data-content="#university"  onClick={this.changSchoolType.bind(this)}>大学</div>
                                <div className={this.state.schoolType=="高中"?"item selected last":"item last"} data-content="#high"  onClick={this.changSchoolType.bind(this)}>高中</div>
                                
                                <div className="clear"></div>
                            </div>
                            <div className="tab-content" id="search-tab-content1">
                                
                            </div>
                        </div>
                        <div className="action">
                            <button className="button-normal" onClick={this.searchSchool.bind(this)}>查询</button></div> 
                    </div>
                </div>
            </div>
        );
    }
    changSchoolType(e){ 
        this.setState({
            schoolType:e.target.innerHTML
        }); 
        
    }
    searchSchool(){     
        window.location.href="/College-fourCountry-"+this.state.country+"-"+this.state.schoolType+"-"+this.state.name+"-"+this.state.position;
    }
    componentDidMount() { 
        this.setState({
            country:this.props.country
        });
        React.render(<HighSchool country={this.props.country} changeName={this.changeName.bind(this)}  changPositon={this.changPositon.bind(this)}/>, document.getElementById('search-tab-content1'));

    }

}

export default SchoolSearch_Other;
/*xyx 2015.9.15*/

