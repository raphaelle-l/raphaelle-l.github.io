var customName = document.getElementById('customname');
var  randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

var storyText = 'It was 94 farenheit outside, so Bob and :insertx: decided to build a rocket out of soda cans and rubber bands. They aimed for the moon, but ended up in :inserty:, where :insertz:.';
var insertX = ['Ralphie','Chip'];
var insertY = ['Farrand Field','CU Stadium'];
var insertZ = ['they got caught by a teacher','they got the rocket stuck in a tree','they lost the rocket to a pack of squirrels'];

function randomValFrmArr(array) {
	// console.log('Function Called');
	return array[Math.floor(Math.random()*array.length)];
}

randomize.addEventListener('click', result);

function result() {

	var newStory = storyText;
	var itemX = randomValFrmArr(insertX);
	var itemY = randomValFrmArr(insertY);
	var itemZ = randomValFrmArr(insertZ);

	newStory = newStory.replace(':insertx:',itemX);
	newStory = newStory.replace(':insertx:',itemX);
	newStory = newStory.replace(':inserty:',itemY);
	newStory = newStory.replace(':insertz:',itemZ);
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
