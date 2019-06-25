var DOM = {
  buttons: document.querySelector('.buttons'),
  input: document.querySelector('input'),
  onBtn: document.querySelector('.on')
};



var calculator = {
  curNum: 0,
  num: [0, 0]
}



/***********
ERRORS

//7.8 - 6 = 1.7999998
//n operator n operator = 

//infinity operator number =


****************/


/***********
SEQUENCES


//= y
// = number etc.  y
//number = y
//number = number etc. y



//only problem now: = operator

//= operator n = n = concatenate
//n = operator n
//n = operator = operator n

****************/



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
  
  var btnClicked = e.target;
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
    
  /*
  
  
  */

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







/*


else if (num[0] && !num[1]) {
    
    num[0] = Number(num[0]);
    num[1] = Number(num[1]);

    result = calculate(num[0], num[1], operator);
    DOM.input.value = result;
    num[0] = result.toString();  
    num[1] = 0;
    operator = '';
    
  } else if (!num[0]) {
    
    num[0] = Number(num[0]);
    num[1] = Number(num[1]);

    result = calculate(num[0], num[1], operator);
    DOM.input.value = result;
    num[0] = result.toString();  
    num[1] = 0;
    operator = '';
    
  } 



*/



/*else if (firstValue && !secondValue) {
    
    
    num[0] = Number(num[0]);
    num[1] = Number(num[1]);
    
    result = num[0];
    DOM.input.value = result;
    num[0] = result;
    num[1] = '0';
    firstValue = true;
    secondValue = false;
  }
  */


//1 + 1 = 2          
//ans + 2 = 4

//init onload and on button

//click button

//is button number, dot, equals or operator

//if number - 

   //add num to numStr
   //num1 or num2?
   //get and store in num1 / num2 vars
   //display num on screen

//if operator
   //
   //store operator in var? (will replace operator already stored in var) - enables change operator if wrong operator
   //if num1 exists
     //current number will be num2
   


//if equals operator
  //only do something if num1 and num2 exist?
  //if num1 and num2 exist
     //perform calculation
         //if statement for each operator
     //result = num1





                     

                     
/*if (operatorClicked) {
        console.log(calcStr);
        indexSpace = calcStr.indexOf(' ');
        calcStr = calcStr.slice(0, indexSpace);
        console.log(calcStr);
        
        //text = text.slice(0, i) + "the  Second World War" + text.slice(i + 12);
      }*/                     
                  
                    




