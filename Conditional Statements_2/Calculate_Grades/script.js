//Practice Question no 2
let userInput = prompt("Enter the Marks of the Student");
let marks = Number(userInput);

if(marks >= 90 && marks <= 100){
    console.log("Marks = " + marks + "\nGrade : A");
}
else if(marks >= 70 && marks <= 89){
    console.log("Marks = " + marks + "\nGrade : B");
}
else if(marks >= 60 && marks <= 69){
    console.log("Marks = " + marks + "\nGrade : C");
}
else if(marks >= 50 && marks <= 59){
    console.log("Marks = " + marks + "\nGrade : D");
}
else if(marks >= 0 && marks <= 49){
    console.log("Marks = " + marks + "\nGrade : F");
}
else{
    console.log("Invalid Input");
}