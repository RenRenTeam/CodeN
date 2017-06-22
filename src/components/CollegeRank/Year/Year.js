/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';
import Items from './Items/Items.js'



class Year extends React.Component {

  render() {

    var items;

    var changeYear_Function = this.props.changeYear_Function.bind(this);

    var getData_Function = this.props.getData.bind(this);

    //console.log(this.props.year);

    getData_Function("", "", this.props.year);

    if (this.props.json instanceof Array) {
      items = this.props.json.map(function(item) {
        return (<Items json = {item} changeYear_Function={changeYear_Function} />)
      });
    }

    return (
      <div>
                <div className="title">按年份：</div>
                <ul className="college-filter-list" id="getCurrentYear_CollegeRank">
                    {items}
                </ul>
            </div>
      );
  }
  componentDidMount() {}
}

export default Year;
