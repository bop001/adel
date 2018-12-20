$(document).ready(function(){
	$( "#slider-range-min" ).slider({
      range: "min",
      value: 50,
      min: 1,
      max: 1700,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value + "м2");
      }
    });
    $( "#amount" ).val( $( "#slider-range-min" ).slider( "value" ) + "м2");
    $( "#slider-range-min2" ).slider({
      range: "min",
      value: 50,
      min: 1,
      max: 1700,
      slide: function( event, ui ) {
        $( "#amount2" ).val( ui.value + "м2");
      }
    });
    $( "#amount2" ).val( $( "#slider-range-min2" ).slider( "value" ) + "м2");
    

 initTabs("#tabs_1", "#tabs_2", "#tabs_3", "#tabs_4", "#tabs_5");

/*$(window).on("ionTabsChange", function(){
  $('.loft1-for').slick();
    

    console.log(obj.group);
    console.log(obj.tab);
    console.log(obj.tabId);
});*/


$('.loft1-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  lazyLoad: 'ondemand',
  asNavFor: '.loft1-nav'
});
$('.loft1-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.loft1-for',
  arrows: true,
  focusOnSelect: true,
  vertical: true,
  verticalSwiping: true
});






   function initTabs(tab, props) {
        $.ionTabs(tab, props);
   }

});