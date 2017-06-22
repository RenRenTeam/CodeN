/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './App.less';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import Header from '../Header';
import Footer from '../Footer';

import IndexPage from '../IndexPage';

import Loading from '../Loading/loading';

const pages = { IndexPage,Loading};

@withContext
@withStyles(styles)
class App {

  static propTypes = {
    path: PropTypes.string.isRequired
  };

  componentDidMount() {
    window.addEventListener('popstate', this.handlePopState);

       echo.init({
        offset: 100,
        throttle: 250,
        unload: false,
        callback: function (element, op) {
          console.log(element, 'has been', op + 'ed')
        }
      });
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.path !== nextProps.path;
  }

  render() {
    let component;

    var path = this.props.path;
    
    if(path.indexOf('?') > -1){
        path = path.substr(0,path.indexOf('?'));

    }
    switch (path) {
        default :
            component = <IndexPage />;
            break;
    }
    if(this.props.path == "/"){
        return (
          <div>
            <Loading />
          </div>
        );
    }
  }
  handlePopState(event) {
    AppActions.navigateTo(window.location.pathname, {replace: !!event.state});
  }

}

export default App;

