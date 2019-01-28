(function (){
    let buttons = document.querySelectorAll('a'),
        output = "";

    buttons.forEach( value ,function ()
    {
        output += value.innerHTML;
    });

    alert(output);
}());