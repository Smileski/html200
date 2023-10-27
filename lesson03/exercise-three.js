const animals = ["dogs", "cats", "cows", "horses", "mise"];
animals.forEach(myFunction);
function myFunction(item, index) {
  console.log(index+1 + ", " + item);
}

const animals = ["dogs", "cats", "cows", "horses", "mise"];
for (i=0; i<animals.length; i++) {
  console.log((i+1) + ", " + animals[i])
}
