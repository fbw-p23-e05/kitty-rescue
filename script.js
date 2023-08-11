const button = document.getElementById('btn');
const input = document.getElementById('amount');
const cat = document.getElementById('cat');
const sadCatImage = document.getElementById("sad-cat-image");

function handleDonation() {
    const amount = input.value;

    if (amount == 0) {
        alert('Thanks for nothing, the cats are all sad :(');
        document.body.style.background = 'red';
        sadCatImage.src = "images.jpg";
        sadCatImage.style.display = "block";
    } else {
        alert(`Thanks for the donation of $ ${amount}!`);
        sadCatImage.style.display = "none";
    }
}

function catClick() {
    document.body.style.background = 'pink';
}

function moveCat() {
    const maxX = window.innerWidth - cat.width;
    const maxY = window.innerHeight - cat.height;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    cat.style.left = randomX + "px";
    cat.style.top = randomY + "px";
}

function toggleCatClass() {
    cat.classList.toggle("rotate");
}

button.addEventListener('click', handleDonation);
cat.addEventListener('click', catClick);
cat.addEventListener('click', moveCat);
cat.addEventListener('mouseover', toggleCatClass);
cat.addEventListener('mouseout', toggleCatClass);

document.addEventListener("DOMContentLoaded", function() {
    const switchButton = document.getElementById("Switch");
    const body = document.body;
    let isLightBackground = true;
  
    switchButton.addEventListener("click", function() {
      if (isLightBackground) {
        body.style.backgroundColor = "black";
        body.style.color = "white"; 
      } else {
        body.style.backgroundColor = "lightblue";
        body.style.color = "black"; 
      }
      isLightBackground = !isLightBackground;
    });
});

  