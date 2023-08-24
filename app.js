// let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";
let url = "https://v2.jokeapi.dev/joke/Any";

let btn = document.querySelector("button");

btn.addEventListener("click", async() =>{
    let joke = await getJokes();
    // console.log(joke);
    let p = document.querySelector("#result");
    p.innerText = joke;
    
});

async function getJokes(){
    try{
        let res = await axios.get(url);
        return res.data.joke;
    }catch(e){
     console.log("err-", e);
     return [];
    }
}