$(document).ready(function(){
  var $container = $('.link-rows');
  // init
  $container.isotope({
    // options
    itemSelector: '.individual-card',
    layoutMode: 'masonry'
  });
});
