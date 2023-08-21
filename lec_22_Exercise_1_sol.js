let num = Math.floor((Math.random()*100)+ 1)
console.log(num)

let No
let i = 0;
do {
    i++ 
   No = prompt("Enter the chice of ypur number")
   if(No == num){
   console.log("You win your guess is correct "+"You did it in " + i +" time")}
   else if(No > num)
   {
    console.log("Your guessed no is greater than the actual number")
   }
   else{
    console.log("Your guessed no is lesser than the actual number")
   }}
   while(No != num);
