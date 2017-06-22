/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, {PropTypes} from 'react';
import withStyles from '../../decorators/withStyles';
import AppActions from '../../actions/AppActions';
import styles from './usaProjrct.less';
import Link from '../../utils/Link.js';

@withStyles(styles)
class USAProject extends React.Component  {
	static contextTypes = {
	      onSetTitle: PropTypes.func.isRequired
	  };
	  constructor(props) {
	        super(props);

	        this.state = { 
	            itemCurrent:'本科录取'
	        };
	    }
    	changeCurrent(e){

    		this.setState({
    			itemCurrent:e.target.innerHTML
    		});
    	}
          render() {
          	let title = '美国项目－人人留学';
    		this.context.onSetTitle(title);
                    return ( 
                    	<div className="usaProject_Node" id="dowebok">
                               	<div className="section" id="partOne">
                 				<a href="/USAProjectPage"  onClick={Link.handleClick}>
				          	<div className="co_Content">
					          	<img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usa-projectPage-index_Left.png" className="index_Left"  />
					          	<img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usa-projectPage-index_right.png"className="index_right" />
					          	<div className="clear"></div>
				          	</div>
		          		</a>
			          </div>
			          <div className="section" id="partTwo">
                 				<a href="/USAProjectPage"  onClick={Link.handleClick}>
				          	<div className="co_Content">
					          	<img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usa-projectPage-p2_left.png" className="p2_left"/>
					          	<img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usa-projectPage-p2_right.png"className="p2_right" />
					          	<div className="clear"></div>
				          	</div>
		          		</a>
			          </div>
			          <div className="section" id="partThree">
			          	<div className="co_Content">
				          	<img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usa-projectPage-icon1.png" className="icon1 icon"/>
				          	<img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usa-projectPage-icon2.png"className="icon2 icon" />
				          	<img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usa-projectPage-icon3.png" className="icon3 icon"/>
				          	<img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usa-projectPage-icon4.png"className="icon4 icon" />
				          	<div className="clear"></div>
				          	<div className="buttonDv">
				          		<a href="/USAProjectPage-benke"  onClick={Link.handleClick}><button  className={this.state.itemCurrent == "本科录取" ? "button-normal-dv one active" : "button-normal-dv one"} onClick={this.changeCurrent.bind(this)}>本科录取</button></a>
				          		<a href="/USAProjectPage-shuoshi" onClick={Link.handleClick}><button  className={this.state.itemCurrent == "硕士录取" ? "button-normal-dv active" : "button-normal-dv"} onClick={this.changeCurrent.bind(this)}>硕士录取</button></a>
				          	</div>
				          	<img src="http://7xnmna.com2.z0.glb.qiniucdn.com/usa-projectPage-notice.png" className="notice" />
			          	</div>
			          </div>
		          </div>
                    );
          }
          componentDidMount(){ 
          	$("html,body").animate({scrollTop:0},0);

          	$("#app").children().eq(0).css("height","100%");

          	$("#partOne .index_Left").attr("anim-data","{'slide-x':['-5%','5%'],'opacity':[0,1]}");
          	$("#partOne .index_Left").attr("delay-time","0.9");
          	$("#partOne .index_Left").attr("duration-time","1");
          	$("#partOne .index_Left").attr("anim-class","cls_13");


          	$("#partOne .index_right").attr("anim-data","{'slide-x':['155%','0'],'opacity':[0,1]}");
          	$("#partOne .index_right").attr("delay-time","0.9");
          	$("#partOne .index_right").attr("duration-time","1");
          	$("#partOne .index_right").attr("anim-class","cls_13");

          	$("#partTwo .p2_left").attr("anim-data","{'slide-y':['150%','0%'],'opacity':[0,1]}");
          	$("#partTwo .p2_left").attr("delay-time","0.9");
          	$("#partTwo .p2_left").attr("duration-time","1");
          	$("#partTwo .p2_left").attr("anim-class","cls_13");

          	$("#partTwo .p2_right").attr("anim-data","{'slide-y':['-150%','0%'],'opacity':[0,1]}");
          	$("#partTwo .p2_right").attr("delay-time","0.9");
          	$("#partTwo .p2_right").attr("duration-time","1");
          	$("#partTwo .p2_right").attr("anim-class","cls_13");


          	$("#partThree .icon1").attr("anim-data","{'slide-x':['-150%','0%'],'opacity':[0,1]}");
          	$("#partThree .icon1").attr("delay-time","0.9");
          	$("#partThree .icon1").attr("duration-time","1");
          	$("#partThree .icon1").attr("anim-class","cls_13");

          	$("#partThree .icon4").attr("anim-data","{'slide-x':['150%','0%'],'opacity':[0,1]}");
          	$("#partThree .icon4").attr("delay-time","0.9");
          	$("#partThree .icon4").attr("duration-time","1");
          	$("#partThree .icon4").attr("anim-class","cls_13");

          	$("#partThree .icon2").attr("anim-data","{'slide-y':['-150%','0%'],'opacity':[0,1]}");
          	$("#partThree .icon2").attr("delay-time","0.9");
          	$("#partThree .icon2").attr("duration-time","1");
          	$("#partThree .icon2").attr("anim-class","cls_13");

          	$("#partThree .icon3").attr("anim-data","{'slide-y':['150%','0%'],'opacity':[0,1]}");
          	$("#partThree .icon3").attr("delay-time","0.9");
          	$("#partThree .icon3").attr("duration-time","1");
          	$("#partThree .icon3").attr("anim-class","cls_13");

		$("#partThree .notice").attr("anim-data","{'zoom':[2,1],'opacity':[0,1]}");
          	$("#partThree .notice").attr("delay-time","0.9");
          	$("#partThree .notice").attr("duration-time","1");
          	$("#partThree .notice").attr("anim-class","cls_13");

	        	reSetCss();
	        	initAnimate($);
          	function reSetCss(section){
		    var removeAnimate = function(){
		        /**
		        * 移除当前区域的 CSS3属性
		        */
		        var content = $(".section");        

		        content.find('.slide-up').not(function(){return $(this).hasClass('be-show')}).addClass('slideUp');

		        var domlist = content.find('[anim-data]');

		        domlist.each(function(idx,dom){

		            var dom = $(dom);

		            dom.removeClass('play_'+dom.attr('anim-class'));
		        });

		        var domlist = content.find('[delay-class]');

		        domlist.each(function(idx,dom){

		            var dom = $(dom);

		            var dtime = parseFloat(dom.attr('delay-time'))+parseFloat(dom.attr('duration-time'));

		            setTimeout(function(){

		                dom.removeClass(dom.attr('delay-class'));

		            },dtime*1005);
		        });



		        /**
		        * 追加当前区域的 CSS3属性
		        */
		        var addAnimate = function(){

		            var content;
		            if(section)
		            {
		                content = $(section);
		            }else
		            {
		                content = $(".section");
		            }

		            content.find('.slide-up').not(function(){return $(this).hasClass('be-show')}).addClass('slideUp');

		            var domlist = content.find('[anim-data]');

		            domlist.each(function(idx,dom){

		                var dom = $(dom);

		                dom.addClass('play_'+dom.attr('anim-class'));
		            });

		            var domlist = content.find('[delay-class]');

		            domlist.each(function(idx,dom){

		                var dom = $(dom);

		                var dtime = parseFloat(dom.attr('delay-time'))+parseFloat(dom.attr('duration-time'));

		                setTimeout(function(){

		                    dom.addClass(dom.attr('delay-class'));

		                },dtime*1005);
		            });
		        }
		        setTimeout(function(){addAnimate()},500);
		    }
		    setTimeout(function(){removeAnimate()},100);
		}

          	$('#dowebok').fullpage({
		        sectionsColor: ['#49c4fa', '#fff','#ebebeb'],
		        verticalCentered: false,
		        resize: true,
		        continuousVertical: false,
		        onLeave: function (index, nextIndex, direction) {
		        	reSetCss();
		        }
		    });


          }
}

export default USAProject;
