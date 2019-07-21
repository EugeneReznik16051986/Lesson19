"use strict";
// № 1
let a;
function IsNumberInRange(a) {
    a = 20;
    return (a > 0 && a < 10) ? true : false;
  }
  console.log( IsNumberInRange(a) );

  // № 2
  function IsEven(b) {
    return (b % 2 == 0) ? true : false;
  }
  console.log( IsEven(4) );

  // № 3
  let value = +prompt('value?', '');
  switch (value) {
      case 0:
          alert( 0 );
          break;
      case 1:
          alert( 1 );
          break;
      case 2:
      case 3:
          alert( '2,3' );
          break;
      default:
        alert('Неверно');    
  }


  // № 4
  function min(a, b) {
    if (a < b) {
      return a;
    }
     else {
      return b;
    }
  }
console.log( min(5,-1) );
console.log( min(3,5) );