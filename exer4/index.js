import figlet from "figlet"
import axios from "axios"

let randNum = Math.floor(Math.random()*1008 + 1);
let site = "https://pokeapi.co/api/v2/pokemon/" + randNum;


axios.get(site)
    .then(function (response){

        figlet(response.data.name, function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data)
        });
            })
    .catch(function (error){
        
    })
