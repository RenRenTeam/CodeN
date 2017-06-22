/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';
import Items from './Items/Items.js';
import Alert from './Items/Alert/Alert.js';
import One from './One/One.js';
import Common from '../../../../utils/Common.js';

class Content extends React.Component {

  constructor(props) {

    super(props);
  }
  OpenexpertBoxNode() {

    var sysNo = $("#tutorList").find(".active").find(".sysNo").val();

    $.ajax({
      url: "http://service.shenyuan.org//ExpertService/LoadEntityForJs/SysNo=" + sysNo + ";CallBack=callbackAlertDetail",
      type: "get",
      dataType: "jsonp",
      async: false,
      jsonp: "callbackparam",
      jsonpCallback: "callbackAlertDetail",
      success: function(json) {

        $("#expertBox-Node").html("");

        var dom = eval("(" + json.DomesticEdu + ")");

        var over = eval("(" + json.OverseasEdu + ")");

        React.render(<Alert json = {json} dom = {dom}  over={over} />, document.getElementById('expertBox-Node'));

      },
      error: function(e) {
        //console.log(e);
        Common.errorLog(e);
      }
    });


  }
  render() {

    var items;
    var nodes;
    var arr = [1];
    var name_Var;

    if (this.props.json instanceof Array) {
      items = this.props.json.map(function(item, index) {
        if (index == 0) {
          name_Var = item.Name;
        }

        return (<Items json={item} />)
      });
    }

    if (this.props.json.length > 0) {

      nodes = this.props.json.map(function(item, index) {
        if (index == 0) {
          return (<One json={item} />);
        }
      });
    }


    return (
      <section className="tutor">
                <h1>高端申请专家团</h1>
                <div className="more"></div>
                <div className="desc">
                    70位资深行业专家，涵盖社会、经济、金融、哲学、历史、艺术、互连网等领域。权威认证，指导升学、留学要点
                </div>
                <div className="tutor-list">
                    <ul id="tutorList">
                        {items}
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="tutor-detail" id="tutor-detail">
                    <div className="tutor-name">{name_Var}</div>
                    <div className="tutor-info" id="tutor-detaisdsd">
                        {nodes}
                    </div>
                </div>
                <div className="action">
                    <button className="button-normal" id="btnExpert" onClick={this.OpenexpertBoxNode.bind(this)}>预约专家</button>
                </div>
            </section>
      );
  }
  //dom加载完调用
  componentDidMount() {}
}

export default Content;
