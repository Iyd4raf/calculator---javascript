var DOM = {
  buttons: document.querySelector('.buttons'),
  input: document.querySelector('input'),
  onBtn: document.querySelector('.on')
};



var calculator = {
  curNum: 0,
  num: [0, 0]
}





var result;
var calcStr;
var operator;
var equalsClicked;
var num;
var curNum;
var isNum;
var numberClicked;
var operatorClicked;
var firstValue;
var secondValue;


function init()	{
    num = [0, 0];
    curNum = 0;
    result = 0;
    calcStr = '';
    equalsClicked = false;
    numberClicked = false;
    operatorClicked = false;
    firstValue = false;
    secondValue = false;
    operator = '';
   
	DOM.input.value = 0;
}


DOM.buttons.addEventListener('click', main);
DOM.onBtn.addEventListener('click', init);
window.addEventListener('load', init);



function main(e) {
  
  var isBtnNumber = e.target.classList.contains('number');
  var isBtnOperator = e.target.classList.contains('operator');
  var isBtnEquals = e.target.classList.contains('equals');
  var btnVal = e.target.dataset.val;

  if (isBtnNumber) {
    
    numClicked(btnVal);
    
  } else if (isBtnOperator) {
    
    
    opClicked(btnVal);
    
  } else if (isBtnEquals) {
    
    eqClicked();
    
  }
  
  
}


function calculate(n1, n2, operator) {
  var ans;
  if (operator === '+') {
    ans = n1 + n2;
  } else if (operator === '-') {
    ans = n1 - n2;
  } else if (operator === '*') {
    ans = n1 * n2;
  } else if (operator === '/') {
    ans = n1 / n2;
  } else if (!operator && operatorClicked === false) {
    ans = n1;
  }
  return ans;
}
	


function numClicked(btnVal) {

  
  if (equalsClicked) {
    curNum = 0;
    num[0] = 0;
    //firstValue = false;
  }
    
  
  
  if (num[curNum] === 0) {
    
    if (btnVal === '.') {
      num[curNum] = num[curNum].toString();
      if (num[curNum].includes('.') && btnVal === '.') btnVal = '';
      num[curNum] += btnVal;
    } else {
      num[curNum] = btnVal;
    }
    
    //else if (btnVal === '0') {
    //    num[curNum] = btn;
    //  }
    
  } else {
    
    if (btnVal === '.') {
      //num[curNum] = num[curNum].toString();
      if (num[curNum].includes('.') && btnVal === '.') btnVal = '';
      num[curNum] += btnVal;
    } else {
      num[curNum] += btnVal;
    }
    
  }
  

  console.log(typeof (num[curNum])); 

  DOM.input.value = num[curNum];

  //curNum === 0 ? firstValue = true : secondValue = true;
  
  numberClicked = true;
  equalsClicked = false;
  operatorClicked = false;
  
}



function opClicked(btnVal) {
  
  
  if (numberClicked) {
      curNum = 1;
    }
    

  operator = btnVal;

  operatorClicked = true;
  equalsClicked = false;
  numberClicked = false;
  
}



function eqClicked() {
  
  //firstValue && secondValue

  if (num[0] && num[1]) {

    num[0] = Number(num[0]);
    num[1] = Number(num[1]);

    result = calculate(num[0], num[1], operator);
    DOM.input.value = result;
    num[0] = result.toString();  //solves problem if result = 0 and you do carry over calculation.
    num[1] = 0;
    operator = '';
    
    //firstValue = true;
    //secondValue = false;
    
    //curNum = 1 if operator clicked next
    //curNum = 0 if number clicked next
  } else if (num[0] && !num[1]) {
    
    num[0] = Number(num[0]);
    num[1] = Number(num[1]);
    
    
    result = calculate(num[0], num[1], operator);
    DOM.input.value = result;
    num[0] = result.toString();  
    num[1] = 0;
    operator = '';
    
    curNum = 1;
    
  } else if (!num[0]) {
    
    
    return;
  } 
  
  equalsClicked = true;
  operatorClicked = false;
  numberClicked = false;
  
} 
