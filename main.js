const minAttack = 0;
const maxAttack = 60;

let trevorsHP = 100;

const randomAttack = () => {
  return minAttack + (Math.floor(Math.random() * maxAttack))
}

const stars = ['⭐️', '⭐️', '⭐️', '⭐️'];

stars.forEach(throwingStar => {
  const attack = randomAttack();
  trevorsHP -= attack;
  if (trevorsHP <= 0) {
    console.log(`Trevor is dead!`);
  } else {
    console.log(`${throwingStar} hit ninja Trevor for ${attack} points! His health is at ${trevorsHP}!`);
  }
})

if (trevorsHP > 0) {
  console.log(`Trevor survived with ${trevorsHP} health!!`)
}
