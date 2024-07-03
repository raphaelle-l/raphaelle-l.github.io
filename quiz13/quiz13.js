    const section = document.querySelector('section');

    let para1 = document.createElement('p');
    let para2 = document.createElement('p');
    let motherInfo = 'The mother cats are called ';
    let kittenInfo;
    const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

    fetch(requestURL)
      .then(response => response.text())
      .then(text => displayCatInfo(text))

    function displayCatInfo(catString) {
      let total = 0;
      let male = 0;

      // Add your code here
const catInfo = JSON.parse(catString);
let totalKittens = 0;
let maleKittens = 0;
let femaleKittens = 0;
let i = 0;

for (const cat of catInfo) {
  if (i === catInfo.length-1) {
    motherInfo = `${motherInfo}and ${cat.name}.`;
  } else {
    motherInfo = `${motherInfo}${cat.name}, `;
  }
  i++

  totalKittens += cat.kittens.length;
  for (const kitten of cat.kittens) {
    if (kitten.gender === "m" ) {
      maleKittens += 1
    } else {
      femaleKittens += 1;
    }
  }
}

kittenInfo = `There are ${totalKittens} kittens, ${maleKittens} male, and ${femaleKittens} female.`;
      // Don't edit the code below here!

      para1.textContent = motherInfo;
      para2.textContent = kittenInfo;
    }

    section.appendChild(para1);
    section.appendChild(para2);
