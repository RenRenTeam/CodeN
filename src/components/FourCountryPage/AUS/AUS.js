/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './AUS.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';

import Banner from '../../Banner/AUS/Banner/Banner.js';
import SchoolSearch from '../SchoolSearch_Other/SchoolSearch_Other.js';
import RecommendPlan from '../UtilCountryReactjs/RecommendPlan/RecommendPlan.js';
import AUSSchoolRank from '../SchoolRank/AUS/AUSSchoolRank.js';

import HotSchool from '../HotSchool/HotSchool.js';
import CountryEducationStudyAbroad from '../CountryEducationStudyAbroad/CountryEducationStudyAbroad.js';
import GetOpenClassData from '../openClass/GetOpenClassData/GetOpenClassData.js';
import Activity from '../../IndexPage/NewActivity/NewActivity.js';
import EffectWish from '../../IndexPage/EffectWish/EffectWish.js';

import LiuCheng from '../LiuCheng/AUSLiuCheng.js';
import Flow from '../../Flow/Flow.js';
var EnterAnimation = require('enter-animation') ;


import $ from 'jquery';

@withStyles(styles)
class AUS  extends React.Component {  

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

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        let title = '澳洲－国家页面';
        this.context.onSetTitle(title); 
        return (
            <div>
            <EnterAnimation interval={this.state.interval} type={this.state.type} upend={this.state.upend} direction={this.state.direction}>
                <Banner />
                <section className="country-hot-school">
                    <div className="content">
                        <SchoolSearch  country="AUS" />
                        <div className="school-box-hr"></div>
                        <div id="AUSGetHotSchoolData"></div>
                        <div className="clear"></div>
                    </div>
                </section>
                <AUSSchoolRank />
                <section className="plan">
                    <RecommendPlan  flag='AUS'/>
                </section>
                <div id="AUS_Active_data"></div>
                <GetOpenClassData country="澳大利亚" />
                <Activity />
                <LiuCheng />
                <EffectWish  country="澳大利亚"/>
                <Flow />
                </EnterAnimation> 
            </div>
        );
    }
    componentDidMount() {

        React.render(<HotSchool  Country="澳大利亚" flag="AUS" />,document.getElementById('AUSGetHotSchoolData')); 
        React.render(<CountryEducationStudyAbroad  country="AUS"  />,document.getElementById('AUS_Active_data'));

    }

}

export default AUS;
/**
 * xyx 2015.8.21
 */
