const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');


let storyText = 'It was a beautiful 75 fahrenheit day in :inserty: when :insertx: decided to try yodeling. As soon as the singing started, a herd of squirrels gathered around, :insertz:. The dean saw all this happen and now calls :insertx: the Squirrel Whisperer!';
let insertX = ['Chip','Ralphie','Coach Prime'];
let insertY = ['Farrand Field','the ATLAS building','the Flatirons'];
let insertZ = ['dancing to the tune','singing along','listening quietly'];

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  newStory = newStory.replace(':insertx:',xItem).replace(':insertx:',xItem).replace(':inserty:',yItem).replace(':insertz:',zItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory =  newStory.replace('The dean',name);
  }

  if(document.getElementById("uk").checked) {
    let temperature =  Math.round((75-32)/1.8).toString() + ' centigrade';
    newStory =  newStory.replace('75 fahrenheit',temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);
