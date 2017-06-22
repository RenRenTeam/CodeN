
import React, { PropTypes } from 'react';
require('rc-checkbox/assets/index.css');
var Checkbox = require('rc-checkbox');

import SelectStyles from "./SetpB.less";
import withStyles from '../../../decorators/withStyles';
import DataList from './DataList/DataList.js';


@withStyles(SelectStyles)
class SetpB extends React.Component {
    mixins: [React.addons.LinkedStateMixin]
    constructor(props) {
        super(props);
        this.state = ({current:this.props.current});
    }
    componentDidMount() {

    }
/*    handleChange(e){
      this.props.CallbakChange(e.currentTarget.value);
    }*/
    userChoose(str){
        this.props.CallbakChange(str);
    }
    render() {
        var USAnodes=[];
        var countryStr=this.props.Country;
        var typeStr=this.props.Type;
        //console.log(typeStr);
        if(countryStr=="美国"){
            if(typeStr!="初三"&&typeStr!="高一"&&typeStr!="高二"){
                USAnodes=[];
                USAnodes.push(
                        <div className="USAMessage">
                            <br />
                            <p>人人留学为您提供两种选校途径：</p>
                            <p>途径一：填写完详细信息后，系统将在全美排名前200的大学中为您提供选校范围参考；</p>
                            <p>途径二：我们收录了100多所提供双录取课程的美国大学，为来不及参加各类考试，或者考试成绩不理想的同学，提供直接进入美国大学的机会。其中不乏排名前50的学校。</p>
                        </div>
                    );
            }
        }

        return (
            <div>

                <div className="title">2.根据你的需求及条件，以下留学方案可供选择（可多选）</div>
                {USAnodes}
                <div className="solutionDv">
                    <DataList country={this.props.Country} num={this.props.Sum} clickEvent={this.userChoose.bind(this)}/>
                    <div className="clear"></div>
                </div>
            </div>
    )}
}

export default SetpB;
