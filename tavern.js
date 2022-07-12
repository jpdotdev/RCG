document.querySelector('button').addEventListener('click', getQuest);

function getQuest() {
let randomQuest = Math.ceil(Math.random() * 5);
console.log(randomQuest)
if (randomQuest == 1) {
  document.getElementById('farmer').classList.toggle('hidden')
  document.getElementById('markings').classList.add('hidden')
  document.getElementById('treasure').classList.add('hidden')
  document.getElementById('man').classList.add('hidden')
  document.getElementById('crater').classList.add('hidden')
} else if (randomQuest == 2) {
  document.getElementById('markings').classList.toggle('hidden')
  document.getElementById('farmer').classList.add('hidden')
  document.getElementById('treasure').classList.add('hidden')
  document.getElementById('man').classList.add('hidden')
  document.getElementById('crater').classList.add('hidden')
} else if (randomQuest == 3) {
  document.getElementById('treasure').classList.toggle('hidden')
  document.getElementById('farmer').classList.add('hidden')
  document.getElementById('markings').classList.add('hidden')
  document.getElementById('man').classList.add('hidden')
  document.getElementById('crater').classList.add('hidden')
} else if (randomQuest == 4) {
  document.getElementById('man').classList.toggle('hidden')
  document.getElementById('farmer').classList.add('hidden')
  document.getElementById('markings').classList.add('hidden')
  document.getElementById('treasure').classList.add('hidden')
  document.getElementById('crater').classList.add('hidden')
} else {
  document.getElementById('crater').classList.toggle('hidden')
  document.getElementById('farmer').classList.add('hidden')
  document.getElementById('markings').classList.add('hidden')
  document.getElementById('treasure').classList.add('hidden')
  document.getElementById('man').classList.add('hidden')
}
}
