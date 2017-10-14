$(document).ready(function() {
  console.log('Loaded');
});
//global vars to hold numbers entered
var operand1;
var operand2;
var tempValue = [];
var op = null;

$('#clear').click(function(e) {
  // console.log("CLEAR CLICKED");
  $('#display').text('');
  operand1 = '';
  operand2 = '';
  op = '';
  tempValue = [];
});

$('.number').click(function(e) {
  var display = $('#display').text();
  tempValue.push(display);
  var result = tempValue.join('');
  $('#display').text(display + $(this).text());
  console.log(result);
});

$('.operator').click(function(e) {
  op = $(this).text();

  switch (op) {
    case '+':
    var result = tempValue.join('');
      operand1 = result;
      console.log(result);
      break;
    case '-':

      break;
    case 'X':

      break;
    case '/':

      break;
    case '=':

      break;
    default:

  }
});


// Press operator:
// perform a join
// operand1 = result (the joined string)
// save the selected operator into op
//
// press = :
// set op2 = result (the joined string)
// Then perform actual math operation and store/display
