/**
  1. ajouter tous le niveaux que peut avoir les niveaux
  2.fonction si on click sur une niveaux il appareille sur le chiffre
*/

//decalration...
const btmRadios = document.querySelectorAll('input[type="radio"]');
const numberYours = document.getElementById("numberYours");
const numberMister = document.getElementById("numberMister");
const valid = document.getElementById('valid-btm');
const numbersContenaire = document.getElementById("numbers");
const score = document.querySelector('.score')

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
const Utils = {
  levelActive: async function (arg) {
    levelTables.length = 0;
    for (let i = 0; i < arg + 1; i++) {
      levelTables.push(i);
    }
    this.displayLevel();
    this.displayNumberInCase();
    this.displayNumbreMIster();
  },

  displayLevel: function () {
    numbersContenaire.textContent = " ";
    levelTables.forEach((element) => {
      numbersContenaire.innerHTML += `
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
    function testSCore(){
      if(score.textContent <= 0){
        score.textContent = "50";
        numbersContenaire.textContent = ` GAME OVER`;
      }
    }
    function Notsame(rotate){
      display("&#x27BC", `rotate(${rotate})`)
      labelNumber[your].style.background = "red";
      testSCore();
      score.textContent -= Math.ceil((levelTables.length * 10)/100) 
      setTimeout(() => {
        display("&#x27BC", "rotate(0deg)")
      }, 500);
    }
    function same() {
      numberMister.textContent = mister;
      numbersContenaire.textContent = `Bravo... Next defie....`;
      score.textContent = parseInt(score.textContent) + mister 
      Utils.displayNumbreMIster();
      display("&#x2714", "rotate(0deg)")

      setTimeout(() => {
        indication.innerHTML = "&#x27BC"
        numberMister.textContent = "?"
        numberYours.textContent = "?"
     }, 1000);
    }
    if (your === mister) {
      same()
    }else if(your < mister){
      Notsame("-90deg")
    }else{
      Notsame("90deg")
    }
  }
};
//event....
btmRadios.forEach((btmRadio) => {
  btmRadio.addEventListener("click", () => {
    for (const level in levels) {
      if (btmRadio.id == level) {
        Utils.levelActive(levels[level]);
      }
    }
  });
});
valid.addEventListener('click', ()=> {
  Utils.testNumbre();
})