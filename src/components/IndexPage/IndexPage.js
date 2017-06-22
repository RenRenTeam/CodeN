/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from "./IndexPage.less";
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';
import loadingImg,{loadingImgFunc} from '../../utils/Common.js';
var EnterAnimation = require('enter-animation') ;

import $ from 'jquery';

import Banner_Index from '../Banner/Index/Banner_Index';
/*import Wish from './Wish/Wish.js';*/
import WishPage from './WishUtilReactjs/WishPage/WishPage.js';
import OpenClass from './OpenClass/OpenClass.js';
/*import GaoDuanShenQing from './GaoDuanShenQing/GaoDuanShenQing.js';*/
import NewActivity from './NewActivity/NewActivity.js';
import EffectWish from './EffectWish/EffectWish.js';
import Flow from '../Flow/Flow.js'

@withStyles(styles)
class IndexPage extends React.Component{
   constructor(props) { 
        super(props);
        this.state = ({ 
          direction:'enter',
          upend:false,
          type:'top',
          interval:0.1,
          delay:0.7
        });
    }
  render() { 
    return (
      <div id="indexpageContent">
      <EnterAnimation interval={this.state.interval} type={this.state.type} upend={this.state.upend} direction={this.state.direction}>
        <div id="expertBox-Node"></div>
        <div className="IndexPage" onLoad={this.handleGoClick}>        
          <Banner_Index />
          <WishPage />
          <OpenClass /> 
          
          <section className="plan">
            <a href="/USAProject" onClick={Link.handleClick}>
              <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/index-Ad-plan.jpg"/></a>
            <div className="clear"></div>
          </section>
          <NewActivity />
          <EffectWish  country=""/>
          <Flow />
        </div>
        </EnterAnimation>
      </div>
    );
  }
  //dom加载完调用
  componentDidMount(){
   // loadingImg.loadingImgFunc("indexpageContent"); 


  }
}

export default IndexPage;
