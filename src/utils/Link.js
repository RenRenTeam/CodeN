/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import invariant from 'react/lib/invariant';
import AppActions from '../actions/AppActions';
import $ from 'jquery';

function handleClick(event) {
  removeDoneEfect();
  // If not left mouse click
  if (event.button !== 0) {
    return;
  }

  // If modified event
  if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
    return;
  }

  var el = event.currentTarget;

  invariant(el && el.nodeName === 'A', 'The target element must be a link.');

  // Rebuild path
  var path = el.pathname + el.search + (el.hash || '');

  event.preventDefault();
  AppActions.navigateTo(path);


}
function removeDoneEfect(){

  $(".startBorder").addClass("done");

  window.setTimeout(function(){
   $(".startBorder").removeClass("done");
  },1200);
}

export default { handleClick };
