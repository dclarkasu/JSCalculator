// Running Total
// Multiple Values to Operate On

$(document).ready(function() {
  console.log('Loaded');
});
//global vars to hold numbers entered
var operand1 = '';
var operand2 = '';
var tempValue = [];
var op = null;

//Clear Function Event Listener
$('#clear').click(function(e) {
  // console.log("CLEAR CLICKED");
  $('#display').text('');
  operand1 = '';
  operand2 = '';
  op = '';
  tempValue = [];
});

//Click Event Listener for Number Buttons
$('.number').click(function(e) {
  var display = $('#display').text();
  $('#display').text(display + $(this).text());
  tempValue.push($(this).text());
  console.log(tempValue)
  // console.log(result);
});

//Event Listener for Clicks on Operator Buttons
$('.operator').click(function(e) {
  var oldOp = '';
  if ($(this).text() === '=') {
    oldOp = op;
    op = $(this).text();
  }
  // else {
  // if (operand1 !== '' && operand2 !== '') {
  //   oldOp = op;
  //   op = $(this).text();
  // }
  else {
      op = $(this).text();
  }
  switch (op) {
    case '+':
    setOperands(op);

      // console.log(operand1 + '' + op);
      // console.log(operand2 + '' + op);
      break;
    case '-':
      setOperands(op);

      break;
    case 'X':
      setOperands(op);

      break;
    case '/':
      setOperands(op);

      break;
    case '=':
    //Performs all Mathematical Operations
      if (operand2 === '') {
        operand2 = tempValue.join('');
        $('#display').text('')
        tempValue = [];
      }
      // console.log('operand1 ' + operand1);
      // console.log('operand2 ' + operand2);
      var result = 0;
      if (oldOp === '+') {
        result = parseInt(operand1) + parseInt(operand2);
        console.log(result);
        $('#display').text(result)
      }

      if (oldOp === '-') {
        result = parseInt(operand1) - parseInt(operand2);
        console.log(result);
        $('#display').text(result)
      }

      if (oldOp === 'X') {
        result = parseInt(operand1) * parseInt(operand2);
        console.log(result);
        $('#display').text(result)
      }

      if (oldOp === '/') {
        result = parseInt(operand1) / parseInt(operand2);
        console.log(result);
        $('#display').text(result)
      }
      // Create Running Total
      operand1 = result;
      operand2 = '';
      break;
    default:

  }
});

//Function
var setOperands = function(op) {
console.log("in setOperands function");
//Set Addition Operator
  if(op === '+') {
    if (operand1 === '') {
      operand1 = tempValue.join('');
      $('#display').text('')
      tempValue = [];
      op = '+';
    } else if (operand2 === '') {
        operand2 = tempValue.join('');
        $('#display').text('')
        tempValue = [];
        op = '+';
    }
  }
  //Set Subtraction Operator
  if(op === '-') {
    if (operand1 === '') {
      operand1 = tempValue.join('');
      $('#display').text('')
      tempValue = [];
      op = '-';
    } else if (operand2 === '') {
        operand2 = tempValue.join('');
        $('#display').text('')
        tempValue = [];
        op = '-';
    }
  }
  //Set Multiplication Operator
  if(op === 'X') {
    if (operand1 === '') {
      operand1 = tempValue.join('');
      $('#display').text('')
      tempValue = [];
      op = 'X';
    } else if (operand2 === '') {
        operand2 = tempValue.join('');
        $('#display').text('')
        tempValue = [];
        op = 'X';
    }
  }
  //Set Division Operator
  if(op === '/') {
    if (operand1 === '') {
      operand1 = tempValue.join('');
      $('#display').text('')
      tempValue = [];
      op = '/';
    } else if (operand2 === '') {
        operand2 = tempValue.join('');
        $('#display').text('')
        tempValue = [];
        op = '/';
    }
  }
};
