// Step 1

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'Once upon a time in a whimsical village, :insertx:, a mischievous cat with a penchant for shiny treasures, stumbled upon a dazzling diamond ring. Unaware it belonged to the Queen, :insertx: proudly flaunted it around town, causing quite a stir. After a merry chase, :insertx: returned the ring, earning himself a reputation as the town's charming diamond cat, beloved by all for :insertx:'s playful antics.'
const insertX = ['Chip','Ralphie'];



// STEP 3
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);
  
  newStory = newStory.replaceAll(':insertx:', xItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
    

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + ' stone';
    const temperature =  Math.round(((94 - 32) * 5/9)) + ' centigrade';
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
