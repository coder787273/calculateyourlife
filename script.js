console.log("hello");
let age = prompt("write your curent ");
function lifeInWeeks(age) {
  /************Don't change the code above************/

  //Write your code here.

  let inyear = 90 - age;

  let x = inyear * 365;

  let y = inyear * 52;

  let z = inyear * 12;

  return `You have ${x} days, ${y} weeks, and ${z} months left.`;

  /*************Don't change the code below**********/
}
document.getElementsByTagName("h1")[0].innerHTML = lifeInWeeks(age);
