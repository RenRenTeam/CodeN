/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import Link from '../../../utils/Link.js';

class Ad{
   
    render() {
        return (
        	<section className="plan">
                <a href="USAProject" onClick={Link.handleClick}>
                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/index-Ad-plan.jpg" /></a>
                <div className="clear"></div>
            </section>
        );
    }
    //dom加载完调用
    componentDidMount(){

        
    }
}

export default Ad;
