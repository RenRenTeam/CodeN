/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
import React, { PropTypes } from 'react';

import $ from 'jquery';
import Common from '../../../../../utils/Common.js'

class Detail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {   visible: false }
    }
    showModal(e) {
        Common.showBox(this.props.data.Title,this.props.data.Remark)
        //this.setState({   visible: true  });
    }
    closeModal(){
         this.setState({ visible: false });
    }
    render() {

        var obj = this.props.data;
        var imgSource=Common.imageSource();

        return (
            <div  className="cSliderItem"   onClick={this.showModal.bind(this)}>
                <img src={imgSource+obj.ImgUrlStr}  />
                <div className="title-box" >
                    <div className="title" >{obj.Title} </div>
                    <div className="title-bg" ></div>
                </div>
             </div>
        	
        );
    }

    componentDidMount() {
    	this.setState({   visible: false  });

    }
}

export default Detail;