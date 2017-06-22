/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';

class FenYe extends React.Component{

    onChangePage(page) {
        //console.log("打印页码"+page);
        var ele;

        if(this.state.Type == "美国研究生院排名"){
            //console.log("这里更本不会执行啊1");
            ele = this.state.USAZhuanye;
        }else{
            //console.log("这里更本不会执行啊2");
            ele = this.state.USASchool;
        }
        console.log(ele);

      this.props.GetTableData(ele,page);

    }

    render() {

        var items;

        var Pagination = antd.Pagination;
        //console.log("总页数");
        //console.log(this.props.totalCount);
        /*console.log("当前页");
        console.log(this.props.currentPage);*/
        return (
            <Pagination showQuickJumper={true} showSizeChanger={true} onChange={this.onChangePage.bind(this)} total={this.props.tot} pageSize={20} />;
         );
    }
    componentDidMount(){

    }
}

export default FenYe;
