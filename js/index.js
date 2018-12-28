$(document).ready(function(){
	$( "#slider-range-min" ).slider({
      range: "min",
      value: 125,
      min: 1,
      max: 500,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value + "м2");
      }
    });
    $( "#amount" ).val( $( "#slider-range-min" ).slider( "value" ) + "м2");
    
    $( "#slider-range-min2" ).slider({
      range: "min",
      value: 125,
      min: 1,
      max: 500,
      slide: function( event, ui ) {
        $( "#amount2" ).val( ui.value + "м2");
      }
    });
    $( "#amount2" ).val( $( "#slider-range-min2" ).slider( "value" ) + "м2");
    

   $('.portfolio-select-mobile').on('change', function(){
        var number = $(this).val(),
            tab    = $(this).closest('.r-tabs');
        tab.responsiveTabs('activate', number);
   });

var propsMainSlider = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  lazyLoad: 'ondemand',
  asNavFor: '.sl-slick-slider-nav'
};

var propsNavSlider = {
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.sl-slick-slider-main',
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
            var id = $(tab.panel).find('.portfolio-tabs-body').attr('id');
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
            var nav  = $(tab.panel).find('.sl-slick-slider-nav'),
                main = $(tab.panel).find('.sl-slick-slider-main'),
                asMain = main.attr('id'),
                asNav  = nav.attr('id');
            propsMainSlider.asNavFor = '#' + asNav;
            propsNavSlider.asNavFor = '#' + asMain;
             initSlick(main, propsMainSlider);
             initSlick(nav, propsNavSlider);
        },
        deactivate: function(event, tab){
            var nav  = $(tab.panel).find('.sl-slick-slider-nav'),
                main = $(tab.panel).find('.sl-slick-slider-main');
            main.slick('unslick');
            nav.slick('unslick');
        }
 };

initTabs($('.portfolio-tabs-body'), body);
initTabs($('#tabs-main'), main);


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


mmenu();
mediaQueries();
//scrollToId();


function scrollToId(){
  $('a[href^="#"]').click(function(){
    elClick = $(this).attr("href");
    dest = $(elClick).offset().top;
    if($.browser.saferi){
      $('body').animate({scrollTop: dest}, 1000);
    }else {
      $('html').animate({scrollTop:dest}, 1000);
    }
  });
}



function mediaQueries(){
    priceSlider();
    $( window ).resize(function() {
      priceSlider();
      mmenu(); 
    });
}


function mmenu(){
      $('.header-mmenu').on('click', function(){
      $('.header-nav').slideToggle();
    });
}

function priceSlider(){
    var priceProps = {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><</button>',
        nextArrow: '<button type="button" class="slick-next">></button>',
        arrows: true,
        adaptiveHeight: true,
        dots: true
    };

    var slider = $('.prices-slider');
    if($(window).width() < 1025){
        if(slider.hasClass('slick-slider')){
            slider.slick('unslick');
        }
        initSlick(slider , priceProps);
    }else{
            if(slider.hasClass('slick-slider')){
                slider.slick('unslick');
            }
    }
}

 function initTabs(item, props) {
     item.responsiveTabs(props);
   }


function initSlick(slider, props) {
    slider.slick(props);
  }

});
