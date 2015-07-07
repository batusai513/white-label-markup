'use strict';

$(function() {
  Slider.init('.js-slider');
  if(!Modernizr.flexbox && !isMobile.any()){
	  MainContainerHeight.init();
  }
});