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
import RegisterPage from '../RegisterPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage.js';

//注册
import Register from '../Register';
import RegisterEndPage from '../RegisterEndPage/RegisterEndPage';

import FindPassword from '../FindPassword';
import UpdatePassword from '../UpdatePassword';


//免费办理
import FreeGuide from '../FreeGuide';
import StudySolution from '../FreeGuide/StudySolution';
//公开课
import OpenClass from '../OpenClass/OpenClass';
import OpenClassDetail from '../OpenClass/OpenClassDetail';
//咨询库
import AdvisoryLibrary from '../AdvisoryLibrary';
import AdvisoryDetail from '../AdvisoryLibrary/AdvisoryDetail';
//院校库
import College from '../College/College';
import CollegeDetail from '../CollegeDetail/CollegeDetail';
//国家页面
import AUS from '../FourCountryPage/AUS';
import Jp from '../FourCountryPage/JP';
import USA from '../FourCountryPage/USA';
import UK from '../FourCountryPage/UK';

//大学排名
import CollegeRank from '../CollegeRank';
//关于我们
import AboutUs from '../AboutUs/AboutUs';

import Loading from '../Loading/loading';

//免费申请
import CollegeTestFrom from '../CollegeTestFrom/CollegeTestFrom.js';

//活动假页面
import ActivityPage from '../ActivityPage/ActivityPage.js';

//美国项目页
import USAProject from '../USAProjrct/USAProjrct.js';
import USAProjectPage from '../USAProjrct/USAProjectPage/USAProjectPage.js';

import AUSIBT from '../FourCountryPage/AUS/AUS_IBT/AUS_IBT.js';

const pages = { IndexPage, RegisterPage,
  NotFoundPage,Register,FreeGuide,StudySolution,OpenClass,OpenClassDetail,AdvisoryLibrary,
  AdvisoryDetail,College,CollegeDetail,Jp,USA,UK,AUS,CollegeRank,AboutUs,Loading,RegisterEndPage,FindPassword,
  UpdatePassword,ActivityPage,USAProject,USAProjectPage,AUSIBT };

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
        case '/':
            component = <IndexPage />;
            break;
        case '/about':
        case '/privacy':
            let page = AppStore.getPage(this.props.path);
            component = React.createElement(pages[page.component], page);
            break;
        case '/RegisterEndPage':
            component = <RegisterEndPage />;
            break;
        case '/NotFoundPage':
            component = <NotFoundPage />;
            break;
        case '/FindPassword':
            component = <FindPassword />;
            break;    
        case '/contact':
            component = <ContactPage />;
            break;
        case '/register':
            component = <RegisterPage />;
            break;
        case '/FreeGuide':
            component = <FreeGuide />;
            break;        
        case '/OpenClass':
            component = <OpenClass />;
            break;
        case '/OpenClassDetail':
            component = <OpenClassDetail />;
            break;
        case '/AdvisoryLibrary':
            component = <AdvisoryLibrary />;
            break;
        case '/AdvisoryDetail':
            component = <AdvisoryDetail />;
            break;
        case '/College':
            component = <College />;
            break;
        case '/Jp':
            component = <Jp />;
            break;
        case '/USA':
            component = <USA />;
            break;
        case '/UK':
            component = <UK />;
            break;
        case '/AUS':
            component = <AUS />;
            break;
        case '/CollegeRank':
            component = <CollegeRank />;
            break;
        case '/AboutUs':
            component = <AboutUs />;
            break;
        case '/CollegeTestFrom':
            component = <CollegeTestFrom />;
            break;
        case '/UpdatePassword':
            component = <UpdatePassword />;
            break;
        case '/ActivityPage':
            component = <ActivityPage />;
            break;
        case '/USAProjectPage':
            component = <USAProjectPage />;
            break;
        case '/USAProject':
            component = <USAProject />;
            break;
        case '/AUSIBT':
            component = <AUSIBT />;
            break;
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
    }else if(this.props.path.indexOf('NotFoundPage') > -1){
        return (
          <div>
            <NotFoundPage />
          </div>
        );
    }else if(this.props.path.indexOf('AdvisoryLibrary') > -1){
        return (
           <div>
            <Header />
            <AdvisoryLibrary />
            <Footer />
          </div>
        );
    }
    else if(this.props.path.indexOf('AdvisoryDetail') > -1){
        return (
          <div>
            <section id="pageloader_AdvisoryDetail" >
                <div className="loader-item fa fa-spin colored-border"></div>
            </section>
            <Header />
            <AdvisoryDetail />
            <Footer />
          </div>
        );
    }else if(this.props.path.indexOf('USAProjectPage') > -1){
        return (
          <div>
            <Header />
            <USAProjectPage />
            <Footer />
          </div>
        );
    }else if(this.props.path.indexOf('USAProject') > -1){
        return (
          <div>
            <Header />
            <USAProject />
            <Footer />
          </div>
        );
    }else if(this.props.path.indexOf('CollegeTestFrom') > -1){
        return (
          <div>
            <Header />
            <CollegeTestFrom />
            <Footer />
          </div>
        );
    }else if(this.props.path.indexOf('StudySolution') > -1){
        return (
          <div>
            <Header />
            <StudySolution />
            <Footer />
          </div>
        );
    }else if(this.props.path.indexOf('CollegeDetail') > -1){
        return (
          <div>
            <section id="pageloader_appPager" >
                <div className="loader-item fa fa-spin colored-border"></div>
            </section>
            <Header />
            <CollegeDetail />
            <Footer />
          </div>
        );
    }else if(this.props.path.indexOf('OpenClassDetail') > -1){
        return (
          <div>
             <section id="pageloader_ClassDetail" >
                <div className="loader-item fa fa-spin colored-border"></div>
            </section>
            <Header />
            <OpenClassDetail />
            <Footer />
          </div>
        );
    }else if(this.props.path.indexOf('OpenClass') > -1){
        return (
          <div>
            <Header />
            <OpenClass />
            <Footer />
          </div>
        );
    }else if(this.props.path.indexOf('CollegeRank') > -1){
        return (
          <div>
            <Header />
            <CollegeRank />
            <Footer />
          </div>
        );
    }else if(this.props.path.indexOf('College') > -1){
        return (
          <div>
            <Header />
            <College />
            <div id="collegeLoadFooter">
               
            </div>
          </div>
        );
    }
    else if(this.props.path.indexOf('USAProject') > -1){
        return (
          <div>
            <Header />
            <USAProject />
            <Footer />
          </div>
        );
    }
    else if(this.props.path.indexOf('AboutUs') > -1){
        return (
          <div>
            <Header />
            <AboutUs />
            <Footer />
          </div>
        );
    }
    else if(this.props.path.indexOf('RegisterEndPage') > -1){
        return (
          <RegisterEndPage />
        );
    }
    else if(this.props.path.indexOf('FindPassword') > -1){
        return (
          <FindPassword />
        );
    }
    else if(this.props.path.indexOf('Register') > -1){
        return (
          <RegisterPage />
        );
    }
    else if(this.props.path.indexOf('UpdatePassword') > -1){
        return (
          <UpdatePassword />
        );
    }else if(this.props.path.indexOf('ActivityPage') > -1){
        return (
          <ActivityPage />
        );
    }else{
        return component ? (
          <div>
            <Header />
            {component}
            <Footer />
          </div>
        ) : <NotFoundPage />;
    }
  }
  handlePopState(event) {
    AppActions.navigateTo(window.location.pathname, {replace: !!event.state});
  }

}

export default App;

