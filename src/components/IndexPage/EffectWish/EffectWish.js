/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './EffectWish.less';
import withStyles from '../../../decorators/withStyles';
import List from './List/List.js'
import $ from 'jquery';
import Common from '../../../utils/Common.js';

@withStyles(styles)

class EffectWish extends React.Component {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        return (
            <section className="effect-wish">
                <h1>实现留学梦想的他们说</h1>
                <div className="content">
                    <div id="sliderNo"></div>
                    <div className="clear"></div>
                </div>
            </section>
        );
    }
    componentDidMount() {
        let countryVar=this.props.country;
        function GetData(){
            $.ajax({
                url: "http://service.shenyuan.org/DreamSayService/SearchForJs/Country="+countryVar+";PageIndex=1;PageSize=6;CallBack=success_Effect_jsonpCallback",
                type: "get",
                dataType: "jsonp",
                async: false,
                jsonp: "callbackparam",
                jsonpCallback: "success_Effect_jsonpCallback",
                success: function (json) {

                    React.render(<List json={json} />, document.getElementById('sliderNo'));

                },
                error: function (e) {
                  //console.log(e);
                  Common.errorLog(e);
                }
            });
        }

        $(document).ready(function(){


            GetData();


        });


    }
}

export default EffectWish;
