const operators = document.querySelectorAll("#operators");
const digits = document.querySelectorAll("#digits");
const equalsButton = document.querySelector("#equals");
const allClear = document.querySelector("#all-clear");
const deleteButton = document.querySelector("#delete");
const currentOperand = document.querySelector("#current-operand"); 
const previousOperand = document.querySelector("#previous-operand"); 
const operatorDisplay = document.querySelector("#operator-display");
const dot = document.querySelector("#dot");

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

dot.addEventListener("click", () =>
{
    addDot();
})

//Ensures user cannot add more than one dot
function addDot()
{
    let value = document.querySelector("#current-operand").innerText;
    !value.includes(".") ? document.querySelector("#current-operand").innerText += "." : "";
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
    firstOperand = document.querySelector("#current-operand").innerText;
    //ensures first operand must be inserted before operator can be selected
    if (firstOperand === "")
    {
        return;
    }

    previousOperand.innerText = firstOperand;
    firstOperand = previousOperand.innerText;
    operatorDisplay.innerText = operator;
    currentOperand.innerText = "";
    
}

allClear.addEventListener("click", () =>
{
    clearDisplay();
});

//Clears display and numbers from memory
function clearDisplay()
{
    currentOperand.innerText = "";
    previousOperand.innerText = "";
    operatorDisplay.innerText = "";
    memory = "";
}

deleteButton.addEventListener("click", () =>
{
    del();
})

function del()
{
    //console.log(currentOperand.innerText);
    let newCurrentOperand = currentOperand.innerText.slice(0, -1);
    //console.log(newCurrentOperand);
    currentOperand.innerText = newCurrentOperand;
}

//If equals button is selected
equalsButton.addEventListener("click", () =>
{
    operate();
});

//Only executes if equalsButton is implemented
function operate()
{
    secondOperand = currentOperand.innerText;
    console.log(firstOperand);
    
    console.log(secondOperand);
    let currentOperator = operatorDisplay.innerText;

    console.log(currentOperator);

    let calculatorResult;

    if (currentOperator === "+")
    {
        add(firstOperand, secondOperand);
    } else if (currentOperator === "-")
    {
        subtract(firstOperand, secondOperand);
    } else if (currentOperator === "x")
    {
        multiply(firstOperand, secondOperand);
    } else if (currentOperator === "/")
    {
        divide(firstOperand, secondOperand);
    }
    previousOperand.innerText = `${firstOperand} ${currentOperator} ${secondOperand}`;
    operatorDisplay.innerText = "";
    //console.log(currentOperator);
    currentOperand.innerText = calculatorResult;
    
    function add(a, b)
    {
        a = Number(a);
        b = Number(b);
        calculatorResult = a + b;
    }

    function subtract(a, b)
    {
        calculatorResult = a - b;
    }

    function multiply(a, b)
    {
        calculatorResult = a * b;
    }

    function divide(a, b)
    {
        if(b > 0)
        {
        calculatorResult = (a / b);
        } else
        {
            alert("Enough of this silliness! You cannot divide by 0.")
            calculatorResult = b;
        }
    }
}