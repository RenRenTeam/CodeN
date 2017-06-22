/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
import React, { PropTypes } from 'react';
import styles from './css/uk.less';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';

import $ from 'jquery';

@withStyles(styles)
class LiuCheng {
    render() {
        return (
            <section className="banLiLiuCheng" id="banLiLiuCheng">
			    <h1>
			        办理流程
			    </h1>
			    <div className="titleFont">
			        <span className="item active" data-flag-o="yuyanSchool">
			            英国高中
			        </span>
			        <span className="item" data-flag-o="universitySchool">
			            英国本科
			        </span>
			        <span className="item" data-flag-o="universitySchoolYuan">
			            英国硕士
			        </span>
			    </div>
			    <div className="itBigDv" id="yuyanSchool">
			        <div className="blueLine">
			        </div>
			        <div className="banLiLiuChengContent">
			            <div className="itemImgDv online" data-flag="yuyan-online">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-pen.png"
			                className="pen imgItem" />
			                <div>
			                    在线报名
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="itemImgDv choose" data-flag="yuyan-choose">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-school.png"
			                className="school imgItem" />
			                <div>
			                    选择学校
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="itemImgDv qianYue" data-flag="yuyan-qianYue">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianYue.png"
			                className="qianYue imgItem" />
			                <div>
			                    签约办理
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="itemImgDv caiLiao" data-flag="yuyan-caiLiao">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-caiLiao.png"
			                className="caiLiao imgItem" />
			                <div>
			                    材料办理
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="itemImgDv get" data-flag="yuyan-get">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-get.png"
			                className="get imgItem" />
			                <div>
			                    获得offer
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="itemImgDv qianZheng" data-flag="yuyan-qianZheng">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianZheng.png"
			                className="qianZheng imgItem" />
			                <div>
			                    签证办理
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="itemImgDv toSchool" data-flag="yuyan-toSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-toSchool.png"
			                className="toSchool imgItem" />
			                <div>
			                    赴英留学
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="itemImgDv full inSchool" data-flag="yuyan-inSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-inSchool.png"
			                className="inSchool imgItem" />
			                <div>
			                    在英服务
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="clear">
			            </div>
			        </div>
			        <div className="followLine">
			            <div className="dvLinxing">
			                <div className="linXing full">
			                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png"/>
			                    <div className="font">
			                        <a href="http://node.rrliuxue.com/College" target="_blank">
			                            院校检索
			                        </a>
			                    </div>
			                </div>
			                <div className="linXing linXing2">
			                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png"/>
			                    <div className="font zhiding">
			                        <a href="http://node.rrliuxue.com/FreeGuide" target="_blank">
			                            制定留学计划
			                        </a>
			                    </div>
			                </div>
			                <div className="linXing">
			                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png"/>
			                    <div className="font">
			                        雅思辅导
			                    </div>
			                </div>
			                <div className="linXing linXing2">
			                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png"/>
			                    <div className="font">
			                        文书服务
			                    </div>
			                </div>
			                <div className="linXing">
			                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png"/>
			                    <div className="font zhiding">
			                        支付学费押金
			                    </div>
			                </div>
			                <div className="linXing">
			                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png"/>
			                    <div className="font">
			                        接机服务
			                    </div>
			                </div>
			                <div className="clear">
			                </div>
			            </div>
			            <div className="clear">
			            </div>
			        </div>
			        <div className="mainPart">
			            <div className="mainBgPart">
			                <div className="newItemDv online" id="yuyan-online">
			                    <div className="newItem newItemA" data-delay="1.5" data-orgel="yuyan_online_item1">
			                        申请学校条件
			                    </div>
			                    <div className="newItem newItemB" data-delay="1.3" data-orgel="yuyan_online_item2">
			                        办理服务费用
			                    </div>
			                    <div className="newItem newItemC" data-delay="1.1" data-orgel="yuyan_online_item3">
			                        免费留学服务
			                    </div>
			                    <div className="borderBl">
			                    </div>
			                </div>
			                <div className="newItemDv choose" id="yuyan-choose">
			                    <div className="newItem newItemA" data-delay="1.3" data-orgel="yuyan_choose_item1">
			                        如何择校
			                    </div>
			                    <div className="newItem newItemB" data-delay="1.1" data-orgel="yuyan_choose_item2">
			                        费用相关
			                    </div>
			                    <div className="newItem newItemC" data-delay="0.9" data-orgel="yuyan_choose_item3">
			                        入学时间
			                    </div>
			                    <div className="borderBl">
			                    </div>
			                </div>
			                <div className="newItemDv qianYue" id="yuyan-qianYue">
			                    <div className="newItem newItemA" data-delay="1.5" data-orgel="yuyan_qianYue_item1">
			                        签订服务合同
			                    </div>
			                    <div className="newItem newItemB" data-delay="1.3" data-orgel="yuyan_qianYue_item2">
			                        确定入读学校
			                    </div>
			                    <div className="newItem newItemC" data-delay="1.1" data-orgel="yuyan_qianYue_item3">
			                        确定时间节点
			                    </div>
			                    <div className="newItem newItemC" data-delay="0.9" data-orgel="yuyan_qianYue_item4">
			                        付学校报名费
			                    </div>
			                    <div className="borderBl">
			                    </div>
			                </div>
			                <div className="newItemDv caiLiao" id="yuyan-caiLiao">
			                    <div className="newItem newItemA" data-delay="1.1" data-orgel="yuyan_cailiao_item1">
			                        提供哪些材料
			                    </div>
			                    <div className="newItem newItemB" data-delay="0.9" data-orgel="yuyan_cailiao_item2">
			                        材料相关要求
			                    </div>
			                    <div className="borderBl">
			                    </div>
			                </div>
			                <div className="newItemDv qianZheng" id="yuyan-qianZheng">
			                    <div className="newItem newItemA" data-delay="1.1" data-orgel="yuyan_qianZheng_item1">
			                        提供哪些材料
			                    </div>
			                    <div className="newItem newItemB" data-delay="0.9" data-orgel="yuyan_qianZheng_item2">
			                        签证注意事项
			                    </div>
			                    <div className="borderBl">
			                    </div>
			                </div>
			                <div className="newItemDv newItemDv2 toSchool" id="yuyan-toSchool">
			                    <div className="newItem newItemA" data-delay="1.7" data-orgel="yuyan_toSchool_item1">
			                        住宿费用
			                    </div>
			                    <div className="newItem newItemB" data-delay="1.5" data-orgel="yuyan_toSchool_item2">
			                        生活成本
			                    </div>
			                    <div className="newItem newItemC" data-delay="1.3" data-orgel="yuyan_toSchool_item3">
			                        行前准备
			                    </div>
			                    <div className="borderBl">
			                    </div>
			                </div>
			                <div className="newItemDv newItemDv3 inSchool" id="yuyan-inSchool">
			                    <div className="newItem newItemA" data-delay="1.7" data-orgel="yuyan_inSchool_item1">
			                        应急协助
			                    </div>
			                    <div className="newItem newItemB" data-delay="1.5" data-orgel="yuyan_inSchool_item2">
			                        升学辅导
			                    </div>
			                    <div className="newItem newItemC" data-delay="1.3" data-orgel="yuyan_inSchool_item3">
			                        续签
			                    </div>
			                    <div className="borderBl">
			                    </div>
			                </div>
			                <div className="clear">
			                </div>
			            </div>
			            <div className="allContent">
			                <div className="contentDvItem" id="yuyan_online_item1">
			                    <i className="iconArrow">
			                    </i>
			                    初三毕业到高中阶段学生均可以去英国读A-level的课程。
			                </div>
			                <div className="contentDvItem" id="yuyan_online_item2">
			                    <i className="iconArrow">
			                    </i>
			                    需支付2000元押金，申请成功并赴英留学后将返回全部押金，申请不成功亦将返还您全部押金。
			                </div>
			                <div className="contentDvItem" id="yuyan_online_item3">
			                    <i className="iconArrow">
			                    </i>
			                    免费提供四所英国高中申请，包括确定申请学校；申请材料准备；签证行前指导服务。
			                </div>
			                <div className="contentDvItem" id="yuyan_choose_item1">
			                    <i className="iconArrow">
			                    </i>
			                    <font className="bold">
			                        学校位置
			                    </font>
			                    ：确定您目标学校是位于英格兰地区（是伦敦地区还是非伦敦地区），苏格兰地区，威尔士地区还是北爱尔兰地区。 学生背景：雅思最低不得低于4.5分，如雅思已达到5分，可免读语言课程。
			                </div>
			                <div className="contentDvItem" id="yuyan_choose_item2">
			                    <i className="iconArrow">
			                    </i>
			                    学费：国际学生一般只能选择私立寄宿学校和私立国际学院，一年学费平均15,000英镑左右，学费不包括：保险、旅游、额外的运动和课程费用（如马术、另修的音乐课等）。
			                    生活费：根据英国官方要求，需准备9个月生活费，伦敦地区1020镑/月，非伦敦地区820镑/月。
			                    <br />
			                    其他：雅思考试费用1750元，签证费3220元，机票6000元左右（单程）。
			                </div>
			                <div className="contentDvItem" id="yuyan_choose_item3">
			                    <i className="iconArrow">
			                    </i>
			                    <font className="bold">
			                        (1)
			                    </font>
			                    一年制GCSE：9月份开学，15周岁以上，初三读完，成绩良好，雅思4.5。
			                    <br />
			                    <font className="bold">
			                        (2)
			                    </font>
			                    两年制A-level：9月份开学，16周岁以上，初三读完，成绩优秀，雅思5.0。
			                    <br />
			                    <font className="bold">
			                        (3)
			                    </font>
			                    18个月A-level：1月份开学，16周岁以上，高一在读，成绩优秀，雅思5.0。
			                    <br />
			                    <font className="bold">
			                        (4)
			                    </font>
			                    一年制A-level：9月份开学，17周岁以上，高中毕业，成绩优秀，雅思6.0以上。
			                </div>
			                <div className="contentDvItem" id="yuyan_qianYue_item3">
			                    <i className="iconArrow">
			                    </i>
			                    如申请时间确认，材料提交时间，雅思考试时间，签证申请时间，宿舍申请时间等。
			                </div>
			                <div className="contentDvItem" id="yuyan_cailiao_item1">
			                    <i className="iconArrow">
			                    </i>
			                    学校申请表，成绩单，推荐信，雅思成绩单，护照复印件等。
			                </div>
			                <div className="contentDvItem" id="yuyan_cailiao_item2">
			                    <i className="iconArrow">
			                    </i>
			                    <font className="bold">
			                        (1)
			                    </font>
			                    学校申请表：填写完整的申请表格，并经申请人的父母或监护人签字。
			                    <br />
			                    <font className="bold">
			                        (2)
			                    </font>
			                    成绩单：当前或去年成绩单复印件，需提交源文件及英文翻译件。
			                    <br />
			                    <font className="bold">
			                        (3)
			                    </font>
			                    推荐信：学术性推荐信以中学任课老师名义出具，需打印在学校抬头纸上，推荐人邮箱需为学校官方邮箱；推荐信长度最好不超过一页。
			                    <br />
			                    <font className="bold">
			                        (4)
			                    </font>
			                    雅思成绩单：无雅思成绩，可以参加学校内部语言测试。
			                </div>
			                <div className="contentDvItem" id="yuyan_qianZheng_item1">
			                    <i className="iconArrow">
			                    </i>
			                    签证表格、护照、签证申请费、照片、CAS、存款证明、出生证明及户口 本等。调查表。
			                </div>
			                <div className="contentDvItem" id="yuyan_qianZheng_item2">
			                    <i className="iconArrow">
			                    </i>
			                    <font className="bold">
			                        (1)
			                    </font>
			                    存款证明：学费+9个月生活费，伦敦地区1020镑/月,非伦敦地区820镑/月。
			                    <br />
			                    <font className="bold">
			                        (2)
			                    </font>
			                    肺结核检测：如果您打算申请赴英停留超过6个月，则必须在指定的检验机构进行肺结核检测并确保您未感染肺结核，方可申请签证。
			                    <br />
			                    <font className="bold">
			                        (3)
			                    </font>
			                    照片：近期无框白底正面彩色照片一张，规格约为45 毫米x35 毫米。
			                    <br />
			                    <font className="bold">
			                        (4)
			                    </font>
			                    CAS：请确保CAS上所有个人信息准确无误，同时CAS上还列出了你需要提交的用于签证申请的材料。
			                    <br />
			                    <font className="bold">
			                        (5)
			                    </font>
			                    出生证明及户口本：如资金在您父母/法定监护人名下或您未满18岁。
			                </div>
			                <div className="contentDvItem" id="yuyan_toSchool_item1">
			                    <i className="iconArrow">
			                    </i>
			                    <font className="bold">
			                        学校宿舍
			                    </font>
			                    ：根据宿舍位置和房间类型，收费有所不同，房租费一般在10000-15000镑；学生在圣诞节和暑假一般不可以留校。
			                    <br />
			                    <font className="bold">
			                        寄宿家庭
			                    </font>
			                    ：房租费一般在170-250镑/周之间，提供早晚餐，距离 学校较近。
			                </div>
			                <div className="contentDvItem" id="yuyan_toSchool_item2">
			                    <i className="iconArrow">
			                    </i>
			                    每月生活费（含住宿费）1000-1500英 镑。
			                </div>
			                <div className="contentDvItem" id="yuyan_toSchool_item3">
			                    <i className="iconArrow">
			                    </i>
			                    如机票预订，行李打包，寻找同 行人。
			                </div>
			                <div className="contentDvItem" id="yuyan_toSchool_item4">
			                    <i className="iconArrow">
			                    </i>
			                    在日本的生活知识包括日本的货币、电源、电压、交通方式、手机网络办理、垃圾处理知识、银行开户以及国民健康保险等。具体详情请点击
			                    <a className="showBigContent">
			                        这里
			                    </a>
			                    。
			                </div>
			                <div className="contentDvItem" id="yuyan_toSchool_item5">
			                    <i className="iconArrow">
			                    </i>
			                    恭喜你已经拿到了赴日签证，到达日本前有一些注意的要点，包括行李要求、常用物品、应急药物等等。具体详情请点击
			                    <a className="showBigContent">
			                        这里
			                    </a>
			                    。
			                </div>
			            </div>
			        </div>
			    </div>
			    <div className="itBigDv fadeOut animated" id="universitySchool">
			        <div className="blueLine">
			        </div>
			        <div className="banLiLiuChengContent">
			            <div className="itemImgDv online" data-flag="daxue-online">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-pen.png"
			                className="pen imgItem" />
			                <div>
			                    在线报名
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="itemImgDv qianYue" data-flag="daxue-qianYue">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-school.png"
			                className="qianYue imgItem" />
			                <div>
			                    选择学校
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="itemImgDv choose" data-flag="daxue-choose">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianYue.png"
			                className="school imgItem" />
			                <div>
			                    签约办理
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="itemImgDv caiLiao" data-flag="daxue-caiLiao">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-caiLiao.png"
			                className="caiLiao imgItem" />
			                <div>
			                    材料办理
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="itemImgDv get" data-flag="daxue-get">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-get.png"
			                className="get imgItem" />
			                <div>
			                    获得offer
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="itemImgDv qianZheng" data-flag="daxue-qianZheng">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianZheng.png"
			                className="qianZheng imgItem" />
			                <div>
			                    签证办理
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="itemImgDv toSchool" data-flag="daxue-toSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-toSchool.png"
			                className="toSchool imgItem" />
			                <div>
			                    赴英留学
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="itemImgDv full inSchool" data-flag="daxue-inSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-inSchool.png"
			                className="inSchool imgItem" />
			                <div>
			                    在英服务
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="clear">
			            </div>
			        </div>
			        <div className="followLine daxue_Follow">
			            <div className="dvLinxing dvLinxingg">
			                <div className="linXing full">
			                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png" />
			                    <div className="font">
			                        <a href="http://node.rrliuxue.com/College" target="_blank">
			                            院校检索
			                        </a>
			                    </div>
			                </div>
			                <div className="linXing linXing2">
			                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png"/>
			                    <div className="font zhiding">
			                        <a href="http://node.rrliuxue.com/FreeGuide" target="_blank">
			                            制定留学计划
			                        </a>
			                    </div>
			                </div>
			                <div className="linXing">
			                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png"/>
			                    <div className="font">
			                        雅思辅导
			                    </div>
			                </div>
			                <div className="linXing linXing2">
			                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png"/>
			                    <div className="font">
			                        文书服务
			                    </div>
			                </div>
			                <div className="linXing">
			                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png"/>
			                    <div className="font zhiding">
			                        支付学费押金
			                    </div>
			                </div>
			                <div className="linXing">
			                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png"/>
			                    <div className="font">
			                        接机服务
			                    </div>
			                </div>
			                <div className="clear">
			                </div>
			            </div>
			            <div className="clear">
			            </div>
			        </div>
			        <div className="mainPart">
			            <div className="mainBgPart">
			                <div className="newItemDv online" id="daxue-online">
			                    <div className="newItem newItemA" data-delay="1.7" data-orgel="daxue_online_item1">
			                        申请学校条件
			                    </div>
			                    <div className="newItem newItemB" data-delay="1.5" data-orgel="daxue_online_item2">
			                        办理服务费用
			                    </div>
			                    <div className="newItem newItemC" data-delay="1.3" data-orgel="daxue_online_item3">
			                        免费留学服务
			                    </div>
			                    <div className="borderBl">
			                    </div>
			                </div>
			                <div className="newItemDv qianYue" id="daxue-qianYue">
			                    <div className="newItem newItemA" data-delay="1.5" data-orgel="daxue_qianYue_item1">
			                        如何择校
			                    </div>
			                    <div className="newItem newItemB" data-delay="1.3" data-orgel="daxue_qianYue_item2">
			                        费用相关
			                    </div>
			                    <div className="newItem newItemC" data-delay="1.1" data-orgel="daxue_qianYue_item3">
			                        入学时间
			                    </div>
			                    <div className="borderBl">
			                    </div>
			                </div>
			                <div className="newItemDv choose" id="daxue-choose">
			                    <div className="newItem newItemA" data-delay="1.5" data-orgel="daxue_choose_item1">
			                        签订服务合同
			                    </div>
			                    <div className="newItem newItemB" data-delay="1.3" data-orgel="daxue_choose_item2">
			                        确定院校专业
			                    </div>
			                    <div className="newItem newItemC" data-delay="1.1" data-orgel="daxue_choose_item3">
			                        确定时间节点
			                    </div>
			                    <div className="newItem newItemD" data-delay="0.9" data-orgel="daxue_choose_item4">
			                        付学校报名费
			                    </div>
			                    <div className="borderBl">
			                    </div>
			                </div>
			                <div className="newItemDv caiLiao" id="daxue-caiLiao">
			                    <div className="newItem newItemA" data-delay="1.1" data-orgel="daxue_cailiao_item1">
			                        提供哪些材料
			                    </div>
			                    <div className="newItem newItemB" data-delay="0.9" data-orgel="daxue_cailiao_item2">
			                        材料相关要求
			                    </div>
			                    <div className="borderBl">
			                    </div>
			                </div>
			                <div className="newItemDv get" id="daxue-get">
			                    <div className="newItem newItemA" data-delay="1.1" data-orgel="daxue_get_item1">
			                        Conditional offer
			                    </div>
			                    <div className="newItem newItemB" data-delay="0.9" data-orgel="daxue_get_item2">
			                        Unconditional offer
			                    </div>
			                    <div className="borderBl">
			                    </div>
			                </div>
			                <div className="newItemDv qianZheng" id="daxue-qianZheng">
			                    <div className="newItem newItemA" data-delay="1.1" data-orgel="daxue_qianZheng_item1">
			                        提供哪些材料
			                    </div>
			                    <div className="newItem newItemB" data-delay="0.9" data-orgel="daxue_qianZheng_item2">
			                        签证注意事项
			                    </div>
			                    <div className="borderBl">
			                    </div>
			                </div>
			                <div className="newItemDv newItemDv2 toSchool" id="daxue-toSchool">
			                    <div className="newItem newItemA" data-delay="1.7" data-orgel="daxue_toSchool_item1">
			                        住宿费用
			                    </div>
			                    <div className="newItem newItemB" data-delay="1.5" data-orgel="daxue_toSchool_item2">
			                        生活成本
			                    </div>
			                    <div className="newItem newItemC" data-delay="1.3" data-orgel="daxue_toSchool_item3">
			                        勤工俭学
			                    </div>
			                    <div className="newItem newItemD" data-delay="1.1" data-orgel="daxue_toSchool_item4">
			                        行前准备
			                    </div>
			                    <div className="borderBl">
			                    </div>
			                </div>
			                <div className="newItemDv newItemDv3 inSchool" id="daxue-inSchool">
			                    <div className="newItem newItemA" data-delay="1.7" data-orgel="daxue_inSchool_item1">
			                        应急协助
			                    </div>
			                    <div className="newItem newItemB" data-delay="1.5" data-orgel="daxue_inSchool_item2">
			                        升学辅导
			                    </div>
			                    <div className="newItem newItemC" data-delay="1.3" data-orgel="daxue_inSchool_item3">
			                        续签
			                    </div>
			                    <div className="borderBl">
			                    </div>
			                </div>
			                <div className="clear">
			                </div>
			            </div>
			            <div className="allContent">
			                <div className="contentDvItem" id="daxue_online_item1">
			                    <i className="iconArrow">
			                    </i>
			                    英国本科学士学位学制一般为三年，高中生入读英国本科需要先读一年预科 或2年A-level。
			                </div>
			                <div className="contentDvItem" id="daxue_online_item2">
			                    <i className="iconArrow">
			                    </i>
			                    需支付2000元押金，申请成功并赴英留学后将返回全部押金，申请不成功亦将返还您全部押金。
			                </div>
			                <div className="contentDvItem" id="daxue_online_item3">
			                    <i className="iconArrow">
			                    </i>
			                    免费提供四所英国大学申请，包括确定申请学校专业；申请材料准备；签 证行前指导服务。
			                </div>
			                <div className="contentDvItem" id="daxue_qianYue_item1">
			                    <i className="iconArrow">
			                    </i>
			                    <font className="bold">
			                        学校位置：
			                    </font>
			                    确定您目标学校是位于英格兰地区（是伦敦地区还是非伦敦地区），苏格兰地区，威尔士地区还是北爱尔兰地区。
			                    <br/>
			                    <font className="bold">
			                        学生背景：
			                    </font>
			                    平均成绩不低于80分，雅思成绩不低于6.0。
			                </div>
			                <div className="contentDvItem" id="daxue_qianYue_item2">
			                    <i className="iconArrow">
			                    </i>
			                    <font className="bold">
			                        学费：
			                    </font>
			                    根据学校排名和专业不同，学费会有不同，一年学费平均在1万2英镑左右。
			                    <br/>
			                    <font className="bold">
			                        生活费：
			                    </font>
			                    根据英国官方要求，需准备9个月生活费，伦敦地区1020镑/月，非伦敦地区820镑/月。
			                    <br/>
			                    <font className="bold">
			                        其他：
			                    </font>
			                    雅思考试费用1750元，签证费3220元，机票6000元左右（单程）。
			                </div>
			                <div className="contentDvItem" id="daxue_qianYue_item3">
			                    <i className="iconArrow">
			                    </i>
			                    <font className="bold">
			                        秋季：
			                    </font>
			                    9月份开学，课程全面，可配语言课程。
			                    <br/>
			                    <font className="bold">
			                        春季：
			                    </font>
			                    1月份开学，课程有限，无语言课程。
			                </div>
			                <div className="contentDvItem" id="daxue_choose_item3">
			                    <i className="iconArrow">
			                    </i>
			                    如申请开放时间确认，材料提交时间，雅思考试时间，语言课申请时间，签证申请时间 ，宿舍申请时间等。
			                </div>
			                <div className="contentDvItem" id="daxue_cailiao_item1">
			                    <i className="iconArrow">
			                    </i>
			                    高中成绩单，高中在读证明，推荐信，个人陈述，雅思成绩单等。
			                </div>
			                <div className="contentDvItem" id="daxue_cailiao_item2">
			                    <i className="iconArrow">
			                    </i>
			                    <font className="bold">
			                        （1）
			                    </font>
			                    高中成绩单：成绩单需打印在学校抬头纸上，由学校教务处盖章。
			                    <br/>
			                    <font className="bold">
			                        （2）
			                    </font>
			                    在读证明：学校抬头纸打印，教务处盖章。
			                    <br/>
			                    <font className="bold">
			                        （3）
			                    </font>
			                    推荐信：一般要求2封推荐信；推荐信需打印在学校抬头纸上，推荐人邮箱需为学校官方邮箱；推荐信长度最好不超过一页。
			                    <br/>
			                    <font className="bold">
			                        （4）
			                    </font>
			                    个人陈述：字数控制在800左右，不超过两页A4纸，部分学校不需要提供个人陈述，详情请和顾问老师联系。
			                    <br/>
			                    <font className="bold">
			                        （5）
			                    </font>
			                    雅思成绩单：提交的雅思成绩可以比校方录取标准低0.5分；部分学校可以不提供雅思成绩申请。
			                </div>
			                <div className="contentDvItem" id="daxue_get_item1">
			                    <i className="iconArrow">
			                    </i>
			                    雅思成绩没达到学校要求；或要求学生毕业时平均分达到一定要求。
			                </div>
			                <div className="contentDvItem" id="daxue_get_item2">
			                    <i className="iconArrow">
			                    </i>
			                    学生已达到学校录取的各项要求。
			                </div>
			                <div className="contentDvItem" id="daxue_toSchool_item1">
			                    <i className="iconArrow">
			                    </i>
			                    <font className="bold">
			                        学校宿舍：
			                    </font>
			                    一般分为single room，en-suite room，studio room，one bedroom flat，twin room；学校宿舍较贵，但相对安全且环境好。
			                    <br/>
			                    <font className="bold">
			                        校外租房：
			                    </font>
			                    伦敦地区的住宿费为150-190英镑/周，非伦敦地区的住宿费为80-150英镑/周。不同的房间收费不同。
			                </div>
			                <div className="contentDvItem" id="daxue_toSchool_item2">
			                    <i className="iconArrow">
			                    </i>
			                    根据英国官方提供的数据，每月生活费伦敦地区1020镑，非伦敦地区820镑。
			                </div>
			                <div className="contentDvItem" id="daxue_toSchool_item3">
			                    <i className="iconArrow">
			                    </i>
			                    每周不超过20个小时，假期可以全职打工。英国法定最低工资标准为每小时6.7英镑。
			                </div>
			                <div className="contentDvItem" id="daxue_toSchool_item4">
			                    <i className="iconArrow">
			                    </i>
			                    如机票预订，行李打包，寻找同行人。
			                </div>
			            </div>
			        </div>
			    </div>
			    <div className="itBigDv fadeOut animated" id="universitySchoolYuan">
			        <div className="blueLine">
			        </div>
			        <div className="banLiLiuChengContent">
			            <div className="itemImgDv online" data-flag="daxueyuan-online">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-pen.png"
			                className="pen imgItem" />
			                <div>
			                    在线报名
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="itemImgDv qianYue" data-flag="daxueyuan-qianYue">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-school.png"
			                className="qianYue imgItem" />
			                <div>
			                    选择学校
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="itemImgDv choose" data-flag="daxueyuan-choose">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianYue.png"
			                className="school imgItem" />
			                <div>
			                    签约办理
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="itemImgDv caiLiao" data-flag="daxueyuan-caiLiao">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-caiLiao.png"
			                className="caiLiao imgItem" />
			                <div>
			                    材料办理
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="itemImgDv get" data-flag="daxueyuan-get">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-get.png"
			                className="get imgItem" />
			                <div>
			                    获得offer
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="itemImgDv qianZheng" data-flag="daxueyuan-qianZheng">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-qianZheng.png"
			                className="qianZheng imgItem" />
			                <div>
			                    签证办理
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="itemImgDv toSchool" data-flag="daxueyuan-toSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-toSchool.png"
			                className="toSchool imgItem" />
			                <div>
			                    赴英留学
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="itemImgDv full inSchool" data-flag="daxueyuan-inSchool">
			                <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-inSchool.png"
			                className="inSchool imgItem" />
			                <div>
			                    在英服务
			                </div>
			                <div className="bluePoint">
			                </div>
			            </div>
			            <div className="clear">
			            </div>
			        </div>
			        <div className="followLine daxueyuan_Follow">
			            <div className="dvLinxing">
			                <div className="linXing full">
			                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png"
			                    />
			                    <div className="font">
			                        <a href="http://node.rrliuxue.com/College" target="_blank">
			                            院校检索
			                        </a>
			                    </div>
			                </div>
			                <div className="linXing linXing2">
			                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png"
			                    />
			                    <div className="font">
			                        <a href="http://node.rrliuxue.com/FreeGuide" target="_blank">
			                            制定留学计划
			                        </a>
			                    </div>
			                </div>
			                <div className="linXing">
			                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png"
			                    />
			                    <div className="font">
			                        雅思辅导
			                    </div>
			                </div>
			                <div className="linXing linXing2">
			                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png"
			                    />
			                    <div className="font">
			                        文书服务
			                    </div>
			                </div>
			                <div className="linXing">
			                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png"
			                    />
			                    <div className="font">
			                        支付学费押金
			                    </div>
			                </div>
			                <div className="linXing">
			                    <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/liucheng-linXing.png"
			                    />
			                    <div className="font">
			                        接机服务
			                    </div>
			                </div>
			                <div className="clear">
			                </div>
			            </div>
			            <div className="clear">
			            </div>
			        </div>
			        <div className="mainPart">
			            <div className="mainBgPart">
			                <div className="newItemDv online" id="daxueyuan-online">
			                    <div className="newItem newItemA" data-delay="1.7" data-orgel="daxueyuan_online_item1">
			                        申请学校条件
			                    </div>
			                    <div className="newItem newItemB" data-delay="1.5" data-orgel="daxueyuan_online_item2">
			                        办理服务费用
			                    </div>
			                    <div className="newItem newItemC" data-delay="1.3" data-orgel="daxueyuan_online_item3">
			                        免费留学服务
			                    </div>
			                    <div className="borderBl">
			                    </div>
			                </div>
			                <div className="newItemDv qianYue" id="daxueyuan-qianYue">
			                    <div className="newItem newItemA" data-delay="1.5" data-orgel="daxueyuan_qianYue_item1">
			                        如何择校
			                    </div>
			                    <div className="newItem newItemB" data-delay="1.3" data-orgel="daxueyuan_qianYue_item2">
			                        留学费用
			                    </div>
			                    <div className="newItem newItemC" data-delay="1.1" data-orgel="daxueyuan_qianYue_item3">
			                        入学时间
			                    </div>
			                    <div className="borderBl">
			                    </div>
			                </div>
			                <div className="newItemDv caiLiao" id="daxueyuan-caiLiao">
			                    <div className="newItem newItemA" data-delay="1.3" data-orgel="daxueyuan_cailiao_item1">
			                        提供哪些材料
			                    </div>
			                    <div className="newItem newItemB" data-delay="1.1" data-orgel="daxueyuan_cailiao_item2">
			                        材料相关要求
			                    </div>
			                    <div className="borderBl">
			                    </div>
			                </div>
			                <div className="newItemDv choose" id="daxueyuan-choose">
			                    <div className="newItem newItemA" data-delay="1.7" data-orgel="daxueyuan_choose_item1">
			                        签订服务合同
			                    </div>
			                    <div className="newItem newItemB" data-delay="1.5" data-orgel="daxueyuan_choose_item2">
			                        确定院校专业
			                    </div>
			                    <div className="newItem newItemC" data-delay="1.3" data-orgel="daxueyuan_choose_item3">
			                        确定时间节点
			                    </div>
			                    <div className="newItem newItemD" data-delay="0.9" data-orgel="daxueyuan_choose_item4">
			                        付学校报名费
			                    </div>
			                    <div className="borderBl">
			                    </div>
			                </div>
			                <div className="newItemDv get" id="daxueyuan-get">
			                    <div className="newItem newItemA" data-delay="1.7" data-orgel="daxueyuan_get_item1">
			                        Conditional offer
			                    </div>
			                    <div className="newItem newItemB" data-delay="1.5" data-orgel="daxueyuan_get_item2">
			                        Unconditional offer
			                    </div>
			                    <div className="borderBl">
			                    </div>
			                </div>
			                <div className="newItemDv qianZheng" id="daxueyuan-qianZheng">
			                    <div className="newItem newItemA" data-delay="1.1" data-orgel="daxueyuan_qianZheng_item1">
			                        提供哪些材料
			                    </div>
			                    <div className="newItem newItemB" data-delay="0.9" data-orgel="daxueyuan_qianZheng_item2">
			                        签证注意事项
			                    </div>
			                    <div className="borderBl">
			                    </div>
			                </div>
			                <div className="newItemDv newItemDv2 toSchool" id="daxueyuan-toSchool">
			                    <div className="newItem newItemA" data-delay="1.7" data-orgel="daxueyuan_toSchool_item1">
			                        住宿费用
			                    </div>
			                    <div className="newItem newItemB" data-delay="1.5" data-orgel="daxueyuan_toSchool_item2">
			                        生活成本
			                    </div>
			                    <div className="newItem newItemC" data-delay="1.3" data-orgel="daxueyuan_toSchool_item3">
			                        勤工俭学
			                    </div>
			                    <div className="newItem newItemD" data-delay="1.1" data-orgel="daxueyuan_toSchool_item4">
			                        行前准备
			                    </div>
			                    <div className="borderBl">
			                    </div>
			                </div>
			                <div className="newItemDv newItemDv3 inSchool" id="daxueyuan-inSchool">
			                    <div className="newItem newItemA" data-delay="1.7" data-orgel="daxueyuan_inSchool_item1">
			                        应急协助
			                    </div>
			                    <div className="newItem newItemB" data-delay="1.5" data-orgel="daxueyuan_inSchool_item2">
			                        升学辅导
			                    </div>
			                    <div className="newItem newItemC" data-delay="1.3" data-orgel="daxueyuan_inSchool_item3">
			                        续签
			                    </div>
			                    <div className="borderBl">
			                    </div>
			                </div>
			                <div className="clear">
			                </div>
			            </div>
			            <div className="allContent">
			                <div className="contentDvItem" id="daxueyuan_online_item1">
			                    <i className="iconArrow">
			                    </i>
			                    获得本科学士学位；大专毕业且工作三年以上；大专毕业或需转专业可入读一年硕士预科课程。
			                </div>
			                <div className="contentDvItem" id="daxueyuan_online_item2">
			                    <i className="iconArrow">
			                    </i>
			                    需支付2000元押金，申请成功并赴英留学后将返回全部押金，申请不成功亦将返还您全部押金。
			                </div>
			                <div className="contentDvItem" id="daxueyuan_online_item3">
			                    <i className="iconArrow">
			                    </i>
			                    免费提供四所英国大学申请，包括确定申请学校专业；申请材料准备；签证行前指导服务。
			                </div>
			                <div className="contentDvItem" id="daxueyuan_qianYue_item1">
			                    <i className="iconArrow">
			                    </i>
			                    <font className="bold">
			                        学校位置：
			                    </font>
			                    确定您目标学校是位于英格兰地区（是伦敦地区还是非伦敦地区），苏格兰地区，威尔士地区还是北爱尔兰地区。
			                    <br/>
			                    <font className="bold">
			                        出身校：
			                    </font>
			                    英国名牌大学，一般要求学生来自211院校。
			                    <br/>
			                    <font className="bold">
			                        平均成绩：
			                    </font>
			                    商科或文科，211院校需80分，普通院校85分；工科类，211院校需75分，普通院校80分。
			                </div>
			                <div className="contentDvItem" id="daxueyuan_qianYue_item2">
			                    <i className="iconArrow">
			                    </i>
			                    <font className="bold">
			                        学费：
			                    </font>
			                    根据学校排名和专业不同，学费会有不同，一年学费平均在1万5英镑左右。
			                    <br/>
			                    <font className="bold">
			                        生活费：
			                    </font>
			                    根据英国官方要求，需准备9个月生活费，伦敦地区1020镑/月，非伦敦地区820镑/月。
			                    <br/>
			                    <font className="bold">
			                        其他：
			                    </font>
			                    雅思考试费用1750元，签证费3220元，机票6000元左右（单程）。
			                </div>
			                <div className="contentDvItem" id="daxueyuan_qianYue_item3">
			                    <i className="iconArrow">
			                    </i>
			                    <font className="bold">
			                        秋季：
			                    </font>
			                    9月份开学，课程全面，可配语言课程。
			                    <br/>
			                    <font className="bold">
			                        春季：
			                    </font>
			                    1月份开学，课程有限，无语言课程。
			                </div>
			                <div className="contentDvItem" id="daxueyuan_choose_item3">
			                    <i className="iconArrow">
			                    </i>
			                    如申请开放时间确认，材料提交时间，雅思考试时间，语言课申请时间，签证申请时间，宿舍申请时间等。
			                </div>
			                <div className="contentDvItem" id="daxueyuan_cailiao_item1">
			                    <i className="iconArrow">
			                    </i>
			                    中英文成绩单，在读证明/学历学位证明，推荐信，个人陈述，雅思成绩单等。
			                    <br/>
			                    注意：申请研究型硕士需提供研究计划，艺术类课程需提供作品集。
			                </div>
			                <div className="contentDvItem" id="daxueyuan_cailiao_item2">
			                    <i className="iconArrow">
			                    </i>
			                    <font className="bold">
			                        （1）中英文成绩单：
			                    </font>
			                    成绩单需打印在学校抬头纸上，由学校教务处盖章。
			                    <br/>
			                    <font className="bold">
			                        （2）在读证明：
			                    </font>
			                    学校抬头纸打印，教务处盖章。
			                    <br/>
			                    <font className="bold">
			                        （3）学历学位证明：
			                    </font>
			                    需提供中英文版学历学位证明，打印在学校抬头纸上。
			                    <br/>
			                    <font className="bold">
			                        （4）推荐信：
			                    </font>
			                    一般要求2封推荐信；学术性推荐信需打印在学校抬头纸上，推荐人邮箱需为学校官方邮箱；工作推荐信需打印在公司信纸上，提供推荐人公司邮箱；推荐信长度最好不超过一页。
			                    <br/>
			                    <font className="bold">
			                        （5个人陈述：）
			                    </font>
			                    字数控制在800左右，不超过两页A4纸，部分学校不需要提供个人陈述，详情请和顾问老师联系。
			                    <br/>
			                    <font className="bold">
			                        （6）雅思成绩单：
			                    </font>
			                    提交的雅思成绩可以比校方录取标准低0.5分；部分学校可以不提供雅思成绩申请。
			                    <br/>
			                    <font className="bold">
			                        （7）研究计划：
			                    </font>
			                    主要针对研究型硕士的申请人，表现学生已经具备的学术研究能力，以及将来的学术研究方向。
			                </div>
			                <div className="contentDvItem" id="daxueyuan_get_item1">
			                    <i className="iconArrow">
			                    </i>
			                    雅思成绩没达到学校要求；或要求学生毕业时平均分达到一定要求。
			                </div>
			                <div className="contentDvItem" id="daxueyuan_get_item2">
			                    <i className="iconArrow">
			                    </i>
			                    学生已达到学校录取的各项要求。
			                </div>
			                <div className="contentDvItem" id="daxueyuan_qianZheng_item1">
			                    <i className="iconArrow">
			                    </i>
			                    签证表格、护照、签证申请费、照片、CAS、存款证明等。
			                </div>
			                <div className="contentDvItem" id="daxueyuan_qianZheng_item2">
			                    <i className="iconArrow">
			                    </i>
			                    <font className="bold">
			                        （1）存款证明：
			                    </font>
			                    学费+9个月生活费，伦敦地区1020镑/月,非伦敦地区820镑/月。
			                    <br/>
			                    <font className="bold">
			                        （2）肺结核检测：
			                    </font>
			                    如果您打算申请赴英停留超过6个月，则必须在指定的检验机构进行肺结核检测并确保您未感染肺结核，方可申请签证。
			                    <br/>
			                    <font className="bold">
			                        （3）照片：
			                    </font>
			                    近期无框白底正面彩色照片一张，规格约为45 毫米x35 毫米。
			                    <br/>
			                    <font className="bold">
			                        （4）CAS：
			                    </font>
			                    请确保CAS上所有个人信息准确无误，同时CAS上还列出了你需要提交的用于签证申请的材料。
			                </div>
			                <div className="contentDvItem" id="daxueyuan_toSchool_item1">
			                    <i className="iconArrow">
			                    </i>
			                    <font className="bold">
			                        学校宿舍：
			                    </font>
			                    一般分为single room，en-suite room，studio room，one bedroom flat，twin room；学校宿舍较贵，但相对安全且环境好。
			                    <br/>
			                    <font className="bold">
			                        校外租房：
			                    </font>
			                    伦敦地区的住宿费为150-190英镑/周，非伦敦地区的住宿费为80-150英镑/周。不同的房间收费不同。
			                </div>
			                <div className="contentDvItem" id="daxueyuan_toSchool_item2">
			                    <i className="iconArrow">
			                    </i>
			                    根据英国官方提供的数据，每月生活费伦敦地区1020镑，非伦敦地区820镑。
			                </div>
			                <div className="contentDvItem" id="daxueyuan_toSchool_item3">
			                    <i className="iconArrow">
			                    </i>
			                    每周不超过20个小时，假期可以全职打工。英国法定最低工资标准为每小时6.7英镑。
			                </div>
			                <div className="contentDvItem" id="daxueyuan_toSchool_item4">
			                    <i className="iconArrow">
			                    </i>
			                    如机票预订，行李打包，寻找同行人。
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
