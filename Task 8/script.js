/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function calculator () {
        var n1 = parseFloat(document.getElementById('n1').value);
        var n2 = parseFloat(document.getElementById('n2').value);
        var operators = document.getElementById('operators').value;
                
        if(operators === '+')    {
            document.getElementById('result').value = n1+n2;}
        if(operators === '-')    {
            document.getElementById('result').value = n1-n2;}
        if(operators === '/')    {
            document.getElementById('result').value = n1/n2;}                
        if(operators === 'x')    {
            document.getElementById('result').value = n1*n2;}
    }
            