var firstname = prompt("enter your first name")

var lastname = prompt("enter your last name")

var fathername = prompt("enter your father name")

var city = prompt("enter your city ")

if (city == "karachi"){
    alert("welcome to big city")
}
else{
    alert("welcome to city of " + city)
}
var gender = prompt("what is your gender? ")

if (gender == "male"){
    alert("Good Morning Sir")
}
else if (gender == "female"){
    alert("Good Morning MA'am ")
}
else{
    alert("Error! please Enter write 'male' or 'female'")
}
var age = prompt("Enyer your age?")

if (age >=50){
    alert("Hi buzurg sharif ")
}
else if(age >= 20){
    alert (" Hi nojawan bhai ")
}
else if(age <= 12){
    alert ("Hi Good Baby ")
}
else{
    alert("Hi boy")
}

    var no=prompt("Enter Table Number")

    if(no == ""){
        no = 10
    }
    alert (no+"x 1 = " + no * 1)
    alert (no+"x 2 = " + no * 2)
    alert (no+"x 3 = " + no * 3)
    alert (no+"x 4 = " + no * 4)
    alert (no+"x 5 = " + no * 5)
    
    // calculators
    alert("calculators")
var num1 = Number(prompt("enter 1st number !"));
var opr = prompt("enter operator !");
var num2 = Number(prompt("enter 2nd number !"));
// var result;    
if(opr === "+"){
    alert ( num1 + num2)
}else if(opr === "-"){
    alert ( num1 - num2) 
}else if(opr === "*"){
    alert ( num1 * num2) 
}else if(opr === "/"){
    alert ( num1 / num2) 
}else{
    alert("re-try operator are incorrect");
}
alert("thanks for visit")