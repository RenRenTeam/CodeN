/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Jp.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';

import Banner from '../../Banner/JP/Banner/Banner.js';


import SchoolRank from '../SchoolRank/SchoolRank.js';
import CountryEducationStudyAbroad from '../CountryEducationStudyAbroad/CountryEducationStudyAbroad.js';
import RecommendPlan from '../UtilCountryReactjs/RecommendPlan/RecommendPlan.js';

import GetOpenClassData from '../openClass/GetOpenClassData/GetOpenClassData.js';
import Activity from '../../IndexPage/NewActivity/NewActivity.js';
import EffectWish from '../../IndexPage/EffectWish/EffectWish.js';
import LiuCheng from '../LiuCheng/JPLiuCheng.js';
import Flow from '../../Flow/Flow.js';
import JPSchoolSearch from '../JPSchoolSearch/JPSchoolSearch.js';
var EnterAnimation = require('enter-animation') ;


import $ from 'jquery'; 

@withStyles(styles)

class Jp extends React.Component { 

    constructor(props) {
        super(props);
        this.state = ({
          direction:'enter',
          upend:false,
          type:'right',
          interval:0.1,
          delay:0.7,
          Country:"JP"
        });
    }

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        let title = '日本－国家页面';
        this.context.onSetTitle(title); 
        return (
            <div>
                <EnterAnimation interval={this.state.interval} type={this.state.type} upend={this.state.upend} direction={this.state.direction}>
                    <Banner />
                    <JPSchoolSearch  />
                    <SchoolRank />
                    <section className="plan planasd">
                        <RecommendPlan flag = "JP"/>
                    </section>
                    <div id="JP_Active_data"  flag = "jp"></div>
                    <GetOpenClassData country="日本" />
                    <Activity  flag = "JP"/>
                    <LiuCheng />
                    <EffectWish  country="日本"/>
                    <Flow />
                </EnterAnimation>
            </div>
        );
    }
    componentDidMount() {

        React.render(<CountryEducationStudyAbroad  country="JP"  />,document.getElementById('JP_Active_data'));

    
    }

}

export default Jp;
/*
 * xyx 2015.8.21
 */
 