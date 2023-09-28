
//let depositAmount = 0;
let result = 0;
let x = 0;
let y = 0;

function withdrawA(x){
  x = prompt('Enter an amount to withdraw:');
  return x;
}
function depositA(y){
  y = prompt('Enter an amount to deposit:');
  return y;
}

const enterOption = ' ';
//const enterOption = prompt('Choose an option: \n1. Enter Q to quit \n2. Enter W to withdraw \n3. Enter D to deposit \n4. Enter B to view balance','');
do{
  const enterOption = prompt('Choose an option: \n1. Enter Q to quit \n2. Enter W to withdraw \n3. Enter D to deposit \n4. Enter B to view balance', ' ');
  const withdrawAmount = 0;
  const depositAmount = 0;
  if(enterOption === 'Q'){
    alert('Exit');
    break;
  }

  switch (enterOption) {
     case 'W':
       withdrawA(withdrawA);
       break;
     case 'D':
       depositA(depositA);
       break;
     case 'B':
       alert(depositA(depositA) - withdrawA(withdrawA));
       //console.log(result);
       break;
  }
}while (enterOption.toUpperCase() != 'Q');
  console.log('Exit!');
