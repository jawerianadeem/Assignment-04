// *********************Chapter 17 - 20 (for Loops) Home Assignment*******************

// Q1
for(var i=1;i<=10;i++){document.write( i+"<br>")}
// Q2
for(var i=1; i<=20;i++){
    document.write(i+",")}
//  Q3
for (var i = 0 ;i <= 4 ;i++){document.write( i+"<br>")}
// Q4
for(var a=0;a<=90;a++){console.log( a)}
// Q5
for(var i=3; i>=0;i--){
    console.log(i)
}
// Q6
var fruits=["apple","banana","grapes","cherry"];
for(var i=0;i<fruits.length;i++)
{console.log("Element of"+fruits[i]+"at"+" "+i)}
// ************or****************
var arr=[10,20,30,40]

// Q7
var flag=(true);

// Q8
var arr=["abc",100,true,"xyz"];
for(var i=0;i<arr.length;+i++){
    console.log(arr[i]);
}

// Q9
for(var i=0;i<=10;i++){
    if(i===1){
        break; }
}

// Q10
var firstName=["jaweria","nadeem","aman","usama"]
var userInput=prompt("Enter username")
for(var i=0;i<firstName.length;i++){
    if(userInput===firstName[i])
    {alert(userInput);}
    else{
        alert("sorry enter correct username")
    }
}


// Q11

// Q12
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr=[1, 2,  3, 4, 5, 6];
for(var i=0;i<firstArr.length;i++){
    for(var j=0;j<secondArr.length;j++){
    console.log(firstArr[i]+secondArr[j])}
}















