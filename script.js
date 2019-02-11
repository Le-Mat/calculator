"use strict";

let buttons = document.getElementsByClassName('btn'),
    output = document.getElementById('steps'),
    strForOutput = "",
    factorialFlag = 0;


function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function searchFactorial() {
    for (let i = 0; i < factorialFlag; i++)
    {
        let result = 0,
            number = "",
            arrayStr = [],
            indexFact = strForOutput.indexOf("!");

        arrayStr = strForOutput.split("");
        for (let i = 0; i < arrayStr.length; i++)
        {
            if (!isNaN(arrayStr[i])) {
                number += arrayStr[i];
            } else if (arrayStr[i] === "!")
            {
                result = factorial(parseInt(number));
                arrayStr.splice( indexFact  - number.length , indexFact+1, result);
                strForOutput = arrayStr.join("");
                strForOutput.replace(number+'!', result);
                output.innerHTML = strForOutput;

            } else if (isNaN(arrayStr[i]))
            {
                number = "";
            }
        }

    }
}

function total()
{
    if (factorialFlag) searchFactorial();
    output.innerHTML = eval(strForOutput);

}


for (let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click', function ()
    {
        let text = buttons[i].innerHTML;
        switch (text)
        {
            case "=":
                total();
                break;
            case "AC":
                output.innerHTML = "";
                text = "";
                strForOutput = "";
                break;

            case "CE":
                output.innerHTML = output.innerHTML.substring(0, output.innerHTML.length - 1);
                strForOutput = strForOutput.substring(0, strForOutput.length - 1);
                break;

            case "^":
                output.innerHTML += "^";
                strForOutput += "**" ;
                break;

            case "!":
                factorialFlag++;
                output.innerHTML += "!";
                strForOutput += "!" ;
                break;

            case "pi":
                output.innerHTML += "pi";
                strForOutput += "Math.PI";
                break;

            case "cos":
                output.innerHTML += "cos";
                strForOutput += "Math.cos";
                break;

            case "sin":
                output.innerHTML += "sin";
                strForOutput += "Math.sin";
                break;

            case "tan":
                output.innerHTML += "tan";
                strForOutput += "Math.tan";
                break;

            case "log":
                output.innerHTML += "log";
                strForOutput += "Math.log";
                break;

            default:
                output.innerHTML += text;
                strForOutput += text;
                break;
        }
    })
}


