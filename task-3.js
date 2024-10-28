// Your code here!
function attack(target) {
  target.health -= this.attackDamage;
  return `${this.name} greift ${target.name} mit ${this.attackSkill} an und verursacht ${this.attackDamage} Schaden. ${target.name} hat jetzt ${target.health} Gesundheit.`;
}

const player1 = {
  name: "Venom",
  health: 100,
  attackSkill: "Pfistbump",
  attackDamage: 25,
  attack: attack,
};
const player2 = {
  name: "Captain America",
  health: 90,
  attackSkill: "Headnut",
  attackDamage: 20,
  attack: attack,
};

function battle(player1, player2) {
  let round = 1;
  while (player1.health > 0 && player2.health > 0) {
    console.log(`Runde ${round}:`);
    console.log(player1.attack(player2));
    if (player2.health <= 0) {
      console.log(`${player2.name} hat keine Gesundheit mehr und ist besiegt.`);
      break;
    }
    console.log(player2.attack(player1));
    if (player1.health <= 0) {
      console.log(`${player1.name} hat keine Gesundheit mehr und ist besiegt.`);
      break;
    }
    round++;
  }
}
battle(player1, player2);
console.log(player1, player2);
