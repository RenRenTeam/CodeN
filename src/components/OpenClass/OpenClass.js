/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './OpenClass.less';
import withStyles from '../../decorators/withStyles';
import $ from 'jquery'
import AppActions from '../../actions/AppActions';
import Banner from './Banner/Banner.js'
import Content from './Content/Content.js'

@withStyles(styles)
class OpenClass {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired 
    };

    render() {
        let title = '公开课－人人留学';
        this.context.onSetTitle(title);
        return (
            <div>
                <Banner />
                <Content />
            </div>
        );
    }
    componentWillMount() {
        
    }
}

export default OpenClass;
