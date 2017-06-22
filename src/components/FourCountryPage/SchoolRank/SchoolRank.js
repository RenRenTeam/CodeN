/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './SchoolRank.less';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';
var CSlider = require('react-slick');

import $ from 'jquery';

@withStyles(styles)
class SchoolSearch {
    render() {
        var settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
        };
        return (
            <section className="listSchoolBxslider">
                <ul className="bxslider" id="listSchoolBxslider">
                    <CSlider {...settings}>
                        <li>
                            <div>
                                <div className="liDv">
                                    <div className="title">行知学园日本语学校</div>
                                    <div className="contentImg">
                                        <div className="left imgBorder">
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show1.jpg" />
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">东京市中心</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">766800/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title">
                                        <a href="/CollegeDetail-JP-语言学校-891" onClick={Link.handleClick}>
                                        JCLI日本語学校
                                        </a>
                                    </div>
                                    <div className="contentImg">
                                        <div className="left imgBorder">
                                            <a href="/CollegeDetail-JP-语言学校-891" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show2.jpg" />
                                            </a>
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">新大久保</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">788400/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title">
                                    <a href="/CollegeDetail-JP-语言学校-877" onClick={Link.handleClick}>
                                    LABO日本语教育研修所
                                    </a>
                                    </div>
                                    <div className="contentImg">
                                        <div className="left imgBorder">
                                    <a href="/CollegeDetail-JP-语言学校-877" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show3.jpg" />
                                    </a>
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">新宿</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">630000/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title">
                                    <a href="/CollegeDetail-JP-语言学校-893" onClick={Link.handleClick}>
                                        ISI日本语学校
                                        </a>
                                    </div>
                                    <div className="contentImg">
                                        <div className="left imgBorder">
                                        <a href="/CollegeDetail-JP-语言学校-893" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show4.jpg" />
                                        </a>
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">高田馬場 　池袋</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">788400/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title">
                                        <a href="/CollegeDetail-JP-语言学校-943" onClick={Link.handleClick}>
                                            Elite日本语学校
                                        </a>
                                    </div>
                                    <div className="contentImg">
                                        <div className="left imgBorder">
                                        <a href="/CollegeDetail-JP-语言学校-943" onClick={Link.handleClick}>
                                            <img src="" />
                                        </a>
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">新大久保</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">726000/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title">
                                        <a href="/CollegeDetail-JP-语言学校-878" onClick={Link.handleClick}>
                                    三峰日本语学校
                                    </a>
                                    </div>
                                    <div className="contentImg">
                                        <div className="left imgBorder">
                                        <a href="/CollegeDetail-JP-语言学校-878" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show6.jpg" />
                                    </a>
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">新大久保／大久保</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">724000/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title">
                                        <a href="/CollegeDetail-JP-语言学校-883" onClick={Link.handleClick}>東京中央日本語学院</a></div>
                                    <div className="contentImg">
                                        <div className="left imgBorder">
                                        <a href="/CollegeDetail-JP-语言学校-883" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show7.jpg" /></a>
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">新宿</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">734400/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title">
                                        <a href="/CollegeDetail-JP-语言学校-879" onClick={Link.handleClick}>大原日本語学院</a></div>
                                    <div className="contentImg">
                                        <div className="left imgBorder">
                                        <a href="/CollegeDetail-JP-语言学校-879" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show8.jpg" /></a>
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">飯田橋</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">670000/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title"> <a href="/CollegeDetail-JP-语言学校-901" onClick={Link.handleClick}>ARC日本语学校</a></div>
                                    <div className="contentImg">
                                        <div className="left imgBorder"> <a href="/CollegeDetail-JP-语言学校-901" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show9.jpg" /></a>
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">涩谷本校</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">800000/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div className="liDv">
                                    <div className="title"><a href="/CollegeDetail-JP-语言学校-942" onClick={Link.handleClick}>早稻田言语学院</a></div>
                                    <div className="contentImg">
                                        <div className="left imgBorder">
                                            <a href="/CollegeDetail-JP-语言学校-942" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show10.jpg" />
                                            </a>
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">早稻田</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">748000/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title">
                                            <a href="/CollegeDetail-JP-语言学校-882" onClick={Link.handleClick}>東京环球外語学院</a></div>
                                    <div className="contentImg">
                                        <div className="left imgBorder">
                                            <a href="/CollegeDetail-JP-语言学校-882" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show11.jpg" /></a>
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">大久保/新大久保</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">716000/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title">东亚国际学院</div>
                                    <div className="contentImg">
                                        <div className="left imgBorder">
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show12.jpg" />
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">赤坂</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">720000/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title">ABK学馆日本语学校</div>
                                    <div className="contentImg">
                                        <div className="left imgBorder">
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show13.jpg" />
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">三田線千石</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">720000/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title"><a href="/CollegeDetail-JP-研究生院-2105" onClick={Link.handleClick}>亜細亜友之会外語学院</a></div>
                                    <div className="contentImg">
                                        <div className="left imgBorder">
                                        <a href="/CollegeDetail-JP-研究生院-2105" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show14.jpg" />
                                            </a>
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">王子</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">738000/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title"><a href="/CollegeDetail-JP-语言学校-900" onClick={Link.handleClick}>草苑日本语学校</a></div>
                                    <div className="contentImg">
                                        <div className="left imgBorder">
                                        <a href="/CollegeDetail-JP-语言学校-900" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show15.jpg" /></a>
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">御徒町</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">850000/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title">
                                        <a href="/CollegeDetail-JP-语言学校-895" onClick={Link.handleClick}>赤门会日本语学校</a></div>
                                    <div className="contentImg">
                                        <div className="left imgBorder">
                                        <a href="/CollegeDetail-JP-语言学校-895" onClick={Link.handleClick}>
                                        <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show16.jpg" />
                                        </a>
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">日暮里</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">720000/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title">泰安密克日本语学校</div>
                                    <div className="contentImg">
                                        <div className="left imgBorder">
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show17.jpg" />
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">日暮里</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">735000/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title"><a href="/CollegeDetail-JP-语言学校-892" onClick={Link.handleClick}>东京三立学院</a></div>
                                    <div className="contentImg">
                                        <div className="left imgBorder"><a href="/CollegeDetail-JP-语言学校-892" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show18.jpg" /></a>
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">八幡山</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">786000/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div className="liDv">
                                    <div className="title"><a href="/CollegeDetail-JP-语言学校-857" onClick={Link.handleClick}>東京言語教育学院</a></div>
                                    <div className="contentImg">
                                        <div className="left imgBorder"><a href="/CollegeDetail-JP-语言学校-857" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show19.jpg" /></a>
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">江户川</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">770000/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title"><a href="/CollegeDetail-JP-语言学校-909" onClick={Link.handleClick}>东京工科大学附属日本语学校</a></div>
                                    <div className="contentImg">
                                        <div className="left imgBorder"><a href="/CollegeDetail-JP-语言学校-909" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show20.jpg" /></a>
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">浦田</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">800000/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title"><a href="/CollegeDetail-JP-语言学校-934" onClick={Link.handleClick}>双葉外語日本語学校</a></div>
                                    <div className="contentImg">
                                        <div className="left imgBorder"><a href="/CollegeDetail-JP-语言学校-934" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show21.jpg" /></a>
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">千叶</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">709000/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title"><a href="/CollegeDetail-JP-语言学校-863" onClick={Link.handleClick}>飞鸟学院</a></div>
                                    <div className="contentImg">
                                        <div className="left imgBorder"><a href="/CollegeDetail-JP-语言学校-863" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show22.jpg" /></a>
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">横滨</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">628500/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title"><a href="/CollegeDetail-JP-语言学校-869" onClick={Link.handleClick}>外語ビジネス専門学校</a></div>
                                    <div className="contentImg">
                                        <div className="left imgBorder"><a href="/CollegeDetail-JP-语言学校-869" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show23.jpg" /></a>
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">川崎市</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">800000/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title"><a href="/CollegeDetail-JP-语言学校-944" onClick={Link.handleClick}>NIPPON语学院</a></div>
                                    <div className="contentImg">
                                        <div className="left imgBorder"><a href="/CollegeDetail-JP-语言学校-944" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show24.jpg" /></a>
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">群马县前桥市</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">660000/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title"><a href="/CollegeDetail-JP-语言学校-870" onClick={Link.handleClick}>美力克日本语学校</a></div>
                                    <div className="contentImg">
                                        <div className="left imgBorder"><a href="/CollegeDetail-JP-语言学校-870" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show25.jpg" /></a>
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">大阪</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">730000/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title"><a href="/CollegeDetail-JP-语言学校-880" onClick={Link.handleClick}>国际ACADEMY日本语学校
                                            </a></div>
                                    <div className="contentImg">
                                        <div className="left imgBorder"><a href="/CollegeDetail-JP-语言学校-880" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show26.jpg" />
                                            </a>
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">池袋</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">700920/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="liDv">
                                    <div className="title"><a href="/CollegeDetail-JP-语言学校-881" onClick={Link.handleClick}>新宿御苑学院</a></div>
                                    <div className="contentImg">
                                        <div className="left imgBorder"><a href="/CollegeDetail-JP-语言学校-881" onClick={Link.handleClick}>
                                            <img src="http://7xnmna.com2.z0.glb.qiniucdn.com/jp-slide-show27.jpg" /></a>
                                        </div>
                                        <div className="left tableDv">
                                            <table>
                                                <tr>
                                                    <td className="td1">地理位置</td>
                                                    <td className="td2">新宿御苑前</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学校规模</td>
                                                    <td className="td2 starImg"></td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">学      费</td>
                                                    <td className="td2">712000/年(日元)</td>
                                                </tr>
                                                <tr>
                                                    <td className="td1">优 良 校</td>
                                                    <td className="td2">是</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </li>
                    </CSlider>
                </ul>
                <div className="clear"></div>
            </section>
        );
    }
    componentDidMount() {
        $(document).ready(function(){

            $(".rank-tab-content #university").show();

            $(".rank-tabs-box .rank-tabs .item").click(function(){

                $(".rank-tabs-box .rank-tabs .item").removeClass("selected");

                $(this).addClass("selected");

                var idName= $(this).attr("data-content");

                $(".rank-tab-content .rank-content-box").hide();

                $(idName).show();
            });
        });
    }
}

export default SchoolSearch;
/**
 * Created by XiaoKangZheng on 2015/7/28.
 */
