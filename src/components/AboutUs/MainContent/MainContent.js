/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from '../AboutUs.less';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery';
var Rest = require('../../../utils/rest.js');
import Link from '../../../utils/Link.js';
import Common from '../../../utils/Common.js';

@withStyles(styles)
class MainContent extends React.Component {
	constructor(props) {
        super(props);
        this.state = {item:"hero"};
    }

	sendAboutUsMessage(e){



		var aboutUs_Name_Txt = $("#aboutUs_Name_Txt").val();

		var aboutUs_Phone_Txt = $("#aboutUs_Phone_Txt").val();

		var aboutUs_WeiXin_Txt = $("#aboutUs_WeiXin_Txt").val();

		var aboutUs_Question_Txt = $("#aboutUs_Question_Txt").val();

		if(aboutUs_Name_Txt == ""){

			Common.alert("姓名不能为空！");

			return false;

		}else if(aboutUs_Phone_Txt == ""){

			Common.alert("手机不能为空！");

			return false;

		}else if(!!aboutUs_Phone_Txt.match(/^1[\d]{10}$/) == false){

            Common.alert("请填写正确的手机号！");

            return false;
            
        }else if(aboutUs_WeiXin_Txt == ""){

			Common.alert("QQ/微信不能为空！");

			return false;

		}else if(aboutUs_Question_Txt == ""){

			Common.alert("请输入您要咨询的问题！");

			return false;

		}

		Rest.post('/MessageForUsService/InsertMessageForUsForJs',  
          {"CallBack":Date.now(),"ChildEntity":{"Name":aboutUs_Name_Txt,"Phone":aboutUs_Phone_Txt,"IM":aboutUs_WeiXin_Txt,"Remark":aboutUs_Question_Txt}}
          ,function(responseText){
            if(responseText.text != "留言失败" && responseText.text > 0){
            	
            	Common.alert("感谢您的建议！")

            }else{

				Common.alert("网络异常，稍后再试！")

            }
        });
	}
	
