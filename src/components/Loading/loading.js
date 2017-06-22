/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './loading.less';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';
import $ from 'jquery';

import LoadingIndex from './LoadingIndex'

@withStyles(styles)
class Loading {
      static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
      };

    render() {
        let title = '人人留学';
        this.context.onSetTitle(title);
        return (
            <div>
                <div className="base-Effect">
                    <div className="mop-load-6">
                            <div className="mop-load-div">
                                      <div className="mop-css-6 three-bounce">
                                                <div className="bounce1"></div>
                                                <div className="bounce2"></div>
                                                <div className="bounce3"></div>
                                      </div>
                            </div>
                    </div>
                </div>
                <div id="loadingIndex"></div>
            </div>
        );
    }
    componentDidMount() {

        setTimeout(function(){
            React.render(<LoadingIndex />,document.getElementById('loadingIndex'));
        },1500);
    }
}

export default Loading;