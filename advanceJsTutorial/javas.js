// alert("Hello")
// import { connect_db,open_db } from "./test.js";
// console.log(connect_db('sample_db'))
// console.log(open_db('sample_db_another'))
// const names = ["a","b","c","d","e"];
// const pno = [234,233,532,3543,3453];
// for (let i=0;i<5;i++){
//     console.log(`${names[i]}: ${pno[i]}`);
// }

// var searched = 234;
// for(let i=0;i<5;i++){

// }
// rl.question("Enter a name to search for its phone number: ", (name) => {
//     let found = false;
//     for (let i = 0; i < names.length; i++) {
//         if (names[i].toLowerCase() === name.toLowerCase()) {
//             console.log(`Phone Number of ${names[i]}: ${phoneNumbers[i]}`);
//             found = true;
//             break;
//         }
//     }
//     if (!found) {
//         console.log(`Phone number not found for ${name}.`);
//     }
//     rl.close();
// });



// var tot_amount = 0;
// function myFunction(){
//     let units_val = parseInt(prompt("Please enter your units ", "0"));
//     if(units_val<=100){
//         tot_amount = units_val*1;
//     }
//     else{
//         if(units_val<350)
//             tot_amount = 100*1 + (units_val-100)*1.5;
//         else{
//             if(units_val<600)
//                 tot_amount = 100*1 + 250*1.5 + (units_val-350)*2;
//             else
//                 tot_amount = 100*1 + 250*1.5 + 250*2 + (units_val-600)*3;
//         }

//     }
//     tot_amount=tot_amount+250;
//     console.log(tot_amount);
// }

// function Func2(){
//     let sentence=prompt("Enter a sentence: ");
//     let k=sentence.split(" ");
//     for(let i=0;i<k.length;i++){
//         let newword=k[i][0].toLocaleUpperCase();
//         console.log(newword+k[i].slice(1,k[i].length));

//     }
// }

// function Func3(){
//     let money=100000;
//     let chances=3;
//     let username=prompt("Please enter username");
//     let password=prompt("Please enter password");
//     while(money>0){
//         while(username!="J" || password!="p"){
//             chances--;
//             console.log("please enter correct credentials");
//             if(chances==0){
//                 console.log("You have exceeded the number of attempts");
//                 break;
//             }
//             username=prompt("Please enter username");
//             password=prompt("Please enter password");

//         }
//        if(chances==0)break;
//         let amount=parseInt(prompt("Please enter the amount you want to withdraw"));
//         if(amount>money){
//             console.log("You do not have enough money");
//             break;
//         }
//         console.log("Your money has been withdrawn");
//         money=money-amount;
//         console.log(money);
//         username=prompt("Please enter username");
//         password=prompt("Please enter password");

//     }

// }

// const f1=function(inp1){
//     const f2=function(inp2,inp3){
//         let sum=inp1+inp2+inp3;
//         console.log(sum);
//     }
//     f2(4,5);
//     f2(5,6);
// }
// f1(10);
// f2(2,4); error

// import {dummy_f1,d2} from "./util_db.js";
// console.log(dummy_f1("John"));
// console.log(d2("ron"));

// let arr = ["A", "B", "C", "D", "E"];
// let arr2 = [123, 456, 789, 101, 112];

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i] + " " + arr2[i]);
// }
// var name = prompt("Enter a name");
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] == name) {
//     console.log(arr2[i]);
//     break;
//   }
//   if (i == arr.length - 1) {
//     console.log("Not found.");
//   }
// }


console.log("page loaded..")
// var dom_body=document.getElementsByTagName("body")
// console.log(dom_body)
// console.log(dom_body[0].children[0].innerHTML)

// console.log(document.getElementsByName('div_name'))
// document.getElementsByName('div_name').forEach(node_element=>{
//     console.log(node_element.innerHTML)
// })

// var blue_collection= document.getElementsByClassName('blue')
// console.log(blue_collection)


var body_ele=document.getElementById("body_ele")
body_ele.addEventListener("click",(event)=>{
    console.log("body clicked")
})


var div_id=document.getElementById("div_id")
div_id.addEventListener("click",(event)=>{
    console.log("name clicked")
})
