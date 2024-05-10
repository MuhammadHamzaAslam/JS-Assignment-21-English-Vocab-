function alphabet(a) {
  let arr = ['apple🍎', 'ant🐜', 'arrow🏹', 'anchor⚓', 'airplane✈', 'banana🍌', 'ball🏀', 'balloon🎈', 'book📚', 'butterfly🦋', 'cat🐱', 'car🚗', 'cake🍰', 'cloud☁️', 'cow🐮', 'dog🐶', 'duck🦆', 'door🚪', 'diamond💎', 'dragon🐉', 'elephant🐘', 'egg🥚', 'earth🌎', 'eagle🦅', 'envelope✉️', 'fox🦊', 'frog🐸', 'fish🐟', 'flower🌸', 'flag🚩', 'goat🐐', 'ghost👻', 'guitar🎸', 'globe🌍', 'grass🌱', 'hat🎩', 'house🏠', 'heart❤️', 'helicopter🚁', 'honey🍯', 'ice cream🍦', 'island🏝️', 'iguana🦎', 'iron🔩', 'igloo❄️', 'jellyfish🎐', 'jacket🧥', 'jam🍓', 'jaguar🐆', 'jupiter🪐', 'kangaroo🦘', 'kite🪁', 'king👑', 'key🔑', 'koala🐨', 'lion🦁', 'lemon🍋', 'laptop💻', 'lighthouse🏠', 'lizard🦎', 'monkey🐒', 'moon🌕', 'mountain⛰️', 'map🗺️', 'magnet🧲', 'nest🐣', 'night🌃', 'notebook📓', 'ninja🥷', 'net🕸️', 'octopus🐙', 'orange🍊', 'owl🦉', 'ocean🌊', 'opera🎭', 'penguin🐧', 'piano🎹', 'pear🍐', 'palm🌴', 'parrot🦜', 'queen👑', 'quilt🛏️', 'quail🦜', 'quartz💎', 'question❓', 'rabbit🐰', 'rainbow🌈', 'rocket🚀', 'rose🌹', 'ring💍', 'snake🐍', 'star⭐', 'sun☀️', 'sailboat⛵', 'sandwich🥪', 'turtle🐢', 'tree🌳', 'train🚂', 'tiger🐅', 'telescope🔭', 'umbrella☂️', 'unicorn🦄', 'uniform👔', 'uranus🪐', 'ukulele🎸', 'vase💐', 'volcano🌋', 'violin🎻', 'vegetable🥦', 'vulture🦅', 'whale🐋', 'watermelon🍉', 'wind💨', 'wizard🧙', 'wolf🐺', 'xylophone🎼', 'x-ray💀', 'xenon🔵', 'xerus🐿️', 'xenopus🐸', 'yak🐂', 'yo-yo🪀', 'yacht🛥️', 'yogurt🍦', 'yarn🧶', 'zebra🦓', 'zipper🤐', 'zoo🦓', 'zombie🧟', 'zeppelin🎈'];
    let msg = document.getElementById("h-1")
    let emptyarr = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0].toLowerCase() == a.toLowerCase()) {
               emptyarr.push(arr[i])
            }
      }
      if (emptyarr.length >0) {
        let msg1 = Math.floor(Math.random()*emptyarr.length)
        msg.innerText = emptyarr[msg1]
      }
      
    }
   
  
  


