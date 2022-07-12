
document.querySelector('#classButton').addEventListener('click', generateClass)
document.querySelector('#raceButton').addEventListener('click', generateRace)
document.querySelector('#alignmentButton').addEventListener('click', generateAlignment)
document.querySelector('a').addEventListener('click', saveName)


function generateClass() {

  fetch("https://www.dnd5eapi.co/api/classes")
    .then(res => res.json()) //parse response as json
    .then(data => {
      console.log(data)
      let randomClass = data.results[Math.floor(Math.random() * 12)]
      document.querySelector('#displayChosenClass').innerText = randomClass.name
    })
    .catch(err => {
      console.log(`error ${error}`)
    });
}
function generateRace() {

fetch("https://www.dnd5eapi.co/api/races")
  .then(res => res.json()) //parse response as json
  .then(data => {
    console.log(data)
    let randomRace = data.results[Math.floor(Math.random() * 9)]
    document.querySelector('#displayChosenRace').innerText = randomRace.name
  })
  .catch(err => {
    console.log(`error ${error}`)
  });
}

function generateAlignment() {
fetch("https://www.dnd5eapi.co/api/alignments")
  .then(res => res.json()) //parse response as json
  .then(data => {
    console.log(data)
    let randomAlignment = data.results[Math.floor(Math.random() * 9)]
    document.querySelector('#displayChosenAlignment').innerText = randomAlignment.name
  })
  .catch(err => {
    console.log(`error ${error}`)
  });
}

function saveName() {
  let name = document.querySelector('input').value
  localStorage.setItem('Name', name)
  console.log(name);
}
