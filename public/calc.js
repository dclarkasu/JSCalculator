$(document).ready(function() {
  console.log('Loaded');
});
//global vars to hold numbers entered
var operand1 = '';
var operand2 = '';
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
  $('#display').text(display + $(this).text());
  tempValue.push($(this).text());
  console.log(tempValue)
  // console.log(result);
});

$('.operator').click(function(e) {
  var oldOp = '';
  if($(this).text() === '='){
    oldOp = op;
    op = $(this).text();
  }
  else{
    op = $(this).text();
  }
  switch (op) {
    case '+':
    if(operand1 === '') {
      operand1 = tempValue.join('');
      $('#display').text('')
      tempValue = [];
      op = '+';
    }
    else if(operand2 === '') {
      operand2 = tempValue.join('');
      $('#display').text('')
      tempValue = [];
      op = '+';
    }
      console.log(operand1 + '' + op);//???
      console.log(operand2 + '' + op);//???
      break;
    case '-':

      break;
    case 'X':

      break;
    case '/':

      break;
    case '='://?? How do I perform the right action on equals

    if(operand2 === '') {
      operand2 = tempValue.join('');
      $('#display').text('')
      tempValue = [];
    }
    console.log('operand1 ' + operand1);
    console.log('operand2 ' + operand2);
      if(oldOp === '+') {
        var result = parseInt(operand1) + parseInt(operand2);
        console.log(result);
        $('#display').text(result)
      }
      break;
    default:

  }
});



// Press operator:
// perform a join and store it
// save the selected operator into op
//
// press = :
// set op2 = result (the joined string)
// Then perform actual math operation and store/display
