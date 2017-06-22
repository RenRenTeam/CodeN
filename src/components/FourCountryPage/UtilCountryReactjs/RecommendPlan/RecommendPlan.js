//RecommendPlan.js
import React, { PropTypes } from 'react';
import $ from 'jquery';
import Link from '../../../../utils/Link.js';

class RecommendPlan  extends React.Component {
    render() {

        var flag = this.props.flag;

        var html = [];


        if(flag == "JP"  ){
            html.push(<div>
                        <a href='javascript:void(0)' ><img src='http://7xnmna.com2.z0.glb.qiniucdn.com/jp-Ad.jpg' /></a>
                        <div className='clear'></div>
                    </div>);
        }else if(flag == "UK"){
            html.push(<div>
                        <a href='javascript:void(0)' ><img src='http://7xnmna.com2.z0.glb.qiniucdn.com/uk-Ad.jpg' /></a>
                        <div className='clear'></div>
                    </div>);

        }else if(flag == "AUS"){
                html.push(<div>
                        <a href='/FreeGuide' onClick={Link.handleClick}><img src='http://7xnmna.com2.z0.glb.qiniucdn.com/aus-Ad.jpg' /></a>
                        <div className='clear'></div>
                    </div>);

        }

        else{
            html.push(<div>
                        <a href='USAProject' onClick={Link.handleClick}><img src='http://7xnmna.com2.z0.glb.qiniucdn.com/index-Ad-plan.jpg' /></a>
                        <div className='clear'></div>
                    </div>);
        }

        return (
                <div>
                	{html}
                </div>
        );
    }
    componentDidMount() {
    }  
}

export default RecommendPlan;

/*xyx 2015.8.26*/


