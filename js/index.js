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
    

 initTabs("#tabs_1", "#tabs_2", "#tabs_3", "#tabs_4");










   function initTabs(tab, props) {
	   		$.ionTabs(tab, props);
   }

});