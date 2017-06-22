/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
import React, { PropTypes } from 'react';
import styles from './css/usa.less';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';

import $ from 'jquery';

@withStyles(styles)
class LiuCheng {
    render() {
        return (
            <section className="banLiLiuCheng banLiLiuCheng_USA" id="banLiLiuCheng">
		        <h1>办理流程</h1>
		        <div className="titleFont">
		            <span className="item active" data-flag-o ="yuyanSchool">美国本科</span>
		            <span className="item" data-flag-o ="universitySchool">美国高中</span>
		            <span className="item" data-flag-o ="universitySchoolYuan">美国硕士</span>
		            <span className="item" data-flag-o ="zhilu">直录双录项目</span>
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
		                    <div>获得录取</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv qianZheng" data-flag="yuyan-qianZheng">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianZheng.png" className="qianZheng imgItem" />
		                    <div>签证办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv toSchool" data-flag="yuyan-toSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-toSchool.png" className="toSchool imgItem"  />
		                    <div>赴美留学</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv full inSchool" data-flag="yuyan-inSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-inSchool.png" className="inSchool imgItem" />
		                    <div>在美服务</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="clear"></div>
		            </div>
		            <div className="followLine">
		                <div className="dvLinxing">
		                    <div className="linXing full">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font"><a href="/College" onClick={Link.handleClick}>院校检索</a></div>
		                    </div>
		                    <div className="linXing linXing2">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font" id="zhidingliuxuejkihua"><a href="/FreeGuide" onClick={Link.handleClick}>制定留学计划</a></div>
		                    </div>
		                    <div className="linXing">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font tuofu">托福/雅思/SAT/ACT等辅导</div>
		                    </div>
		                    <div className="linXing linXing2">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">文书服务</div>
		                    </div>
		                    <div className="linXing">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font zhifu">支付学费押金</div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		                <div className="clear"></div>
		            </div>
		            <div className="mainPart">
		                <div className="mainBgPart">
		                    <div className="newItemDv online" id="yuyan-online">
		                        <div className="newItem newItemA" data-delay="1.1" data-orgel ="yuyan_online_item1">
		                            申请基本要求
		                        </div>
		                       <div className="newItem newItemB" data-delay="0.9" data-orgel ="yuyan_online_item2">
		                            办理服务费用
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv choose"  id="yuyan-choose">
		                        <div className="newItem newItemA" data-delay="1.3"  data-orgel ="yuyan_choose_item1">
		                            入学时间
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.1" data-orgel="yuyan_choose_item2">
		                            留学费用
		                        </div>
		                        <div className="newItem newItemC" data-delay="0.9"  data-orgel="yuyan_choose_item3">
		                            如何择校
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv qianYue"  id="yuyan-qianYue">
		                        <div className="newItem newItemA" data-delay="1.7" data-orgel="yuyan_qianYue_item1">
		                            签订服务合同
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.5" data-orgel="yuyan_qianYue_item2">
		                            确定院校专业
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.3"  data-orgel="yuyan_qianYue_item3">
		                            确定时间节点
		                        </div>
		                        <div className="newItem newItemD" data-delay="1.1" data-orgel="yuyan_qianYue_item4">
		                            制订申请方
		                        </div>
		                        <div className="newItem newItemE" data-delay="0.9" data-orgel="yuyan_qianYue_item5">
		                            付学校报名费
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv caiLiao"  id="yuyan-caiLiao">
		                        <div className="newItem newItemA"  data-delay="1.5" data-orgel="yuyan_cailiao_item1">
		                           	申请材料准备
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.3"  data-orgel="yuyan_cailiao_item2">
		                            材料相关要求
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.1"  data-orgel="yuyan_cailiao_item3">
		                            申请材料寄送
		                        </div>
		                        <div className="newItem newItemD" data-delay="0.9"  data-orgel="yuyan_cailiao_item4">
		                            申请状态追踪
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv get"  id="yuyan-get">
		                        <div className="newItem newItemA"  data-delay="1.3" data-orgel="yuyan_get_item1">
		                           	接受录取获得I-20表
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.1"  data-orgel="yuyan_get_item2">
		                            Full-Admission &nbsp;&nbsp;（直录）
		                        </div>
		                        <div className="newItem newItemC" data-delay="0.9"  data-orgel="yuyan_get_item3">
		                            Conditional Admission（双录）：
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv qianZheng"  id="yuyan-qianZheng">
		                        <div className="newItem newItemA" data-delay="1.5"  data-orgel="yuyan_qianZheng_item1">
		                            签证所需材料
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.3"  data-orgel="yuyan_qianZheng_item2">
		                           签证材料要求
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.1"  data-orgel="yuyan_qianZheng_item3">
		                           面签培训辅导
		                        </div>
		                        <div className="newItem newItemD" data-delay="0.9"  data-orgel="yuyan_qianZheng_item4">
		                           签证注意事项
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv2 toSchool" id="yuyan-toSchool">
		                        <div className="newItem newItemA"  data-delay="1.5" data-orgel="yuyan_toSchool_item1">
		                            学习费用
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.3" data-orgel="yuyan_toSchool_item2">
		                            生活成本
		                        </div>
		                         <div className="newItem newItemC"  data-delay="1.1" data-orgel="yuyan_toSchool_item3">
		                            勤工俭学
		                        </div>
		                        <div className="newItem newItemE"  data-delay="0.9" data-orgel="yuyan_toSchool_item4">
		                            行前准备
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv3 inSchool" id="yuyan-inSchool">
		                        <div className="newItem newItemA"  data-delay="1.4" data-orgel="yuyan_inSchool_item1">
		                            应急协助
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.3" data-orgel="yuyan_inSchool_item2">
		                            转学升学
		                        </div>
		                         <div className="newItem newItemC"  data-delay="1.1" data-orgel="yuyan_inSchool_item3">
		                            考试培训
		                        </div>
		                        <div className="newItem newItemD"  data-delay="0.9" data-orgel="yuyan_inSchool_item4">
		                            续签服务
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		                <div className="allContent">
		                    <div className="contentDvItem" id="yuyan_online_item1" >
		                        <i className="iconArrow"></i>
		                        <font className="bold">（1）高中在读或毕业以上学历</font>
								（说明：不同院校的录取要求也不同，美国名校申请基本条件：高中成绩平均85分以上，托福90或雅思7分以上，SAT1850或ACT28分以上）<br />
								<font className="bold">（2）赶早原则</font>
							     美国名校本科申请竞争激烈，学生申请须尽早

		                    </div>
		                    <div className="contentDvItem" id="yuyan_online_item2">
		                        <i className="iconArrow"></i>
		                        名校申请需支付服务费，根据学校排名不同，收费不同
		                    </div>
		                    <div className="contentDvItem" id="yuyan_choose_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">秋季：</font>9月份开学，院校及专业可选范围全覆盖<br />
								<font className="bold">春季：</font>1月份开学，院校及专业选择受限
		                    </div>
		                    <div className="contentDvItem" id="yuyan_choose_item2">
		                        <i className="iconArrow"></i>
		                        <font className="bold">申请费</font>：每所学校75美金左右<br />
								<font className="bold">学费：</font>根据学校和地理位置不同，学费相差较大，一般一学年3万美金左右<br />
								<font className="bold">生活费：</font>因地理位置而异，一般一个月生活费约为1500美金<br />
								<font className="bold">其他：</font>托福考试费1546元人民币，雅思考试费1750元人民币，SAT考试费52.5美金，ACT考试费96.5美元，国土安全费200美金，签证费160美金，体检费约600元人民币，机票费10000元左右（单程）等

		                    </div>
		                    <div className="contentDvItem" id="yuyan_choose_item3">
		                        <i className="iconArrow"></i>
		                        a.	根据自身条件出发（说明：不同院校的录取要求不同，美国名校本科申请基本条件：高中成绩平均85分以上，托福90或雅思7分以上，SAT1850或ACT28分以上）<br />
								b.	根据学校综合排名（学校综合排名只是一个参考，具体还是要看这个学校是否适合你）<br />
								c.	根据学校专业排名（专业关系到学生将来的职业规划，学生可以根据将来要读的专业来筛选学校）<br />
								d.	根据学校综合费用（美国三千多所大学，费用各不相同，学生可以根据自身家庭经济状况进行选择适合自己的学校）<br />
								e.	根据学校地理位置（不同的地理位置具有不同的气候环境及风俗文化，同时不同的地理位置就业率也不尽相同，学生可根据自己的需求进行选择）
		                    </div>
		                    
		                    <div className="contentDvItem" id="yuyan_cailiao_item1">
		                        <i className="iconArrow"></i>
		                        a.	高中在读/毕业证明<br />
								b.	高中成绩单（有些名校甚至会要求提供初中成绩单）<br />
								c.	托福/雅思成绩<br />
								d.	SAT/ACT成绩<br />
								e.	财力证明<br />
								f.	ESSAY<br />
								g.	推荐信<br />
								注意：申请艺术类课程需提供作品集

		                    </div>
		                    <div className="contentDvItem" id="yuyan_cailiao_item2">
		                        <i className="iconArrow"></i>
		                        （1）高中在读/学历/成绩证明须中英文对照，加盖学校公章且密封<br />
								（2）托福/雅思须官方送分<br />
								（3）SAT/ACT须官方送分<br />
								（4）财力证明须由银行出具，中英文对照，金额根据学校的要求，一般准备40万人民币<br />
								（5）推荐信一般要求3封，以各科任课老师或实习单位领导的名义出具<br />
								注：有些美国院校要求学生做诸如WES/ECE之类的第三方认证，学生须提前预留好做认证的时间

		                    </div>
		                    <div className="contentDvItem" id="yuyan_cailiao_item3">
		                        <i className="iconArrow"></i>
		                        申请材料寄送（大部分的美国院校需要将申请材料原件寄送至招生录取办公室，学生须在学校规定的时间内将材料寄达学校）
		                    </div>
		                    <div className="contentDvItem" id="yuyan_cailiao_item4">
		                        <i className="iconArrow"></i>
		                        申请状态追踪（材料寄送出去之后，人人留学的材料顾问专家将与申请院校保持沟通，密切关注学生的申请状态，以确保申请服务质量）
		                    </div>
		                    <div className="contentDvItem" id="yuyan_get_item1">
		                        <i className="iconArrow"></i>
		                        部分美国院校会直接发放I-20表，也有部分美国院校会要求学生支付学费押金后再发放I-20表
		                    </div>
		                    <div className="contentDvItem" id="yuyan_get_item2">
		                        <i className="iconArrow"></i>
		                       学生可以直接入读大学课程
		                    </div>
		                    <div className="contentDvItem" id="yuyan_get_item3">
		                        <i className="iconArrow"></i>
		                        学生由于英语未达学校要求，需要把英语水平提高到校方认可的标准后方可入读大学课程
		                    </div>
		                    <div className="contentDvItem" id="yuyan_qianZheng_item1">
		                        <i className="iconArrow"></i>
		                        a.	护照原件<br />
								b.	签证照片1张<br />
								c.	学校录取信及I-20表<br />
								d.	DS160表确认页<br />
								e.	在线签证预约确认单<br />
								f.	美国国土安全费（200美金）付费收据<br />
								g.	财力证明<br />
								h.	高中在读/学历/成绩证明中英文件<br />
								i.	其它一些辅助材料视申请人背景而定

		                    </div>
		                    <div className="contentDvItem" id="yuyan_qianZheng_item2">
		                        <i className="iconArrow"></i>
		                        （1）护照要求（须保留至少1年以上有效期）<br />
								（2）签证照片（白底，51MM*51MM，打印及电子版本都要）<br />
								（3）I-20表（须由学生签名）<br />
								（4）国土安全费（须在面签日期三个工作日前支付）<br />
								（5）财力证明（须提供申请人与财力担保人之间的关系证明，如户口本，出生证等）

		                    </div>
		                    <div className="contentDvItem" id="yuyan_qianZheng_item3">
		                        <i className="iconArrow"></i>
		                        人人留学的顾问专家将根据每个学生的情况，进行必要的面签培训辅导，以帮助同学顺利通过签证
		                    </div>
		                    <div className="contentDvItem" id="yuyan_qianZheng_item4">
		                        <i className="iconArrow"></i>
		                        (1)	带好必备的签证材料<br />
								(2)	按时抵达领馆<br />
								(3)	着装须得体<br />
								(4)	请勿佩戴首饰等金属制品<br />
								(5)	请勿携带手机等电子产品<br />
								(6)	进入签证大厅保持安静<br />
								(7)	如实回答签证官的问题<br />
								(8)	注意礼节，声音响亮<br />

		                    </div>
		                    <div className="contentDvItem" id="yuyan_toSchool_item1">
		                        <i className="iconArrow"></i>
		                        地区差异极大，学费一般一年3万美金左右
		                    </div>
		                    <div className="contentDvItem" id="yuyan_toSchool_item2">
		                        <i className="iconArrow"></i>
		                        地区差异极大，生活费一年约1.8万美金左右
		                    </div>
		                    <div className="contentDvItem" id="yuyan_toSchool_item3">
		                        <i className="iconArrow"></i>
		                        学生可在校内合法打工，每小时工资约8美金左右
		                    </div>
		                    <div className="contentDvItem" id="yuyan_toSchool_item4">
		                        <i className="iconArrow"></i>
		                        住宿申请，购买机票，接机安排，疫苗接种/体检，选课，行李打包等
		                    </div>
		                    <div className="contentDvItem" id="yuyan_inSchool_item2">
		                        <i className="iconArrow"></i>
		                        如果您课业繁重或精力有限，人人留学将为您提供专业、贴心的海外转学/升学服务
		                    </div>
		                    <div className="contentDvItem" id="yuyan_inSchool_item3">
		                        <i className="iconArrow"></i>
		                        提供托福/雅思/GMAT/GRE等考试的面授或在线培训服务
		                    </div>
		                    <div className="contentDvItem" id="yuyan_inSchool_item4">
		                        <i className="iconArrow"></i>
		                        无论是学生续签还是亲友探亲，人人留学都可以为您提供相应的签证服务
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
		                <div className="itemImgDv choose" data-flag="daxue-choose">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-school.png" className="school imgItem" />
		                    <div>选择学校</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv qianYue" data-flag="daxue-qianYue">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianYue.png" className="qianYue imgItem" />
		                    <div>签约办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv caiLiao" data-flag="daxue-caiLiao">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-caiLiao.png" className="caiLiao imgItem" />
		                    <div>材料办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv get" data-flag="daxue-get">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-get.png" className="get imgItem" />
		                    <div>获得录取</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv qianZheng" data-flag="daxue-qianZheng">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianZheng.png" className="qianZheng imgItem" />
		                    <div>签证办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv toSchool" data-flag="daxue-toSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-toSchool.png" className="toSchool imgItem"  />
		                    <div>赴美留学</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv full inSchool" data-flag="daxue-inSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-inSchool.png" className="inSchool imgItem" />
		                    <div>在美服务</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="clear"></div>
		            </div>
		            <div className="followLine daxue_Follow  ">
		                <div className="dvLinxing daxuex_dvLinxing">
		                    <div className="linXing full">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font"><a href="/College" onClick={Link.handleClick}>学校检索</a></div>
		                    </div>
		                    <div className="linXing linXing2">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font" id="zhidingliuxuejkihua"><a href="/FreeGuide" onClick={Link.handleClick}>制定留学计划</a></div>
		                    </div>
		                    <div className="linXing">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font tuofu">托福/雅思/SSAT等辅导</div>
		                    </div>
		                    <div className="linXing linXing2">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">文书服务</div>
		                    </div>
		                    <div className="linXing">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font zhifu">支付学费押金</div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		                <div className="clear"></div>
		            </div>
		            <div className="mainPart">
		                <div className="mainBgPart">
		                    <div className="newItemDv online" id="daxue-online">
		                        <div className="newItem newItemA" data-delay="1.1" data-orgel ="daxue_online_item1">
		                            申请基本条件
		                        </div>
		                       <div className="newItem newItemB" data-delay="0.9" data-orgel ="daxue_online_item2">
		                            办理服务费用
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>

		                    <div className="newItemDv qianYue"  id="daxue-choose">
		                        <div className="newItem newItemA" data-delay="1.3" data-orgel="daxue_qianYue_item1">
		                            入学时间
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.1" data-orgel="daxue_qianYue_item2">
		                            留学费用
		                        </div>
		                        <div className="newItem newItemC" data-delay="0.9"  data-orgel="daxue_qianYue_item3">
		                            如何择校
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv caiLiao"  id="daxue-qianYue">
		                        <div className="newItem newItemA"  data-delay="1.7" data-orgel="daxue_cailiao_item1">
		                            签订服务合同
		                        </div>
		                        <div className="newItem newItemB"  data-delay="1.5" data-orgel="daxue_cailiao_item2">
									确定申请学校
		                        </div>
		                        <div className="newItem newItemC"  data-delay="1.3" data-orgel="daxue_cailiao_item3">
									确定时间节点
		                        </div>
		                        <div className="newItem newItemD"  data-delay="1.1" data-orgel="daxue_cailiao_item4">
									制订申请方案
		                        </div>
		                        <div className="newItem newItemE"  data-delay="0.9" data-orgel="daxue_cailiao_item5">
									付学校报名费
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv qianZheng"  id="daxue-caiLiao">
		                        <div className="newItem newItemA" data-delay="1.7"  data-orgel="daxue_qianZheng_shenqiung_item1">
		                            申请材料准备
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.5"  data-orgel="daxue_qianZheng_shenqiung_item2">
		                            材料相关要求
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.3"  data-orgel="daxue_qianZheng_shenqiung_item3">
		                            申请材料寄送
		                        </div>
		                        <div className="newItem newItemD" data-delay="1.1"  data-orgel="daxue_qianZheng_shenqiung_item4">
		                            申请状态追踪
		                        </div>
		                        <div className="newItem newItemE" data-delay="0.9"  data-orgel="daxue_qianZheng_shenqiung_item5">
		                            申请面试环节
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv2 toSchool" id="daxue-get">
		                        <div className="newItem newItemA"  data-delay="1.5" data-orgel="daxue_get_item1">
		                            接受录取获得I-20表
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.1" data-orgel="daxue_get_item2">
		                            Full-Admission
		                        </div>
		                         <div className="newItem newItemC"  data-delay="0.9" data-orgel="daxue_get_item3">
		                            Conditional Admission（双录）
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv2 toSchool" id="daxue-qianZheng">
		                        <div className="newItem newItemA"  data-delay="1.5" data-orgel="daxue_qianzheng_item1">
		                            签证所需材料
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.3" data-orgel="daxue_qianzheng_item2">
		                            签证材料要求
		                        </div>
		                         <div className="newItem newItemC"  data-delay="1.1" data-orgel="daxue_qianzheng_item3">
		                            面签培训辅导
		                        </div>
		                        <div className="newItem newItemD"  data-delay="0.9" data-orgel="daxue_qianzheng_item4">
		                            签证注意事项
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv2 toSchool" id="daxue-toSchool">
		                        <div className="newItem newItemA"  data-delay="1.5" data-orgel="daxue_toSchool_item1">
		                            学习费用
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.3" data-orgel="daxue_toSchool_item2">
		                            生活成本
		                        </div>
		                         <div className="newItem newItemC"  data-delay="1.1" data-orgel="daxue_toSchool_item3">
		                            行前准备
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv3 inSchool" id="daxue-inSchool">
		                        <div className="newItem newItemA"  data-delay="1.7" data-orgel="daxue_inSchool_item1">
		                            应急协助
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.5" data-orgel="daxue_inSchool_item2">
		                            转学升学
		                        </div>
		                         <div className="newItem newItemC"  data-delay="1.3" data-orgel="daxue_inSchool_item3">
		                            考试培训
		                        </div>
		                        <div className="newItem newItemD"  data-delay="1.1" data-orgel="daxue_inSchool_item4">
		                            续签服务
		                        </div>
		                        
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		                <div className="allContent">
		                    <div className="contentDvItem" id="daxue_online_item1" >
		                        <i className="iconArrow"></i>
		                        （1）初中在读/毕业以上学历<br />
								（说明：不同学校的录取要求也不同，美国知名私立中学申请基本条件：初中成绩平均85分以上，托福80或雅思6.5分以上，SSAT2000分以上）<br />
								（2）赶早原则<br />
							     美国知名私立中学的招生一般都有名额限制，申请竞争激烈，学生申请须尽早

		                    </div>
		                    <div className="contentDvItem" id="daxue_online_item2">
		                        <i className="iconArrow"></i>
		                        根据学校不同，收费不同
		                    </div>
		                    <div className="contentDvItem" id="daxue_qianYue_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">秋季：</font>9月份开学，学校可选范围全覆盖<br/>
								<font className="bold">春季：</font>1月份开学，学校选择受限

		                    </div>
		                    <div className="contentDvItem" id="daxue_qianYue_item2">
		                        <i className="iconArrow"></i>
		                        <font className="bold">申请费：</font>每所学校75美金左右<br/>
								<font className="bold">学费：</font>根据学校和地理位置不同，学费相差较大，一般一学年3.5万美金左右<br/>
								<font className="bold">生活费：</font>因地理位置而异，一般一个月生活费约为1500美金<br/>
								<font className="bold">其他：</font>托福考试费1546元人民币，雅思考试费1750元人民币，SSAT考试费80美元，国土安全费200美金，签证费160美金，体检费约600人民币，机票10000元人民币左右（单程）等
		                    </div>
		                    <div className="contentDvItem" id="daxue_qianYue_item3">
		                        <i className="iconArrow"></i>
		                        a.	根据自身条件出发（说明：不同院校的录取要求不同，美国知名私立中学申请基本条件：初中成绩平均85分以上，托福80或雅思6.5分以上，SSAT2000分以上）<br/>
								b.	根据学校SAT排名（这个排名只能作为参考，具体还要看这个学校是否适合你）<br/>
								c.	根据学校综合费用（学生可以根据自身家庭经济状况选择适合自己的学校）<br/>
								d.	根据学校课程设置（学生可根据学校开设AP课程的种类选择适合自己的学校）<br/>
								e.	根据学校地理位置（不同地理位置的学校有着不同的文化风俗，学生可根据自己的兴趣爱好进行选择）

		                    </div>
		                    <div className="contentDvItem" id="daxue_qianZheng_shenqiung_item1">
		                        <i className="iconArrow"></i>
		                        a.	中学在读/初中毕业证明<br/>
								b.	成绩单<br/>
								c.	托福/雅思成绩<br/>
								d.	SSAT成绩<br/>
								e.	ESSAY<br/>
								f.	财力证明<br/>
								g.	推荐信

		                    </div>
		                    <div className="contentDvItem" id="daxue_qianZheng_shenqiung_item2">
		                        <i className="iconArrow"></i>
		                        （1）在读/学历/成绩证明须中英文对照，加盖学校公章且密封<br/>
								（2）托福/雅思须官方送分<br/>
								（3）SSAT须官方送分<br/>
								（4）财力证明须由银行出具，中英文对照，金额根据学校的要求，一般准备45万人民币<br/>
								（5）推荐信一般要求3封，以数学，语文或英语等任课老师的名义出具


		                    </div>
		                    <div className="contentDvItem" id="daxue_qianZheng_shenqiung_item3">
		                        <i className="iconArrow"></i>
		                        大部分的美国中学需要将申请材料原件寄送至学校招生录取办公室，学生须在学校规定的时间内将材料寄达学校
		                    </div>
		                    <div className="contentDvItem" id="daxue_qianZheng_shenqiung_item4">
		                        <i className="iconArrow"></i>
		                        材料寄送出去之后，人人留学的材料顾问老师将与申请学校保持沟通，密切关注学生的申请状态，以确保申请服务质量
		                    </div>
		                    <div className="contentDvItem" id="daxue_qianZheng_shenqiung_item5">
		                        <i className="iconArrow"></i>
		                        很多美国高中会对申请人进行电话或SKYPE面试，学生须提前做好面试方面的准备工作，人人留学的顾问专家也会对学生进行面试辅导
		                    </div>
		                    <div className="contentDvItem" id="daxue_get_item1">
		                        <i className="iconArrow"></i>
		                        部分美国学校会直接发放I-20表，也有部分美国学校会要求学生支付学费押金后再发放I-20表
		                    </div>
		                    <div className="contentDvItem" id="daxue_get_item2">
		                        <i className="iconArrow"></i>
		                        学生可以直接入读高中学术课程
		                    </div>
		                    <div className="contentDvItem" id="daxue_get_item3">
		                        <i className="iconArrow"></i>
		                        学生由于英语未达学校要求，需赴美先就读语言课程，达到要求后方可入读高中学术课程
		                    </div>
		                    <div className="contentDvItem" id="daxue_qianzheng_item1">
		                        <i className="iconArrow"></i>
		                        a.	护照原件<br/>
								b.	签证照片1张<br/>
								c.	学校录取信及I-20表<br/>
								d.	DS160表确认页<br/>
								e.	在线签证预约确认单<br/>
								f.	美国国土安全费（200美金）付费收据<br/>
								g.	财力证明<br/>
								h.	中学在读/学历/成绩证明中英文件<br/>
								i.	其它一些辅助材料视申请人背景而定


		                    </div>
		                    <div className="contentDvItem" id="daxue_qianzheng_item2">
		                        <i className="iconArrow"></i>
		                        （1）	护照要求（须保留至少1年以上有效期）<br/>
								（2）	签证照片（白底，51MM*51MM，打印及电子版本都要）<br/>
								（3）	I-20表（须由学生签名，未满18周岁的学生，同时需要家长签名）<br/>
								（4）	国土安全费（须在面签日期三个工作日前支付）<br/>
								（5）	财力证明（须提供申请人与财力担保人之间的关系证明，如户口本，出生证等）

		                    </div>
		                    <div className="contentDvItem" id="daxue_qianzheng_item3">
		                        <i className="iconArrow"></i>
		                        人人留学的顾问专家将根据每个学生的情况，进行必要的面签培训辅导，以帮助同学顺利通过签证
		                    </div>
		                    <div className="contentDvItem" id="daxue_qianzheng_item4">
		                        <i className="iconArrow"></i>
		                        (1)	带好必备的签证材料<br/>
								(2)	按时抵达领馆<br/>
								(3)	着装须得体<br/>
								(4)	请勿佩戴首饰等金属制品<br/>
								(5)	请勿携带手机等电子产品<br/>
								(6)	进入签证大厅保持安静<br/>
								(7)	如实回答签证官的问题<br/>
								(8)	注意礼节，声音响亮

		                    </div>
		                    <div className="contentDvItem" id="daxue_toSchool_item1">
		                        <i className="iconArrow"></i>
		                        地区差异极大，学费一般一年3.5万美金左右
		                    </div>
		                    <div className="contentDvItem" id="daxue_toSchool_item2">
		                        <i className="iconArrow"></i>
		                        地区差异极大，生活费一年约1.8万美金左右
		                    </div>
		                    <div className="contentDvItem" id="daxue_toSchool_item3">
		                        <i className="iconArrow"></i>
		                        住宿申请，购买机票，接机安排，疫苗接种/体检，行李打包等
		                    </div>
		                    <div className="contentDvItem" id="daxue_inSchool_item2">
		                        <i className="iconArrow"></i>
		                        如果您课业繁重或精力有限，人人留学将为您提供专业、贴心的海外转学/升学服务
		                    </div>
		                    <div className="contentDvItem" id="daxue_inSchool_item3">
		                        <i className="iconArrow"></i>
		                        提供托福/雅思/SAT/ACT等考试的面授或在线培训服务
		                    </div>
		                    <div className="contentDvItem" id="daxue_inSchool_item4">
		                        <i className="iconArrow"></i>
		                        无论是学生续签还是亲友探亲，人人留学都可以为您提供相应的签证服务
		                    </div>
		                </div>
		            </div>
		        </div>

		        <div className="itBigDv fadeOut animated" id="universitySchoolYuan">
		            <div className="blueLine"></div>
		            <div className="banLiLiuChengContent">
		                <div className="itemImgDv online" data-flag="daxueyuan-online">
		                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianYue.png" className="pen imgItem" />
		                    <div>在线报名</div>
		                    <div className="bluePoint"></div>
		                </div>
		                
		                <div className="itemImgDv qianYue" data-flag="daxueyuan-qianYue">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-pen.png" className="qianYue imgItem" />
		                    <div>选择学校</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv choose" data-flag="daxueyuan-choose">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-school.png" className="school imgItem" />
		                    <div>签约办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv caiLiao" data-flag="daxueyuan-caiLiao">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-caiLiao.png" className="caiLiao imgItem" />
		                    <div>材料办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv get" data-flag="daxueyuan-get">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-get.png" className="get imgItem" />
		                    <div>获得录取</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv qianZheng" data-flag="daxueyuan-qianZheng">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianZheng.png" className="qianZheng imgItem" />
		                    <div>签证办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv toSchool" data-flag="daxueyuan-toSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-toSchool.png" className="toSchool imgItem"  />
		                    <div>赴美留学</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv full inSchool" data-flag="daxueyuan-inSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-inSchool.png" className="inSchool imgItem" />
		                    <div>在美服务</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="clear"></div>
		            </div>
		            <div className="followLine daxue_Follow  ">
		                <div className="dvLinxing daxuex_dvLinxing">
		                    <div className="linXing full">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font"><a href="/College" onClick={Link.handleClick}>学校检索</a></div>
		                    </div>
		                    <div className="linXing linXing2">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font" id="zhidingliuxuejkihua"><a href="/FreeGuide" onClick={Link.handleClick}>制定留学计划</a></div>
		                    </div>
		                    <div className="linXing">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font tuofu tuofu3">托福/雅思/GMAT/GRE等辅导</div>
		                    </div>
		                    <div className="linXing linXing2">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">文书服务</div>
		                    </div>
		                    <div className="linXing">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font zhifu">支付学费押金</div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		                <div className="clear"></div>
		            </div>
		            <div className="mainPart">
		                <div className="mainBgPart">
		                    <div className="newItemDv online" id="daxueyuan-online">
		                        <div className="newItem newItemA" data-delay="1.1" data-orgel ="daxueyuan_online_item1">
		                            申请基本条件
		                        </div>
		                       <div className="newItem newItemB" data-delay="0.9" data-orgel ="daxueyuan_online_item2">
		                            办理服务费用
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>

		                    <div className="newItemDv qianYue"  id="daxueyuan-qianYue">
		                        <div className="newItem newItemA" data-delay="1.3" data-orgel="daxueyuan_qianYue_item1">
		                            入学时间
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.1" data-orgel="daxueyuan_qianYue_item2">
		                            留学费用
		                        </div>
		                        <div className="newItem newItemC" data-delay="0.9"  data-orgel="daxueyuan_qianYue_item3">
		                            如何择校
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv qianYue"  id="daxueyuan-choose">
		                        <div className="newItem newItemA"  data-delay="1.7" data-orgel="daxueyuan_cailiao_item1">
		                            签订服务合同
		                        </div>
		                        <div className="newItem newItemB"  data-delay="1.5" data-orgel="daxueyuan_cailiao_item2">
									确定申请学校
		                        </div>
		                        <div className="newItem newItemC"  data-delay="1.3" data-orgel="daxueyuan_cailiao_item3">
									确定时间节点
		                        </div>
		                        <div className="newItem newItemD"  data-delay="1.1" data-orgel="daxueyuan_cailiao_item4">
									制订申请方案
		                        </div>
		                        <div className="newItem newItemE"  data-delay="0.9" data-orgel="daxueyuan_cailiao_item5">
									付学校报名费
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv caiLiao"  id="daxueyuan-caiLiao">
		                        <div className="newItem newItemA" data-delay="1.4"  data-orgel="daxueyuan_qianZheng_shenqiung_item1">
		                            申请材料准备
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.3"  data-orgel="daxueyuan_qianZheng_shenqiung_item2">
		                            材料相关要求
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.1"  data-orgel="daxueyuan_qianZheng_shenqiung_item3">
		                            申请材料寄送
		                        </div>
		                        <div className="newItem newItemD" data-delay="0.9"  data-orgel="daxueyuan_qianZheng_shenqiung_item4">
		                            申请状态追踪
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv caiLiao"  id="daxueyuan-get">
		                        <div className="newItem newItemA"  data-delay="1.5" data-orgel="daxueyuan_get_item1">
		                            接受录取获得I-20表
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.1" data-orgel="daxueyuan_get_item2">
		                            Full-Admission（直录）
		                        </div>
		                         <div className="newItem newItemC"  data-delay="0.9" data-orgel="daxueyuan_get_item3">
		                            Conditional Admission（双录）
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv qianZheng"  id="daxueyuan-qianZheng">
		                        <div className="newItem newItemA"  data-delay="1.5" data-orgel="daxueyuan_qianzheng_item1">
		                            签证所需材料
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.3" data-orgel="daxueyuan_qianzheng_item2">
		                            签证材料要求
		                        </div>
		                         <div className="newItem newItemC"  data-delay="1.1" data-orgel="daxueyuan_qianzheng_item3">
		                            面签培训辅导
		                        </div>
		                        <div className="newItem newItemD"  data-delay="0.9" data-orgel="daxueyuan_qianzheng_item4">
		                            签证注意事项
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv2 toSchool" id="daxueyuan-toSchool">
		                        <div className="newItem newItemA"  data-delay="1.5" data-orgel="daxueyuan_toSchool_item1">
		                            学习费用
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.3" data-orgel="daxueyuan_toSchool_item2">
		                            生活成本
		                        </div>
		                        <div className="newItem newItemC"  data-delay="1.1" data-orgel="daxueyuan_toSchool_item3">
		                            勤工俭学
		                        </div>
		                         <div className="newItem newItemD"  data-delay="0.9" data-orgel="daxueyuan_toSchool_item4">
		                            行前准备
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv3 inSchool" id="daxueyuan-inSchool">
		                        <div className="newItem newItemA"  data-delay="1.7" data-orgel="daxueyuan_inSchool_item1">
		                            应急协助
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.5" data-orgel="daxueyuan_inSchool_item2">
		                            转学升学
		                        </div>
		                         <div className="newItem newItemC"  data-delay="1.3" data-orgel="daxueyuan_inSchool_item3">
		                            考试培训
		                        </div>
		                        <div className="newItem newItemD"  data-delay="1.1" data-orgel="daxueyuan_inSchool_item4">
		                            续签服务
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		                <div className="allContent">
		                    <div className="contentDvItem" id="daxueyuan_online_item1" >
		                        <i className="iconArrow"></i>
		                        （1）本科在读/毕业以上学历<br />
								（说明：不同院校的录取要求也不同，美国名校申请基本条件：大学GPA3.3以上，托福90或雅思7分以上，GMAT680或GRE315分以上）<br />
								（2）赶早原则<br />
							     美国硕士申请竞争激烈，学生申请须尽早
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_online_item2">
		                        <i className="iconArrow"></i>
		                        根据学校排名不同，收费不同
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_qianYue_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">秋季：</font>9月份开学，院校及专业可选范围全覆盖<br />
								<font className="bold">春季：</font>1月份开学，院校及专业选择受限
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_qianYue_item2">
		                        <i className="iconArrow"></i>
		                        <font className="bold">申请费：</font>每所学校75美金左右<br />
								<font className="bold">学费：</font>根据学校和地理位置不同，学费相差较大，一年学费在1万—6万美金之间<br />
								<font className="bold">生活费：</font>因地理位置而异，一般一个月生活费约为1500美金<br />
								<font className="bold">其他：</font>托福考试费1546元人民币，雅思考试费1750元人民币，GMAT考试费250美金，GRE考试费1287元人民币，体检费约600元人民币，国土安全费200美金，签证费160美金，机票10000元人民币左右（单程）等

		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_qianYue_item3">
		                        <i className="iconArrow"></i>
		                        a.	根据自身条件出发（说明：不同院校的录取要求不同，美国名校硕士申请基本条件：本科成绩GPA3.3以上，托福90或雅思7分以上，GMAT680或GRE315以上）<br />
								b.	根据学校综合排名（学校综合排名只是一个参考，具体还是要看这个学校是否适合你）<br />
								c.	根据学校专业排名（申请硕士，专业排名比综合排名更重要，学生可以参考USNEWS的专业排名进行择校）<br />
								d.	根据学校综合费用（美国三千多所大学，费用各不相同，学生可以根据自身家庭经济状况选择适合自己的学校）<br />
								e.	根据学校地理位置（学校所在的地理位置对硕士生而言尤为重要，因为它将直接影响学生将来的实习和就业机会，学生可根据自己的需求进行选择）


		                    </div>

		                    <div className="contentDvItem" id="daxueyuan_qianZheng_shenqiung_item1">
		                        <i className="iconArrow"></i>
		                        a.	大学在读/毕业证明<br />
								b.	大学成绩单<br />
								c.	托福/雅思成绩<br />
								d.	GMAT/GRE成绩<br />
								e.	个人陈述<br />
								f.	简历<br />
								g.	财力证明<br />
								h.	推荐信<br />
								<font className="bold">注意：</font>申请艺术类课程需提供作品集
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_qianZheng_shenqiung_item2">
		                        <i className="iconArrow"></i>
		                        （1）在读/学历/成绩证明须中英文对照，加盖学校公章且密封<br />
								      <font className="bold">注：</font>有些美国院校要求学生做诸如WES/ECE之类的第三方认证，学生须提前预留好做认证的时间<br />
								（2）托福/雅思须官方送分<br />
								（3）GMAT/GRE须官方送分<br />
								（4）财力证明须由银行出具，中英文对照，金额根据学校的要求，一般准备45万人民币<br />
								（5）推荐信一般要求3封，以学术指导老师及实习或工作单位领导的名义出具
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_qianZheng_shenqiung_item3">
		                        <i className="iconArrow"></i>
		                        大部分的美国院校需要将申请材料原件寄送至招生录取办公室，学生须在学校规定的时间内将材料寄达学校
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_qianZheng_shenqiung_item4">
		                        <i className="iconArrow"></i>
		                        材料寄送出去之后，人人留学的材料顾问老师将与申请院校保持沟通，密切关注学生的申请状态，以确保申请服务质量
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_get_item1">
		                        <i className="iconArrow"></i>
		                        部分美国院校会直接发放I-20表，也有部分美国院校会要求学生支付学费押金后再发放I-20表
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_get_item2">
		                        <i className="iconArrow"></i>
		                        学生可以直接入读硕士课程
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_get_item3">
		                        <i className="iconArrow"></i>
		                        （1）学生由于英语未达学校要求，需要把英语水平提高到校方认可的标准后方可入读硕士课程<br />
								（2）学生由于先修课未满足学校要求，需要把大学水平的先修课补好之后方可进入硕士课程学习
		                    </div>
	                    	<div className="contentDvItem" id="daxueyuan_qianzheng_item1">
		                        <i className="iconArrow"></i>
		                        a.	护照原件<br />
								b.	签证照片1张<br />
								c.	学校录取信及I20表<br />
								d.	DS160表确认页<br />
								e.	在线签证预约确认单<br />
								f.	美国国土安全费（200美金）付费收据<br />
								g.	财力证明<br />
								h.	本科在读/学历/成绩证明中英文件<br />
								i.	其它一些辅助材料-视申请人背景而定
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_qianzheng_item2">
		                        <i className="iconArrow"></i>
		                        （1）	护照要求（须保留至少1年以上有效期）<br />
								（2）	签证照片（白底，51MM*51MM，打印及电子版本都要）<br />
								（3）	I-20表（须由学生签名）<br />
								（4）	国土安全费（须在面签日期三个工作日前支付）<br />
								（5）	财力证明（须提供申请人与财力担保人之间的关系证明，如户口本，出生证等）
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_qianzheng_item3">
		                        <i className="iconArrow"></i>
		                        人人留学的顾问专家将根据每个学生的情况，进行必要的面签培训辅导，以帮助同学顺利通过签证
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_qianzheng_item4">
		                        <i className="iconArrow"></i>
		                        (1)	带好必备的签证材料<br />
								(2)	按时抵达领馆<br />
								(3)	着装须得体<br />
								(4)	请勿佩戴首饰等金属制品<br />
								(5)	请勿携带手机等电子产品<br />
								(6)	进入签证大厅保持安静<br />
								(7)	如实回答签证官的问题<br />
								(8)	注意礼节，声音响亮
		                    </div>  
		                    <div className="contentDvItem" id="daxueyuan_toSchool_item1">
		                        <i className="iconArrow"></i>
		                        地区差异极大，学费一般一年3万美金左右
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_toSchool_item2">
		                        <i className="iconArrow"></i>
		                        地区差异极大，生活费一年约1.8万美金左右
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_toSchool_item3">
		                        <i className="iconArrow"></i>
		                        学生可在校内合法打工，每小时工资约8美金左右
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_toSchool_item4">
		                        <i className="iconArrow"></i>
		                        住宿申请，购买机票，接机安排，疫苗接种/体检，选课，行李打包等
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_inSchool_item2">
		                        <i className="iconArrow"></i>
		                        如果您课业繁重或精力有限，人人留学将为您提供专业、贴心的海外转学/升学服务
		                    </div>

		                    <div className="contentDvItem" id="daxueyuan_inSchool_item3">
		                        <i className="iconArrow"></i>
		                        提供托福/雅思/GMAT/GRE等考试的面授或在线培训服务
		                    </div>

		                    <div className="contentDvItem" id="daxueyuan_inSchool_item4">
		                        <i className="iconArrow"></i>
		                        无论是学生续签还是亲友探亲，人人留学都可以为您提供相应的签证服务
		                    </div>
		                </div>
		            </div>
		        </div>

		        <div className="itBigDv fadeOut animated" id="zhilu">
		            <div className="blueLine"></div>
		            <div className="banLiLiuChengContent">
		                <div className="itemImgDv online" data-flag="zhilu-online">
		                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianYue.png" className="pen imgItem" />
		                    <div>在线报名</div>
		                    <div className="bluePoint"></div>
		                </div>
		                
		                <div className="itemImgDv qianYue" data-flag="zhilu-qianYue">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-pen.png" className="qianYue imgItem" />
		                    <div>选择学校</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv choose" data-flag="zhilu-choose">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-school.png" className="school imgItem" />
		                    <div>签约办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv caiLiao" data-flag="zhilu-caiLiao">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-caiLiao.png" className="caiLiao imgItem" />
		                    <div>材料办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv get" data-flag="zhilu-get">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-get.png" className="get imgItem" />
		                    <div>获得录取</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv qianZheng" data-flag="zhilu-qianZheng">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianZheng.png" className="qianZheng imgItem" />
		                    <div>签证办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv toSchool" data-flag="zhilu-toSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-toSchool.png" className="toSchool imgItem"  />
		                    <div>赴美留学</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv full inSchool" data-flag="zhilu-inSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-inSchool.png" className="inSchool imgItem" />
		                    <div>在美服务</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="clear"></div>
		            </div>
		            <div className="followLine daxue_Follow  ">
		                <div className="dvLinxing daxuex_dvLinxing">
		                    <div className="linXing full">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font"><a href="/College" onClick={Link.handleClick}>学校检索</a></div>
		                    </div>
		                    <div className="linXing linXing2">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font" id="zhidingliuxuejkihua"><a href="/FreeGuide" onClick={Link.handleClick}>制定留学计划</a></div>
		                    </div>
		                    <div className="linXing">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">相关辅导</div>
		                    </div>
		                    <div className="linXing linXing2">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">文书服务</div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		                <div className="clear"></div>
		            </div>
		            <div className="mainPart">
		                <div className="mainBgPart">
		                    <div className="newItemDv online" id="zhilu-online">
		                        <div className="newItem newItemA" data-delay="1.1" data-orgel ="zhilu_online_item1">
		                            申请基本条件
		                        </div>
		                       <div className="newItem newItemB" data-delay="0.9" data-orgel ="zhilu_online_item2">
		                            办理服务费用
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>

		                    <div className="newItemDv qianYue"  id="zhilu-qianYue">
		                        <div className="newItem newItemA" data-delay="1.3" data-orgel="zhilu_qianYue_item1">
		                            入学时间
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.1" data-orgel="zhilu_qianYue_item2">
		                            留学费用
		                        </div>
		                        <div className="newItem newItemC" data-delay="0.9"  data-orgel="zhilu_qianYue_item3">
		                            如何择校
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv qianYue"  id="zhilu-choose">
		                        <div className="newItem newItemA"  data-delay="1.7" data-orgel="zhilu_cailiao_item1">
		                            签订服务合同
		                        </div>
		                        <div className="newItem newItemB"  data-delay="1.5" data-orgel="zhilu_cailiao_item2">
					确定院校项目
		                        </div>
		                        <div className="newItem newItemC"  data-delay="1.3" data-orgel="zhilu_cailiao_item3">
					确定时间节点
		                        </div>
		                        <div className="newItem newItemD"  data-delay="1.1" data-orgel="zhilu_cailiao_item4">
									制订申请方案
		                        </div>
		                        <div className="newItem newItemE"  data-delay="0.9" data-orgel="zhilu_cailiao_item5">
									付学校报名费
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv caiLiao"  id="zhilu-caiLiao">
		                        <div className="newItem newItemA" data-delay="1.3"  data-orgel="zhilu_qianZheng_shenqiung_item1">
		                            申请材料准备
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.1"  data-orgel="zhilu_qianZheng_shenqiung_item2">
		                            材料相关要求
		                        </div>
		                        <div className="newItem newItemC" data-delay="0.9"  data-orgel="zhilu_qianZheng_shenqiung_item3">
		                            申请材料寄送
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv caiLiao"  id="zhilu-get">
		                        <div className="newItem newItemA"  data-delay="1.1" data-orgel="zhilu_get_item1">
		                            支付学费押金
		                        </div>
		                       <div className="newItem newItemB"  data-delay="0.9" data-orgel="zhilu_get_item2">
		                            获得I-20表
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv qianZheng"  id="zhilu-qianZheng">
		                        <div className="newItem newItemA"  data-delay="1.5" data-orgel="zhilu_qianzheng_item1">
		                            签证所需材料
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.3" data-orgel="zhilu_qianzheng_item2">
		                            签证材料要求
		                        </div>
		                         <div className="newItem newItemC"  data-delay="1.1" data-orgel="zhilu_qianzheng_item3">
		                            面签培训辅导
		                        </div>
		                        <div className="newItem newItemD"  data-delay="0.9" data-orgel="zhilu_qianzheng_item4">
		                            签证注意事项
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv2 toSchool" id="zhilu-toSchool">
		                        <div className="newItem newItemA"  data-delay="1.5" data-orgel="zhilu_toSchool_item1">
		                            学习费用
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.3" data-orgel="zhilu_toSchool_item2">
		                            生活成本
		                        </div>
		                        <div className="newItem newItemC"  data-delay="1.1" data-orgel="zhilu_toSchool_item3">
		                            勤工俭学
		                        </div>
		                         <div className="newItem newItemD"  data-delay="0.9" data-orgel="zhilu_toSchool_item4">
		                            行前准备
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv3 inSchool" id="zhilu-inSchool">
		                        <div className="newItem newItemA"  data-delay="1.7" data-orgel="zhilu_inSchool_item1">
		                            应急协助
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.5" data-orgel="zhilu_inSchool_item2">
		                            转学升学
		                        </div>
		                         <div className="newItem newItemC"  data-delay="1.3" data-orgel="zhilu_inSchool_item3">
		                            考试培训
		                        </div>
		                        <div className="newItem newItemD"  data-delay="1.1" data-orgel="zhilu_inSchool_item4">
		                            续签服务
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		                <div className="allContent">
		                    <div className="contentDvItem" id="zhilu_online_item1" >
		                        <i className="iconArrow"></i>
		                        （说明：主要针对没有时间考托福/雅思/SSAT/SAT/ACT/GAMT/GRE，或上述考试成绩不理想的学生）<br />
					（1）	高中在读/毕业以上学历（针对本科申请）<br />
					（2）	本科在读/毕业以上学历（针对硕士申请）<br />
					（3）双录取项目名额有限，欲报从速

		                    </div>
		                    <div className="contentDvItem" id="zhilu_online_item2">
		                        <i className="iconArrow"></i>
		                        学校不同，收费不同
		                    </div>
		                    <div className="contentDvItem" id="zhilu_qianYue_item1">
		                        <i className="iconArrow"></i>
		                        多数项目开学日期为一月，五月，九月，另有部分学校项目入学时间灵活，全年滚动招生
		                    </div>
		                    <div className="contentDvItem" id="zhilu_qianYue_item2">
		                        <i className="iconArrow"></i>
		                           <font className="bold">学费及生活费：</font>人人留学的合作项目都是经过精挑细选出来的，性价比高，多数项目全年总费用在25万人民币左右。<br />
					<font className="bold">其他：</font>国土安全费200美金，体检费约600人民币，签证费160美金，机票10000元左右（单程）等
		                    </div>
		                    <div className="contentDvItem" id="zhilu_qianYue_item3">
		                        <i className="iconArrow"></i>
		                           将由人人留学的顾问专家根据您所填写的个人评估表，与您具体交流后，<br />
		                           为您推荐最适合您的院校及专业，递交申请后一般在2周内可以获得录取结果。
		                    </div>

		                    <div className="contentDvItem" id="zhilu_qianZheng_shenqiung_item1">
		                        <i className="iconArrow"></i>
		                        a.	高中或本科在读/毕业证明<br />
					b.	高中或本科成绩单<br />
					c.	财力证明<br />
					<font clasName="bold">注意：</font>申请艺术类课程需提供作品集

		                    </div>
		                    <div className="contentDvItem" id="zhilu_qianZheng_shenqiung_item2">
		                        <i className="iconArrow"></i>
		                        （1）在读/学历/成绩证明须中英文对照，加盖学校公章且密封（部分学校不需要密封件，只需要扫描件）<br />
					（2）财力证明须由银行出具，中英文对照，金额根据学校的要求，一般准备35万人民币

		                    </div>
		                    <div className="contentDvItem" id="zhilu_qianZheng_shenqiung_item3">
		                        <i className="iconArrow"></i>
		                        由人人留学的材料顾问专家审核后统一寄给相关合作院校
		                    </div>
		                    
		                    <div className="contentDvItem" id="zhilu_get_item1">
		                        <i className="iconArrow"></i>
		                        部分美国院校会直接发放I-20表，也有部分美国院校会要求学生支付学费押金后再发放I-20表
		                    </div>
		                    <div className="contentDvItem" id="zhilu_get_item2">
		                        <i className="iconArrow"></i>
		                        学生可以直接入读硕士课程
		                    </div>
	                    	<div className="contentDvItem" id="zhilu_qianzheng_item1">
		                        <i className="iconArrow"></i>
		                        a.	护照原件<br />
					b.	签证照片1张<br />
					c.	学校I-20表<br />
					d.	DS160表确认页<br />
					e.	在线签证预约确认单<br />
					f.	美国国土安全费（200美金）付费收据<br />
					g.	财力证明<br />
					h.	高中或本科在读/学历/成绩证明中英文件<br />
					i.	其它一些辅助材料视申请人背景而定

		                    </div>
		                    <div className="contentDvItem" id="zhilu_qianzheng_item2">
		                        <i className="iconArrow"></i>
		                        （1）	护照要求（须保留至少1年以上有效期）<br />
					（2）	签证照片（白底，51MM*51MM，打印及电子版本都要）<br />
					（3）	I-20表（须由学生签名）<br />
					（4）	国土安全费（须在面签日期三个工作日前支付）<br />
					（5）	财力证明（须提供申请人与财力担保人之间的关系证明，如户口本，出生证等）

		                    </div>
		                    <div className="contentDvItem" id="zhilu_qianzheng_item3">
		                        <i className="iconArrow"></i>
		                        人人留学的顾问专家将根据每个学生的情况，进行必要的面签培训辅导，以帮助同学顺利通过签证
		                    </div>
		                    <div className="contentDvItem" id="zhilu_qianzheng_item4">
		                        <i className="iconArrow"></i>
		                       (1)	带好必备的签证材料<br />
					(2)	按时抵达领馆<br />
					(3)	着装须得体<br />
					(4)	请勿佩戴首饰等金属制品<br />
					(5)	请勿携带手机等电子产品<br />
					(6)	进入签证大厅保持安静<br />
					(7)	如实回答签证官的问题<br />
					(8)	注意礼节，声音响亮

		                    </div>  
		                    <div className="contentDvItem" id="zhilu_toSchool_item1">
		                        <i className="iconArrow"></i>
		                        学费一般一年2.5万美金左右
		                    </div>
		                    <div className="contentDvItem" id="zhilu_toSchool_item2">
		                        <i className="iconArrow"></i>
		                        食宿费一年约1.8万美金左右
		                    </div>
		                    <div className="contentDvItem" id="zhilu_toSchool_item3">
		                        <i className="iconArrow"></i>
		                        学生可在校内合法打工，每小时工资约8美金左右
		                    </div>
		                    <div className="contentDvItem" id="zhilu_toSchool_item4">
		                        <i className="iconArrow"></i>
		                        住宿申请，购买机票，接机安排，疫苗接种/体检，选课，行李打包等
		                    </div>
		                    <div className="contentDvItem" id="zhilu_inSchool_item2">
		                        <i className="iconArrow"></i>
		                        如果您课业繁重或精力有限，人人留学将为您提供专业、贴心的海外转学/升学服务
		                    </div>

		                    <div className="contentDvItem" id="zhilu_inSchool_item3">
		                        <i className="iconArrow"></i>
		                        提供托福/雅思/SSAT/SAT/ACT/GMAT/GRE等考试的面授或在线培训服务
		                    </div>

		                    <div className="contentDvItem" id="zhilu_inSchool_item4">
		                        <i className="iconArrow"></i>
		                        无论是学生续签还是亲友探亲，人人留学都可以为您提供相应的签证服务
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
