/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';

import styles from "./Alert.less";
import withViewport from '../../../../../../decorators/withViewport';
import withStyles from '../../../../../../decorators/withStyles';
import $ from 'jquery';
import TabContent from './TabContent/TabContent.js';
import InputContent from './InputContent/InputContent.js';

@withStyles(styles)
class Alert extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            tab:'个人介绍'
        };
    }

    openTabsOne(e){
        $("#tabContent-GDSQ").html("");
        this.setState({tab:e.target.innerHTML});
        if(e.target.innerHTML == "个人介绍"){
            React.render(<TabContent json={this.props.json.Remark} />, document.getElementById('tabContent-GDSQ'));
        }else{
            React.render(<InputContent projectId={this.props.json.Sysno} />, document.getElementById('tabContent-GDSQ'));
        }
    }

    closeAlert(){
        $("#expertBox-Node").html("");
        $(".reveal-modal-bg").hide();
    }

    render() {
        return (
            <div>
                <div id="expertBox" className="reveal-modal">
                    <a className="close-reveal-modal" onClick={this.closeAlert.bind(this)}></a>
                    <h3>预约专家</h3>
                    <div className="content">
                        <div className="expert-box">
                            <div className="expert-img-box">
                                <div className="expert-img">
                                    <img src={this.props.json.ImgUrlStr} />
                                </div>
                            </div>
                            <div className="expert-info">
                                <div className="info">
                                    <div className="name"><span className="t">昵称：</span>{this.props.json.Name}</div>
                                    <div className={1==1?"star dark "+this.props.json.StarStr+"": ""} ></div>
                                    <div className="clear"></div>
                                </div>
                                <div className="speciality"><span className="t">专长：</span>{this.props.json.Expertise}</div>
                                <div className="teach-box">
                                    <div className="abroad">
                                        <h5>海外教育</h5>
                                        <div className="desc">学校：<span>{this.props.over.School}</span></div>
                                        <div className="desc">专业：<span>{this.props.over.Major}</span></div>
                                        <div className="desc">学位：<span>{this.props.json.EduBackground}</span></div>
                                    </div>
                                    <div className="inland">
                                        <h5>国内教育</h5>
                                        <div className="desc">学校：<span>{this.props.dom.School}</span></div>
                                        <div className="desc">专业：<span>{this.props.dom.Major}</span></div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="tabs-box tabs-line expert-form">
                            <div className="tabs">
                                <div data-content="#intro" className={this.state.tab == "个人介绍" ? "item selected" : "item"} onClick={this.openTabsOne.bind(this)}>个人介绍</div>
                                <div data-content="#schedule" className={this.state.tab == "预约专家" ? "item selected" : "item"} onClick={this.openTabsOne.bind(this)}>预约专家</div>
                                <div className="clear"></div>
                            </div>
                            <div className="tab-content" id="tabContent-GDSQ"></div>
                        </div>
                    </div>
                </div>
                <div className="reveal-modal-bg"></div>
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){
        $(".reveal-modal-bg").show();
        React.render(<TabContent json={this.props.json.Remark} />, document.getElementById('tabContent-GDSQ'));
    }
}

export default Alert;
