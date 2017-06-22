/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';

class Items extends React.Component{

    constructor(props) {
        
        super(props);
    }
    render() {
        var content = this.props.json.Content.replace(/\s/g, "");

        content = eval("("+content+")");

        return (
            <tr>
                <td>
                    {this.props.json.Ranking}
                </td>
                <td>
                    {this.props.json.UniversityName}
                </td>
                <td>
                    
                </td>
                <td>
                    45
                </td>
                <td>
                    616
                </td>
                <td>
                    88.7
                </td>
                <td>
                    88.6
                </td>
                <td>
                    98.9
                </td>
                <td>
                    11.3
                </td>
                <td>
                    3,246
                </td>
                <td>
                    1,000
                </td>
                <td>
                    <a href={1==1?"/CollegeTestFrom-英国-"+this.props.SchoolType+"-"+this.props.Sysno+"-"+this.props.json.Name+"":""} onClick={Link.handleClick} className="freeTest">免费评估</a>
                </td>
            </tr>
         );
    }
    componentDidMount(){

        
    }
}

export default Items;
