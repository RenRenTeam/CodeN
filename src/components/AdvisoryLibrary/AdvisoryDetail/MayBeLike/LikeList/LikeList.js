//LikeList.js
import React, { PropTypes } from 'react';
import $ from 'jquery';


class LikeList {

  render() {
        let nodes="";
        let arrLike=this.props.data;
        let Country=this.props.Country;
        if(arrLike&&arrLike.length>0){
            if(arrLike.length>3){  arrLike.length=3;  }
            nodes=this.props.data.map(function(obj){
                        let str=obj.Title;
                        if(str&&str.length>14){
                            str=str.substring(0,12)+"...";
                        }
                return(

                        <li>
                            <a href={"/AdvisoryDetail?id="+obj.Sysno+"&myData="+Country}>
                                <img src={obj.ImageUrl} />
                            </a>
                            <div className="img_font">
                                <div>{str}</div>
                            </div>
                        </li>
                    );
            });
        }
    return (  
            <ul className="imgUl">
                {nodes}
                <div className="clear"></div>
            </ul>
    );
  }
  componentDidMount() {
    $(".imgUl").children().eq(2).addClass("lastLi");
  }
}

export default LikeList;