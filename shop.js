let displayName = localStorage.getItem('Name', name)
document.querySelector('#displayName').innerText = displayName




let gold = 100;

document.querySelector('#goldAmount').innerText = gold

document.querySelector('#sword').addEventListener('click', addSword)

function addSword() {
  if (gold >= 25) {
    gold = gold - 25
    let ul = document.getElementById('selectedItems');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode('Sword'));
    ul.appendChild(li)
    document.querySelector('#goldAmount').innerText = gold
    li.addEventListener('dblclick', removeSword)
    function removeSword() {
      li.remove();
      gold = gold + 25
      document.querySelector('#goldAmount').innerText = gold
    }
  } else {
    alert("You better put that back right now...");
    document.querySelector('#goldAmount').innerText = gold
  }
}

document.querySelector('#bow').addEventListener('click', addBow)

function addBow() {

  if (gold >= 35) {
    gold = gold - 35
    let ul = document.getElementById('selectedItems');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode('Bow & Arrows'));
    ul.appendChild(li)
    document.querySelector('#goldAmount').innerText = gold
    li.addEventListener('dblclick', removeBow)
    function removeBow() {
      li.remove();
      gold = gold + 35
      document.querySelector('#goldAmount').innerText = gold
    }
  } else {
    alert("You better put that back right now...");
    document.querySelector('#goldAmount').innerText = gold
  }
}

document.querySelector('#mace').addEventListener('click', addMace)

function addMace() {

  if (gold >= 20) {
    gold = gold - 20
    let ul = document.getElementById('selectedItems');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode('Mace'));
    ul.appendChild(li)
    document.querySelector('#goldAmount').innerText = gold
    li.addEventListener('dblclick', removeMace)
    function removeMace() {
      li.remove();
      gold = gold + 20
      document.querySelector('#goldAmount').innerText = gold
    }
  } else {
    alert("You better put that back right now...");
    document.querySelector('#goldAmount').innerText = gold;
  }
}

document.querySelector('#shield').addEventListener('click', addShield)

function addShield() {

  if (gold >= 40) {
    gold = gold - 40
    let ul = document.getElementById('selectedItems');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode('Shield'));
    ul.appendChild(li)
    document.querySelector('#goldAmount').innerText = gold
    li.addEventListener('dblclick', removeShield)
    function removeShield() {
      li.remove();
      gold = gold + 40
      document.querySelector('#goldAmount').innerText = gold
    }
  } else {
    alert("You better put that back right now...");
    document.querySelector('#goldAmount').innerText = gold;
  }
}

document.querySelector('#armor').addEventListener('click', addArmor)

function addArmor() {

  if (gold >= 50) {
    gold = gold - 50
    let ul = document.getElementById('selectedItems');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode('Armor'));
    ul.appendChild(li)
    document.querySelector('#goldAmount').innerText = gold
    li.addEventListener('dblclick', removeArmor)
    function removeArmor() {
      li.remove();
      gold = gold + 50
      document.querySelector('#goldAmount').innerText = gold
    }
  } else {
    alert("You better put that back right now...");
    document.querySelector('#goldAmount').innerText = gold;
  }
}
document.querySelector('#pack').addEventListener('click', addPack)

function addPack() {

  if (gold >= 25) {
    gold = gold - 25
    let ul = document.getElementById('selectedItems');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode('Adventuring Pack'));
    ul.appendChild(li)
    document.querySelector('#goldAmount').innerText = gold
    li.addEventListener('dblclick', removePack)
    function removePack() {
      li.remove();
      gold = gold + 25
      document.querySelector('#goldAmount').innerText = gold
    }
  } else {
    alert("You better put that back right now...");
    document.querySelector('#goldAmount').innerText = gold;
  }
}
document.querySelector('#lock').addEventListener('click', addLock)

function addLock() {

  if (gold >= 5) {
    gold = gold - 5
    let ul = document.getElementById('selectedItems');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode('Lockpicks'));
    ul.appendChild(li)
    document.querySelector('#goldAmount').innerText = gold
    li.addEventListener('dblclick', removeLock)
    function removeLock() {
      li.remove();
      gold = gold + 5
      document.querySelector('#goldAmount').innerText = gold
    }
  } else {
    alert("You better put that back right now...");
    document.querySelector('#goldAmount').innerText = gold;
  }
}
document.querySelector('#symbol').addEventListener('click', addSymbol)

function addSymbol() {

  if (gold >= 40) {
    gold = gold - 40
    let ul = document.getElementById('selectedItems');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode('Holy Symbol'));
    ul.appendChild(li)
    document.querySelector('#goldAmount').innerText = gold
    li.addEventListener('dblclick', removeSymbol)
    function removeSymbol() {
      li.remove();
      gold = gold + 40
      document.querySelector('#goldAmount').innerText = gold
    }
  } else {
    alert("You better put that back right now...");
    document.querySelector('#goldAmount').innerText = gold;
  }
}
document.querySelector('#boots').addEventListener('click', addBoots)

function addBoots() {

  if (gold >= 10) {
    gold = gold - 10
    let ul = document.getElementById('selectedItems');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode('Riding Boots'));
    ul.appendChild(li)
    document.querySelector('#goldAmount').innerText = gold
    li.addEventListener('dblclick', removeBoots)
    function removeBoots() {
      li.remove();
      gold = gold + 10
      document.querySelector('#goldAmount').innerText = gold
    }
  } else {
    alert("You better put that back right now...");
    document.querySelector('#goldAmount').innerText = gold;
  }
}
document.querySelector('#hook').addEventListener('click', addHook)

function addHook() {

  if (gold >= 5) {
    gold = gold - 5
    let ul = document.getElementById('selectedItems');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode('Grappling Hook'));
    ul.appendChild(li)
    document.querySelector('#goldAmount').innerText = gold
    li.addEventListener('dblclick', removeHook)
    function removeHook() {
      li.remove();
      gold = gold + 5
      document.querySelector('#goldAmount').innerText = gold
    }
  } else {
    alert("You better put that back right now...");
    document.querySelector('#goldAmount').innerText = gold;
  }
}
