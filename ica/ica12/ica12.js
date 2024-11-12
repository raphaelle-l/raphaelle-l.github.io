let ourObject = {
    "name": "Raphaelle", 
    "profession": "student",
    "age" : 19,
    "pets" : [{"name":"Olive", "type":"dog", "breed":"boxer"}]
}

console.log(ourObject);

let myData = {};

function fetchData(){
fetch('https://catfact.ninja/fact')
    .then(res =>{
        if(res.ok){
            return res.json();

        }else{
            console.log(res);
        }
    }).then(res => {
        myData = res;
        console.log(myData);
        document.getElementById("fact").innerHTML = myData.fact;
    })
    .catch(error => {console.log(error)})
}
fetchData();

document.getElementById("generate").addEventListener("click", e=> {fetchData();})

    console.log(myData);

let name = "Raphaelle";

    //let myString = "hello " + name + "!";
    //let myString = `hello ${name} !`;