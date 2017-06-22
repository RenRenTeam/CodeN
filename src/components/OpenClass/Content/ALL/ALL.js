/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './ALL.less';
import withStyles from '../../../../decorators/withStyles';
import AppActions from '../../../../actions/AppActions';
import Link from '../../../../utils/Link';
import MainContent from './MainContent/MainContent.js';
import $ from 'jquery'

@withStyles(styles)
class ALL {

    render() {

        var items;
        var title_Var;
        if(this.props.DataSource instanceof Array){
            items = this.props.DataSource.map(function (item) {
                if(item.Title.length > 18){

                    title_Var = item.Title.substr(0,18)+"...";

           
                }else{

                     title_Var = item.Title;
                }

                return (<MainContent json={item} title = {title_Var} />)
                
            });            
         }

        return (
                <div>
                    <div className="class-list-box">
                        {items}
                    </div>
                    <div id="div_next"></div>
                </div>
        );
    }
}

export default ALL;
