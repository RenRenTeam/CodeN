/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';
import Items from './Items/Items.js'



class Table extends React.Component{
    
    render() {

        var items;

        if(this.props.json instanceof Array){
            items = this.props.json.map(function (item) {
                return (<Items json = {item} />)
            });            
         }


        return (
            <tbody>
                {items}
            </tbody>
         );
    }
    componentDidMount(){
        
    }
}

export default Table;
