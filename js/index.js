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
    


var propsMainSlider = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  lazyLoad: 'ondemand',
  asNavFor: '.slider-nav'
};

var propsNavSlider = {
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-main',
  arrows: true,
  focusOnSelect: true,
  vertical: true,
  verticalSwiping: true
};

  
 var main = {
        active: 0,
        collapsible: false,
        startCollapsed: false,
        activate: function(event, tab){
            $(tab.panel).siblings('ul').find('select').val(tab.id);
            var id = $(tab.panel).find('.tabs__body').attr('id');
            setTimeout(function(){
                try {
                    $('#' + id).responsiveTabs('activate', 0);
                } catch (err) {}
            }, 100);
        }
 };
 var body = {
        active: 0,
        collapsible: false ,
        startCollapsed: false,
        activate: function(event, tab){
            var nav  = $(tab.panel).find('.slider-nav'),
                main = $(tab.panel).find('.slider-main'),
                asMain = main.attr('id'),
                asNav  = nav.attr('id');
            propsMainSlider.asNavFor = '#' + asNav;
            propsNavSlider.asNavFor = '#' + asMain;
             initSlick(main, propsMainSlider);
             initSlick(nav, propsNavSlider);
        },
        deactivate: function(event, tab){
            var nav  = $(tab.panel).find('.slider-nav'),
                main = $(tab.panel).find('.slider-main');
            main.slick('unslick');
            nav.slick('unslick');
        }
 };

initTabs($('.tabs__body'), body);
initTabs($('#tabs__main'), main);


$('.get-consultation').on('click', function(e) {
          e.preventDefault();
      $('#get-consultation').reveal({
        animation: 'fadeAndPop',                   
     animationspeed: 300,                       
     closeonbackgroundclick: true,              
     dismissmodalclass: 'close-reveal-modal'
      });
});
$('.feedback').on('click', function(e) {
          e.preventDefault();
      $('#feedback').reveal({
        animation: 'fadeAndPop',                   
     animationspeed: 300,                       
     closeonbackgroundclick: true,              
     dismissmodalclass: 'close-reveal-modal'
      });
});
$('.request').on('click', function(e) {
          e.preventDefault();
      $('#request').reveal({
        animation: 'fadeAndPop',                   
     animationspeed: 300,                       
     closeonbackgroundclick: true,              
     dismissmodalclass: 'close-reveal-modal'
      });
});





 function initTabs(item, props) {
     item.responsiveTabs(props);
   }


function initSlick(slider, props) {
    slider.slick(props);
  }

});
