//GetActionData.js
import React, { PropTypes } from 'react';
import Link from '../../../../../utils/Link';
import $ from 'jquery';

class GetActionData extends React.Component{


   render() {

            var propsArr = this.props.data;
            
            var nodes = propsArr.map(function(obj,index){

                if(index == 0){
                    return;
                }else{
                    return (<li><a onClick={Link.handleClick} href={"/AdvisoryDetail?id="+obj.Sysno}><span>{obj.Title}</span></a></li>);
                }
            });

            var firstHtml = propsArr.map(function(obj,index){

                if(index == 0){

                    if(obj.Remark.length > 110){

                        var content = obj.Remark.substr(0,110) + "...";
                    }else{

                        var content = obj.Remark;
                    }
                    return (<div className="firstMessage">
                               <div className="title"> <a onClick={Link.handleClick} href={"/AdvisoryDetail?id="+obj.Sysno} className="title_a">{obj.Title}</a></div>
                                <div className="content_f"><a onClick={Link.handleClick} href={"/AdvisoryDetail?id="+obj.Sysno} className="content_f_a">{content}</a></div>
                            </div>
                            );
                }else{

                    return false;
                }
            });

            return (
                <div>
                    {firstHtml}
                    <div className="dv_hr"></div>
                    <ul className="hot-box">
                    	{nodes}
                    </ul>
                </div>
            );
    }
        
    

}

export default GetActionData;
/**
 * xyx 2015.8.27
 */
