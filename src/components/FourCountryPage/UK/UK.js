/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Uk.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';

import Banner from '../../Banner/UK/Banner/Banner.js';
import SchoolSearch from '../SchoolSearch_Other/SchoolSearch_Other.js';

import HotSchool from '../HotSchool/HotSchool.js';
import SchoolRank from '../SchoolRank/Uk/UKSchoolRanks.js';
import CountryEducationStudyAbroad from '../CountryEducationStudyAbroad/CountryEducationStudyAbroad.js';
import RecommendPlan from '../UtilCountryReactjs/RecommendPlan/RecommendPlan.js';
/*import OpenClass from '../openClass/OpenClass.js';*/
import GetOpenClassData from '../openClass/GetOpenClassData/GetOpenClassData.js';
import Activity from '../../IndexPage/NewActivity/NewActivity.js';
import EffectWish from '../../IndexPage/EffectWish/EffectWish.js';
import LiuCheng from '../LiuCheng/uk.js';
import Flow from '../../Flow/Flow.js';
import $ from 'jquery';
var EnterAnimation = require('enter-animation') ;

@withStyles(styles)

class UK extends React.Component {

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
        let title = '英国－国家页面';
        this.context.onSetTitle(title);
        return (
            <div>
                <EnterAnimation interval={this.state.interval} type={this.state.type} upend={this.state.upend} direction={this.state.direction}>
                <Banner />
                <a href="" ></a>
                <section className="country-hot-school">
                    <div className="content">
                        <SchoolSearch country="UK" />
                        <div className="school-box-hr"></div>
                        <div id="UKGetHotSchoolData"></div>
                        <div className="clear"></div>
                    </div>
                </section>
                <SchoolRank flag="UK"/>
                <section className="plan planasd">
                        <RecommendPlan flag = "UK"/>
                    </section>
                <div id="UK_Active_data"></div>
                <GetOpenClassData country="英国" />
                <Activity />
                <LiuCheng />
                <EffectWish  country="英国"/>
                <Flow />
                </EnterAnimation>
            </div>
        );
    }
    componentDidMount() {

        React.render(<HotSchool  Country="英国" flag="UK" />,document.getElementById('UKGetHotSchoolData'));
        React.render(<CountryEducationStudyAbroad  country="UK"  />,document.getElementById('UK_Active_data'));
    }



}

export default UK;
/**
 * xyx 2015.8.21
 */
