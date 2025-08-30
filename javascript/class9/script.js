const button = document.getElementById("btn")
const paragraph = document.getElementById("para")

button.onmouseleave = () => {
    paragraph.style.color = "red";
    paragraph.style.fontSize = "30px";
}

const input = document.getElementById("input")

input.onchange = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.type);
    console.log(e.target.value);
    
    
    
    
}