    render() {
        return (
        	<section>
	        	<section className="bannerSection">
			        <img src={require('../images/banner.jpg')} className="bannerImg" />
			    </section>
	            <section id="aboutUs">
			        <div className="left leftItm">
			            <div className="item hero"   data-flag="hero"><a href="/AboutUs-hero" onClick={Link.handleClick}>英雄招募</a></div>
			            <div className="item charge" data-flag="charge"><a href="/AboutUs-charge" onClick={Link.handleClick}>单向收费</a></div>
			            <div className="item service"  data-flag="service"><a href="/AboutUs-service" onClick={Link.handleClick}>服务特色</a></div>
			            <div className="item aboutsUs"  data-flag="aboutsUs"><a href="/AboutUs-aboutsUs" onClick={Link.handleClick}>关于我们</a></div>
			            <div className="item giveMeMes"  data-flag="giveMeMes"><a href="/AboutUs-giveMeMes" onClick={Link.handleClick}>给我留言</a></div>
			        </div>
			        <div className="left contentDv" id="hero">
			            <div className="title">英雄招募</div>
			            <div className="contentNode_AboutUs heroContent">
			            	<div className="heroFont" id="heroFont">
			            		<p>这是一个英雄辈出的年代，我们怎么可能网尽天下英雄？但我们可以利用人人留学的平台，为各路豪杰搭建一个展示才艺的
						大擂台。人人留学英雄榜，有才者居之。</p>

						<p className="p_margin">1、面向海外留学生
						      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只要你是留学生出身，如果你有兴趣也有时间，愿意帮助学弟、学妹们，请向我们递交申请；你可以指导申请，帮助修改
						文本、润色，甚至包括担任由人人留学安排的在线留学讲座的主讲人，和大家分享你的留学经历；所有的这些，人人留学都
						将按照你的付出支付报酬，在助人为乐的同时还有一份小小的收益，权当勤工俭学啦。</p></p>

						<p className="p_margin">2、面向海归创业者、名校毕业生、业内资深顾问
						      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你是海归，想自己创业；如果你毕业于名校，也有一份良好的职业，但你每年都愿意花一点时间帮助几个与你有着一
						样理想的年轻人；如果你是业内的资深顾问，在被老板压榨的同时，还存在着创业和财务自由的渴望；请让人人留学来帮助您
						，无论是实名还是匿名，只要经过人人的审核，我们将成为您的专职经纪人，我们将为您开设专属的网上工作室，有专业的助
						理团队为您服务，我们将按比例与您分享服务的收益，我们只拿取属于经纪人的那部分份额。</p></p>

						<p className="p_margin">3、面向海外服务机构：
						      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人人留学在上述6大留学国均已有海外合作伙伴，但我们仍愿意和更多的海外专业为留学生提供后续服务的机构建立长期
						合作关系；术业有专攻，如果您的机构在某个地区、某个领域有杰出的表现，欢迎和我们联系；有意向的机构需有至少5年以
						上的留学生服务经验，人人留学的专业管理团队都将实地考察。</p></p>


			            		<div className="heroFooter">
			            			<button onClick={this.callMe.bind(this)}>我要加入</button>
			            		</div>
			            	</div>
			            	<div className="heroIframe" id="heroIframe">
			            		<iframe id="heroIframeElement"   align="middle" height="1198" frameborder="0" width="860" scrolling="no" src="http://www.jpwind.com/renren/sq.html">
			            		</iframe>
			            	</div>
			            </div>
			        </div>
			        <div className="left contentDv" id="charge">
			            <div className="title">单向收费</div>
			            <div className="contentNode_AboutUs">
			            <p>
			            	<p className="colorRed">收费标准：</p>
	            		  	<p className="colorRed"> 美 国：名校申请收费；学校直录、双灵油项目按排名收市场最低价；</p>
	            		  	<p className="colorRed"> 英 国：G5收费，其他项目免费；</p>
	            		  	<p className="colorRed"> 澳 洲：全免费；</p>
	            		  	<p className="colorRed"> 日 本：G30、研究生收费；语言学校免费；</p>
	            		   	<p className="colorRed"> 新西兰：全免费； 加拿大：根据学校、项目不同，免费或收费。  </p>
							<p className="imgP">
								<img src="http://passport.shenyuan.org/WebResources/Default/images/xieTi.png" />
							</p>

				            	1、什么是单向收费？<br />
						      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;单向收费——真正与国际留学行业的接轨 现在很多的留学网站和中介机构，到处充斥着所谓的“零中介”，“学校直招”
						，各种称呼五花八门。这些，都没有道出留学行业的实质。 </p>
						      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其实很简单，只有3家运营商的手机都单向收费好多年了，为什么有500多家机构，已经发展了十多年的留学行业还在双
						向收费？这么多年，留学行业大部分的项目一直是在向申请学生收取留学中介费的同时，还在向学校收取包括佣金在内的各
						种费用。  </p>
						       <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人人留学将努力使中国的出国留学服务真正与国际接轨，也就是收费从双向变成单向。  </p>
						       <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1) 免费服务：能从海外学校获得收入的，全免费服务；  </p>
						       <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2) 收费服务：海外学校不支付费用的，提供优质优价的VIP收费服务。  </p>
						       <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最典型的是如下情况： 美国名校：不缺学生，哪来佣金？名校有名校的范； 日本大学：学费减免，哪来佣金？留学生的
						超国民待遇。  </p>
						      

				       	  
						<p>
						2、免费留学如何能成为可能？<br />
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;天下没有免费的午餐 </p>
						 <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们是企业，不是慈善机构，也不是公益组织。企业运营就一定有成本，我们也需要盈利来维持自身的运行和发展。在诚
						信普遍缺失的当下，所有的免费服务往往都会引起客户的极大怀疑，所以，我们有必要坦诚告知我们的运营模式。 </p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;免费了，我们的收入从哪里来？ 很简单，只要是免费的服务项目，关键的买单人一定是学校。很多国家的学校实行的是
						招生代理制度，最为突出的就是英国、澳大利亚、新西兰和日本的语言学校，这就意味着学校将为招生支付一定的推广费用
						，这也就是大家经常听到的招生佣金，但这笔费用并不会因为学生是自己申请的，而学校给予学生学费的减免。  </p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;免费了，为什么我们的服务会更加尽心？在您办理留学的整个流程中，我们不会收取任何服务费用，您如果在过程中发
						现任何不满意的地方都可以提请退出，从而让我们的劳动付之东流，所以，我们在整个留学办理过程中只会更加尽心，只有
						这样才能获得您的认可，您的从一而终，才能保证我们的收益。  </p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;免费了，我们也更需要您的诚意一旦正式开始学校的申请，我们将收取2000元人民币的信用押金，在您获得签证，汇付
						学费后，此信用押金我们将全额退还。如果您没有获得申请的学校录取通知书，此信用押金我们也将全额退还。我们仅希望
						您委托我们的留学申请是慎重和善意的。  </p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;什么是优质低价的网络留学服务？对照免费留学，已经很明确，就是我们无法获得学校的招生佣金，像英国排位前5的大
						学，美国、日本、加拿大的绝大部分大学，我们将酌情收取一定比例的服务费。 今天，互联网服务的普及，已经使得收费的
						网络留学服务成为优质低价的代名词。 </p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;成本降低：通过互联网，不用再像传统中介公司一样到处开设分支机构，这极大地节省了运营成本，使得人人留学一般
						收费服务项目的价格低于市场的平均价格。 </p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;专家汇聚：通过网络平台，人人留学可以迅速集聚各类优秀专家，无论身处何地，都可以在网上为你解疑答惑。人人学
						堂的各种公开课、专家一对一答疑都将陆续上线。 互联网服务的模式，以如今最热闹的美国前50大学的申请为例，人人留学
						的专家和顾问的背景，一定会让您彻底体会什么叫物超所值！ 我们目前服务的客户涵盖全国34个省、市、自治区（包括港澳
						台），还有一部分已经在海外留学，需要继续深造的学子。 </p>
						</p>
					</p>
			            </div>
			        </div>
			        <div className="left contentDv" id="service">
			            <div className="title">服务特色</div>
			            <div className="contentNode_AboutUs">
			            	<p>
			            		1、8大亮点<br />
		            			      <p>
						      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="fontBold">[ 申请简单化 ]</span> 轻松填表，10秒注册，10分钟完成申请材料提交<br /></p>
						      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="fontBold">[ 学校多样化 ]</span> 根据具体情况，每位申请者可以申请多所学校<br /></p>
						      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="fontBold">[ 流程透明化 ]</span> 整个申请流程全部展现在您面前，随时了解每一个步骤<br /></p>
						      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="fontBold">[ 顾问专业化 ]</span> 人人始终坚持最后的申请确认必须有专业的顾问把关<br /></p>
						      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="fontBold">[ 进展实时化 ]</span> 每个学校的反馈，最新进展都会通过手机第一时间告知<br /></p>
						      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="fontBold">[ 咨询随时化 ]</span> 我们不是朝九晚五的机构，我们保持12小时在线咨询<br /></p>
						      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="fontBold">[ 讯息及时化 ]</span> 个性化订阅学校动态，把握最佳申请时机<br /></p>
						      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="fontBold">[ 服务增值化 ]</span> 有完善的签证辅导，接机住宿安排，转学、升学指导<br /></p>
						      </p>
	      					<p className="p_margin">
						2、快速选校<br />
						       <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人人留学是国内首个集6大留学国：美、英、澳、日、加、新西兰为一体的留学申请选校系统（加、新尚在建设中）。
						提供包括中学、语言、预科、文凭课程、本科、硕士的全范围申请课程。请输入申请人的基本情况和留学的大致意向，系统
						会给出一个选校的参考范围。 人人留学的创始团队，由海外知名的侨领、世界一流名校的海归、外语培训行业的名师、传统
						中介公司资深高管组成，凭借多年的专业操作经验和拥有的众多海外教育资源，帮助同学们最快、最有效的申请到最适合的
						学校，提供整套的院校申请服务和签证指导。</p>
						</p>
						<p className="p_margin">
						3、与传统中介的差别<br />
						      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;很多通过中介办理过留学的学生都有这样的感觉，在咨询时，享受的是贵宾式服务，一旦签约付款后，都会有种失落感，
						上帝般的待遇没有了，还时不时的要自己去盯着顾问老师，询问进展，感觉自己的命运交到了别人手里，根本不由自己掌握。
						人人留学脱胎于传统中介，又超越了传统中介，最显著地两个特征是：</p>
						       <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我命由我不由天： 个性化的留学规划设置，打造最适合您的申请方案，全程自主掌握整个流程，信息完全透明。</p>
						       <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;双向收费变单项： 目前的留学行业大部分的项目是在收取留学中介费的同时，还在向学校收取佣金，我们做的只是把双
						向收费改成了单向收费，所以，您也就能心安理得接受我们的免费服务。但您也同样知道，如果学校不支付佣金，单向收费
						的对象就从学校变成了您，但互联网服务企业的低成本，使得您可以支付较低的价格就可以享受优质的服务。</p>
						</p>
						<p className="p_margin">
						4、与DIY的区别<br />
						      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DIY：是英文Do It Yourself的缩写，译为自己动手做，在这里指自助留学，也就是自己准备所有的申请材料，填写表格，
						邮寄资料，自己与申请院校直接对话交流的方式，自主完成由中介机构在留学申请过程中所有的工作。</p>
						      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DIY的优点显而易见：申请人直接申请留学，省去了留学中介费用；锻炼了自己的处事能力，提高了外语水平。</p>
						      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DIY的缺点也很明显 : <span className="fontBold">[ 没有经验 ] </span>DIY的学生都是第一次，对整个流程并不熟悉，缺乏申请经验的申请人很难把握一些细
						节上的问题；<span className="fontBold">[ 风险太高 ] </span>留学申请一旦出错，至少耽误半年到一年，这样的后果很难让人承受。</p>
						      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人人留学很好的和DIY无缝衔接 ：<span className="fontBold">[ 费用的节省 ]</span> 免费和低廉的收费，使和DIY在费用上的差距缩小；
						<span className="fontBold">[ 专业的指导 ]</span> 人人强大的顾问团队，把DIY可能产生的风险降到最低。</p>
						</p>
			            	</p>
			            </div>
			        </div>
			        <div className="left contentDv" id="aboutsUs">
			            <div className="title">关于我们</div>
			            <div className="contentNode_AboutUs">
			            	<p>1、建站缘由</p>
					      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;繁忙的工作之后…… 紧张的学习之余…… 孤独的海外旅程……</p>
					      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人人影视字幕组精心翻译的各类海外影片在不断帮助你提升外语水平的同时，也温暖着你的漫漫人生路。</p>
					      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人人影视字幕组汇聚着全球华人外语能力最强的一批成员，来自世界各地和祖国的四面八方，他们都有一颗用自己专业的
					外语知识为网友免费服务的公益心。</p>
					      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由留学生创立，直至今日，海外留学生仍是字幕组成员的重要组成部分。我们中的很多成员经历过申请学校的苦苦等待、
					面临签证时的忐忑不安、远离家乡踏上陌生国度的心理煎熬。</p>
					      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;今天，秉承人人影视一贯坚持的公益理念，集聚全球人人影视网迷的力量，在留学行业顶尖团队的支持下，我们郑重推出
					以留学服务单向收费为主的——人人留学网。</p>

