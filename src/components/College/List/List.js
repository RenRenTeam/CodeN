/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './List.less';
import withStyles from '../../../decorators/withStyles';
import Item from '../Item/Item.js';
import ItemB from '../Item/ItemB/ItemB.js';
import ItemC from '../Item/ItemC/ItemC.js';
import ItemA from '../Item/ItemA/ItemA.js';
import ItemD from '../Item/ItemD/ItemD.js';
import $ from 'jquery';
import TotalCollegeCount from '../CollegeReactjs/TotalCollegeCount/TotalCollegeCount.js';
var EnterAnimation = require('enter-animation') ;


@withStyles(styles)
class List extends React.Component{
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
        var items;
        var country = this.props.country;
        var school = this.props.school; 
        var xiangqu;

        if(country == "UK" && school == "大学"){ 

            if(this.props.DataSource instanceof Array){
                items = this.props.DataSource.map(function (item) {
                    
                    return (<ItemC json={item} country={country} school={school} />)
                });            
             }
        }
        else if(country == "USA" && school == "大学"){ 

            if(this.props.DataSource instanceof Array){
                items = this.props.DataSource.map(function (item) {
                    
                    return (<ItemB json={item} country={country} school={school} />)
                });            
             }
        }
        else if(country == "JP" && (school == "大学"||school == "研究生院")){
             if(this.props.DataSource instanceof Array){
                items = this.props.DataSource.map(function (item) {

                    return (<ItemA json={item} country={country} school={school} />)
                });            
             }
        }
        else if(country == "" && school == ""){
            if(this.props.DataSource instanceof Array){
                let countryStr="";
                items = this.props.DataSource.map(function (item) {
                        countryStr=item.Country;
                        if(countryStr=="澳大利亚"){
                            countryStr="AUS";
                        }else if(countryStr=="英国"){
                            countryStr="UK";
                        }
                        else if(countryStr=="美国"){
                            countryStr="USA";
                        }
                        else if(countryStr=="日本"){
                            countryStr="JP";   
                        }
                    return (<ItemD json={item} country={countryStr} school={"大学"} />)
                });            
             }
        }

        else{

            if(this.props.DataSource instanceof Array){
                items = this.props.DataSource.map(function (item) {
                    return (<Item json={item} country={country} school={school}/>)
                });            
             }
         }
         var nodes=[];
         if(items.length>0){
            nodes.push(
                    <div>          
                        <EnterAnimation interval={this.state.interval} type={this.state.type} upend={this.state.upend} direction={this.state.direction}>
                            <ul className="compuUl">
                                {items}
                            </ul>
                        </EnterAnimation>
                        <div className="clear"></div>
                    </div>
                );
         }
        return (
                <div>  
                   {nodes}
                </div>
        );
    }

    componentDidMount(){
       
    }
  
    
}

export default List;
