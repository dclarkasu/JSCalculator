$(document).ready(function(){
  console.log('Loaded');
});

$('#clear').click(function(e){
  console.log("CLEAR CLICKED");
    $('#display').text('');
});

$(num).click(function(e){
  var display = $('#display').text();
});

switch ($('.number').text()) {
  case '1':
    console.log("Num 1");
    break;
  default:

}
//use a switch to check the current click value
