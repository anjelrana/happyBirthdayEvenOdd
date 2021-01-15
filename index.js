// - Calculate and show her whether it's a prime number or not.
// - If yes, ask her to share this on social media

// used the RegExp - object to make it.

const readlineSync = require("readline-sync"), chalk = require("chalk");
var userName = readlineSync.question("What's your name? ");

var log = console.log;



var pattern = /^\d{2}\/\d{2}$/;// RegExp object

var dateD;
var monthD;
var sum = 0;
var end = true;


  function addDate() {
    sum = 0;
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (var i = monthD-2; i >= -1; i = i - 1) {
       if (i == -1 && monthD == 01){
        
        sum = dateD ;
      }
      else if ( i == 0) {
         
        sum = sum + daysInMonth[i]+ dateD;
        
      } else if (i >= 1){
        sum = sum + daysInMonth[i]  
         
      }
    }// creating a loop for adding the sum again and again.
  
  }
  function oddEven(value){
   if (value % 2 ===0 ){
     log(userName + " your birthday is on even day! ");
     log("total days is " + sum);
   }else {
     log(userName + " your birthday is on odd day i am mean no pun intended")
     log("total days is " + sum);
   }
  }
  function stopOrRepeat(){
    if(readlineSync.keyInYN("you want to continue")){

    }else {
      end = false
    }
  }
while (end) {

  var dateBirth = readlineSync.question("What's your date of birth? DD/MM   ");
  

  

  if (pattern.test(dateBirth)) {
    dateD = dateBirth.slice(0, 2) * 1;
    monthD = dateBirth.slice(3, 5) * 1;
    if (dateD <= 31 && monthD <= 12) {
      if (monthD < 08) {
        log("check1")
        if (monthD === 02 && dateD > 28) {
         log("please put valid data");

        } else if (monthD % 2 === 1 && dateD <= 31) {
          addDate();
          oddEven(sum);stopOrRepeat();
        } else if (monthD % 2 === 0 && dateD <= 30) {
          addDate();
          oddEven(sum);stopOrRepeat();
        }
        else {
          log("please input valid date and month");
        }
      } else {
        log("check2")
        if (monthD % 2 === 0 && dateD <= 31) {
          addDate();
          oddEven(sum);stopOrRepeat();
        } else if (monthD % 2 === 1 && dateD <= 30) {
          addDate();
          oddEven(sum);stopOrRepeat();
        }
        else {
          log("please input valid date and month");
        }
      }


    } else {
      log("please put valid input that is date and month");
    }
  } else {
    log("please put valid input that is DD/MM");
  }
}

// i can either give the changing condition inside or in parenthesis of the for loop.
