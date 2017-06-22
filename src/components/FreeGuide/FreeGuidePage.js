/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './FreeGuide.less';
import withStyles from '../../decorators/withStyles';
import AppActions from '../../actions/AppActions';

@withStyles(styles)
class FreeGuidePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {Country:"美国"}
    }

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    }

    handleGoCountryClick(e){
        var CountryStr=$(e.target).attr("data-value");
        this.setState({Country:CountryStr});
    }


    handleGoRequest(){
        AppActions.navigateTo("/StudySolution_" + this.state.Country);
    }


    render() {
        let title = '我要办－人人留学';
        this.context.onSetTitle(title);
        return (
            <div className="freePage">
                <div className="content">
                    <img src={require('./circle.png')} className="circle" />
                    <div className="itemDv" id="planCountry">
                        <div className={this.state.Country == "英国" ? "item uk active" : "item uk"} data-country="UK" data-value="英国" onClick={this.handleGoCountryClick.bind(this)}>
                            <i></i><div className="font" data-value="英国">英国</div>
                        </div>
                        <div className={this.state.Country == "美国" ? "item usa mLeft active" : "item usa mLeft"} data-country="USA" data-value="美国" onClick={this.handleGoCountryClick.bind(this)}>
                            <i></i><div className="font" data-value="美国">美国</div>
                        </div>
                        <div className={this.state.Country == "澳洲" ? "item au mTop active" : "item au mTop"} data-country="AUS" data-value="澳洲" onClick={this.handleGoCountryClick.bind(this)}>
                            <i></i><div className="font" data-value="澳洲">澳洲</div>
                        </div>
                        <div className={this.state.Country == "日本" ? "item jp mTop mLeft active" : "item jp mTop mLeft"} data-country="JP" data-value="日本" onClick={this.handleGoCountryClick.bind(this)}>
                            <i></i><div className="font" data-value="日本">日本</div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <button onClick={this.handleGoRequest.bind(this)}>我要申请</button>
                </div>
            </div>
        );
    }
}

export default FreeGuidePage;
