//DataList.js
import React, { PropTypes } from 'react';
import $ from 'jquery';
require('rc-checkbox/assets/index.css');
var Checkbox = require('rc-checkbox');
import CountData from "../CountData/CountData.js";

class DataList extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = {follow:""}; 
    }

    handleChange(e){ 
    	this.props.clickEvent(e.currentTarget.value);
    }
    render() {
    	let countArr=CountData.countObj();
    	let DataArr=CountData.countTabObj();


    	let count=this.props.country;
    	let numStr=this.props.num;

    	let self=this;
    	let nodes="";
    	if(numStr&&parseInt(numStr)>=2&&parseInt(numStr)<=16){
    		let tabArr=countArr[count][numStr];
    		nodes=tabArr.map(function(obj,index){ 
				return (
					<li className="fullTabs thisHeight">
                        <label >
                            <div className="title">
                            <label> <Checkbox onChange={self.handleChange.bind(self)} defaultValue={obj}/>{obj}</label>
                            </div>
                            <div className="adDv">

                                <span className="advantageColor">优点：</span>{DataArr[count][obj][0]}
                            </div>
                            <div className="adDv">
                                <span className="advantageColor">缺点：</span>{DataArr[count][obj][1]}
                            </div>
                        </label>
                    </li>
				);
    			
    		});
    	}

        return (   
              	<ul className="ulSolution" >
         			{nodes}
                </ul>        
        );
    }

    //dom加载完调用
    componentDidMount(){

        //this.setState({follow:num});

    }
}

export default DataList;
//xyx 2015.10.10



