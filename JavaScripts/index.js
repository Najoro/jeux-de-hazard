/**
  1. ajouter tous le niveaux que peut avoir les niveaux
  2.fonction si on click sur une niveaux il appareille sur le chiffre
 */

//decalration...
const btmRadios = document.querySelectorAll('input[type="radio"]');
const numberYours = document.getElementById("numberYours");
const numberMister = document.getElementById("numberMister");
const valid = document.getElementById('valid-btm');


let mister = 0;
let your = 0;

let levelTables = [];
const levels = {
  level1: 23,
  level2: 35,
  level3: 53,
  level4: 101,
  level5: 149,
  level6: 203,
};
//functions...
const utils = {
  levelActive: async function (arg) {
    levelTables.length = 0;
    for (let i = 0; i < arg + 1; i++) {
      levelTables.push(i);
    }
    console.log(levelTables);
    this.displayLevel();
    this.displayNumberInCase();
    this.displayNumbreMIster();
  },

  displayLevel: function () {
    const numbers = document.getElementById("numbers");
    numbers.textContent = " ";
    levelTables.forEach((element) => {
      numbers.innerHTML += `
    <div>
      <input type="checkbox" name="numberEatch" value = ${element} id="numberEatch">
      <label for="numberEatch" id="labelNumber">${element}</label>
    </div>
    `;
    });
  },

  displayNumberInCase: function () {
    for (const item of labelNumber) {
      item.addEventListener("click", () => {
        your = parseInt(item.textContent);
        numberYours.textContent = your;
      });
    }
  },
  displayNumbreMIster(){
    mister =  Math.ceil((Math.random() * levelTables.length) - 1);

  },

  testNumbre(){
    const indication = document.querySelector('.indication');
    function display(icone,transform) {
      indication.innerHTML = icone
      indication.style.transform = transform
    }
    if (your === mister) {
      numberMister.textContent = mister;
      utils.displayNumbreMIster();
      display("&#x2714", "rotate(0deg)")
      setTimeout(() => {
        indication.innerHTML = "&#x27BC"
        numberMister.textContent = "?";
     }, 3000);
    }else if(your < mister){
      display("&#x27BC", "rotate(-90deg)")
    }else{
      display("&#x27BC", "rotate(90deg)")
    }
  }
};
//event....
btmRadios.forEach((btmRadio) => {
  btmRadio.addEventListener("click", () => {
    for (const level in levels) {
      if (btmRadio.id == level) {
        utils.levelActive(levels[level]);
      }
    }
  });
});
valid.addEventListener('click', ()=> {
  utils.testNumbre();
})