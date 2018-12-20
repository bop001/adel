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
    $( "#tabs" ).tabs();
});