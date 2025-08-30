// conditional statements
//? if statement
// let age = 10;
// if (age >= 18) {
//     console.log("You can vote");
// }

//? if-else

// let age = 10;
// if (age >= 18) {
//     console.log("You can vote");
// }else{
//     console.log("You cannot vote");
// }

//? else-if

// 

// time=10;
// if(time > 0 && time < 12){
//     console.log("Good Morning");
// }else if(time >= 12 && time < 17){
//     console.log("Good Afternoon"); 
// } else if(time >= 17 && time < 20){
//     console.log("Good Evening");
// } else if(time >= 20 && time <= 24){
//     console.log("Good Night");
// } else {
//     console.log("Invalid time");
// }


//? switch case

// let val = 2
// switch (val) {
//     case 1:
//         console.log("Value is 1");
//         break;
//     case 2:
//         console.log("Value is 2");
//         break;
//     case 3:
//         console.log("Value is 3");
//         break;
//     default:
//         console.log("Value is not 1, 2, or 3");
// }

//! Array Inbuilt Methods
//? splice()

    let arr = [0, 1, 2, 3, 4, 5, 6, true, null, undefined, 7, 8, 9, 10];
    // console.log("Original Array:", arr)
    
    // arr.splice(2, 0, "Hello", "World"); // add new element
    // console.log(arr)

    // arr.splice(1, 2, "Hi", "There"); // remove elements
    // console.log(arr)

    // arr.splice(2, 3); // remove elements
    // console.log(arr);

    //? slice()
    // let subArr= arr.slice(2, 5) // creates a new array with elements from index 2 to 4
    // console.log(subArr)

    //? includes()
    // console.log(arr.includes(1)); // checks if 1 is present in the array

    //?reverce
    // arr.reverse() // reverses the array
    // console.log(arr);

    //? tostring()
    let strArr = arr.toString(); // converts the array to a string
    // console.log(strArr);

    //! String and its Inbuilt Methods

    // let name = "sai"
    // let age =22
    // console.log("My name is", name, "and I am", age) // template literals
    
    //? Template string
    // console.log(`hello Everyone`)

    //Template literals
    // console.log(`My name is ${name} and I am ${age} years old.`); // using template literals to embed variables in a string
    
    //! Inbuilt Methods
    let str = "  Hello World Hello World Hello World  ";
    // str[1] = "a"; // strings are immutable, this won't change the string
    // console.log(str)

    //? toUpperCase()
    // console.log(str.toUpperCase()) // converts the string to uppercase
    
    //? toLowerCase()
    // console.log(str.toLowerCase()) // converts the string to lowercase

    //? indexOf()
    // console.log(str.indexOf("World")) // returns the index of the first occurrence of "World" in the string
    
    //? lastIndexOf()
    // console.log(str.lastIndexOf("Hello")) // returns the index of the last occurrence of "hello" in the string
    
    //? charAt()
    // console.log(str.charAt(6)) // returns the character at index 6 of the string. it also takes spaces 

    //?slice()
    // console.log(str.slice(0, 4)) // returns a substring from index 0 to 3 (not inclusive)

    //? replace()
    // let substr = str.replace("World", "Everyone"); // replaces "World" with "Everyone" in the string
    // console.log(substr)
    

    //? replaceAll()
    // let rplcStr = str.replaceAll("Hello", "Hi"); // replaces all occurrences of "Hello" with "Hi" in the string
    // console.log(rplcStr)

    // let s = str.replaceAll(" ", ""); // removes all spaces from the string
    // console.log(s)

    //? trim()
    // console.log(str.trim()) // removes leading and trailing whitespace from the string

    //? length()
    // console.log(str.length) // returns the length of the string
    
    //? split()
    // let arrStr = str.split("World") // splits the string into an array of substrings using space as the delimiter.
    // console.log(arrStr)
    // console.log(arrStr)
    
    
    
    

    

    
