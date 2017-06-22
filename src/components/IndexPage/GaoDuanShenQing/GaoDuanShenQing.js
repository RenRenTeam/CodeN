/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';
import Content from './Content/Content.js';
import Common from '../../../utils/Common.js';


class GaoDuanShenQing {

  render() {
    return (
      <div id="indexPage_GaoDuanShenQing"></div>
      );
  }
  //dom加载完调用
  componentDidMount() {

    $.ajax({
      url: "http://service.shenyuan.org/ExpertService/SearchForJS/PageIndex=1;PageSize=10;CallBack=success_jsonpCallback_ExpertService",
      type: "get",
      dataType: "jsonp",
      async: false,
      jsonp: "callbackparam",
      jsonpCallback: "success_jsonpCallback_ExpertService",
      success: function(json) {
        React.render(<Content json = {json} />, document.getElementById('indexPage_GaoDuanShenQing'));
      },
      error: function(e) {
        //console.log(e);
        Common.errorLog(e);
      }
    });

  }
}

export default GaoDuanShenQing;
