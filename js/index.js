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
    
  
/*$(window).on("ionTabsChange", function(){
  $('.loft1-for').slick();
    

    console.log(obj.group);
    console.log(obj.tab);
    console.log(obj.tabId);
});*/

var propsFor = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  lazyLoad: 'ondemand',
  asNavFor: '.slider-nav'
};
var propsNav = {
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  arrows: true,
  focusOnSelect: true,
  vertical: true,
  verticalSwiping: true
};

initSlick($('.slider-for'), propsFor);
initSlick($('.slider-nav'), propsNav);


var props = {
        active: 0,
        collapsible: false ,
        startCollapsed: false,
        activate: function(event, tab){
            var nav  = $(tab.panel).find('.slider-nav'),
                main = $(tab.panel).find('.slider-for'),
                asMain = main.attr('id'),
                asNav  = nav.attr('id');
            mainSlider.asNavFor = '#' + asNav;
            navSlider.asNavFor = '#' + asMain;
            initSlick(main, propsFor);
            initSlick(nav, propsNav);
        },
        deactivate: function(event, tab){
            var nav  = $(tab.panel).find('.slider-nav'),
                main = $(tab.panel).find('.slider-for');
            main.slick('unslick');
            nav.slick('unslick');
        }
    }; 
    var type = {
        active: 0,
        collapsible: false,
        startCollapsed: false,
        activate: function(event, tab){
            $(tab.panel).siblings('ul').find('select').val(tab.id);
            var id = $(tab.panel).find('.tabs__content').attr('id');
            setTimeout(function(){
                try {
                    $('#' + id).responsiveTabs('activate', 0);
                } catch (err) {}
            }, 100);
       }
    };
initTabs($('.tabs__main'), type);
initTabs($('.tabs__main'), props);






 function initTabs(item, props) {
     item.responsiveTabs(props);
   }


function initSlick(slider, props) {
  slider.slick(props);
}

});
