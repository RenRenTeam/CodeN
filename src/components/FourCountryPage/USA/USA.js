/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './USA.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';

import Banner from '../../Banner/USA/Banner/Banner.js';
import RecommendPlan from '../UtilCountryReactjs/RecommendPlan/RecommendPlan.js';
import SchoolSearch from '../SchoolSearch_Other/SchoolSearch_Other.js';
import SchoolRank from '../SchoolRank/USA/USA.js';
import HotSchool from '../HotSchool/HotSchool.js';
import CountryEducationStudyAbroad from '../CountryEducationStudyAbroad/CountryEducationStudyAbroad.js';

import GetOpenClassData from '../openClass/GetOpenClassData/GetOpenClassData.js';
import Activity from '../../IndexPage/NewActivity/NewActivity.js';
/*import ShiXianLiuXue from '../ShiXianLiuXue/ShiXianLiuXue.js';*/
import EffectWish from '../../IndexPage/EffectWish/EffectWish.js';
import CountryApplyFlow from '../CountryApplyFlow/CountryApplyFlow.js';
import LiuCheng from '../LiuCheng/USALiuCheng.js';
import Flow from '../../Flow/Flow.js';
var EnterAnimation = require('enter-animation') ;


import $ from 'jquery';

@withStyles(styles)
class USA  extends React.Component {

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
        let title = '美国－国家页面';
        this.context.onSetTitle(title); 
        return (
            <div>
            <EnterAnimation interval={this.state.interval} type={this.state.type} upend={this.state.upend} direction={this.state.direction}>
                <Banner />
                    <section className="country-hot-school">
                        <div className="content">
                            <SchoolSearch  country="USA" />
                            <div className="school-box-hr"></div>                           
                            <div id="USAGetHotSchoolData"></div>
                            <div className="clear"></div>
                        </div>
                    </section>
                <SchoolRank flag="USA"/>
                <section className="plan">
                    <RecommendPlan />
                </section>
                <div id="USA_Active_data"></div>
                <GetOpenClassData country="美国" />
                <LiuCheng />
                <Activity /> 
                 <EffectWish  country="美国"/>
                <Flow />        
                </EnterAnimation>   
            </div>
        );
    }

     componentDidMount() {
            //异步加载热门学校
 
            React.render(<HotSchool  Country="美国" flag="USA" />,document.getElementById('USAGetHotSchoolData'));
            React.render(<CountryEducationStudyAbroad  country="USA"  />,document.getElementById('USA_Active_data'));


               

        
    }

}

export default USA;
/**
 * xyx 2015.8.21
 */
