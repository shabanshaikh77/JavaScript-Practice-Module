// Problem no-1
/*
let age = prompt("Enter Your age")
age = Number.parseInt(age)
if(age>18)
{
    alert("You can Drive You are Mature to Drive")
}
else{
    alert("You can not Drive you are too small in age")
}*/

let runAgain = true;

const canDrive = (age) => {
  return age >= 18 ? true : false
}

while (runAgain) {
  let age = prompt("Enter your age")
  age = Number.parseInt(age)
  if (age < 0) {
    console.error("Please enter a valid age");
    break;
  }

  if (canDrive(age)) {
    alert("Yes you can drive")
  }
  else {
    alert("You cannot drive")
  }
  runAgain = confirm("Do you want to play again?")
}