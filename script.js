

const button = document.getElementById('btn');
const input = document.getElementById('amount');




function handleDonation() {
    const amount = input.value;

    if (amount == 0) {
        alert('Thanks for nothing, the cats are all sad :(');
        document.body.style.background = 'black';
    } else {
        alert(`Thanks for the donation of $ ${amount}!`);
    }
}

var bgToggle = true;
var cat = document.getElementById("cat");

function catClick() {

    if (bgToggle){
        document.body.style.background = 'pink';
        bgToggle = false;
    } else{
        document.body.style.background = null;
        bgToggle = true;
    }

}

var clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}

button.addEventListener('click', handleDonation);
cat.addEventListener('click', catClick);




