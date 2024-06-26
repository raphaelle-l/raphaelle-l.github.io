var customName = document.getElementById('customname');
var  randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

var storyText = 'Once upon a time, a penguin named :insertx: decided to become a world-renowned ballet dancer. Wearing a tutu and a pair of sparkly slippers, he twirled and leapt across the icy landscape, much to the amusement of a group of seals who gave him a standing ovation with their flippers.';
var insertX = ['Chip','Ralphie'];

function randomValFrmArr(array) {
	// console.log('Function Called');
	return array[Math.floor(Math.random()*array.length)];
}

randomize.addEventListener('click', result);

function result() {

	var newStory = storyText;
	var itemX = randomValFrmArr(insertX);

	newStory = newStory.replace(':insertx:',itemX);
	newStory = newStory.replace(':insertx:',itemX);
	// console.log(newStory);

  if(customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace('Bob',name);

  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300*0.071429) + ' stone';
    var temperature =  Math.round((94-32)*5/9)+ ' centigrade';
    newStory = newStory.replace('94 farenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
    
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
