// Your code goes here

// Nav buttons turn big and blue on 1st click, go back on 2nd click

const navButtons = document.querySelectorAll('nav a');
navButtons.forEach(function(element) {
    element.addEventListener('click', (function() {
        if (element.style.backgroundColor !== "dodgerblue") {
           element.style.backgroundColor = "dodgerblue"; 
        } else {
            element.style.backgroundColor = "white";
        };
        if (element.style.fontSize !== "30px") {
            element.style.fontSize = "30px"; 
         } else {
             element.style.fontSize = null;
         };
         event.preventDefault();
    }))
});

// Bus img scales on mouse over

const busImg = document.querySelector('.intro img');

busImg.addEventListener('mouseenter', () => {
  busImg.style.transform="scale(1.2)";
  busImg.style.transition="all 0.3s";
});


busImg.addEventListener('mouseleave', () => {
  busImg.style.transform = 'scale(1)';
  busImg.style.transform = 'all 0.3s';
});

// all h2 elements turn green on click

const cardTitles = document.querySelectorAll('h2');
cardTitles.forEach(title => {
  title.addEventListener('click', () => {
    title.style.color = 'green';
  });
});

// all images change on double click

const changeImage = document.querySelectorAll('img');
changeImage.forEach(image => {
    image.addEventListener('dblclick', () => {
        image.src = "img/plane.jpg";
      });
});

// Let's Go turns blue when copied

const letsGo = document.querySelector('.text-content h2');
letsGo.addEventListener('copy', () => {
    letsGo.style.color = "dodgerblue";
});


// event propogation

const bodyBackground = document.querySelector("body");
bodyBackground.addEventListener('click', () => {
    bodyBackground.style.backgroundColor = "hotpink";
});

const textBackground = document.querySelector("p");
textBackground.addEventListener('click', () => {
    textBackground.style.backgroundColor = "green";
    event.stopPropagation();
});

// alert key name on keydown

document.addEventListener('keydown', () => {
    const keyName = event.key;
    alert('keydown event\n\n' + 'key: ' + keyName);
  });


// change button text to Ouch! on click
  
const changeText = document.querySelectorAll('.btn');
changeText.forEach((text) => {
    text.addEventListener('click', () => {
      text.textContent = "Ouch!";
    });
});  
  