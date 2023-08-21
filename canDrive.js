const firstlastName = "Michael Leason";
const legalDrivingAge = 16;
let howOld = 36;

function canDrive(age){
  let message;
  if(howOld - legalDrivingAge >= 0){
   console.log(`${firstlastName} leagally can drive!`)
   console.log(`${firstlastName} has been driving for ${howOld - legalDrivingAge} years`)
  } else {
    for(let i = 5; i > -1; i--){
      console.log(i)
    }
  }
}
canDrive(howOld);
