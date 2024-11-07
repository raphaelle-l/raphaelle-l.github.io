const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.png'];

/* Declaring the alternative text for each image file */
const alt = {'pic1.jpg' : 'Goofy Guy 1','pic2.jpg' : 'Goofy Guy 2','pic3.jpg' : 'Goofy Guy 3','pic4.jpg' : 'Goofy Guy 4','pic5.png' : 'Goofy Guy 5'}

/* Looping through images */
for(let i=0; i<images.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/"+ images[i]);
    newImage.setAttribute('alt', "images/"+ images[i]);
    thumbBar.appendChild(newImage);
    thumbBar.addEventListener('click', (e) => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;

    }); // Close event listener
}


/* Making the clicked thumbnail the large image */



  
/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', (e) => {
  if (e.target.className == 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,50%)';
}

 else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
}
}); // Close event listener

