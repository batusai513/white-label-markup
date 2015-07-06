var Slider = (function($, window){
  'use strict';

  var slider = null,
      options = {},
      $element = null,
      imagesPerCollection = {},
      currentCollection = 'blendex',
      IMAGES_PATH = './images/',
      IMAGES_EXTENSION = '.png',
      ACTIVE_CLASS = 'is-active';


  options = {
    dots: true
  }

  imagesPerCollection = {
    amdocs: ['screen', 'screen', 'screen'],
    blendex: ['screen', 'screen', 'screen'],
    alienware: ['screen', 'screen', 'screen']
  }

  function init(element){
    $element = $(element);
    createSlider();
    addEvents();
  }

  function addEvents(){
    $('.js-slider-selector').on('click', sliderSelectorHandler);
  }

  function sliderSelectorHandler(e){
    var $el = $(e.currentTarget),
        collectionSelector = $el.data('slider');

    if(collectionSelector !== currentCollection){
      currentCollection = collectionSelector;
      cleanSlider();
      populateSlider(collectionSelector);
      $('.'+ACTIVE_CLASS).removeClass(ACTIVE_CLASS);
      $el.addClass(ACTIVE_CLASS);
    }
    e.preventDefault();
  }

  function cleanSlider(){
    for (var i = 3 - 1; i >= 0; i--) {
      $element.slick('slickRemove', 0);
    };
  }

  function populateSlider(selector){
    var collection = imagesPerCollection[selector];
    $.each(collection, function(index, val) {
      var slide = buildSlide(selector, val, index);
      $element.slick('slickAdd', slide);
    });
  }

  function buildSlide(key, val, index){
    var imageSrc = buildImageSrc(key, val, index),
        image = buildSingleImage(imageSrc);
    return image.wrap( $('<div/>') ).parent();
  }

  function createSlider(){
    $element.slick(
      options
    );
  }

  function buildImageSrc(name, value, index){
    return (IMAGES_PATH + name + '-' +  value + '-' + (index + 1) + IMAGES_EXTENSION);
  }

  function buildSingleImage(src){
    return $('<img />', {src: src});
  }

  return{
    init: init
  }
})(jQuery, window);