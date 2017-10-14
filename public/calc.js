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
  $('#display').text('');
  operand1 = '';
  operand2 = '';
  op = '';
  tempValue = [];
});

//Event Listener for Percentage Button
$('#percent').click(function(e) {
  var num = $('#display').text();
  var percentage = num / 100;
  $('#display').text(percentage);
});

//Event Listener for Pos/Neg Button
// $('#pos/neg').click(function(e) {
//   var num = parseInt($('#display').text());
//   // // if (num > 0) {
//   // // }
//   var newNum = 0 - num;
//   $('#display').text(newNum);
// });

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
  if(operand1 !== '' && tempValue.length !=0){
    $('#display').text('');
    console.log(op);
    console.log("in 1");
    // op = $(this).text();

    setOperands();
    console.log("a;sdlkfja")
    runCalc();
    op = $(this).text();

  }
  else if (operand1 === '' && tempValue.length != 0){
    console.log("in 2")
    setOperands();
    op = $(this).text();
  }
  else if(operand1 !== '' && operand2 !== '') {
    console.log("in 3")
    runCalc();
    op = $(this).text();
  }
  else{
    console.log("in 4")
    $('#display').text('');
      op = $(this).text();
  }

});
//Function to Run Actual Math Ops
var runCalc = function(){

  console.log('operand1 ' + operand1);
  console.log('operand2 ' + operand2);
  var result = 0;
  if (op === '+') {
    result = parseInt(operand1) + parseInt(operand2);
    console.log(result);
    $('#display').text(result)
  }

  if (op === '-') {
    result = parseInt(operand1) - parseInt(operand2);
    console.log(result);
    $('#display').text(result)
  }

  if (op === 'X') {
    result = parseInt(operand1) * parseInt(operand2);
    console.log(result);
    $('#display').text(result)
  }

  if (op === '/') {
    result = parseInt(operand1) / parseInt(operand2);
    console.log(result);
    $('#display').text(result)
  }
  // Create Running Total by Reassigning operand values to keep track and tempValue
  //to start over
  operand1 = result;
  operand2 = '';
  tempValue = [];
}

// Function to Set Operand Values
var setOperands = function() {
  // if(op === '+') {
    if (operand1 === '') {
      console.log("in op 1")
      operand1 = tempValue.join('');
      $('#display').text('')
      tempValue = [];
    } else if (operand2 === '') {
      console.log("in op 2")
        operand2 = tempValue.join('');
        $('#display').text('')
        tempValue = [];
    }
};
