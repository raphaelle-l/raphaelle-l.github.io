
let myData = {};
let num = Math.floor(Math.random() * 100);
let url = `https://corsproxy.io/?https://xkcd.com/${num.toString()}/info.0.json`
console.log(url);

function fetchData(){
fetch(`https://corsproxy.io/?https://xkcd.com/${num.toString()}/info.0.json`)
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

    console.log(json);

