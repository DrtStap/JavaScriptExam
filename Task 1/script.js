/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiama
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.querySelector("form").addEventListener ("submit", (event) => {
    
    event.preventDefault();
    document.querySelector("#output").innerHTML = "";
    let kg = document.querySelector("input[name=svoris]").value;
    
    let lb = kg * 2.2046 + " lb";
    let g = kg / 0.0010000 + " g";
    let oz = kg * 35.274 + " oz";

    let calculateLb = document.createElement("h3");
    calculateLb.append(lb);
    document.querySelector("#output").append(calculateLb);

    let calculateG = document.createElement("h3");
    calculateG.append(g);
    document.querySelector("#output").append(calculateG);

    let calculateOz = document.createElement("h3");
    calculateOz.append(oz);
    document.querySelector("#output").append(calculateOz);

})