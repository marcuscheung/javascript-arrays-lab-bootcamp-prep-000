var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift('Bob')
  return kittens
}

function destructivelyRemoveLastKitten(name){
<<<<<<< HEAD
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(name){
  return kittens.shift()
}

function appendKitten(name){
  return [...kittens, "Broom"]
}

function prependKitten(name){
  return ["Arnold", ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
=======
  
}

function 
>>>>>>> 866a37b800c8514689c7c1bd9eaa2330fd909dd8
