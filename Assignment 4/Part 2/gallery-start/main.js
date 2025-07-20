const displayedImg = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// 1. Declare a const array listing the filenames of each image
const imageFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// 2. Declare a const object listing the alternative text for each image
const imageAlts = {
  'pic1.jpg': 'Closeup of a human eye',
  'pic2.jpg': 'Rock that looks like a wave',
  'pic3.jpg': 'Purple and white pansies',
  'pic4.jpg': 'Section of wall from a pharaoh\'s tomb',
  'pic5.jpg': 'Large moth on a leaf'
};

// 3. Loop through the array of filenames, create <img> for each, set src and alt, and append to thumbBar
for (const file of imageFiles) {
  const newImage = document.createElement('img');
  newImage.src = `images/${file}`;
  newImage.alt = imageAlts[file];
  newImage.style.width = '20%';
  newImage.style.float = 'left';
  thumbBar.appendChild(newImage);

  // 4. Add click event listener to each thumbnail image
  newImage.addEventListener('click', function() {
    displayedImg.src = newImage.src;
    displayedImg.alt = newImage.alt;
  });
}

// 5. Add click event listener to the button for darken/lighten effect
btn.addEventListener('click', function() {
  const currentClass = btn.getAttribute('class');
  if (currentClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
  }
});
