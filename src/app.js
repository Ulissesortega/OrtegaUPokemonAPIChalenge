let Pokeinput = document.getElementById("Pokeinput")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let image1 = document.getElementById("image1")
let image2 = document.getElementById("image2")
let pokename = document.getElementById("pokename")
let image3 = document.getElementById("image3")
let pokelocation = document.getElementById("pokelocation")

let pokemoninfo;
let pokemoninfoLoc;

btn1.addEventListener("click", () => {
    GetPokeData(Pokeinput.value);
    if (Pokeinput.value == ""){
        alert("Please Enter Pokemon Name or Number!")        
    } 
});

btn2.addEventListener("click", () =>{
    GetPokeData(getRandomInt(649))

})

async function GetPokeData(Pokeinput){
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${Pokeinput}`)
    const data = await promise.json();
    pokemoninfo = data;
    console.log(pokemoninfo);
    image1.src = pokemoninfo.sprites.other.dream_world.front_default
    image2.src = pokemoninfo.sprites.other.home.front_shiny

    pokename.innerText = "Name: " + pokemoninfo.name
    GetPokeLocation(pokemoninfo.location_area_encounters)    
    // This limist until pokemon 549
    if (pokemoninfo.id > 649) {
        alert("We only have until Gen 5 or Pokemon 649")
    }
}

GetPokeData(getRandomInt(649));
function getRandomInt(max) {
return Math.floor(Math.random() * max);
}

async function GetPokeLocation(url){
    const promise = await fetch(url)
    const data = await promise.json();
    pokemoninfoLoc = data;
    pokelocation.innerText = "Location: " + pokemoninfoLoc[0].location_area.name
    if (pokemoninfoLoc.lenght == 0){
        pokelocation.innerText = "NA"
    }else{
        console.log(pokemoninfoLoc[0].location_area.name); 
    }
}



  


