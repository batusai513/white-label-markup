var MainContainerHeight = (function($, window){
  var $window = $(window),
      textContainer = $('.js-text-container'),
      sliderContainer = $('.js-slider-container'),
      windowWidth = $window.width();

  function getTextContainerHeight(){
    return textContainer.outerHeight();
  }

  function setContainerHeight(height, el){
    var $el = null,
        h = height ? height : getTextContainerHeight();
    if(el){
      $el = el;
    }else{
      $el = sliderContainer;
    }

    $el.height(h);
  }

  function setHeight(){
    if(windowWidth >= 768){
      setContainerHeight();
    }else{
      sliderContainer.removeAttr('style');
    }
  }

  function resizeHandler(e){
    var height = getTextContainerHeight();
    windowWidth = $window.width();
    setHeight();
  }

  function addEvents(){
    $window.on('debouncedresize', resizeHandler);
  }

  function setInitialHeight(){
    setHeight();
  }

  function init(){
    addEvents();
    setInitialHeight();
  }

  return{
    init: init,
    setHeight: setContainerHeight
  }

})(jQuery, window);