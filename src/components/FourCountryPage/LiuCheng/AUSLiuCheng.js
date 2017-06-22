/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
import React, { PropTypes } from 'react';
import styles from './css/aus.less';
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
		            <span className="item active" data-flag-o ="yuyanSchool">澳洲IBT项目申请流程</span>
		            <span className="item" data-flag-o ="universitySchool">澳洲本科</span>
		            <span className="item" data-flag-o ="universitySchoolYuan">澳洲硕士</span>
		            <span className="item" data-flag-o ="highJp">澳洲高中</span>
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
		                    <div>获得offer</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv qianZheng" data-flag="yuyan-qianZheng">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianZheng.png" className="qianZheng imgItem" />
		                    <div>签证办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv toSchool" data-flag="yuyan-toSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-toSchool.png" className="toSchool imgItem"  />
		                    <div>赴澳留学</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv full inSchool" data-flag="yuyan-inSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-inSchool.png" className="inSchool imgItem" />
		                    <div>在澳服务</div>
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
		                        <div className="font">英语辅导</div>
		                    </div>
		                    <div className="linXing linXing2">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">文书服务</div>
		                    </div>
		                    <div className="linXing zhifu">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font zhifu">支付学费押金</div>
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
		                            办理费用问题
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.1" data-orgel ="yuyan_online_item3">
		                            免费留学服务
		                        </div>
		                      
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv choose"  id="yuyan-choose">
		                        <div className="newItem newItemA" data-delay="1.3"  data-orgel ="yuyan_choose_item1">
		                            如何择校
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.1" data-orgel="yuyan_choose_item2">
		                            留学费用
		                        </div>
		                        <div className="newItem newItemC" data-delay="0.9"  data-orgel="yuyan_choose_item3">
		                            入学时间
		                        </div>
		                        <div className="newItem newItemD" data-delay="0.7"  data-orgel="yuyan_choose_item4">
		                            IBT优势比较
		                        </div>
		                        <div className="borderBl"></div> 
		                    </div>
		                    <div className="newItemDv qianYue"  id="yuyan-qianYue">
		                        <div className="newItem newItemA" data-delay="1.5" data-orgel="yuyan_qianYue_item1">
		                            签订服务合同
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.3" data-orgel="yuyan_qianYue_item2">
		                            确定申请学校和专业
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.1"  data-orgel="yuyan_qianYue_item3">
		                            确定时间节点
		                        </div>
		                        <div className="newItem newItemD" data-delay="0.9" data-orgel="yuyan_qianYue_item4">
		                            付学校报名费
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
		                    <div className="newItemDv get"  id="yuyan-get">
		                        <div className="newItem newItemA"  data-delay="1.3" data-orgel="yuyan_get_item1">
		                           	Conditional offer
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.1"  data-orgel="yuyan_get_item2">
		                            Unconditional offer
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv qianZheng"  id="yuyan-qianZheng">
		                        <div className="newItem newItemA" data-delay="1.7"  data-orgel="yuyan_qianZheng_item1">
		                            提供哪些材料
		                        </div>
		                        <div className="newItem newItemB" data-delay="1.5"  data-orgel="yuyan_qianZheng_item2">
		                            汇学费，获得COE
		                        </div>
		                        <div className="newItem newItemB" data-delay="1.3"  data-orgel="yuyan_qianZheng_item3">
		                            递交电子签证申请
		                        </div>
		                        <div className="newItem newItemB" data-delay="1.1"  data-orgel="yuyan_qianZheng_item4">
		                            体检
		                        </div>
		                        <div className="newItem newItemB" data-delay="0.9"  data-orgel="yuyan_qianZheng_item5">
		                            获得签证
		                        </div>
		                        <div className="newItem newItemB" data-delay="0.7"  data-orgel="yuyan_qianZheng_item6">
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
		                            生活成本
		                        </div>
		                        <div className="newItem newItemD"  data-delay="1.1" data-orgel="yuyan_toSchool_item4">
		                            生活成本
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv3 inSchool" id="yuyan-inSchool">
		                        <div className="newItem newItemA"  data-delay="1.7" data-orgel="yuyan_inSchool_item1">
		                            应急协助
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.5" data-orgel="yuyan_inSchool_item2">
		                            打工求职
		                        </div>
		                         <div className="newItem newItemC"  data-delay="1.3" data-orgel="yuyan_inSchool_item3">
		                            升学辅导
		                        </div>
		                        <div className="newItem newItemD"  data-delay="1.1" data-orgel="yuyan_inSchool_item4">
		                            续签
		                        </div>
		                   
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		                <div className="allContent">
		                    <div className="contentDvItem" id="yuyan_online_item1" >
		                        <i className="iconArrow"></i>
		                        高中成绩平均分80分，无需高考成绩，雅思成绩5.5分即可，未达到语言要求，可加读语言课程，通过测试后可进入主课。
		                    </div>
		                    <div className="contentDvItem" id="yuyan_online_item2">
		                        <i className="iconArrow"></i>
		                      	需支付2000元押金，申请成功并赴澳留学后将返回全部押金，申请不成功亦将返还您全部押金
		                    </div>
		                    <div className="contentDvItem" id="yuyan_online_item3">
		                        <i className="iconArrow"></i>
		                        免费提供大学申请，从确定申请学校专业；申请材料准备；签证行前指导服务。
		                    </div>
		                    <div className="contentDvItem" id="yuyan_choose_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">课程专业设置</font>：开设了商业、电脑及信息科技、大众传媒、旅游/酒店管理及设计五大类40余种科目，均为热门专业。<br />
		                        <font className="bold">开设课程的学校</font>：IBT快捷课程以大学所在地区命名： 悉尼的麦考里大学（SIBT）,
		                         墨尔本的迪肯大学(MIBT)，阿德莱德的南澳大学(SAIBT,)，布里斯班的格里菲斯大学(QIBT)，佩斯的埃迪斯科文大学(PIBT) ，
		                         科廷国际学院（CIC）。<br />
		                    </div>
		                    <div className="contentDvItem" id="yuyan_choose_item2">
		                        <i className="iconArrow"></i>
		                        澳洲留学花费主要由两部分构成：学费和生活费。 <br />
		                        （1）学费一般在2万澳币/年到3万8澳币/年左右，学校越好学费越贵；另外就同一学校，专业不同学费也不同，例如商科和工科相对教师，护理，社会等高出不少。<br />
		                        （2）生活费一般1200-1600/月不等，按城市不同有区别，差距较大主要在住宿费，一般在150-300澳币一周不等。
		                    </div>
		                    <div className="contentDvItem" id="yuyan_choose_item3">
		                        <i className="iconArrow"></i>
		                        澳洲位于南半球，每年三次入学，分别为3月（或者2月）（夏季），6月（冬季）和10月（春季）。
		                    </div>
		                    <div className="contentDvItem" id="yuyan_choose_item4">
		                        <i className="iconArrow"></i>
		                        <font className="bold">a.学制短，节省时间金钱</font>：完成预科加学士学位仅需2年8个月。<br />
		                        <font className="bold">b.较长的授课时间</font>：澳大利亚大学一般每单元的学习时间为3个小时，每天授课时间。<br />
		                        <font className="bold">c.学历认可</font>：IBT课程为澳洲大学认可。<br />
		                        <font className="bold">d．入学条件宽松</font>：读大学IBT课程仅需雅思成绩5.5，高三毕业，无需高考成绩。<br />
		                    </div>
		                    <div className="contentDvItem" id="yuyan_qianYue_item3">
		                        <i className="iconArrow"></i>
		                        如申请开放时间确认，材料提交时间，雅思考试时间，语言课申请时间，签证申请时间，宿舍申请时间等。
		                    </div>
		                    <div className="contentDvItem" id="yuyan_cailiao_item1">
		                        <i className="iconArrow"></i>
		                       	中英文成绩单；在读证明/毕业证书学历（中英文）；雅思成绩单；个人陈述（依据所申请学校不同有不同要求）
		                    </div>
		                    <div className="contentDvItem" id="yuyan_cailiao_item2">
		                        <i className="iconArrow"></i>
		                        <font className="bold">中英文成绩单</font>：成绩单需打印在学校抬头纸上，由学校教务处盖章。<br />
		                        <font className="bold">在读证明</font>：学校抬头纸打印，教务处盖章。<br />
		                        <font className="bold">学历学位证明</font>：需提供中英文版学历学位证明，打印在学校抬头纸上。<br />
		                        <font className="bold">推荐信</font>：以中学任课老师名义出具，长度最好不超过一页。<br />
		                        <font className="bold">雅思成绩单</font>：大部分学校可以不提供雅思成绩申请，提交的雅思成绩单最好不要低于官方所要求的0.5分。<br />
		                    </div>
		                    <div className="contentDvItem" id="yuyan_get_item1">
		                        <i className="iconArrow"></i>
		                        雅思成绩没达到学校要求；或要求未毕业的学生平均分达到一定要求
		                    </div>
		                    <div className="contentDvItem" id="yuyan_get_item2">
		                        <i className="iconArrow"></i>
		                       学生已达到学校录取的各项要求
		                    </div>
		            
		                    <div className="contentDvItem" id="yuyan_qianZheng_item1">
		                        <i className="iconArrow"></i>
		                         签证表格、护照、签证申请费、照片、存款证明、出生证明，户口本
		                    </div>
		                    <div className="contentDvItem" id="yuyan_qianZheng_item2">
		                        <i className="iconArrow"></i>
		                        确认接受offer,填写接收表，按学校要求交学费押金，换取COE.
		                    </div>
		                    <div className="contentDvItem" id="yuyan_qianZheng_item4">
		                        <i className="iconArrow"></i>
		                        电签递交后自动生成体检表，即可到指定医院体检
		                    </div>
		                    <div className="contentDvItem" id="yuyan_qianZheng_item6">
		                        <i className="iconArrow"></i>
		                        若申请人被录取赴澳就读一年的预科课程+大学本科课程或已在澳大利亚完成一年的预科课程，<br />
		                        该类学生可只提供高二毕业证明（或同等学历证明）即可，此类签证直读的雅思要求是5.5分；<br />
		                        其他类型573类签证均须提供高中毕业证书（或同等学历证明），签证直读要求为6分。573类签证的最低雅思要求为5分，<br />
		                        可申请不超过30周的英语强化课程。
		                    </div>
		                    <div className="contentDvItem" id="yuyan_toSchool_item1">
		                        <i className="iconArrow"></i>
		                        澳洲住宿分为三种形式，住学校，住homestay,自己租房，住宿费用根据地区的不同一般在150-300澳币一周不等。
		                    </div>
		                    <div className="contentDvItem" id="yuyan_toSchool_item2">
		                        <i className="iconArrow"></i>
		                        生活费一般在1200-1600澳币一个月左右，按照城市不同有区别，吃饭各个城市相差不大，差距主要在住宿费上。
		                    </div>
		                    <div className="contentDvItem" id="yuyan_toSchool_item3">
		                        <i className="iconArrow"></i>
		                        每周不超过20个小时，时薪通常在8到17澳币/小时不等。
		                    </div>
		                    <div className="contentDvItem" id="yuyan_toSchool_item4">
		                        <i className="iconArrow"></i>
		                       恭喜你拿到了赴澳签证，到达澳洲前有一些需要注意的要点，包括行李要求、常用物品、应急药物等。

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
		                    <div>获得offer</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv qianZheng" data-flag="daxue-qianZheng">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianZheng.png" className="qianZheng imgItem" />
		                    <div>签证办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv toSchool" data-flag="daxue-toSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-toSchool.png" className="toSchool imgItem"  />
		                    <div>赴澳留学</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv full inSchool" data-flag="daxue-inSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-inSchool.png" className="inSchool imgItem" />
		                    <div>在澳服务</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="clear"></div>
		            </div>
		            <div className="followLine daxue_Follow">
		                <div className="dvLinxing dvLinxing2">
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
		                        <div className="font">英语辅导</div>
		                    </div>
		                    <div className="linXing linXing2">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">文书服务</div>
		                    </div>
		                    <div className="linXing">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">支付学费押金</div>
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
		                    <div className="newItemDv online" id="daxue-online">
		                        <div className="newItem newItemA" data-delay="1.7" data-orgel ="daxue_online_item1">
		                            直招申请条件
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.5" data-orgel ="daxue_online_item2">
		                            办理费用问题
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.3" data-orgel ="daxue_online_item3">
		                            免费留学服务
		                        </div>
		                     
		                        <div className="borderBl"></div>
		                    </div>
		                     <div className="newItemDv choose"  id="daxue-choose">
		                        <div className="newItem newItemA" data-delay="1.3"  data-orgel ="daxue_choose_item1">
		                            如何择校
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.1" data-orgel="daxue_choose_item2">
		                            留学费用
		                        </div>
		                        <div className="newItem newItemC" data-delay="0.9"  data-orgel="daxue_choose_item3">
		                            入学时间
		                        </div>		         
		                        <div className="borderBl"></div> 
		                    </div>

		                    <div className="newItemDv qianYue"  id="daxue-qianYue">
		                        <div className="newItem newItemA" data-delay="1.5" data-orgel="daxue_qianYue_item1">
		                            签订服务合同
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.3" data-orgel="daxue_qianYue_item2">
		                            确定申请学校和专业
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.1"  data-orgel="daxue_qianYue_item3">
		                            确定时间节点
		                        </div>
		                        <div className="newItem newItemD" data-delay="0.9" data-orgel="daxue_qianYue_item4">
		                            付学校报名费
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv caiLiao"  id="daxue-caiLiao">
		                        <div className="newItem newItemA"  data-delay="1.1" data-orgel="daxue_cailiao_item1">
		                            提供哪些材料
		                        </div>
		                        <div className="newItem newItemA"  data-delay="0.9" data-orgel="daxue_cailiao_item2">
		                            材料相关问题
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv get"  id="daxue-get">
		                        <div className="newItem newItemA"  data-delay="1.3" data-orgel="daxue_get_item1">
		                           	Conditional offer
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.1"  data-orgel="daxue_get_item2">
		                            Unconditional offer
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv qianZheng"  id="daxue-qianZheng">
		                        <div className="newItem newItemA" data-delay="1.7"  data-orgel="daxue_qianZheng_item1">
		                            提供哪些材料
		                        </div>
		                        <div className="newItem newItemB" data-delay="1.5"  data-orgel="daxue_qianZheng_item2">
		                            支付学费押金后，获得COE
		                        </div>
		                        <div className="newItem newItemB" data-delay="1.3"  data-orgel="daxue_qianZheng_item3">
		                            递交电子签证申请
		                        </div>
		                        <div className="newItem newItemB" data-delay="1.3"  data-orgel="daxue_qianZheng_item4">
		                            体检
		                        </div>
		                        <div className="newItem newItemB" data-delay="1.1"  data-orgel="daxue_qianZheng_item5">
		                          获得签证
		                        </div>
		                        <div className="newItem newItemB" data-delay="0.9"  data-orgel="daxue_qianZheng_item6">
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
		                        <div className="newItem newItemE"  data-delay="0.9" data-orgel="daxue_toSchool_item4">
		                            行前准备
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv3 inSchool" id="daxue-inSchool">
		                        <div className="newItem newItemA"  data-delay="1.7" data-orgel="daxue_inSchool_item1">
		                            应急协助
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.5" data-orgel="daxue_inSchool_item2">
		                            打工求职
		                        </div>
		                         <div className="newItem newItemC"  data-delay="1.3" data-orgel="daxue_inSchool_item3">
		                            升学辅导
		                        </div>
		                        <div className="newItem newItemD"  data-delay="1.1" data-orgel="daxue_inSchool_item4">
		                            续签
		                        </div>
		                        
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		                <div className="allContent">
		                    <div className="contentDvItem" id="daxue_online_item1" >
		                        <i className="iconArrow"></i>
		                        完成高三+高考，或大学一年级的课程;专升本至少完成专科前两年学习。
		                    </div>
		                    <div className="contentDvItem" id="daxue_online_item2">
		                        <i className="iconArrow"></i>
		                        需支付2000元押金，申请成功并赴澳留学后将返回全部押金，申请不成功亦将返还您全部押金
		                    </div>
		                    <div className="contentDvItem" id="daxue_online_item3">
		                        <i className="iconArrow"></i>
		                        免费提供大学申请，从确定申请学校专业；申请材料准备；签证行前指导服务。
		                    </div>
		                
		                    <div className="contentDvItem" id="daxue_choose_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">个人成绩</font>：个人成绩的高低会影响学校的选择；方案一：3年本科直读，需要达到国内一本分数线，<br />
		                        雅思6.0以上；方案二：1年预科+3年本科，至少完成高二学习，平均分70分以上，若雅思成绩达到5.5-6分，可直接入读预科课程；<br />
		                        方案三：8个月文凭课程+2年本科课程，针对重点中学的学生，至少完成高二学习，平均分80分以上，雅思5.0以上。<br />
		                        <font className="bold">地理位置</font>：地理位置也是选择学校时一个重要的考虑因素，比如，是否需要移民加分，是否钟爱某一地区；同时地理位置不同，气候，经济和消费水平也相近不同。<br />
		                       

		                    </div>
		                    <div className="contentDvItem" id="daxue_choose_item2">
		                        <i className="iconArrow"></i>
		                        澳洲留学花费主要由两部分构成：学费和生活费。 <br />
		                        （1）学费一般在2万澳币/年到3万8澳币/年左右，学校越好学费越贵；另外就同一学校，专业不同学费也不同，例如商科和工科相对教师，护理，社会等高出不少。<br />
		                        （2）生活费一般1200-1600澳币/月不等，按城市不同有区别，差距较大主要在住宿费，一般在150-300澳币一周不等。
		                    </div>
		                    <div className="contentDvItem" id="daxue_choose_item3">
		                        <i className="iconArrow"></i>
		                        澳洲位于南半球，大学一般在2月（夏季）和7月（冬季）开学。<br />
		                        <font className="bold">2月</font>是大学主要开学时间。<br />
		                        <font className="bold">7月</font>也是开学时间，但专业没有2月齐全。由于中国学生都是6月毕业，所以大部分中国学生选择7月入学。
		        
		                    </div>
		                    <div className="contentDvItem" id="daxue_qianYue_item3">
		                        <i className="iconArrow"></i>
		                        如申请开放时间确认，材料提交时间，雅思考试时间，语言课申请时间，签证申请时间，宿舍申请时间等。
		                    </div>
		                    <div className="contentDvItem" id="daxue_cailiao_item1">
		                        <i className="iconArrow"></i>
		                        中英文成绩单；在读证明/毕业证书学历（中英文）；雅思/托福成绩单；个人陈述（依据所申请学校不同有不同要求）
		                    </div>
		                    <div className="contentDvItem" id="daxue_cailiao_item2">
		                        <i className="iconArrow"></i>
		                        <font className="bold">中英文成绩单</font>：成绩单需打印在学校抬头纸上，由学校教务处盖章。<br />
		                        <font className="bold">在读证明</font>：学校抬头纸打印，教务处盖章。<br />
		                        <font className="bold">毕业证明</font>：需提供中英文版毕业证明。<br />
		                        <font className="bold">推荐信</font>：以中学任课老师名义出具，长度最好不超过一页。<br />
		                        <font className="bold">个人陈述</font>：字数控制在800左右不超过两页A4纸，部分学校推荐信要求有所不同，或不需要提供推荐信，请和顾问老师联系去学校官网确认。<br />
		                        <font className="bold">雅思/托福成绩单</font>：提交的雅思/托福成绩可以比校方录取标准略低；部分学校可以不提供英语成绩申请。
		                    </div>

		                     <div className="contentDvItem" id="daxue_get_item1">
		                        <i className="iconArrow"></i>
		                        雅思成绩没达到学校要求；或要求未毕业的学生平均分达到一定要求
		                    </div>
		                    <div className="contentDvItem" id="daxue_get_item2">
		                        <i className="iconArrow"></i>
		                       学生已达到学校录取的各项要求
		                    </div>

		                    <div className="contentDvItem" id="daxue_qianZheng_item1">
		                        <i className="iconArrow"></i>
		                        签证表格、护照、签证申请费、照片、存款证明、出生证明，户口本
		                    </div>
		                    <div className="contentDvItem" id="daxue_qianZheng_item2">
		                        <i className="iconArrow"></i>
		                        确认接受offer,填写接收表，按学校要求交学费押金，换取COE.
		                    </div>
		                     <div className="contentDvItem" id="daxue_qianZheng_item4">
		                        <i className="iconArrow"></i>
		                        电签递交后自动生成体检表，即可到指定医院体检
		                    </div>
		                     <div className="contentDvItem" id="daxue_qianZheng_item6">
		                        <i className="iconArrow"></i>
		                        若申请人被录取赴澳就读一年的预科课程+大学本科课程或已在澳大利亚完成一年的预科课程，该类学生可只提供高二毕业证明（或同等学历证明）即可，此类签证直读的雅思要求是5.5分；其他类型573类签证均须提供高中毕业证书（或同等学历证明），签证直读要求为6分。573类签证的最低雅思要求为5分，可申请不超过30周的英语强化课程。
		                    </div>

		                    <div className="contentDvItem" id="daxue_toSchool_item1">
		                        <i className="iconArrow"></i>
		                        澳洲住宿分为三种形式，住学校，住homestay,自己租房，住宿费用根据地区的不同一般在150-300澳币一周不等。
		                    </div>
		                    <div className="contentDvItem" id="daxue_toSchool_item2">
		                        <i className="iconArrow"></i>
		                        生活费一般在1200-1600澳币一个月左右，按照城市不同有区别，差距主要在住宿费上。
		                    </div>
		                    <div className="contentDvItem" id="daxue_toSchool_item3">
		                        <i className="iconArrow"></i>
		                        每周不超过20个小时，通常在8到17澳币/小时不等。
		                    </div>
		                    <div className="contentDvItem" id="daxue_toSchool_item4">
		                        <i className="iconArrow"></i>
		                        恭喜你拿到了赴澳签证，到达澳洲前有一些需要注意的要点，包括行李要求、常用物品、应急药物等。
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
		                
		                <div className="itemImgDv qianYue" data-flag="daxueyuan-choose">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-school.png" className="qianYue imgItem" />
		                    <div>选择学校</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv choose" data-flag="daxueyuan-qianYue">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianYue.png" className="school imgItem" />
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
		                    <div>获得offer</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv qianZheng" data-flag="daxueyuan-qianZheng">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianZheng.png" className="qianZheng imgItem" />
		                    <div>签证办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv toSchool" data-flag="daxueyuan-toSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-toSchool.png" className="toSchool imgItem"  />
		                    <div>赴澳留学</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv full inSchool" data-flag="daxueyuan-inSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-inSchool.png" className="inSchool imgItem" />
		                    <div>在澳服务</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="clear"></div>
		            </div>
		            <div className="followLine daxueyuan_Follow">
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
		                        <div className="font">英语辅导</div>
		                    </div>
		                    <div className="linXing linXing2">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">文书服务</div>
		                    </div>
		                    <div className="linXing">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">支付学费押金</div>
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
		                    <div className="newItemDv online" id="daxueyuan-online">
		                        <div className="newItem newItemA" data-delay="1.7" data-orgel ="daxueyuan_online_item1">
		                            申请学校条件
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.5" data-orgel ="daxueyuan_online_item2">
		                            办理费用问题
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.3" data-orgel ="daxueyuan_online_item3">
		                            免费留学服务
		                        </div>
		                    
		                        <div className="borderBl"></div>
		                    </div>
		                     <div className="newItemDv choose"  id="daxueyuan-choose">
		                        <div className="newItem newItemA" data-delay="1.3"  data-orgel ="daxueyuan_choose_item1">
		                            如何择校
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.1" data-orgel="daxueyuan_choose_item2">
		                            留学费用
		                        </div>
		                        <div className="newItem newItemC" data-delay="0.9"  data-orgel="daxueyuan_choose_item3">
		                            入学时间
		                        </div>			            
		                        <div className="borderBl"></div> 
		                    </div>
		                    <div className="newItemDv qianYue"  id="daxueyuan-qianYue">
		                        <div className="newItem newItemA" data-delay="1.5" data-orgel="daxueyuan_qianYue_item1">
		                            签订服务合同
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.3" data-orgel="daxueyuan_qianYue_item2">
		                            确定申请学校和专业
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.1"  data-orgel="daxueyuan_qianYue_item3">
		                            确定时间节点
		                        </div>
		                        <div className="newItem newItemD" data-delay="0.9" data-orgel="daxueyuan_qianYue_item4">
		                            付学校报名费
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv caiLiao"  id="daxueyuan-caiLiao">
		                        <div className="newItem newItemA"  data-delay="1.1" data-orgel="daxueyuan_cailiao_item1">
		                            提供哪些材料
		                        </div>
		                        <div className="newItem newItemB"  data-delay="0.9" data-orgel="daxueyuan_cailiao_item2">
		                            材料相关问题
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv get"  id="daxueyuan-get">
		                        <div className="newItem newItemA"  data-delay="1.3" data-orgel="daxueyuan_get_item1">
		                           	Conditional offer
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.1"  data-orgel="daxueyuan_get_item2">
		                            Unconditional offer
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv qianZheng"  id="daxueyuan-qianZheng">
		                        <div className="newItem newItemA" data-delay="1.7"  data-orgel="daxueyuan_qianZheng_item1">
		                            提供哪些材料
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.5"  data-orgel="daxueyuan_qianZheng_item2">
		                            支付学费押金后，获得COE
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.3"  data-orgel="daxueyuan_qianZheng_item3">
		                            递交电子签证申请
		                        </div>
		                        <div className="newItem newItemD" data-delay="1.1"  data-orgel="daxueyuan_qianZheng_item4">
		                            体检
		                        </div>
		                        <div className="newItem newItemE" data-delay="0.9"  data-orgel="daxueyuan_qianZheng_item5">
		                            获得签证
		                        </div>
		                        <div className="newItem newItemF" data-delay="0.7"  data-orgel="daxueyuan_qianZheng_item6">
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
		                          行前准备
		                        </div>	
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv3 inSchool" id="daxueyuan-inSchool">
		                        <div className="newItem newItemA"  data-delay="1.7" data-orgel="daxueyuan_inSchool_item1">
		                            应急协助
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.5" data-orgel="daxueyuan_inSchool_item2">
		                            打工求职
		                        </div>
		                         <div className="newItem newItemC"  data-delay="1.3" data-orgel="daxueyuan_inSchool_item3">
		                            升学辅导
		                        </div>
		                        <div className="newItem newItemD"  data-delay="1.1" data-orgel="daxueyuan_inSchool_item4">
		                            续签
		                        </div>

		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		                <div className="allContent">
		                    <div className="contentDvItem" id="daxueyuan_online_item1" >
		                        <i className="iconArrow"></i>
		                        本科或专科毕业
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_online_item2">
		                        <i className="iconArrow"></i>
		                        需支付2000元押金，申请成功并赴澳留学后将返回全部押金，申请不成功亦将返还您全部押金
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_online_item3">
		                        <i className="iconArrow"></i>
		                        免费提供大学申请，确定申请学校专业；申请材料准备；签证行前指导服务。

		                    </div>
		                
		                    <div className="contentDvItem" id="daxueyuan_choose_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">出身校</font>：澳洲八大，一般要求学生来自211院校。<br />
		                        <font className="bold">平均成绩</font>：商科或文科，211院校需80分，普通院校85分，工科类，211院校需75分，普通院校80分。<br />
		                        <font className="bold">地理位置</font>：地理位置也是选择学校时一个重要的考虑因素，比如，是否需要移民加分，是否钟爱某一地区；同时地理位置不同，气候，经济和消费水平也相近不同。

		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_choose_item2">
		                        <i className="iconArrow"></i>
		                        澳洲留学花费主要由两部分构成：学费和生活费。<br />
		                        1.学费一般在2万澳币/年到3万8澳币/年左右，学校越好学费越贵；另外就同一学校，专业不同学费也不同，例如商科和工科相对教师，护理，社会学等高出不少。<br />
		                        2.生活费一般1200-1600澳币/月不等，按城市不同有区别，差距较大主要在住宿费，一般在150-300澳币一周不等。
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_choose_item3">
		                        <i className="iconArrow"></i>
		                        澳洲位于南半球，大学一般在2月（夏季）和7月（冬季）开学。<br />
		                        <font className="bold">2月</font>是大学主要开学时间。<br />
		                        <font className="bold">7月</font>也是开学时间，但专业没有2月齐全。由于中国学生都是6月毕业，所以大部分中国学生选择7月入学。
		                       
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_qianYue_item3">
		                        <i className="iconArrow"></i>
		                        如申请开放时间确认，材料提交时间，雅思/托福考试时间，语言课申请时间，签证申请时间，宿舍申请时间等
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_cailiao_item1">
		                        <i className="iconArrow"></i>
		                        中英文成绩单；在读证明/毕业证书学历（中英文）；雅思/托福成绩单；个人陈述（依据所申请学校不同有不同要求）
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_cailiao_item2">
		                        <i className="iconArrow"></i>
		                        <font className="bold">中英文成绩单</font>成绩单需打印在学校抬头纸上，由学校教务处盖章。<br />
		                        <font className="bold">在读证明</font>学校抬头纸打印，教务处盖章<br />
		                        <font className="bold">学历学位证明</font>需提供中英文版学历学位证明。<br />
		                        <font className="bold">推荐信</font>以学术指导老师及实习或工作单位领导的名义出具<br />
		                        <font className="bold">个人陈述</font>字数控制在800左右不超过两页A4纸，部分学校推荐信要求有所不同，或不需要提供推荐信，请和顾问老师联系去学校官网确认<br />
		                        <font className="bold">雅思/托福成绩单</font>大部分学校可以不提供英语成绩申请。
		                    </div>
							<div className="contentDvItem" id="daxueyuan_get_item1">
		                        <i className="iconArrow"></i>
		                        雅思成绩没达到学校要求；或要求未毕业的学生平均分达到一定要求
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_get_item2">
		                        <i className="iconArrow"></i>
		                       学生已达到学校录取的各项要求
		                    </div>		               
		                    <div className="contentDvItem" id="daxueyuan_qianZheng_item1">
		                        <i className="iconArrow"></i>
		                        签证表格、护照、签证申请费、照片、存款证明、出生证明，户口本、学历证明、成绩单
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_qianZheng_item2">
		                        <i className="iconArrow"></i>
		                        确认接受offer,填写接收表，按学校要求交学费押金，换取COE.
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_qianZheng_item4">
		                        <i className="iconArrow"></i>
		                        电签递交后自动生成体检表，即可到指定医院体检
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_qianZheng_item6">
		                        <i className="iconArrow"></i>
		                        <font className="bold">资金要求</font>担保金需要计算包括预备课程（含英语课程）及第一年（12个月）主课的学费、生活费。
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_toSchool_item1">
		                        <i className="iconArrow"></i>
		                        澳洲住宿分为三种形式，住学校，住homestay,自己租房，住宿费用根据地区的不同一般在150-300澳币一周不等。
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_toSchool_item2">
		                        <i className="iconArrow"></i>
		                        生活费一般在1200-1600澳币一个月左右，按照城市不同有区别，吃饭各个城市相差不大，差距主要在住宿费上。 
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_toSchool_item3">
		                        <i className="iconArrow"></i>
		                        每周不超过20个小时，通常在8到17澳币/小时不等。
		                    </div>
		                    <div className="contentDvItem" id="daxueyuan_toSchool_item4">
		                        <i className="iconArrow"></i>
		                        恭喜你拿到了赴澳签证，到达澳洲前有一些需要注意的要点，包括行李要求、常用物品、应急药物等。
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
		                <div className="itemImgDv choose" data-flag="highJp-choose">
		                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-school.png" className="qianYue imgItem" />
		                    <div>选择学校</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv qianYue" data-flag="highJp-qianYue">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianYue.png" className="school imgItem" />
		                    <div>签约办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv caiLiao" data-flag="highJp-caiLiao">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-caiLiao.png" className="caiLiao imgItem" />
		                    <div>材料办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv get" data-flag="highJp-get">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-get.png" className="get imgItem" />
		                    <div>获得offer</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv qianZheng" data-flag="highJp-qianZheng">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianZheng.png" className="qianZheng imgItem" />
		                    <div>签证办理</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv toSchool" data-flag="highJp-toSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-toSchool.png" className="toSchool imgItem"  />
		                    <div>赴澳留学</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="itemImgDv full inSchool" data-flag="highJp-inSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-inSchool.png" className="inSchool imgItem" />
		                    <div>在澳服务</div>
		                    <div className="bluePoint"></div>
		                </div>
		                <div className="clear"></div>
		            </div>
		            <div className="followLine jpHigh_Follow">
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
		                        <div className="font">雅思辅导</div>
		                    </div>
		                    <div className="linXing linXing2">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">文书服务</div>
		                    </div>
		                    <div className="linXing">
		                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
		                        <div className="font">支付押金</div>
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
		                    <div className="newItemDv online" id="highJp-online">
		                        <div className="newItem newItemA" data-delay="1.7" data-orgel ="highJp_online_item1">
		                            申请学校条件
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.5" data-orgel ="highJp_online_item2">
		                            办理费用问题
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.3" data-orgel ="highJp_online_item3">
		                            免费留学服务
		                        </div>		                 
		                        <div className="borderBl"></div>
		                    </div>
							 <div className="newItemDv choose"  id="highJp-choose">
		                        <div className="newItem newItemA" data-delay="1.3"  data-orgel ="highJp_choose_item1">
		                            如何择校
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.1" data-orgel="highJp_choose_item2">
		                            留学费用
		                        </div>
		                        <div className="newItem newItemC" data-delay="0.9"  data-orgel="highJp_choose_item3">
		                            入学时间
		                        </div>			            
		                        <div className="borderBl"></div> 
		                    </div>
		                    <div className="newItemDv qianYue"  id="highJp-qianYue">
		                        <div className="newItem newItemA" data-delay="1.5" data-orgel="highJp_qianYue_item1">
		                            签订服务合同
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.3" data-orgel="highJp_qianYue_item2">
		                            确定申请学校和专业
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.1"  data-orgel="highJp_qianYue_item3">
		                            确定时间节点
		                        </div>
		                        <div className="newItem newItemD" data-delay="0.9" data-orgel="highJp_qianYue_item4">
		                            付学校报名费
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
							<div className="newItemDv get"  id="highJp-get">
		                        <div className="newItem newItemA"  data-delay="1.3" data-orgel="highJp_get_item1">
		                           	英语要求
		                        </div>
		                       <div className="newItem newItemB" data-delay="1.1"  data-orgel="highJp_get_item2">
		                            AEAS要求
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>		                    
		                    <div className="newItemDv caiLiao"  id="highJp-caiLiao">
		                        <div className="newItem newItemA"  data-delay="1.1" data-orgel="highJp_cailiao_item1">
		                            提供哪些材料
		                        </div>
		                        <div className="newItem newItemA"  data-delay="1.1" data-orgel="highJp_cailiao_item2">
		                            材料相关问题
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv qianZheng"  id="highJp-qianZheng">
		                        <div className="newItem newItemA" data-delay="1.7"  data-orgel="highJp_qianZheng_item1">
		                            提供哪些材料
		                        </div>
		                        <div className="newItem newItemB" data-delay="1.5"  data-orgel="highJp_qianZheng_item2">
		                            将材料寄给OPC
		                        </div>
		                        <div className="newItem newItemC" data-delay="1.3"  data-orgel="highJp_qianZheng_item3">
		                            发体检表
		                        </div>
		                        <div className="newItem newItemD" data-delay="1.1"  data-orgel="highJp_qianZheng_item4">
		                            预审通过
		                        </div>
		                        <div className="newItem newItemE" data-delay="0.9"  data-orgel="highJp_qianZheng_item5">
		                            交学费，获得COE,批签
		                        </div>
		                        <div className="newItem newItemF" data-delay="0.7"  data-orgel="highJp_qianZheng_item6">
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
		                            行前准备
		                        </div>	                     
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="newItemDv newItemDv3 inSchool" id="highJp-inSchool">
		                        <div className="newItem newItemA"  data-delay="1.5" data-orgel="highJp_inSchool_item1">
		                            应急协助
		                        </div>
		                       <div className="newItem newItemB"  data-delay="1.3" data-orgel="highJp_inSchool_item2">
		                            升学辅导
		                        </div>
		                         <div className="newItem newItemC"  data-delay="1.1" data-orgel="highJp_inSchool_item3">
		                            续签
		                        </div>
		                        <div className="borderBl"></div>
		                    </div>
		                    <div className="clear"></div>
		                </div>
		                <div className="allContent">
		                    <div className="contentDvItem" id="highJp_online_item1" >
		                        <i className="iconArrow"></i>
		                         初中毕业
		                    </div>
		                    <div className="contentDvItem" id="highJp_online_item2">
		                        <i className="iconArrow"></i>
		                        需支付2000元押金，申请成功并赴澳留学后将返回全部押金，申请不成功亦将返还您全部押金
		                    </div>
		                    <div className="contentDvItem" id="highJp_online_item3">
		                        <i className="iconArrow"></i>
		                       免费提供学校申请；申请材料准备；签证行前指导服务。
		                    </div>		 
		                    <div className="contentDvItem" id="highJp_choose_item1">
		                        <i className="iconArrow"></i>
		                        <font className="bold">所需条件</font>：初中毕业、高一或高二在读生，私立名校需AEAS成绩达标<br />
		                        <font className="bold">地理位置</font>：地理位置也是选择学校时一个重要的考虑因素，是否钟爱某一地区；同时地理位置不同，气候，经济和消费水平也相近不同。
		                        
		                    </div>
		                    <div className="contentDvItem" id="highJp_choose_item2">
		                        <i className="iconArrow"></i>
		                        留学费用主要由学费和生活费构成：私校学费一般18000-25000澳币左右，分为寄宿制和走读制，寄宿家庭（homestay）费用每月一般在2000澳元左右，1年学费+生活费为25-30万人民币
		                    </div>
		                    <div className="contentDvItem" id="highJp_choose_item3">
		                        <i className="iconArrow"></i>
		                        澳洲高中开学时间在1,4,7,10月份
		                    </div>
		                    <div className="contentDvItem" id="highJp_qianYue_item3">
		                        <i className="iconArrow"></i>
		                        如申请开放时间确认，材料提交时间，语言课申请时间，签证申请时间，宿舍申请时间等。
		                    </div>
		                    <div className="contentDvItem" id="highJp_cailiao_item1">
		                        <i className="iconArrow"></i>
		                        中英文成绩单；在读证明/初中毕业证书（中英文）；雅思成绩单（18岁以下雅思豁免，但若有雅思成绩5.5分以上可助你申请优秀私校）；申请私立名校需提供AEAS成绩
		                    </div>
		                    <div className="contentDvItem" id="highJp_cailiao_item2">
		                        <i className="iconArrow"></i>
		                        <font className="bold">中英文成绩单</font>：成绩单需打印在学校抬头纸上，由学校教务处盖章。<br />
		                        <font className="bold">在读证明</font>：学校抬头纸打印，教务处盖章。<br />
		                        <font className="bold">毕业证明</font>：需提供中英文版学历证明。
		                    </div>
							<div className="contentDvItem" id="highJp_get_item1">
		                        <i className="iconArrow"></i>
		                         凡年满16岁的学生需参加 IELTS 考试，达到雅思5.0或雅思4.0+ 30周的英语课程或豁免IELTS。<br />
								（1）16周岁以下---无语言要求<br />
								（2）雅思直读为5分，雅思最低为4分<br />
								（3）所配语言长度不得超过30周<br />
								（4）享受雅思豁免条件：<br />
										a. 初中毕业的英语成绩在75%以上。即100分制的75分、150分制的112.5分以上<br />
								        b. 普通高中在读学生（须被国内普通高中录取--职高和中专的学生不具备雅思豁免条件），须提供录取通知书或在读证明
		                    </div>
		                    <div className="contentDvItem" id="highJp_get_item2">
		                        <i className="iconArrow"></i>
		                       申请私立名校，一般要求AEAS取得36分，需读不超过30周语言课程，取得61分可以豁免语言课程。
		                    </div>			                    
		                    <div className="contentDvItem" id="highJp_qianZheng_item1">
		                        <i className="iconArrow"></i>
		                        签证表格、护照、签证申请费、照片、存款证明、出身证明， 资金证明
		                    </div>
		                    <div className="contentDvItem" id="highJp_qianZheng_item6">
		                        <i className="iconArrow"></i>
		                        （1）不可做电签。（2）学生未满18岁，需递交监护人证明
		                    </div>
		                    <div className="contentDvItem" id="highJp_toSchool_item1">
		                        <i className="iconArrow"></i>
		                        未满18岁必须住校或者homestay(寄宿家庭)1月至少1000澳元
		                    </div>
		                    <div className="contentDvItem" id="highJp_toSchool_item2">
		                        <i className="iconArrow"></i>
		                        生活费一般在1200-1600澳币一个月左右，按照城市不同有区别，差距主要在住宿费上 
		                    </div>
		                    <div className="contentDvItem" id="highJp_toSchool_item3">
		                        <i className="iconArrow"></i>
		                        恭喜你拿到了赴澳签证，到达澳洲前有一些需要注意的要点，包括行李要求、常用物品、应急药物等。
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
 * xyx 2015.9.16
 */
