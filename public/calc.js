$(document).ready(function(){
  console.log('Loaded');
});

$('#clear').click(function(e){
  // console.log("CLEAR CLICKED");
    $('#display').text('');
});

$('.number').click(function(e){
  var display = $('#display').text();
  $('#display').text(display + $(this).text());
});


//use a switch to check the current click value