					<p className="p_margin">2、聚焦人人<br />
					     <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人人留学——开启留学单向收费的新时代</p>
					     <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们90%的留学服务是免费的：取之学校，用之学生</p>
					     <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人人专家团为你的世界名校之路助力</p>
					     <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;提供齐全的美国大学直接录取、双录取项目</p>
					     <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首期推出美、英、澳、日留学服务，新西兰和加拿大敬请期待</p></p>

					<p className="p_margin">3、团队成员<br />
					      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;多年来，人人影视一直是中国最强大的字幕组，成员来自世界各地，各类外语人才齐全，他们一直默默地免费为网友们
					做着奉献。今天，在人人影视公益理念的感召下，人人留学的旗帜下汇聚了各行精英。</p>
					      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创始团队：由人人影视字幕组管理团队、海外知名的侨领、世界一流名校的海归、外语培训行业的名师、传统中介公司
					资深高管组成。</p>
					      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;专家团队：有来自留学行业的资深专家，他们在十几年前开始探索为中国自费留学生提供专业的咨询时，留学中介行业
					都还没有诞生；有来自改革开放后，睁眼看世界的早期留学生，他们经历的艰辛是今天的学子们无法理解和体会的；也有近
					几年出国留学学成回国的海归们。</p>
					       <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;英雄团队：自己的团队再强，怎么可能网尽天下英雄？凭借人人影视字幕组强大的号召力，我们颁布了人人英雄征集令
					，招募对象为海外留学生、海归创业者、名校毕业生、业内资深顾问，匿名、实名都欢迎，我们将在人人留学搭建一个申请
					学生和各路豪杰自由交流的平台。</p>
					       <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们共同的理想是：把人人留学打造成真正和世界接轨的互联网留学服务公司。</p>
				       	</p>
			            </div>
			        </div>
			        <div className="left contentDv" id="giveMeMes">
			            <div className="title">给我留言</div>
			            <div className="inputDv">
			                <input type="text" placeholder="姓名" id="aboutUs_Name_Txt" />
			            </div>
			            <div className="inputDv">
			                <input type="text" placeholder="手机" id="aboutUs_Phone_Txt" />
			            </div>
			            <div className="inputDv">
			                <input type="text" placeholder="QQ/微信" id="aboutUs_WeiXin_Txt" />
			            </div>
			            <div className="textatraDv">
			                <textarea placeholder="你要咨询的问题" id="aboutUs_Question_Txt"></textarea>
			            </div>
			            <div className="btnDv">
			                <button className="button-normal" onClick={this.sendAboutUsMessage.bind(this)}>发送</button>
			            </div>
			        </div>
			        <div className="clear"></div>
			    </section>
		    </section>
        );
    }
    callMe(){
		$(".heroFont").hide();
		$("#heroIframe").show();
	}
	componentWillReceiveProps(){    


    }


    componentDidMount() { 
    	let url=window.location.href;
    	url=url.substring(url.indexOf("/AboutUs-")+"/AboutUs-".length);
    	if(url=="aboutsUs"){
    		$("#aboutUs leftItm item").removeClass("active backColor");
    		$("#aboutUs leftItm aboutsUs").addClass("active backColor");
    		$(".contentDv").hide();
    		$("#aboutsUs").show();
    	}else if(url=="service"){
    		$("#aboutUs leftItm item").removeClass("active backColor");
    		$("#aboutUs leftItm service").addClass("active backColor");
    		$(".contentDv").hide();
    		$("#service").show();
    	}else if(url=="charge"){
    		$("#aboutUs leftItm item").removeClass("active backColor");
    		$("#aboutUs leftItm charge").addClass("active backColor");
    		$(".contentDv").hide();
    		$("#charge").show();
    	}else if(url=="hero"){
    		$("#aboutUs leftItm item").removeClass("active backColor");
    		$("#aboutUs leftItm hero").addClass("active backColor");
    		$(".contentDv").hide();
    		$("#hero").show();
    	}

        $(".leftItm").find(".item").click(function () {
            var flag = $(this).attr("data-flag");

            $(this).addClass("active backColor").siblings().removeClass("active backColor");

            $(".contentDv").hide();

            $("#" + flag).show();

        });
        $("#heroIframe").hide();
	}
    
}

export default MainContent;
