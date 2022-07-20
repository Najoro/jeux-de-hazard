/**
  1. ajouter tous le niveaux que peut avoir les niveaux
  2.fonction si on click sur une niveaux il appareille sur le chiffre
 */

//decalration...
const btmRadios = document.querySelectorAll('input[type="radio"]');
let levelTables = []; 

const level = {
  level1: 10,
  level2: 50,
  level3: 100,
};
//functions...
const utils = {
  levelActive: async function (arg) {
    levelTables.length = 0;
    for (let i = 0; i < arg + 1; i++) {
      levelTables.push(i);
    }
    console.log(levelTables)
  },

  displayNumber : function(){
   const numbers = document.getElementById("numbers");
   numbers.textContent = " "
   levelTables.forEach(element => {
    numbers.innerHTML += `
    <input type="checkbox" name="numberEatch" value = ${element} id="numberEatch">
    <label for="numberEatch">${element}</label>
    `;
  });
  }
};
//event....
btmRadios.forEach((btmRadio) => {
  btmRadio.addEventListener("click", () => {
    if (btmRadio.checked) {
      switch (btmRadio.id) {
        case "level1":
          utils.levelActive(level.level1);
          utils.displayNumber();
          break;
        case "level2":
          utils.levelActive(level.level2);
          utils.displayNumber();
          break;
        case "level3":
          utils.levelActive(level.level3);
          utils.displayNumber();
          break;
        default:
          break;
      }
    }
  });
});
