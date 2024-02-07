// var age = 21
// if ((age > 18)&&(age < 25)){
//     console.log("Eligible for Discount")
// }else{
//     console.log("Not eligible for discount")
// }



// var age =17;
// const isStudent = true;
// if ((age >= 18)&&(age <=25)|| isStudent){
//     console.log("Eligible for Discount")
// }else{
//     console.log("Not Eligible for Discount")
// }


// var angle1 = 80
// var angle2 = 85
// var angle3 = 90
// if ((angle1 >= 90)){
//     console.log("obtuse triangle")
// }if (angle2 < 90){
//     console.log("Acute Triangle")
// }






// // WHILE LOOP

// //while ("expression")
// //

// var countingNumbers = 0;

// //while(countingNumbers < 10){
// //    console.log("Coungting Numbers:" + countungNumbers);
// //   countingNumbers++;
// //}

// do {
//     console.log("Coungting Numbers:" + countingNumbers);
//     countingNumbers++;
// } while(countingNumbers < 6)

// //for ("initialization"; "test condition"; "increment"){
//   //  statement to be executed if expression is
// //}


// //for (gold = 0; gold <= 5; gold++){
//  //   console.log("Gold Coins:" + gold);
// //}

// const number = 8;


// for (i=1; i<=12; i++){
//     const  resultAnswer = number * i;

//     console.log (`${number} x ${i} = ${resultAnswer}`)
// }



// // JAVASCRIPT FUNCTION

// function myFunction (  ) {
//     // Statements
// }




// function myFisrtFunction (name, age){
//      console.log(`${name} is ${age} years old`);
// }

// myFisrtFunction ('Nkechi', 20);


// function street (sex, complexion){
//     let output;
//     output = `Adaobi is ${sex} and is ${complexion}`;
//     console.log(output)
//     return output;
// }
// street('female', 'fair')

// function calculateAreaOfARectangle(length, breadth){
//     const area = length * breadth;
//     console.log(`${area}cm`)
// }

// calculateAreaOfARectangle(10,5)

// function celsiusToF (c){
//     var F = (9/5 * c) + 32;
//     console.log(`${c} degree celsius is equal to ${F} fahrenheit`)
// }

// celsiusToF(1)


// ab = 5 + 5
// console.log(ab)

// ac = 5; 
// ac--
// console.log(ac)


// 5 === 5

// const Ayiba = 5
// const John = 10
// if (Ayiba > John){
//    console.log("the answer is not correct")
// }else if (John > Ayiba){
//     console.log("answer is correct")
// }

// const myArray=[1,2,3,4,5,6]
// myArray[2] = 'pride'
// myArray.unshift('imoh')
// console.log(myArray)

// var yourArray = [1, "His",'My',"Us", 5 ]




// console.log("first");
// setTimeout(()=>{
// console.log("second")
// },2000)                                                                                    
// console.log("third")
// console.log("fouth")



// //Asynchronous JavaScript

// function greeting(name, calback){
//     console.log(`Hello ${name}`);
//     calback() 
// }

// function callbackFunction(){
//     console.log('I am a calback function')
// }

// greeting("Nkechi", callbackFunction);


// // Using the promise
// function greeting (name){
//     return new Promise((resolve,reject)=>{
//         console.log(`Hello ${name}`);
//         resolve();
//     });    
// }
// function callbackFunction(){
//     console.log(`I am a callback function`)
// }

// greeting(`Wisdom`).then(()=>{
//     callbackFunction();
// }).catch(error=>{
//     console.log("Error",error)
// })



//
const array = [1,2,3,4]
const [first, second, third, fourth] = array;
console.log(fourth)


const ayiba ={
    age : 28,
    gender : 'Male',
    occupation: 'NYSC',
    salary : 33000

}

const {age, gender, occupation, salary} = ayiba;
console.log(occupation)


// Spread 
const imoh = [2, 4, 6, 8]

