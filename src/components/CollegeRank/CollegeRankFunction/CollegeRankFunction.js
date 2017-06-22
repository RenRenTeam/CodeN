/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';
import MiddleContent from '../MiddleContent/MiddleContent.js';
import ZhuanYeTable from '../ZhuanYeTable/ZhuanYeTable.js'

var Rest = require('../../../utils/Rest.js');


function CollegeRankFunction(state){

    $("#div_rank").html("");

    $("#nodeMiddleContent").html("");

    var area_Var = state.Area;

    var type_Var = state.Type;

    var pingPai_Var = state.PingPai;

    var year_Var = state.Year;

    if(area_Var == "英国"){
        React.render(<MiddleContent area = {area_Var} leiXing={type_Var} type={pingPai_Var} />, document.getElementById('nodeMiddleContent'));
    }  
    
}


export default CollegeRankFunction;

