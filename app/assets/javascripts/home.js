$(document).ready(function() {
  $.fn.fullpage({
    verticalCentered: true,
    slidesColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#1bbc9b'],
    resize : false,
    anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips:['firstPageTooltip', 'secondPageTooltip', 'thirdPageTooltip', 'fourthPageTooltip'],
    css3: true,
    menu: '#menu'
  });
});
