//! DOM (Document Object Model)
//use = to manipulate a web page dynamically by using js only
//  is a programming interface for web documents.
//  It represents the structure of a document as a tree of objects, 
// allowing scripts to manipulate the content, structure, and style of the document.


// console.log(window);
// console.log(document);

//!DOM selection methos.................................
//? getElementById() - selects an element by its ID....................................

// const heading = document.getElementById("heading")
// console.log(heading)
// const subheading = document.getElementById("subheading")
// console.log(subheading)

 //?getelementByClassName() - selects elements by their class name...................................

//  note = list of element is called as array

const paragraphs = document.getElementsByClassName("para")
// console.log(paragraphs)

//?getElementsByTagName() - selects elements by their tag name...................................
const elements = document.getElementsByTagName("p")
// console.log(elements)

//?getElementsByName() - selects elements by their name attribute...................................
const email = document.getElementsByName("email")
    // console.log(email);

const pass = document.getElementsByName("password")
    // console.log(pass);

//? querySelector() - selects the first element that matches a CSS selector...................................
const headingEle = document.querySelector("#heading")
// console.log(headingEle)
const paragraphEle = document.querySelector(".para")
// console.log(paragraphEle)
const element = document.querySelector("p")
// console.log(element)

//?queryselectorAll()
const allPara = document.querySelectorAll(".para")
// console.log(allPara)



    
