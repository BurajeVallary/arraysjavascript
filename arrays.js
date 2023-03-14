//Question 1
//Find the last element of the following arrays.
//arr1 = [3,7,34,90,12]

const arr1=[3,7,34,90,12];
const lastElement=arr1[arr1.length -1];
console.log(lastElement);

//arr2 = [true, "green", "where",12,56]

const arr2=[true,"green","where",12,56];
const element=arr2[arr2.length -1];
console.log(element);

//  Question2
//Write a JS program that will join the following array elements into a string
//myPets = ["Cow", "Bird", "Snake", "Dog"];


const myPets=["Cow","bird","Snake","Dog"];
const pets=myPets.join (",");
console.log(pets);

//Question 3
//Write a JS script to sort the following array items
//var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

var arr3=[-5,9,5,3,2,-3,6,8,4,1];
 let sorted=arr3.sort((x,y)=>x-y);
console.log(sorted);

//Question 4
//Write a program to remove duplicates from the following array.
//Console the array without duplicates, and console another array that only contains the duplicates
//var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango";

  var arr=["apple","mango","apple","orange","mango","mango"];
 function remove(arr){
    return[...new Set (arr)];
 }
 console.log(remove(arr));

 function findDuplicate(arr){
  return arr.filter((recent,index) => arr.indexOf(recent) !== index);

 }
 console.log(findDuplicate(arr));


 // Question 5
let arr5=["the","way","x",4];
let search="we";
if (arr5.includes(search)){
console.log(search);
}

else {
    console.log("the word does not exist");
}



//Question 6
//Write a JS script to sort the following string
//let word = "sevink"
let word="sevink";
let script=word.split('').sort().join('');
console.log(script);

