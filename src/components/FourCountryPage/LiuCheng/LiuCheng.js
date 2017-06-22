/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
import React, { PropTypes } from 'react';
import styles from './LiuCheng123.less';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';

import $ from 'jquery';

@withStyles(styles)
class LiuCheng {
    render() {
        return (
            <section className="banLiLiuCheng" id="banLiLiuCheng">
		        <h1>办理流程</h1>
		        <div className="titleFont">
		            <span className="item active" data-flag-o ="yuyanSchool">语言学校</span>
		            <span className="item" data-flag-o ="universitySchool">日本大学</span>
		            <span className="item" data-flag-o ="universitySchoolYuan">大学院</span>
		            <span className="item" data-flag-o ="highJp">日本高中</span>
		            <span className="item" data-flag-o ="zhuangmenSchool">专门学校</span>
		        </div>

		        <div className="itBigDv" id="yuyanSchool">
		            <div className="blueLine"></div>
		            <div className="banLiLiuChengContent">
		                <div className="itemImgDv online" data-flag="yuyan-online">
		                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-pen.png" className="pen imgItem" />
		                    <div>在线报名</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv choose" data-flag="yuyan-choose">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-school.png" className="school imgItem" />
		                    <div>选择学校</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv qianYue" data-flag="yuyan-qianYue">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianYue.png" className="qianYue imgItem" />
		                    <div>签约办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv caiLiao" data-flag="yuyan-caiLiao">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-caiLiao.png" className="caiLiao imgItem" />
		                    <div>材料办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv get" data-flag="yuyan-get">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-get.png" className="get imgItem" />
		                    <div>获得在留</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv qianZheng" data-flag="yuyan-qianZheng">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianZheng.png" className="qianZheng imgItem" />
		                    <div>签证办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv toSchool" data-flag="yuyan-toSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-toSchool.png" className="toSchool imgItem"  />
		                    <div>赴日留学</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv full inSchool" data-flag="yuyan-inSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-inSchool.png" className="inSchool imgItem" />
		                    <div>在日服务</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="clear"></div>
		            </div>
		            <div className="followLine">
		                <div className="dvLinxing">
		                    <div className="linXing full">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font"><a href="http://node.rrliuxue.com/College" target="_blank">院校检索</a></div>
		                    </div>
		                    <div className="linXing linXing2">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font" id="zhidingliuxuejkihua"><a href="http://node.rrliuxue.com/FreeGuide" target="_blank">制定留学计划</a></div>
		                    </div>
		                    <div className="linXing">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">学校面试</div>
		                    </div>
		                    <div className="linXing linXing2">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">电话抽查</div>
		                    </div>
		                    <div className="linXing">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">支付学费</div>
		                    </div>

		                    <div className="linXing">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">接机服务</div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		                <div className="clear"></div>
		            </div>
		            <div className="mainPart">
		                <div className="mainBgPart">
		                    <div className="newItemDv online" id="yuyan-online">
		                        <div className="newItem newItemA" data-delay="1.5" data-orgel ="yuyan_online_item1">
		                            申请学校条件
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.3" data-orgel ="yuyan_online_item2">
		                            就读语言学校
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.1" data-orgel ="yuyan_online_item3">
		                            费用相关问题
		                        </div>
		                        <div className="newItem newItemD" data-delay="0.9" data-orgel ="yuyan_online_item4">
		                            免费留学服务
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv choose"  id="yuyan-choose">
		                        <div className="newItem newItemA" data-delay="1.3"  data-orgel ="yuyan_choose_item1">
		                            如何择校
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.1" data-orgel="yuyan_choose_item2">
		                            学费相关
		                        </div>
		                        <div className="newItem newItemC" data-delay="0.9"  data-orgel="yuyan_choose_item3">
		                            入学时间
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv qianYue"  id="yuyan-qianYue">
		                        <div className="newItem newItemA" data-delay="1.5" data-orgel="yuyan_qianYue_item1">
		                            签订服务合同
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.3" data-orgel="yuyan_qianYue_item2">
		                            协助翻译邮寄
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.1"  data-orgel="yuyan_qianYue_item3">
		                            付学校报名费
		                        </div>
		                        <div className="newItem newItemD" data-delay="0.9" data-orgel="yuyan_qianYue_item4">
		                            面试注意事项
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv caiLiao"  id="yuyan-caiLiao">
		                        <div className="newItem newItemA"  data-delay="1.1" data-orgel="yuyan_cailiao_item1">
		                            提供哪些材料
		                        </div>
		                       <div className="newItem newItemB" data-delay="0.9"  data-orgel="yuyan_cailiao_item2">
		                            材料相关问题
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv qianZheng"  id="yuyan-qianZheng">
		                        <div className="newItem newItemA" data-delay="1.1"  data-orgel="yuyan_qianZheng_item1">
		                            提供哪些材料
		                        </div>
		                       <div className="newItem newItemB" data-delay="0.9"  data-orgel="yuyan_qianZheng_item2">
		                            签证注意事项
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv2 toSchool" id="yuyan-toSchool">
		                        <div className="newItem newItemA"  data-delay="1.7" data-orgel="yuyan_toSchool_item1">
		                            住宿费用
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.5" data-orgel="yuyan_toSchool_item2">
		                            生活成本
		                        </div>
		                         <div className="newItem newItemC"  data-delay="1.3" data-orgel="yuyan_toSchool_item3">
		                            勤工俭学
		                        </div>
		                        <div className="newItem newItemD"  data-delay="1.1" data-orgel="yuyan_toSchool_item4">
		                            生活知识
		                        </div>
		                        <div className="newItem newItemE"  data-delay="0.9" data-orgel="yuyan_toSchool_item5">
		                            行前准备
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv3 inSchool" id="yuyan-inSchool">
		                        <div className="newItem newItemA"  data-delay="1.7" data-orgel="yuyan_inSchool_item1">
		                            初到协助
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.5" data-orgel="yuyan_inSchool_item2">
		                            学生聚会
		                        </div>
		                         <div className="newItem newItemC"  data-delay="1.3" data-orgel="yuyan_inSchool_item3">
		                            应急协助
		                        </div>
		                        <div className="newItem newItemD"  data-delay="1.1" data-orgel="yuyan_inSchool_item4">
		                            打工求职
		                        </div>
		                        <div className="newItem newItemE"   data-delay="0.9" data-orgel="yuyan_inSchool_item5">
		                            升学辅导
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		                <div className="allContent">
		                    <div className="contentDvItem" id="yuyan_online_item1" >
		                        <i className="iconArrow"></i>
		                        学历要求：具有或将拥有12 年以上学历<br />
		                        年龄要求：一般不超过30 岁，或毕业不超过5 年<br />
		                        日语要求：具备初级的日本语能力，建议在国内至 少有150 学时的日语学习经历<br />
		                        经济要求：能负担第一年学费和部分生活费，能筹措15 -20 万元人民币左右短期经济担保金。
		                    </div>
		                    <div className="contentDvItem" id="yuyan_online_item2">
		                        <i className="iconArrow"></i>
		                        日本大学原则上全部采用日语授课，语言也是融入日本社会的必要手段。
		                        语言学校能迅速帮助你日语能力的提升。在校学习期间，可同时进行系统化专业化的升学辅导（校内或者校外），能为将来考取日本一流大学提供有力的保障。
		                        中国留学生想考取日本大学必须通过EJU考试、校内考试。
		                        校内考各校时间都不同，时间跨度也大，在日本语言学校学习期间，能在老师指导下奔赴各个考场应考。
		                    </div>
		                    <div className="contentDvItem" id="yuyan_online_item3">
		                        <i className="iconArrow"></i>
		                        语言学校费用：每个学校的收费标准各不相同，基本上第一年的总体费用在70 万日元左右；第二年的费用一般在60 万日元左右。日本不同地区的学费差异不大，平均差距不会超过5 万日元。<br />
		                        生活月费用：1、住宿费3-4万日币（两人间）  2、水电等费用0.5-1万日币   3、其他伙食交通等费5万日币左右<br />
		                        打工月收入：以大多数留学生打工28小时计算，约为12-15万日币左右。
		                    </div>
		                    <div className="contentDvItem" id="yuyan_online_item4">
		                        <i className="iconArrow"></i>
		                        人人留学的宗旨就是开创单向收费模式。
		                        我们坚持免费的理念，与我们正式签约合作的数百所优良校均经实地考察，学校会向我们提供宣传费和市场推广费用于维持我们机构的运营。
		                        而学生即使跨越语言以及地域障碍直接找学校签约，也不可能有任何减免或优惠。通过我们，您却会多收获一份专业的服务和指导，何乐不为！
		                    </div>
		                    <div className="contentDvItem" id="yuyan_choose_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">地理位置</font>：主要看学校的教育环境是否良好，交通是否方便。
		                        根据个人的不同，有喜欢选择在闹市中心的，也有喜欢在僻静地区的学校。同时还要关注学校附近的住宿、打工等条件。<br />
		                        <font className="bold">是否优良校</font>：日本的语言学校绝大部分都是优良校（也称适正校）。
		                        优良校的历史悠久，学校资金充裕，师资配备完善。毕业生在日进学率、进学情况相对比较良好。<br />
		                        <font className="bold">课程设置</font>：某些学校还会开设各种针对性的课程，例如留学生考试对策、大学院升学辅导、商务就职课程等等。当然，日本现地也有许多优秀专业的升学辅导机构供您选择。

		                    </div>
		                    <div className="contentDvItem" id="yuyan_choose_item2">
		                        <i className="iconArrow"></i>
		                        学校费用四部分组成： 1、选考料（报名费）2-3万日元； 2、学校入学金5-10万日元； 3、一年学费50-60万日元左右（语言学校学制最短半年，最长两年）；4、杂费：设施设备，教材、活动等。每个语言学校的收费标准各不相同，但是基本上第一年的总体费用在70 万日元左右；第二年的费用一般在60 万日元左右。日本不同地区的学费差异不大，平均差距不会超过5 万日元。
		                    </div>
		                    <div className="contentDvItem" id="yuyan_choose_item3">
		                        <i className="iconArrow"></i>
		                        日本语言学校的入学时间非常灵活，一年可以四次入学，分别是一月，四月，七月和十月；日本大学的入学时间都是在春季四月，这和我们国家秋季入学的时间正好相反。
		                        <font className="bold">四月</font>是去日本留学最主要时期，也是国内很多应届毕业生提早赴日留学的最佳时间点。
		                        <font className="bold">七月</font>入读语言学校的学制是九个月或一年九个月，由于入学时间紧挨在国内学校毕业时间，对于部分无法提早赴日的应届高中或大学生来讲，这是最佳的时间点。
		                        <font className="bold">十月</font>入学是仅次于四月的一个入学期，一年半的学制既不浪费时间，又可让学生有充裕时间准备留学考试。
		                        <font className="bold">一月</font>入学因为学习时间最短（一般不能超过1年3个月），一般都建议日语至少3级以上或者升学意愿不强烈的学生选择该时间段入学。

		                    </div>
		                    <div className="contentDvItem" id="yuyan_qianYue_item4">
		                        <i className="iconArrow"></i>
		                        <font className="bold">留学动机方面</font>：主要是询问学生的赴日动机、目的；为何会选择日本、本城市、本学校。<br />
		                        <font className="bold">留学条件方面</font>：询问家长的经济实力、在职单位、职务、年收入等。对孩子出国留学的看法。<br />
		                        <font className="bold">日语提问环节</font>：涉及名字、年龄、日语学习时间、何时毕业、去日本学什么专业，等等之类。还有也会问出生日期，在哪个学校毕业的，在哪个学校学的日语等等之类。<br />
		                        用日语问的问题一般就几个，目的只是想了解一下你是否真的学过日语，所以日语的问题不会多也不会太难。网络面试时发音吐字要清晰，现场面试时要注意自己的行为举止和着装礼仪。
		                    </div>
		                    <div className="contentDvItem" id="yuyan_cailiao_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">个人部分</font>：学历成绩证明、护照、户口本、日语能力证明、报名照<br />
		                        <font className="bold">担保人部分</font>：在职收入证明、户口本、存款证明和存单
		                    </div>
		                    <div className="contentDvItem" id="yuyan_cailiao_item2">
		                        <i className="iconArrow"></i>
		                        <font className="bold">什么是担保金</font>：担保金是用来证明学生家庭拥有足够负担学生在日学习生活费用；担保金不需要汇至海外，而是采用定期存单的方式，存在担保人名下，一般建议选择国内四大银行或全国性的商业银行。<br />
		                        <font className="bold">担保人概念</font>：担保人一般均为申请人的直系亲属，建议选择父母亲中的一位；如单人收入较低，也可选择父母两人同时担保。<br />
		                        <font className="bold">关于学历证明</font>：学历证明文件包括毕业证书，学校开具的在读或者预毕业证明以及由中国政府部门出具的学历认证报告。
		                    </div>
		                    <div className="contentDvItem" id="yuyan_qianZheng_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">换签材料包括</font>：在留资格认定证明书（日本入国管理局提供）、个人护照、照片1张、毕业证原件、户口本和担保人在职证明原件、签证申请表和学生调查表。
		                    </div>
		                    <div className="contentDvItem" id="yuyan_qianZheng_item2">
		                        <i className="iconArrow"></i>
		                        <font className="bold">·</font>&nbsp;&nbsp;请根据所在地查询归属哪个领区，并向领区内日本使领馆指导的代办窗口递交材料。<br />
		                        <font className="bold">·</font>&nbsp;&nbsp;根据地区不同，签证收费和办理时间会有所不同。<br />
		                        <font className="bold">·</font>&nbsp;&nbsp;嫌麻烦的同学可以委托我们代为换签，具体咨询签证老师。
		                    </div>
		                    <div className="contentDvItem" id="yuyan_toSchool_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">学生宿舍（俗称"寮"）</font>：通常分为4人间、2人间和单人间。东京地区的月租价格，4人间一般在2.5万—3.5万日元，2人间在3万-4.5万不等，单人间一般在5-7万不等。其他地区相对会略低一些。 <br />
		                        <font className="bold">专门性留学生宿舍 </font>：一般有专业的宿舍公司负责运营。仅限留学生居住，人源较整齐，社会关系较简单。租金一般和学校宿舍价格差不多。 <br />
		                        <font className="bold">民间出租住房</font>：较常见住宿形式一，且选择范围较广。需要日本人作连带担保人。租金根据地段，房间大小和设备差异比较大。从5万—15万不等。<br />
		                        
		                    </div>
		                    <div className="contentDvItem" id="yuyan_toSchool_item2">
		                        <i className="iconArrow"></i>
		                        生活费主要包括住宿费用、伙食费、交通费用、以及其他娱乐活动等费用。根据日本学生支援机构公布的数据，日本留学生平均每月需138,000日元（包含学费）。<br />
		                        <font className="bold">伙食费</font>：伙食费标准因人而异，自己做饭一定比外面买着吃会便宜很多。正常情况下，留学生每月的伙食费应该在3万—6万日元不等。<br />
		                        <font className="bold">交通费</font>：以东京为例，地铁成人单程票价种类有：160日元(起步价1-6公里内)、190日元、230日元、270日元和300日元。　电车(俗称的JR线)一般的票价在130-210日元。留学生还享有学生优惠，或者购买月票。 
		                    </div>
		                    <div className="contentDvItem" id="yuyan_toSchool_item3">
		                        <i className="iconArrow"></i>
		                        日本法务省根据外国人签证种类（在留资格）的不同，对于打工时间和打工内容做出了严格的限制。每周允许打工28个小时（就读大学院的学生14小时），学校寒暑假期间每天8个小时。在日本打工根据工作性质收入也不相同，目前东京地区一小时的薪水一般在900-1200日元不等。
		                    </div>
		                    <div className="contentDvItem" id="yuyan_toSchool_item4">
		                        <i className="iconArrow"></i>
		                        在日本的生活知识包括日本的货币、电源、电压、交通方式、手机网络办理、垃圾处理知识、银行开户以及国民健康保险等。具体详情请点击<a className="showBigContent">这里</a>。
		                       


		                    </div>
		                
		                    <div className="contentDvItem" id="yuyan_toSchool_item5">
		                        <i className="iconArrow"></i>
		                       

		                        恭喜你已经拿到了赴日签证，到达日本前有一些注意的要点，包括行李要求、常用物品、应急药物等等。具体详情请点击<a className="showBigContent">这里</a>。

		                    </div>
		                </div>
		            </div>
		        </div>

		        <div className="itBigDv fadeOut animated" id="universitySchool">
		            <div className="blueLine"></div>
		            <div className="banLiLiuChengContent">
		                <div className="itemImgDv online" data-flag="daxue-online">
		                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-pen.png" className="pen imgItem" />
		                    <div>在线报名</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv qianYue" data-flag="daxue-qianYue">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianYue.png" className="qianYue imgItem" />
		                    <div>签约办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv choose" data-flag="daxue-choose">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-school.png" className="school imgItem" />
		                    <div>学校录取</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv caiLiao" data-flag="daxue-caiLiao">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-caiLiao.png" className="caiLiao imgItem" />
		                    <div>材料办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv get" data-flag="daxue-get">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-get.png" className="get imgItem" />
		                    <div>获得在留</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv qianZheng" data-flag="daxue-qianZheng">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianZheng.png" className="qianZheng imgItem" />
		                    <div>签证办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv toSchool" data-flag="daxue-toSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-toSchool.png" className="toSchool imgItem"  />
		                    <div>赴日留学</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv full inSchool" data-flag="daxue-inSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-inSchool.png" className="inSchool imgItem" />
		                    <div>在日服务</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="clear"></div>
		            </div>
		            <div className="followLine daxue_Follow">
		                <div className="dvLinxing">
		                    <div className="linXing linXing2">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">入学考试</div>
		                    </div>
		                    <div className="linXing">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">支付学费</div>
		                    </div>
		                    <div className="linXing linXingjieji">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">接机服务</div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		                <div className="clear"></div>
		            </div>
		            <div className="mainPart">
		                <div className="mainBgPart">
		                    <div className="newItemDv online" id="daxue-online">
		                        <div className="newItem newItemA" data-delay="1.7" data-orgel ="daxue_online_item1">
		                            直招申请条件
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.5" data-orgel ="daxue_online_item2">
		                            国内直招大学
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.3" data-orgel ="daxue_online_item3">
		                            费用相关问题
		                        </div>
		                        <div className="newItem newItemD" data-delay="1.1" data-orgel ="daxue_online_item4">
		                            免费提供服务
		                        </div>
		                        <div className="newItem newItemD" data-delay="0.9" data-orgel ="daxue_online_item5" id="daxue_online_item5_im">
		                            如何考取名校
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>

		                    <div className="newItemDv qianYue"  id="daxue-qianYue">
		                        <div className="newItem newItemA" data-delay="1.5" data-orgel="daxue_qianYue_item1">
		                            签订服务合同
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.3" data-orgel="daxue_qianYue_item2">
		                            协助翻译邮寄
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.1"  data-orgel="daxue_qianYue_item3">
		                            付学校报名费
		                        </div>
		                        <div className="newItem newItemD" data-delay="0.9" data-orgel="daxue_qianYue_item4">
		                            入学考试相关
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv caiLiao"  id="daxue-caiLiao">
		                        <div className="newItem newItemA"  data-delay="1.1" data-orgel="daxue_cailiao_item1">
		                            材料明细
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv qianZheng"  id="daxue-qianZheng">
		                        <div className="newItem newItemA" data-delay="1.1"  data-orgel="daxue_qianZheng_item1">
		                            提供哪些材料
		                        </div>
		                       <div className="newItem newItemB" data-delay="0.9"  data-orgel="daxue_qianZheng_item2">
		                            签证注意事项
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv2 toSchool" id="daxue-toSchool">
		                        <div className="newItem newItemA"  data-delay="1.7" data-orgel="daxue_toSchool_item1">
		                            住宿费用
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.5" data-orgel="daxue_toSchool_item2">
		                            生活成本
		                        </div>
		                         <div className="newItem newItemC"  data-delay="1.3" data-orgel="daxue_toSchool_item3">
		                            勤工俭学
		                        </div>
		                        <div className="newItem newItemD"  data-delay="1.1" data-orgel="daxue_toSchool_item4">
		                            生活知识
		                        </div>
		                        <div className="newItem newItemE"  data-delay="0.9" data-orgel="daxue_toSchool_item5">
		                            行前准备
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv3 inSchool" id="daxue-inSchool">
		                        <div className="newItem newItemA"  data-delay="1.7" data-orgel="daxue_inSchool_item1">
		                            初到协助
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.5" data-orgel="daxue_inSchool_item2">
		                            学生聚会
		                        </div>
		                         <div className="newItem newItemC"  data-delay="1.3" data-orgel="daxue_inSchool_item3">
		                            应急协助
		                        </div>
		                        <div className="newItem newItemD"  data-delay="1.1" data-orgel="daxue_inSchool_item4">
		                            打工求职
		                        </div>
		                        
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		                <div className="allContent">
		                    <div className="contentDvItem" id="daxue_online_item1" >
		                        <i className="iconArrow"></i>
		                        学历要求：高中（含中专、职校）及以上学历<br />
		                        年龄要求：25 岁以下<br />
		                        语言要求：有日本语能力2级水平及以上<br />
		                        经济要求：至少能负担第一年学费和部分生活费，能筹措15 -20 万元人民币左右短期经济担保金。<br />
		                        （仅供参考）
		                    </div>
		                    <div className="contentDvItem" id="daxue_online_item2">
		                        <i className="iconArrow"></i>
		                        目前可在中国考试并招收学生的日本大学主要有：东京福祉大学、关东学园大学、大阪产业大学、大阪经济法科大学、长崎国际大学等。
		                    </div>
		                    <div className="contentDvItem" id="daxue_online_item3">
		                        <i className="iconArrow"></i>
		                        学费：私立大学第一年费用在110万日元左右，后续每年大概80万日元左右。但留学生一般都可以至少获得30%的学费减免。基本上4年学费支出一般在250万日元左右。<br />
		                        生活月费用：1、住宿费3-4万日币（两人间） 2、水电等费用0.5-1万日币 3、其他伙食交通等费5万日币左右<br />
		                        打工月收入：以大多数留学生打工28小时计算，约为12-15万日币左右。不过大学生因为课业比较繁重，特别是理工类学生，打工时间比较少。

		                    </div>
		                    <div className="contentDvItem" id="daxue_online_item4">
		                        <i className="iconArrow"></i>
		                        人人留学的宗旨就是开创单向收费模式。
		                        我们坚持免费的理念，与我们正式签约合作的数百所优良校均经实地考察，学校会向我们提供宣传费和市场推广费用于维持我们机构的运营。
		                        而学生即使跨越语言以及地域障碍直接找学校签约，也不可能有任何减免或优惠。通过我们，您却会多收获一份专业的服务和指导，何乐不为！
		                    </div>
		                    <div className="contentDvItem" id="daxue_online_item5">
		                        <i className="iconArrow"></i>
		                        日本90%以上大学都不在海外直接招生留学生，如你想考取日本名校，可先去日本就读语文学校过渡再考取大学，具体方法见“<font className="blueFont" id="gotoYuyan">语言学校</font>”环节或咨询我们老师。
		                    </div>
		                    <div className="contentDvItem" id="daxue_choose_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">地理位置</font>：主要看学校的教育环境是否良好，交通是否方便。
		                        根据个人的不同，有喜欢选择在闹市中心的，也有喜欢在僻静地区的学校。同时还要关注学校附近的住宿、打工等条件。<br />
		                        <font className="bold">是否优良校</font>：日本的语言学校绝大部分都是优良校（也称适正校）。
		                        优良校的历史悠久，学校资金充裕，师资配备完善。毕业生在日进学率、进学情况相对比较良好。<br />
		                        <font className="bold">课程设置</font>：某些学校还会开设各种针对性的课程，例如留学生考试对策、大学院升学辅导、商务就职课程等等。当然，日本现地也有许多优秀专业的升学辅导机构供您选择。

		                    </div>
		                    <div className="contentDvItem" id="daxue_choose_item2">
		                        <i className="iconArrow"></i>
		                        学校费用四部分组成： 1、选考料（报名费）2-3万日元； 2、学校入学金5-10万日元； 3、一年学费50-60万日元左右（语言学校学制最短半年，最长两年）；4、杂费：设施设备，教材、活动等。每个语言学校的收费标准各不相同，但是基本上第一年的总体费用在70 万日元左右；第二年的费用一般在60 万日元左右。日本不同地区的学费差异不大，平均差距不会超过5 万日元。
		                    </div>
		                    <div className="contentDvItem" id="daxue_choose_item3">
		                        <i className="iconArrow"></i>
		                        日本语言学校的入学时间非常灵活，一年可以四次入学，分别是一月，四月，七月和十月；日本大学的入学时间都是在春季四月，这和我们国家秋季入学的时间正好相反。
		                        <font className="bold">四月</font>是去日本留学最主要时期，也是国内很多应届毕业生提早赴日留学的最佳时间点。
		                        <font className="bold">七月</font>入读语言学校的学制是九个月或一年九个月，由于入学时间紧挨在国内学校毕业时间，对于部分无法提早赴日的应届高中或大学生来讲，这是最佳的时间点。
		                        <font className="bold">十月</font>入学是仅次于四月的一个入学期，一年半的学制既不浪费时间，又可让学生有充裕时间准备留学考试。
		                        <font className="bold">一月</font>入学因为学习时间最短（一般不能超过1年3个月），一般都建议日语至少3级以上或者升学意愿不强烈的学生选择该时间段入学。

		                    </div>
		                    <div className="contentDvItem" id="daxue_qianYue_item4">
		                        <i className="iconArrow"></i>
		                        <font className="bold">笔试科目</font>：日语、英语（部分学校）、数学（部分学校）<br />
		                        <font className="bold">面试要点</font>：个人基本情况介绍、赴日动机目标和计划、家庭经济情况、日语学习经历和目前的日语水平（能用日语回答更棒）。
		                    </div>
		                    <div className="contentDvItem" id="daxue_cailiao_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">个人部分</font>：学历成绩证明、护照、户口本、日语能力证明、报名照、亲属关系公证书<br />
		                        <font className="bold">担保人部分</font>：在职收入证明、户口本、存款证明和存单
		                    </div>
		                    <div className="contentDvItem" id="daxue_cailiao_item2">
		                        <i className="iconArrow"></i>
		                        <font className="bold">什么是担保金</font>：担保金是用来证明学生家庭拥有足够负担学生在日学习生活费用；担保金不需要汇至海外，而是采用定期存单的方式，存在担保人名下，一般建议选择国内四大银行或全国性的商业银行。<br />
		                        <font className="bold">担保人概念</font>：担保人一般均为申请人的直系亲属，建议选择父母亲中的一位；如单人收入较低，也可选择父母两人同时担保。<br />
		                        <font className="bold">关于学历证明</font>：学历证明文件包括毕业证书，学校开具的在读或者预毕业证明以及由中国政府部门出具的学历认证报告。
		                    </div>
		                    <div className="contentDvItem" id="daxue_qianZheng_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">换签材料包括</font>：在留资格认定证明书（日本入国管理局提供）、个人护照、照片1张、毕业证原件、户口本和担保人在职证明原件、签证申请表和学生调查表。
		                    </div>
		                    <div className="contentDvItem" id="daxue_qianZheng_item2">
		                        <i className="iconArrow"></i>
		                        <font className="bold">·</font>&nbsp;&nbsp;请根据所在地查询归属哪个领区，并向领区内日本使领馆指导的代办窗口递交材料。<br />
		                        <font className="bold">·</font>&nbsp;&nbsp;根据地区不同，签证收费和办理时间会有所不同。<br />
		                        <font className="bold">·</font>&nbsp;&nbsp;嫌麻烦的同学可以委托我们代为换签，具体咨询签证老师。
		                    </div>
		                    <div className="contentDvItem" id="daxue_toSchool_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">学生宿舍（俗称"寮"）</font>：通常分为4人间、2人间和单人间。东京地区的月租价格，4人间一般在2.5万—3.5万日元，2人间在3万-4.5万不等，单人间一般在5-7万不等。其他地区相对会略低一些。 <br />
		                        <font className="bold">专门性留学生宿舍 </font>：一般有专业的宿舍公司负责运营。仅限留学生居住，人源较整齐，社会关系较简单。租金一般和学校宿舍价格差不多。 <br />
		                        <font className="bold">民间出租住房</font>：较常见住宿形式一，且选择范围较广。需要日本人作连带担保人。租金根据地段，房间大小和设备差异比较大。从5万—15万不等。<br />
		                        
		                    </div>
		                    <div className="contentDvItem" id="daxue_toSchool_item2">
		                        <i className="iconArrow"></i>
		                        生活费主要包括住宿费用、伙食费、交通费用、以及其他娱乐活动等费用。根据日本学生支援机构公布的数据，日本留学生平均每月需138,000日元（包含学费）。<br />
		                        <font className="bold">伙食费</font>：伙食费标准因人而异，自己做饭一定比外面买着吃会便宜很多。正常情况下，留学生每月的伙食费应该在3万—6万日元不等。<br />
		                        <font className="bold">交通费</font>：以东京为例，地铁成人单程票价种类有：160日元(起步价1-6公里内)、190日元、230日元、270日元和300日元。　电车(俗称的JR线)一般的票价在130-210日元。留学生还享有学生优惠，或者购买月票。 
		                    </div>
		                    <div className="contentDvItem" id="daxue_toSchool_item3">
		                        <i className="iconArrow"></i>
		                        日本法务省根据外国人签证种类（在留资格）的不同，对于打工时间和打工内容做出了严格的限制。每周允许打工28个小时（就读大学院的学生14小时），学校寒暑假期间每天8个小时。在日本打工根据工作性质收入也不相同，目前东京地区一小时的薪水一般在900-1200日元不等。
		                    </div>
		                    <div className="contentDvItem" id="daxue_toSchool_item4">
		                        <i className="iconArrow"></i>
		                        在日本的生活知识包括日本的货币、电源、电压、交通方式、手机网络办理、垃圾处理知识、银行开户以及国民健康保险等。具体详情请点击<a className="showBigContent">这里</a>。
		                    </div>
		                
		                    <div className="contentDvItem" id="daxue_toSchool_item5">
		                        <i className="iconArrow"></i>
		                         恭喜你已经拿到了赴日签证，到达日本前有一些注意的要点，包括行李要求、常用物品、应急药物等等。具体详情请点击<a className="showBigContent">这里</a>。
		                    </div>
		                </div>
		            </div>
		        </div>

		        <div className="itBigDv fadeOut animated" id="universitySchoolYuan">
		            <div className="blueLine"></div>
		            <div className="banLiLiuChengContent">
		                <div className="itemImgDv online" data-flag="daxueyuan-online">
		                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-pen.png" className="pen imgItem" />
		                    <div>在线报名</div>
		                    <div className="bluePoint"></div>
		                </div>
		                
		                <div className="itemImgDv qianYue" data-flag="daxueyuan-qianYue">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianYue.png" className="qianYue imgItem" />
		                    <div>签约办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv choose" data-flag="daxueyuan-choose">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-school.png" className="school imgItem" />
		                    <div>教授认可</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv caiLiao" data-flag="daxueyuan-caiLiao">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-caiLiao.png" className="caiLiao imgItem" />
		                    <div>大学出愿</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv get" data-flag="daxueyuan-get">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-get.png" className="get imgItem" />
		                    <div>获得在留</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv qianZheng" data-flag="daxueyuan-qianZheng">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianZheng.png" className="qianZheng imgItem" />
		                    <div>签证办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv toSchool" data-flag="daxueyuan-toSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-toSchool.png" className="toSchool imgItem"  />
		                    <div>赴日留学</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv full inSchool" data-flag="daxueyuan-inSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-inSchool.png" className="inSchool imgItem" />
		                    <div>在日服务</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="clear"></div>
		            </div>
		            <div className="followLine daxueyuan_Follow">
		                <div className="dvLinxing">
		                    <div className="linXing full">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">支付服务费</div>
		                    </div>
		                    <div className="linXing linXing2">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">研究计划书</div>
		                    </div>
		                    <div className="linXing">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">支付报名费</div>
		                    </div>
		                    <div className="linXing linXing2">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">支付学费</div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		                <div className="clear"></div>
		            </div>
		            <div className="mainPart">
		                <div className="mainBgPart">
		                    <div className="newItemDv online" id="daxueyuan-online">
		                        <div className="newItem newItemA" data-delay="1.7" data-orgel ="daxueyuan_online_item1">
		                            读研申请条件
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.5" data-orgel ="daxueyuan_online_item2">
		                            研究生的优势
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.3" data-orgel ="daxueyuan_online_item3">
		                            费用相关问题
		                        </div>
		                        <div className="newItem newItemD" data-delay="1.1" data-orgel ="daxueyuan_online_item4">
		                            服务收费标准
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>

		                    <div className="newItemDv qianYue"  id="daxueyuan-qianYue">
		                        <div className="newItem newItemA" data-delay="1.5" data-orgel="daxueyuan_qianYue_item1">
		                            签订服务合同
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.3" data-orgel="daxueyuan_qianYue_item2">
		                            协助翻译邮寄
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.1"  data-orgel="daxueyuan_qianYue_item3">
		                            付学校报名费
		                        </div>
		                        <div className="newItem newItemD" data-delay="0.9" data-orgel="daxueyuan_qianYue_item4">
		                            面试笔试指导
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv caiLiao"  id="daxueyuan-caiLiao">
		                        <div className="newItem newItemA"  data-delay="1.1" data-orgel="daxueyuan_cailiao_item1">
		                            材料明细
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv qianZheng"  id="daxueyuan-qianZheng">
		                        <div className="newItem newItemA" data-delay="1.1"  data-orgel="daxueyuan_qianZheng_item1">
		                            提供哪些材料
		                        </div>
		                       <div className="newItem newItemB" data-delay="0.9"  data-orgel="daxueyuan_qianZheng_item2">
		                            签证注意事项
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv2 toSchool" id="daxueyuan-toSchool">
		                        <div className="newItem newItemA"  data-delay="1.7" data-orgel="daxueyuan_toSchool_item1">
		                            住宿费用
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.5" data-orgel="daxueyuan_toSchool_item2">
		                            生活成本
		                        </div>
		                         <div className="newItem newItemC"  data-delay="1.3" data-orgel="daxueyuan_toSchool_item3">
		                            勤工俭学
		                        </div>
		                        <div className="newItem newItemD"  data-delay="1.1" data-orgel="daxueyuan_toSchool_item4">
		                            生活知识
		                        </div>
		                        <div className="newItem newItemE"  data-delay="0.9" data-orgel="daxueyuan_toSchool_item5">
		                            行前准备
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv3 inSchool" id="daxueyuan-inSchool">
		                        <div className="newItem newItemA"  data-delay="1.7" data-orgel="daxueyuan_inSchool_item1">
		                            初到协助
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.5" data-orgel="daxueyuan_inSchool_item2">
		                            学生聚会
		                        </div>
		                         <div className="newItem newItemC"  data-delay="1.3" data-orgel="daxueyuan_inSchool_item3">
		                            应急协助
		                        </div>
		                        <div className="newItem newItemD"  data-delay="1.1" data-orgel="daxueyuan_inSchool_item4">
		                            打工求职
		                        </div>

		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		                <div className="allContent">
		                    <div className="contentDvItem" id="daxueyuan_online_item1" >
		                        <i className="iconArrow"></i>
		                        学历要求：高中（含中专、职校）及以上学历<br />
		                        年龄要求：25 岁以下<br />
		                        语言要求：有日本语能力2级水平及以上<br />
		                        经济要求：至少能负担第一年学费和部分生活费，能筹措15 -20 万元人民币左右短期经济担保金。<br />
		                        （仅供参考）
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_online_item2">
		                        <i className="iconArrow"></i>
		                        目前可在中国考试并招收学生的日本大学主要有：东京福祉大学、关东学园大学、大阪产业大学、大阪经济法科大学、长崎国际大学等。
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_online_item3">
		                        <i className="iconArrow"></i>
		                        学费：私立大学第一年费用在110万日元左右，后续每年大概80万日元左右。但留学生一般都可以至少获得30%的学费减免。基本上4年学费支出一般在250万日元左右。<br />
		                        生活月费用：1、住宿费3-4万日币（两人间） 2、水电等费用0.5-1万日币 3、其他伙食交通等费5万日币左右<br />
		                        打工月收入：以大多数留学生打工28小时计算，约为12-15万日币左右。不过大学生因为课业比较繁重，特别是理工类学生，打工时间比较少。

		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_online_item4">
		                        <i className="iconArrow"></i>
		                        人人留学的宗旨就是开创单向收费模式。
		                        我们坚持免费的理念，与我们正式签约合作的数百所优良校均经实地考察，学校会向我们提供宣传费和市场推广费用于维持我们机构的运营。
		                        而学生即使跨越语言以及地域障碍直接找学校签约，也不可能有任何减免或优惠。通过我们，您却会多收获一份专业的服务和指导，何乐不为！
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_choose_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">地理位置</font>：主要看学校的教育环境是否良好，交通是否方便。
		                        根据个人的不同，有喜欢选择在闹市中心的，也有喜欢在僻静地区的学校。同时还要关注学校附近的住宿、打工等条件。<br />
		                        <font className="bold">是否优良校</font>：日本的语言学校绝大部分都是优良校（也称适正校）。
		                        优良校的历史悠久，学校资金充裕，师资配备完善。毕业生在日进学率、进学情况相对比较良好。<br />
		                        <font className="bold">课程设置</font>：某些学校还会开设各种针对性的课程，例如留学生考试对策、大学院升学辅导、商务就职课程等等。当然，日本现地也有许多优秀专业的升学辅导机构供您选择。

		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_choose_item2">
		                        <i className="iconArrow"></i>
		                        学校费用四部分组成： 1、选考料（报名费）2-3万日元； 2、学校入学金5-10万日元； 3、一年学费50-60万日元左右（语言学校学制最短半年，最长两年）；4、杂费：设施设备，教材、活动等。每个语言学校的收费标准各不相同，但是基本上第一年的总体费用在70 万日元左右；第二年的费用一般在60 万日元左右。日本不同地区的学费差异不大，平均差距不会超过5 万日元。
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_choose_item3">
		                        <i className="iconArrow"></i>
		                        日本语言学校的入学时间非常灵活，一年可以四次入学，分别是一月，四月，七月和十月；日本大学的入学时间都是在春季四月，这和我们国家秋季入学的时间正好相反。
		                        <font className="bold">四月</font>是去日本留学最主要时期，也是国内很多应届毕业生提早赴日留学的最佳时间点。
		                        <font className="bold">七月</font>入读语言学校的学制是九个月或一年九个月，由于入学时间紧挨在国内学校毕业时间，对于部分无法提早赴日的应届高中或大学生来讲，这是最佳的时间点。
		                        <font className="bold">十月</font>入学是仅次于四月的一个入学期，一年半的学制既不浪费时间，又可让学生有充裕时间准备留学考试。
		                        <font className="bold">一月</font>入学因为学习时间最短（一般不能超过1年3个月），一般都建议日语至少3级以上或者升学意愿不强烈的学生选择该时间段入学。

		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_qianYue_item4">
		                        <i className="iconArrow"></i>
		                        <font className="bold">留学动机方面</font>：主要是询问学生的赴日动机、目的；为何会选择日本、本城市、本学校。<br />
		                        <font className="bold">留学条件方面</font>：询问家长的经济实力、在职单位、职务、年收入等。对孩子出国留学的看法。<br />
		                        <font className="bold">日语提问环节</font>：涉及名字、年龄、日语学习时间、何时毕业、去日本学什么专业，等等之类。还有也会问出生日期，在哪个学校毕业的，在哪个学校学的日语等等之类。<br />
		                        用日语问的问题一般就几个，目的只是想了解一下你是否真的学过日语，所以日语的问题不会多也不会太难。网络面试时发音吐字要清晰，现场面试时要注意自己的行为举止和着装礼仪。
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_cailiao_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">个人部分</font>：本科毕业和大学成绩证明、毕业论文、研究计划书、教授推荐信、个人获奖证明、英语和日语等级证明。<br />
		                        <font className="bold">担保人部分</font>：在职收入证明、户口本、存款证明和存单
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_qianZheng_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">换签材料包括</font>：在留资格认定证明书（日本入国管理局提供）、个人护照、照片1张、毕业证原件、户口本和担保人在职证明原件、签证申请表和学生调查表。
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_qianZheng_item2">
		                        <i className="iconArrow"></i>
		                        <font className="bold">·</font>&nbsp;&nbsp;请根据所在地查询归属哪个领区，并向领区内日本使领馆指导的代办窗口递交材料。<br />
		                        <font className="bold">·</font>&nbsp;&nbsp;根据地区不同，签证收费和办理时间会有所不同。<br />
		                        <font className="bold">·</font>&nbsp;&nbsp;嫌麻烦的同学可以委托我们代为换签，具体咨询签证老师。
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_toSchool_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">学生宿舍（俗称"寮"）</font>：通常分为4人间、2人间和单人间。东京地区的月租价格，4人间一般在2.5万—3.5万日元，2人间在3万-4.5万不等，单人间一般在5-7万不等。其他地区相对会略低一些。 <br />
		                        <font className="bold">专门性留学生宿舍 </font>：一般有专业的宿舍公司负责运营。仅限留学生居住，人源较整齐，社会关系较简单。租金一般和学校宿舍价格差不多。 <br />
		                        <font className="bold">民间出租住房</font>：较常见住宿形式一，且选择范围较广。需要日本人作连带担保人。租金根据地段，房间大小和设备差异比较大。从5万—15万不等。<br />
		                        
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_toSchool_item2">
		                        <i className="iconArrow"></i>
		                        生活费主要包括住宿费用、伙食费、交通费用、以及其他娱乐活动等费用。根据日本学生支援机构公布的数据，日本留学生平均每月需138,000日元（包含学费）。<br />
		                        <font className="bold">伙食费</font>：伙食费标准因人而异，自己做饭一定比外面买着吃会便宜很多。正常情况下，留学生每月的伙食费应该在3万—6万日元不等。<br />
		                        <font className="bold">交通费</font>：以东京为例，地铁成人单程票价种类有：160日元(起步价1-6公里内)、190日元、230日元、270日元和300日元。　电车(俗称的JR线)一般的票价在130-210日元。留学生还享有学生优惠，或者购买月票。 
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_toSchool_item3">
		                        <i className="iconArrow"></i>
		                        日本法务省根据外国人签证种类（在留资格）的不同，对于打工时间和打工内容做出了严格的限制。每周允许打工28个小时（就读大学院的学生14小时），学校寒暑假期间每天8个小时。在日本打工根据工作性质收入也不相同，目前东京地区一小时的薪水一般在900-1200日元不等。
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_toSchool_item4">
		                        <i className="iconArrow"></i>
		                        在日本的生活知识包括日本的货币、电源、电压、交通方式、手机网络办理、垃圾处理知识、银行开户以及国民健康保险等。具体详情请点击<a className="showBigContent">这里</a>。
		                    </div>
		                
		                    <div className="contentDvItem" id="daxueyuan_toSchool_item5">
		                        <i className="iconArrow"></i>
		                         恭喜你已经拿到了赴日签证，到达日本前有一些注意的要点，包括行李要求、常用物品、应急药物等等。具体详情请点击<a className="showBigContent">这里</a>。
		                    </div>
		                </div>
		            </div>
		        </div>
		        
		        <div className="itBigDv fadeOut animated" id="highJp">
		            <div className="blueLine"></div>
		            <div className="banLiLiuChengContent">
		                <div className="itemImgDv online" data-flag="highJp-online">
		                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-pen.png" className="pen imgItem" />
		                    <div>在线报名</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv choose" data-flag="highJp-qianYue">
		                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianYue.png" className="qianYue imgItem" />
		                    <div>签约办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv qianYue" data-flag="highJp-choose">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-school.png" className="school imgItem" />
		                    <div>学校录取</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv caiLiao" data-flag="highJp-caiLiao">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-caiLiao.png" className="caiLiao imgItem" />
		                    <div>材料办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv get" data-flag="highJp-get">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-get.png" className="get imgItem" />
		                    <div>获得在留</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv qianZheng" data-flag="highJp-qianZheng">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianZheng.png" className="qianZheng imgItem" />
		                    <div>签证办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv toSchool" data-flag="highJp-toSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-toSchool.png" className="toSchool imgItem"  />
		                    <div>赴日留学</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv full inSchool" data-flag="highJp-inSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-inSchool.png" className="inSchool imgItem" />
		                    <div>在日服务</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="clear"></div>
		            </div>
		            <div className="followLine jpHigh_Follow">
		                <div className="dvLinxing">
		                    <div className="linXing full">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">入学考试</div>
		                    </div>
		                    <div className="linXing linXing2">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">支付学费</div>
		                    </div>
		                    <div className="linXing linXingjieji">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">接机服务</div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		                <div className="clear"></div>
		            </div>
		            <div className="mainPart">
		                <div className="mainBgPart">
		                    <div className="newItemDv online" id="highJp-online">
		                        <div className="newItem newItemA" data-delay="1.7" data-orgel ="highJp_online_item1">
		                            可供选择学校
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.5" data-orgel ="highJp_online_item2">
		                            申请学校条件
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.3" data-orgel ="highJp_online_item3">
		                            费用相关问题
		                        </div>
		                        <div className="newItem newItemD" data-delay="1.1" data-orgel ="highJp_online_item4">
		                            免费提供服务
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>

		                    <div className="newItemDv qianYue"  id="highJp-qianYue">
		                        <div className="newItem newItemA" data-delay="1.5" data-orgel="highJp_qianYue_item1">
		                            签订服务合同
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.3" data-orgel="highJp_qianYue_item2">
		                            协助翻译邮寄
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.1"  data-orgel="highJp_qianYue_item3">
		                            付学校报名费
		                        </div>
		                        <div className="newItem newItemD" data-delay="0.9" data-orgel="highJp_qianYue_item4">
		                            入学考试相关
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv caiLiao"  id="highJp-caiLiao">
		                        <div className="newItem newItemA"  data-delay="1.1" data-orgel="highJp_cailiao_item1">
		                            材料明细
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv qianZheng"  id="highJp-qianZheng">
		                        <div className="newItem newItemA" data-delay="1.1"  data-orgel="highJp_qianZheng_item1">
		                            提供哪些材料
		                        </div>
		                        <div className="newItem newItemA" data-delay="0.9"  data-orgel="highJp_qianZheng_item2">
		                            签证注意事项
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv2 toSchool" id="highJp-toSchool">
		                        <div className="newItem newItemA"  data-delay="1.7" data-orgel="highJp_toSchool_item1">
		                            住宿费用
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.5" data-orgel="highJp_toSchool_item2">
		                            生活成本
		                        </div>
		                         <div className="newItem newItemC"  data-delay="1.3" data-orgel="highJp_toSchool_item3">
		                            勤工俭学
		                        </div>
		                        <div className="newItem newItemD"  data-delay="1.1" data-orgel="highJp_toSchool_item4">
		                            生活知识
		                        </div>
		                        <div className="newItem newItemE"  data-delay="0.9" data-orgel="highJp_toSchool_item5">
		                            行前准备
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv3 inSchool" id="highJp-inSchool">
		                        <div className="newItem newItemA"  data-delay="1.5" data-orgel="highJp_inSchool_item1">
		                            初到协助
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.3" data-orgel="highJp_inSchool_item2">
		                            学生聚会
		                        </div>
		                         <div className="newItem newItemC"  data-delay="1.1" data-orgel="highJp_inSchool_item3">
		                            应急协助
		                        </div>
		                        <div className="newItem newItemD"  data-delay="0.9" data-orgel="highJp_inSchool_item4">
		                            打工求职
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		                <div className="allContent">
		                    <div className="contentDvItem" id="highJp_online_item1" >
		                        <i className="iconArrow"></i>
		                        千叶晓星国际高等学校、
		                        千叶翔凛高等学校、
		                        仙台育英高等学校、
		                        鹿岛学园高等学校、<br />
		                        大阪柏原高等学校、
		                        大阪敬爱高等学校、
		                        京都两洋高等学校、
		                        冈山县立共生高等学校、<br />
		                        明德义塾高等学校、
		                        日出学园高等学校 、
		                    </div>
		                    <div className="contentDvItem" id="highJp_online_item2">
		                        <i className="iconArrow"></i>
		                        <font className="bold">学历要求：</font>初中毕业或高中在读学生<br />
		                        <font className="bold">年龄要求：</font>20岁以下，且在日本高中毕业后超过18岁<br />
		                        <font className="bold">语言要求：</font>有一定日语基础<br />
		                        <font className="bold">经济要求：</font>能够负担高中期间的学费和生活费
		                    </div>
		                    <div className="contentDvItem" id="highJp_online_item3">
		                        <i className="iconArrow"></i>
		                        高中一般都采用封闭寄宿制管理模式。学校会直接收取1年学费、住宿费及餐费。最便宜的高中120万日元左右，最贵则达到250万日元。建议根据家庭经济负担能力选择适合自己的高中。对高中留学生来说，除支付给学校费用外，一般每月再准备2-3万日元零花钱就够了。
		                    </div>
		                    <div className="contentDvItem" id="highJp_online_item4">
		                        <i className="iconArrow"></i>
		                        人人留学的宗旨就是开创单向收费模式。
		                        我们坚持免费的理念，与我们正式签约合作的数百所优良校均经实地考察，学校会向我们提供宣传费和市场推广费用于维持我们机构的运营。
		                        而学生即使跨越语言以及地域障碍直接找学校签约，也不可能有任何减免或优惠。通过我们，您却会多收获一份专业的服务和指导，何乐不为！
		                    </div>
		                    <div className="contentDvItem" id="highJp_choose_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">地理位置</font>：主要看学校的教育环境是否良好，交通是否方便。
		                        根据个人的不同，有喜欢选择在闹市中心的，也有喜欢在僻静地区的学校。同时还要关注学校附近的住宿、打工等条件。<br />
		                        <font className="bold">是否优良校</font>：日本的语言学校绝大部分都是优良校（也称适正校）。
		                        优良校的历史悠久，学校资金充裕，师资配备完善。毕业生在日进学率、进学情况相对比较良好。<br />
		                        <font className="bold">课程设置</font>：某些学校还会开设各种针对性的课程，例如留学生考试对策、大学院升学辅导、商务就职课程等等。当然，日本现地也有许多优秀专业的升学辅导机构供您选择。

		                    </div>
		                    <div className="contentDvItem" id="highJp_choose_item2">
		                        <i className="iconArrow"></i>
		                        学校费用四部分组成： 1、选考料（报名费）2-3万日元； 2、学校入学金5-10万日元； 3、一年学费50-60万日元左右（语言学校学制最短半年，最长两年）；4、杂费：设施设备，教材、活动等。每个语言学校的收费标准各不相同，但是基本上第一年的总体费用在70 万日元左右；第二年的费用一般在60 万日元左右。日本不同地区的学费差异不大，平均差距不会超过5 万日元。
		                    </div>
		                    <div className="contentDvItem" id="highJp_choose_item3">
		                        <i className="iconArrow"></i>
		                        日本语言学校的入学时间非常灵活，一年可以四次入学，分别是一月，四月，七月和十月；日本大学的入学时间都是在春季四月，这和我们国家秋季入学的时间正好相反。
		                        <font className="bold">四月</font>是去日本留学最主要时期，也是国内很多应届毕业生提早赴日留学的最佳时间点。
		                        <font className="bold">七月</font>入读语言学校的学制是九个月或一年九个月，由于入学时间紧挨在国内学校毕业时间，对于部分无法提早赴日的应届高中或大学生来讲，这是最佳的时间点。
		                        <font className="bold">十月</font>入学是仅次于四月的一个入学期，一年半的学制既不浪费时间，又可让学生有充裕时间准备留学考试。
		                        <font className="bold">一月</font>入学因为学习时间最短（一般不能超过1年3个月），一般都建议日语至少3级以上或者升学意愿不强烈的学生选择该时间段入学。

		                    </div>
		                    <div className="contentDvItem" id="highJp_qianYue_item4">
		                        <i className="iconArrow"></i>
		                        <font className="bold">笔试科目</font>：日语、英语、数学<br />
		                        <font className="bold">面试要点</font>：个人基本情况介绍、赴日动机目标和计划、家庭经济情况、日语学习经历和目前的日语水平（能用日语回答更棒）。
		                    </div>
		                    <div className="contentDvItem" id="highJp_cailiao_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">个人部分</font>：学历成绩证明、护照、户口本、1年以上日语学习经历证明、报名照、亲属关系公证书<br />
		                        <font className="bold">担保人部分</font>：在职收入证明、户口本、存款证明和存单
		                    </div>
		                    <div className="contentDvItem" id="highJp_cailiao_item2">
		                        <i className="iconArrow"></i>
		                        <font className="bold">什么是担保金</font>：担保金是用来证明学生家庭拥有足够负担学生在日学习生活费用；担保金不需要汇至海外，而是采用定期存单的方式，存在担保人名下，一般建议选择国内四大银行或全国性的商业银行。<br />
		                        <font className="bold">担保人概念</font>：担保人一般均为申请人的直系亲属，建议选择父母亲中的一位；如单人收入较低，也可选择父母两人同时担保。<br />
		                        <font className="bold">关于学历证明</font>：学历证明文件包括毕业证书，学校开具的在读或者预毕业证明以及由中国政府部门出具的学历认证报告。
		                    </div>
		                    <div className="contentDvItem" id="highJp_qianZheng_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">换签材料包括</font>：在留资格认定证明书（日本入国管理局提供）、个人护照、照片1张、毕业证原件、户口本和担保人在职证明原件、签证申请表和学生调查表。
		                    </div>
		                    <div className="contentDvItem" id="highJp_qianZheng_item2">
		                        <i className="iconArrow"></i>
		                        <font className="bold">·</font>&nbsp;&nbsp;请根据所在地查询归属哪个领区，并向领区内日本使领馆指导的代办窗口递交材料。<br />
		                        <font className="bold">·</font>&nbsp;&nbsp;根据地区不同，签证收费和办理时间会有所不同。<br />
		                        <font className="bold">·</font>&nbsp;&nbsp;嫌麻烦的同学可以委托我们代为换签，具体咨询签证老师。
		                    </div>
		                    <div className="contentDvItem" id="highJp_toSchool_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">学生宿舍（俗称"寮"）</font>：通常分为4人间、2人间和单人间。东京地区的月租价格，4人间一般在2.5万—3.5万日元，2人间在3万-4.5万不等，单人间一般在5-7万不等。其他地区相对会略低一些。 <br />
		                        <font className="bold">专门性留学生宿舍 </font>：一般有专业的宿舍公司负责运营。仅限留学生居住，人源较整齐，社会关系较简单。租金一般和学校宿舍价格差不多。 <br />
		                        <font className="bold">民间出租住房</font>：较常见住宿形式一，且选择范围较广。需要日本人作连带担保人。租金根据地段，房间大小和设备差异比较大。从5万—15万不等。<br />
		                        
		                    </div>
		                    <div className="contentDvItem" id="highJp_toSchool_item2">
		                        <i className="iconArrow"></i>
		                        生活费主要包括住宿费用、伙食费、交通费用、以及其他娱乐活动等费用。根据日本学生支援机构公布的数据，日本留学生平均每月需138,000日元（包含学费）。<br />
		                        <font className="bold">伙食费</font>：伙食费标准因人而异，自己做饭一定比外面买着吃会便宜很多。正常情况下，留学生每月的伙食费应该在3万—6万日元不等。<br />
		                        <font className="bold">交通费</font>：以东京为例，地铁成人单程票价种类有：160日元(起步价1-6公里内)、190日元、230日元、270日元和300日元。　电车(俗称的JR线)一般的票价在130-210日元。留学生还享有学生优惠，或者购买月票。 
		                    </div>
		                    <div className="contentDvItem" id="highJp_toSchool_item3">
		                        <i className="iconArrow"></i>
		                        日本法务省根据外国人签证种类（在留资格）的不同，对于打工时间和打工内容做出了严格的限制。每周允许打工28个小时（就读大学院的学生14小时），学校寒暑假期间每天8个小时。在日本打工根据工作性质收入也不相同，目前东京地区一小时的薪水一般在900-1200日元不等。
		                    </div>
		                    <div className="contentDvItem" id="highJp_toSchool_item4">
		                        <i className="iconArrow"></i>
		                        在日本的生活知识包括日本的货币、电源、电压、交通方式、手机网络办理、垃圾处理知识、银行开户以及国民健康保险等。具体详情请点击<a className="showBigContent">这里</a>。
		                    </div>
		                
		                    <div className="contentDvItem" id="highJp_toSchool_item5">
		                        <i className="iconArrow"></i>
		                         恭喜你已经拿到了赴日签证，到达日本前有一些注意的要点，包括行李要求、常用物品、应急药物等等。具体详情请点击<a className="showBigContent">这里</a>。
		                    </div>
		                </div>
		            </div>
		        </div>
		        
		        <div className="itBigDv fadeOut animated" id="zhuangmenSchool">
		            <div className="blueLine"></div>
		            <div className="banLiLiuChengContent">
		                <div className="itemImgDv online" data-flag="zhuangmenSchool-online">
		                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-pen.png" className="pen imgItem" />
		                    <div>在线报名</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv choose" data-flag="zhuangmenSchool-qianYue">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-school.png" className="school imgItem" />
		                    <div>签约办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv qianYue" data-flag="zhuangmenSchool-choose">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianYue.png" className="qianYue imgItem" />
		                    <div>材料办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv caiLiao" data-flag="zhuangmenSchool-caiLiao">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-caiLiao.png" className="caiLiao imgItem" />
		                    <div>学校录取</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv get" data-flag="zhuangmenSchool-get">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-get.png" className="get imgItem" />
		                    <div>获得在留</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv qianZheng" data-flag="zhuangmenSchool-qianZheng">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianZheng.png" className="qianZheng imgItem" />
		                    <div>签证办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv toSchool" data-flag="zhuangmenSchool-toSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-toSchool.png" className="toSchool imgItem"  />
		                    <div>赴日留学</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv full inSchool" data-flag="zhuangmenSchool-inSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-inSchool.png" className="inSchool imgItem" />
		                    <div>在日服务</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="clear"></div>
		            </div>
		            <div className="followLine zhuangmen_Follow">
		                <div className="dvLinxing">
		                    <div className="linXing full">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">入学考试</div>
		                    </div>
		                    <div className="linXing linXing2">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">支付学费</div>
		                    </div>
		                    <div className="linXing linXingjieji">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">接机服务</div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		                <div className="clear"></div>
		            </div>
		            <div className="mainPart">
		                <div className="mainBgPart">
		                    <div className="newItemDv online" id="zhuangmenSchool-online">
		                        <div className="newItem newItemA" data-delay="1.3" data-orgel ="zhuangmenSchool_online_item1">
		                            申请学校条件
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.1" data-orgel ="zhuangmenSchool_online_item2">
		                            费用相关问题
		                        </div>
		                        <div className="newItem newItemC" data-delay="0.9" data-orgel ="zhuangmenSchool_online_item3">
		                            免费提供服务
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv choose"  id="zhuangmenSchool-choose">
		                        <div className="newItem newItemA" data-delay="1.3"  data-orgel ="zhuangmenSchool_choose_item1">
		                            材料明细
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv qianYue"  id="zhuangmenSchool-qianYue">
		                        <div className="newItem newItemA" data-delay="1.5" data-orgel="zhuangmenSchool_qianYue_item1">
		                            签订服务合同
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.3" data-orgel="zhuangmenSchool_qianYue_item2">
		                            协助翻译邮寄
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.1"  data-orgel="zhuangmenSchool_qianYue_item3">
		                            付学校报名费
		                        </div>
		                        <div className="newItem newItemD" data-delay="0.9" data-orgel="zhuangmenSchool_qianYue_item4">
		                            入学考试相关
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>

		                    <div className="newItemDv qianZheng"  id="zhuangmenSchool-qianZheng">
		                        <div className="newItem newItemA" data-delay="1.1"  data-orgel="zhuangmenSchool_qianZheng_item1">
		                            提供哪些材料
		                        </div>
		                       <div className="newItem newItemB" data-delay="0.9"  data-orgel="zhuangmenSchool_qianZheng_item2">
		                            签证注意事项
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv2 toSchool" id="zhuangmenSchool-toSchool">
		                        <div className="newItem newItemA"  data-delay="1.7" data-orgel="zhuangmenSchool_toSchool_item1">
		                            住宿费用
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.5" data-orgel="zhuangmenSchool_toSchool_item2">
		                            生活成本
		                        </div>
		                         <div className="newItem newItemC"  data-delay="1.3" data-orgel="zhuangmenSchool_toSchool_item3">
		                            勤工俭学
		                        </div>
		                        <div className="newItem newItemD"  data-delay="1.1" data-orgel="zhuangmenSchool_toSchool_item4">
		                            生活知识
		                        </div>
		                        <div className="newItem newItemE"  data-delay="0.9" data-orgel="zhuangmenSchool_toSchool_item5">
		                            行前准备
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv3 inSchool" id="zhuangmenSchool-inSchool">
		                        <div className="newItem newItemA"  data-delay="1.7" data-orgel="zhuangmenSchool_inSchool_item1">
		                            初到协助
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.5" data-orgel="zhuangmenSchool_inSchool_item2">
		                            学生聚会
		                        </div>
		                         <div className="newItem newItemC"  data-delay="1.3" data-orgel="zhuangmenSchool_inSchool_item3">
		                            应急协助
		                        </div>
		                        <div className="newItem newItemD"  data-delay="1.1" data-orgel="zhuangmenSchool_inSchool_item4">
		                            打工求职
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		                <div className="allContent">
		                    <div className="contentDvItem" id="zhuangmenSchool_online_item1" >
		                        <i className="iconArrow"></i>
		                        学历要求：高中（含中专、职校）及以上学历<br />
		                        年龄要求：25 岁以下<br />
		                        语言要求：有日本语能力2级水平及以上<br />
		                        经济要求：至少能负担第一年学费和部分生活费，能筹措15 -20 万元人民币左右短期经济担保金。<br />
		                        （仅供参考）
		                    </div>
		                    <div className="contentDvItem" id="zhuangmenSchool_online_item2">
		                        <i className="iconArrow"></i>
		                        <font className="bold">学费：</font>专门学校一般都是以私立为主。根据学校、专门不同，学费的差距也比较大。从80万日元至200万日元每年不等。<br />
		                        <font className="bold">生活月费用：</font>1、住宿费3-4万日币（两人间） 2、水电等费用0.5-1万日币 3、其他伙食交通等费5万日币左右<br />
		                        <font className="bold">打工月收入：</font>以大多数留学生打工28小时计算，约为12-15万日币左右。不过大学生因为课业比较多，特别是理工类学生，打工时间比较少。

		                    </div>
		                    <div className="contentDvItem" id="zhuangmenSchool_online_item3">
		                        <i className="iconArrow"></i>
		                        学费：私立大学第一年费用在110万日元左右，后续每年大概80万日元左右。但留学生一般都可以至少获得30%的学费减免。基本上4年学费支出一般在250万日元左右。<br />
		                        生活月费用：1、住宿费3-4万日币（两人间） 2、水电等费用0.5-1万日币 3、其他伙食交通等费5万日币左右<br />
		                        打工月收入：以大多数留学生打工28小时计算，约为12-15万日币左右。不过大学生因为课业比较繁重，特别是理工类学生，打工时间比较少。

		                    </div>
		                    <div className="contentDvItem" id="zhuangmenSchool_online_item4">
		                        <i className="iconArrow"></i>
		                        人人留学的宗旨就是开创单向收费模式。
		                        我们坚持免费的理念，与我们正式签约合作的数百所优良校均经实地考察，学校会向我们提供宣传费和市场推广费用于维持我们机构的运营。
		                        而学生即使跨越语言以及地域障碍直接找学校签约，也不可能有任何减免或优惠。通过我们，您却会多收获一份专业的服务和指导，何乐不为！
		                    </div>
		                    <div className="contentDvItem" id="zhuangmenSchool_choose_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">个人部分：</font>学历成绩证明、护照、户口本、日语能力证明、报名照、亲属关系公证书<br />
		                        <font className="bold">担保人部分：</font>在职收入证明、户口本、存款证明和存单

		                    </div>
		                    <div className="contentDvItem" id="zhuangmenSchool_choose_item2">
		                        <i className="iconArrow"></i>
		                        学校费用四部分组成： 1、选考料（报名费）2-3万日元； 2、学校入学金5-10万日元； 3、一年学费50-60万日元左右（语言学校学制最短半年，最长两年）；4、杂费：设施设备，教材、活动等。每个语言学校的收费标准各不相同，但是基本上第一年的总体费用在70 万日元左右；第二年的费用一般在60 万日元左右。日本不同地区的学费差异不大，平均差距不会超过5 万日元。
		                    </div>
		                    <div className="contentDvItem" id="zhuangmenSchool_choose_item3">
		                        <i className="iconArrow"></i>
		                        日本语言学校的入学时间非常灵活，一年可以四次入学，分别是一月，四月，七月和十月；日本大学的入学时间都是在春季四月，这和我们国家秋季入学的时间正好相反。
		                        <font className="bold">四月</font>是去日本留学最主要时期，也是国内很多应届毕业生提早赴日留学的最佳时间点。
		                        <font className="bold">七月</font>入读语言学校的学制是九个月或一年九个月，由于入学时间紧挨在国内学校毕业时间，对于部分无法提早赴日的应届高中或大学生来讲，这是最佳的时间点。
		                        <font className="bold">十月</font>入学是仅次于四月的一个入学期，一年半的学制既不浪费时间，又可让学生有充裕时间准备留学考试。
		                        <font className="bold">一月</font>入学因为学习时间最短（一般不能超过1年3个月），一般都建议日语至少3级以上或者升学意愿不强烈的学生选择该时间段入学。

		                    </div>
		                    <div className="contentDvItem" id="zhuangmenSchool_qianYue_item4">
		                        <i className="iconArrow"></i>
		                        <font className="bold">笔试科目：</font>日语、英语（部分学校）、数学（部分学校）<br />
		                        <font className="bold">面试要点：</font>个人基本情况介绍、赴日动机目标和计划、家庭经济情况、日语学习经历和目前的日语水平（能用日语回答更棒）。
		                    </div>
		                    <div className="contentDvItem" id="zhuangmenSchool_cailiao_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">个人部分</font>：学历成绩证明、护照、户口本、日语能力证明、报名照、亲属关系公证书<br />
		                        <font className="bold">担保人部分</font>：在职收入证明、户口本、存款证明和存单
		                    </div>
		                    <div className="contentDvItem" id="zhuangmenSchool_cailiao_item2">
		                        <i className="iconArrow"></i>
		                        <font className="bold">什么是担保金</font>：担保金是用来证明学生家庭拥有足够负担学生在日学习生活费用；担保金不需要汇至海外，而是采用定期存单的方式，存在担保人名下，一般建议选择国内四大银行或全国性的商业银行。<br />
		                        <font className="bold">担保人概念</font>：担保人一般均为申请人的直系亲属，建议选择父母亲中的一位；如单人收入较低，也可选择父母两人同时担保。<br />
		                        <font className="bold">关于学历证明</font>：学历证明文件包括毕业证书，学校开具的在读或者预毕业证明以及由中国政府部门出具的学历认证报告。
		                    </div>
		                    <div className="contentDvItem" id="zhuangmenSchool_qianZheng_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">换签材料包括</font>：在留资格认定证明书（日本入国管理局提供）、个人护照、照片1张、毕业证原件、户口本和担保人在职证明原件、签证申请表和学生调查表。
		                    </div>
		                    <div className="contentDvItem" id="zhuangmenSchool_qianZheng_item2">
		                        <i className="iconArrow"></i>
		                        <font className="bold">·</font>&nbsp;&nbsp;请根据所在地查询归属哪个领区，并向领区内日本使领馆指导的代办窗口递交材料。<br />
		                        <font className="bold">·</font>&nbsp;&nbsp;根据地区不同，签证收费和办理时间会有所不同。<br />
		                        <font className="bold">·</font>&nbsp;&nbsp;嫌麻烦的同学可以委托我们代为换签，具体咨询签证老师。
		                    </div>
		                    <div className="contentDvItem" id="zhuangmenSchool_toSchool_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">学生宿舍（俗称"寮"）</font>：通常分为4人间、2人间和单人间。东京地区的月租价格，4人间一般在2.5万—3.5万日元，2人间在3万-4.5万不等，单人间一般在5-7万不等。其他地区相对会略低一些。 <br />
		                        <font className="bold">专门性留学生宿舍 </font>：一般有专业的宿舍公司负责运营。仅限留学生居住，人源较整齐，社会关系较简单。租金一般和学校宿舍价格差不多。 <br />
		                        <font className="bold">民间出租住房</font>：较常见住宿形式一，且选择范围较广。需要日本人作连带担保人。租金根据地段，房间大小和设备差异比较大。从5万—15万不等。<br />
		                        
		                    </div>
		                    <div className="contentDvItem" id="zhuangmenSchool_toSchool_item2">
		                        <i className="iconArrow"></i>
		                        生活费主要包括住宿费用、伙食费、交通费用、以及其他娱乐活动等费用。根据日本学生支援机构公布的数据，日本留学生平均每月需138,000日元（包含学费）。<br />
		                        <font className="bold">伙食费</font>：伙食费标准因人而异，自己做饭一定比外面买着吃会便宜很多。正常情况下，留学生每月的伙食费应该在3万—6万日元不等。<br />
		                        <font className="bold">交通费</font>：以东京为例，地铁成人单程票价种类有：160日元(起步价1-6公里内)、190日元、230日元、270日元和300日元。　电车(俗称的JR线)一般的票价在130-210日元。留学生还享有学生优惠，或者购买月票。 
		                    </div>
		                    <div className="contentDvItem" id="zhuangmenSchool_toSchool_item3">
		                        <i className="iconArrow"></i>
		                        日本法务省根据外国人签证种类（在留资格）的不同，对于打工时间和打工内容做出了严格的限制。每周允许打工28个小时（就读大学院的学生14小时），学校寒暑假期间每天8个小时。在日本打工根据工作性质收入也不相同，目前东京地区一小时的薪水一般在900-1200日元不等。
		                    </div>
		                    <div className="contentDvItem" id="zhuangmenSchool_toSchool_item4">
		                        <i className="iconArrow"></i>
		                        在日本的生活知识包括日本的货币、电源、电压、交通方式、手机网络办理、垃圾处理知识、银行开户以及国民健康保险等。具体详情请点击<a className="showBigContent">这里</a>。
		                    </div>
		                
		                    <div className="contentDvItem" id="zhuangmenSchool_toSchool_item5">
		                        <i className="iconArrow"></i>
		                         恭喜你已经拿到了赴日签证，到达日本前有一些注意的要点，包括行李要求、常用物品、应急药物等等。具体详情请点击<a className="showBigContent">这里</a>。
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>
        );
    }
    componentDidMount() {


        $("#gotoYuyan").click(function () {
            $("#banLiLiuCheng .titleFont").children().eq(0).click();
        });

        //办理流程  点击  语言学校 日本大学 等等
        $(".titleFont .item").click(function () {

            var $self = $(this);

            var flag = $self.attr("data-flag-o");


            $self.addClass("active").siblings().removeClass("active");

            $("#banLiLiuCheng .itBigDv").addClass("fadeOut animated").hide();

            $("#banLiLiuCheng").find("#" + flag).removeClass("fadeOut animated").addClass("fadeIn animated").show();

            $self.addClass("fadeIn animated").show();

            $("#banLiLiuCheng").find("#" + flag).find(".mainBgPart").children().eq(0).hover();

        });

        //文字太多用大图替换  点击关闭
        $(".nodeJpAlert .closenodeJpAlert").click(function () {
            $(".nodeJpAlertBg").fadeOut();
            $(".nodeJpAlert").fadeOut();
        });

        //文字太多用大图替换  点击展开
        $(".showBigContent").click(function () {
            $(".nodeJpAlertBg").fadeIn();
            $(".nodeJpAlert").fadeIn();
        });

        //黑色块状鼠标移动展开详细信息
        $(".mainBgPart .newItem").mouseenter(function () {

            $(".mainBgPart .newItem").css("transition-delay", "0s");


            $(".allContent .contentDvItem").hide();


            var flag = $(this).attr("data-orgel");

            if ($(".allContent #" + flag).length > 0) {
                

                $(".mainBgPart .newItem").removeClass("hoverCss");

                $(this).addClass("hoverCss");

                $(".allContent #" + flag).show(); 
            } else {
               
            }
            

        });

        //黑色块状鼠标移开关闭详细信息
        $(".mainBgPart .newItem").mouseleave(function () {

            $(".mainBgPart .newItem").removeClass("hoverCss");

        });

        //在线报名 选择学校 等等 鼠标移动 效果
        $(".banLiLiuChengContent .itemImgDv").mouseenter(function () {

            $(".allContent .contentDvItem").hide();

            var parent = $(this).parent().parent().attr("id");

            var flag= $(this).attr("data-flag");
            $(".newItemDv").removeClass("active");
            $(".newItemDv").removeClass("fadeOut animated");

            $(".newItemDv").each(function () {

                if ($(this).attr("id") != flag) {

                    $(this).addClass("fadeOut animated");

                    $(this).find(".newItem").css("visibility", "hidden");
                }
            });

            $("#" + flag).find(".newItem").css("visibility", "visible");

            $("#" + flag).addClass("active");
            
            //alert( $(this).parent().parent().attr("id"));

        });

        //在线报名 选择学校 等等 鼠标移走 效果
        $(".banLiLiuChengContent .itemImgDv").mouseleave(function () {

            $(".mainBgPart .newItem").each(function () {

                var $self = $(this);

                var delaytime = $self.attr("data-delay");

                $self.css("transition-delay", delaytime + "s");

            });


        });
    }
}

export default LiuCheng;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */
