"use strict";

let buttons = document.getElementsByClassName('btn'),
    output = document.getElementById('steps'),
    strForOutput = "",
    factorialFlag = 0,
    f=[];


function factorial (n)
{
    if (n === 0 || n === 1) return 1;
    if (f[n] > 0) return f[n];
    return f[n] = factorial(n - 1) * n;
}

function searchFactorial()
{
    for (var element in  output.innerHTML )
    {
        let strNumber = "",
            number = 0,
            exMark = output.innerHTML().indexOf("!");
        if (parseInt(element))(strNumber += element);
        else if (isNaN(element) && element !== "!" )( strNumber ="");
        else if (element === "!")
        {
            /*
            number = Number.parseInt(strNumber);
            number = factorial(Number.parseInt(number));
            let strForChange = output.innerHTML.slice( exMark - number.length, exMark);
            output.innerHTML.replace(strForChange, number);*/

            number = Number.parseInt(strNumber);
            alert(number);
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

            case "cos":
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


