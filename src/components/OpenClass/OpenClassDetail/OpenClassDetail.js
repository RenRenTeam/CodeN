/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './OpenClassDetail.less';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery';
import MainContent from './MainContent/MainContent.js';
import SearchOpenClassFunc from './SearchOpenClassFunc/SearchOpenClassFunc.js';

@withStyles(styles)
class OpenClassDetail {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };
   
    render() {
        let title = '公开课详细－人人留学';
        this.context.onSetTitle(title);
        return (
            <div id="nodeOpenClassDetail"></div>
        ); 
    }

    componentDidUpdate(){
        $(".reveal-modal-bg").hide(); 
        var url = window.location.href;
        url = url.substr(url.indexOf('/OpenClassDetail-') + ('/OpenClassDetail-').length);

        var sysNo = url.split('-')[0];
        SearchOpenClassFunc.searchClass(sysNo);
        $("html,body").animate({scrollTop:0},0);
    }
    componentDidMount(){
        $(".reveal-modal-bg").hide(); 
        var url = window.location.href;
        url = url.substr(url.indexOf('/OpenClassDetail-') + ('/OpenClassDetail-').length);

        var sysNo = url.split('-')[0];
        SearchOpenClassFunc.searchClass(sysNo);


    }
}

export default OpenClassDetail;