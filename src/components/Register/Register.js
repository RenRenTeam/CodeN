/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery'

class Register {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        let title = '个人中心－人人留学';
        this.context.onSetTitle(title);
        return (
            <div>21</div>
        );
    }
    //dom加载完调用
    componentDidMount(){
        
    }
}

export default Register;
