/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
import React, { PropTypes } from 'react';

import $ from 'jquery';

class Detail extends React.Component {

	constructor(props) {
        super(props);

        this.state = { 
           visible: true
        }
    }
	showModal(e) {

	    this.setState({
	    	
	      visible: false
	    });

	    this.state.visible = false;
	}
    render() {

		var Modal = antd.Modal;

        var flag = this.props.flag;

        var nodes =[];

        var arr = [1];

        nodes =arr.map(function(obj,index){
            if( flag == "生活知识" ){
                return (<p>
                        1、托运行李：<br />
                        一般的航空公司规定可以带两件免费托运行李，一件可以带到飞机内的手提行李。托运行李的重量一般为单件不能超过23公斤，手提行李重量为不超过5公斤。托运行李超重的话，罚金很重。每个航空公司稍有不同。出发前最好与航空公司确认一下有关规定。<br />
                        2、护照、在留资格认定书和入学通知书。<br />
                        护照自不必说，在留资格认定书和入学通知书等资料也要随身携带，不能放在托运行李中。因为在取托运行李之前需要先办理入国手续，入管局官员可能要求出示在留资格认定书和入学通知书。<br />
                        3、黑色圆珠笔：<br />
                        出入境时要填写各种表格，所以要随身携带一支黑色的圆珠笔。普通的圆珠笔或铅笔在百元店都有的卖，不需要戴上10支20支的备用，行李里面放上隔两三支足够了。<br />
                        4、印章：<br />
                        在日本刻章很贵，而且往往一来日本到银行开账户等很多情况下都需要印章，所以从国内带来较方便。日本通常用直径13-16毫米左右的圆章，而不是方章，字体最好使用繁体字，篆体等不容易被模仿的字体比较受欢迎。日本不承认橡皮章等软的印章，不需要印泥的原子章不能作为银行印使用，印章的材料最好是牛角等轻便又耐用的。<br />
                        4、证件照在日本办各种证件，找工作填履历书时都需要用彩色免冠照片。最经常用的尺寸是2寸的彩照，背景用白色或者蓝色为好。在日本照相馆拍3张2寸彩照至少需要2500日元左右，即使是一次性的无人操作的照相也要600日元，而且效果不太好。所以最好准备20-30张2寸，10张1寸的彩色免冠证件照备用。<br />
                        5、日元通常应该携带至少3个月的生活费，大约20-30万日元。因为到了日本之后，不一定能够马上找到工作，即使是很快找到工作，也一般实行月给，拿到工资也是在一个月以后。也就是说到日本拿到第一份薪水，最顺利的情况下也大约需要2个月的时间。<br />
                        6、另外要随身携带一些日元，供下飞机后购买电车票，机场大巴票等使用。通常有1，2万日元就足够了。方便给父母打电话报平安，机场的公用电话可以使用硬币，有几枚100日元的硬币就够了。如果不能事先准备硬币的话，可以在机场的商店买瓶水或者小东西找零（商店都不给兑换零钱）。或者购买专用电话卡，但是电话卡可能以后用的机会不是很多。<br />
                        7、药品可以携带少量的常规备用药（感冒类、退烧类、肠胃类等），但不用大量携带。特别是液体状的药最好不要带。
                        </p>
                        );
            }else{

                return (<p>
                            一、<br />
                            日元和兑换：日元有1000、2000、5000、10000元4种纸币，硬币共分1、5、10、50、100、500元6种。在日本的外汇兑换银行或者其他法定的外汇现金兑换处都可以将人民币兑换成日元；在主要的国际机场,也有为顾客提供货币兑换服务的外汇兑换窗口。初次赴日本留学，可适当准备一些零钱，用于乘坐公共交通、打电话等。   <br />
                            二 、<br />
                            日本的时间：日本时间比北京时间早1小时。 <br />
                            三、<br />
                            电压和插座：电压：日本的电压为 110V。插座：日本的用电插座是双平脚插座。圆柱形插头和三平脚插座插头在日本是无法使用的。所以，去日本留学时请带好转换插头。 <br />
                            四、<br />
                            交通：日本的交通出行很方便，出门尽量使用城市轻轨或地铁等公共交通。经常坐的路线可以买月票，一般分为1个月，3个月，半年。留学生一般可以凭学生证购买“通学”的打折月票。 <br />
                            五、<br />
                            手机和网络的申请和费用：
                            关于日本手机办理：在日本的中国留学生和华人基本都选择是有日本三大手机运营商之一的SOFTBANK公司的手机。只要携带学生证或保险证，银行口座，印章，就能够办理包括IPHONE在内任意一款手机。 　　　
                            在日本一般办理上网有以下几种方法：（1）向网络代理公司申请；（2）在购买电脑时在电器店申请办理；（3）向住宅合作网络公司申请。日本的网费一般都是按月计算，价格在3000～5000日元之间。留学生办理时需要的证件是：在留卡，学生证或保险证，银行口座，印章。 　<br />　
                            六、<br />
                            垃圾处理
                            在日本留学生活中乱扔垃圾是一个很严重的问题。垃圾一般分为可燃垃圾、不可燃垃圾、大型垃圾。由于每天扔垃圾的地点和时间已经确定，请按照规定的方式扔垃圾。 <br />
                            七、<br />
                            银行开户
                            日本的银行每个工作日的早上9点至下午3点期间营业。工作日期间早上8点到晚上9点，以及周末早上9点到下午5点可使拥自动柜员机。有了银行账户，每个月可以通过银行自动支付水电，电话费用。另外，有关部门可以通过银行账户将医疗费，税金退还给你，奖学金团体可以通过银行户头把奖学金汇给你，打工的工资也可以打到银行户头上。 开户头所需材料： 在留卡、印章、学生证<br />
                            八、<br />
                            国民健康保险
                            对于日本留学时间超过一年的留学生来说，就可以加入日本国民健康保险体系，享受到国民健康保险福利，一年的保费在9000-13000日元(约合600-1000元人民币)。加入后看病时自己仅需负担总医疗费的30%。加入手续在自己居住地的市(区)役所国民健康保险课办理。
                        </p>
                        );
            }
           
        });

        return (
        	<Modal title={flag} visible={this.state.visible} onCancel={this.showModal.bind(this)} onOk={this.showModal.bind(this)}>
		        {nodes}
	      	</Modal>
        );
    }

    componentDidMount() {
    	this.setState({
            
          visible: true
        });

        this.state.visible = true;
    }
}

export default Detail;