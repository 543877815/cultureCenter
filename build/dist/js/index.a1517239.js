webpackJsonp([8],{5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(6);n.n(i);$(document).ready(function(){function e(){let e=$("#team .content");e.offset().top-($(window).height()-e.height())<=$(window).scrollTop()+200&&!1===$("#team .content .item").hasClass("active")&&($("#team .content .item").addClass("active"),$(window).unbind("scroll"))}window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){window.setTimeout(e,1e3/60)},$(window).scroll(e),setTimeout(()=>{skrollr.get().refresh()},1)})},6:function(e,t){}},[5]);