let a;
let operator;
let b;

function add(a, b)
{
    const result = a + b;
    return result;
}

function subtract(a, b)
{
    const result = a - b;
    return result;
}

function multiply(a, b)
{
    const result = a * b;
    return result;
}

function divide(a, b)
{
    const result = a / b;
    return result;
}

console.log(add(5, 10));
console.log(subtract(10, 8));
console.log(multiply(5, 5));
console.log(divide(60, 6));

function operate (a, operator, b)
{
    /*Here, we need to outline call one of the above functions (add, subtract, multiply, or divide)
    depending on what button has been selected.
    
    So, first we need to use the DOM to attach a variable to both the operator buttons and the first 
    and last buttons - these are the variables a, operator, and b. In other words, use 
    document.querySelector() to select a class/id. 
    
    The variables on a and b just need to equal the buttons selected BEFORE an operator symbol is selected
    and then AFTER an operator is selected. This allows us to write a number of more than 9 (i.e. two 
    buttons such as '12').
    
    We can then call the functions. We could also, define this particular function (operate()) as a 
    variable, so that it's a bit easier to connect this to a querySelector() method.
    
    Of course, we then have to post this information in the HTML file, so that the user can see the 
    result!*/
}