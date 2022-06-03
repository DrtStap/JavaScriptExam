/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
2. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
3. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

document.querySelector("#btn").addEventListener("click", () => {
    
    const ENDPOINT = 'https://api.github.com/users';
    
    fetch(ENDPOINT)
        .then((resp) => resp.json())
        .then((data) => {
            document.querySelector("#message").innerHTML = "";
            document.querySelector("#output").innerHTML = "";
            data.forEach((item, index) => {
                let div = document.createElement('div');
                    div.style.width = "400px";
                    div.style.margin = "20px auto";
                    div.style.textAlign ="center";


                div.setAttribute("class", "avatar");
                let avatar = document.createElement("photo");
                let login = item.login;
                let imgUrl = item.avatar_url;
                let img = document.createElement("img");
                    img.style.width = "250px";
                    img.style.height = "250px";
                    img.style.borderRadius = "50%";
                    img.style.border = "10px white solid";

                let br = document.createElement("br");
                img.setAttribute("src", imgUrl);
                avatar.append(img);
                avatar.append(br);
                avatar.append("Nick name: " + login);
                div.append(avatar);
                document.querySelector("#output").append(div);
            });
    })
})
