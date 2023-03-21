
const btn = document.getElementById("btn");
const apikey = "V5ZY3Ke4UkMQUPAag6CbCJQBdQHeUPYkkZ8mXK22";
const joke = document.getElementById("joke");


const options = {
    method: "GET",
    headers : {
        "X-Api-Key": apikey,
    },
};

const apiurl = "https://api.api-ninjas.com/v1/dadjokes?limit=";

async function getjoke(){
    joke.innerText= ("Updating...");
    btn.disabled=true;
    btn.innerText=("LOading...")
    response = await fetch(apiurl, options);
    const data = await response.json();

    joke.innerText= data[0].joke;
    btn.disabled=false;
    btn.innerText=("TELL ME A JOKE")

   


}


btn.addEventListener("click", getjoke)
