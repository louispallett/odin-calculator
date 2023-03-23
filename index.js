const operators = document.querySelectorAll("#operators");
const digits = document.querySelectorAll("#digits");
const equalsButton = document.querySelector("#equals");
const allClear = document.querySelector("#all-clear");
const deleteButton = document.querySelector("#delete");
const currentOperand = document.querySelector("#current-operand"); 
const previousOperand = document.querySelector("#previous-operand"); 

let firstOperand;
let secondOperand;
let operator;

//for each number (digit), execute newDigit()
digits.forEach((digit) =>
{
    digit.addEventListener("click", () => 
    {
        newDigit(digit.innerText);
    });
});

//Appends selected number onto the #current-operand
function newDigit(digit) 
{
    console.log(digit)
    let value = document.querySelector("#current-operand").innerText;
    if (value == `0`) 
    {
        //stops multiple zeros being written if leading
        if (digit == `0`) 
        {
            console.log('?');
        } else 
        {
            document.querySelector("#current-operand").innerText = digit;
        }
    } else 
    {
        document.querySelector("#current-operand").innerText += digit;
    }
}

//Executes newOperator() when operator is selected
operators.forEach((operator) =>
{
    operator.addEventListener("click", () =>
    {
        newOperator(operator.innerText);
    });
});

//Apends currentOperand to previousOperand. Does not display operator on display.
//Finally, currentOperand = blank
function newOperator(operator)
{
    console.log(operator)//Just to ensure correct operator is being thrown
    firstOperand = document.querySelector("#current-operand");
    previousOperand.innerText = firstOperand.innerText;
    firstOperand = previousOperand.innerText;
    currentOperand.innerText = "";
}

allClear.addEventListener("click", () =>
{
    clearDisplay();
    //console.log(firstOperand);
});

//Clears display and numbers from memory
function clearDisplay()
{
    document.querySelector("#current-operand").innerText = "";
    document.querySelector("#previous-operand").innerText = "";
    memory = "";
}

//If equals button is selected
equalsButton.addEventListener("click", () =>
{
    operate();
});

//Only executes if equalsButton is implemented
function operate ()
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

    //if we create an if statement here basically saying:
    //if operator (variable which should be querySelectorAll("operator")) === "+" [for example] then:
    //sum = a + b
    //... and so on

    secondOperand = currentOperand.innerText;
    console.log(firstOperand);
    console.log(operator);
    console.log(secondOperand);

    /*
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
    */
    
}