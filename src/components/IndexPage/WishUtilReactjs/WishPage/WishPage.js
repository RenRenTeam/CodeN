//WishPage.js
import React, { PropTypes } from 'react';
import Wish from '../../Wish/Wish.js';
import $ from 'jquery';

class WishPage extends React.Component{

    render() {
        return (
            
           	<div id="WishPage"> </div>
        );
    }

    loadWish(){

    	
		React.render(<Wish  />,document.getElementById('WishPage'));
	}
    componentDidMount() { 
     	this.loadWish();
     }

}

export default WishPage;
/**
 * xyx 2015.8.26
 */