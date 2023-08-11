const button = document.getElementById('btn');
const input = document.getElementById('amount');
const cat = document.getElementById('cat');

function handleDonation() {
  const amount = input.value;

  if (amount == 0) {
    alert('Oh no, cats are frustrated');
    document.body.style.background = 'red';
  } else {
    alert(`Awesome! Thanks for the donation of $ ${amount}!`);
  }
}

function catClick() {
  document.body.style.background = 'blue';
}

btn.addEventListener('click', handleDonation);
cat.addEventListener('click', catClick);

function getRandomColor() { //To give me a new rgb number everytime
    return (Math.floor(Math.random() * (255 - 10)) + 10);
}

function getColor() {
  return `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
}

(function changeColor(){
    setInterval((() => document.body.style.background = getColor()), 
        1000);
})()  