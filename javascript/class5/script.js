//! user defined function
//? normal function
// function functionname(params) {
//     //instructions
// }

function printsomething(){ 
console.log("This is a normal function")
    
}
// printsomething()

//*without parameters.......................
// function sum() {
//     return 5 + 10;
// }
// let a = sum()
// console.log(a);


//*with parameters........................
// function sum(a, b) {
//     return a + b;
// }
// let x = sum(5, 10)
// console.log(x)
// let y = sum(20, 30)
// console.log(y)

// console.log(1)

//* Function with default value.......................
// function sub(x=0, y=0) {
//     return x - y;  
// }
// console.log(sub(10, 5)); // 5

//? Arrow function..........................
// const functionname = ()=>{
//     // instructions
// }

// const sayHello =() => {
//     console.log("Hello Everyone");
    
// }
// sayHello()

//? Anonymous function .........................

// const variable = function() {
//     //instructions
// }

// const multile = function(){
//     console.log(10 * 2);
    
// }
// multile()

//? callback function .(use and throw function)........................
()=>{

}

//* forEach loop

// array.forEach(calbackFunction)
    
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// arr.forEach((x)=> console.log(x)

// arr.forEach((x, i) => {
//     console.log("Value of X:", x)
//     console.log("Index of I:", i);
    
// }
// )

//! map() //used to traverse every element in the array.  (Accumulator or ittrator is present)
let marks = [50, 55, 45, 56, 76, 89]
//let newMarks =  marks.forEach(mark) => {
//     return mark + 5
// })
// console.log(newMarks)

let updateMarks = marks.map((mark, i) => {
    return mark + 5
    console.log(mark);
    console.log(i);
    
    
})

// console.log("Updated Marks:", updateMarks);

// let nmarks = marks.map((mark) => {
    // if(mark > 50) {
    //     return mark
    //     console.log(mark);
        
    // }
// })
// console.log(nmarks)

//! filter()  (if condition true then return otherwise skip.)
const filterMarks = marks.filter((mark) => {
    return mark > 50
})
console.log(filterMarks)

//! reduce()  (Work of return method is to return that's why we don't need to write return in it)
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
console.log(total)




