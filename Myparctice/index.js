console.log("Hello, World!");

document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector("h1");
    heading.textContent = "Hello from JavaScript!";
});


function addNumbers(num1, num2) {

    return num1 + num2;
}

 
console.log(addNumbers(5, 10));