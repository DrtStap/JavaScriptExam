/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
    .then((resp) => resp.json())
    .then((data) => {
        data.forEach((item, index) => {
            let div = document.createElement('div');
                div.style.margin ="100px";
                div.style.border = "1px solid black";
                div.style.padding ="50px";
                div.style.backgroundColor = "white";

            div.setAttribute("class", "card");
            let myH = document.createElement("h4");
            let br = document.createElement("br");

            let myData = `<span id="size"> <span id="marke">Markė: </span> ${item.brand}</span>`;
            myH.innerHTML += myData;
            div.append(myH);
            myH.append(br);
            myData = `<span id="modelis"></br>Modeliai: </br></br></span> ${item.models}`;      
            myH.innerHTML += myData;
            div.append(myH);
            document.querySelector("#output").append(div);
    })
})