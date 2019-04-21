const minAttack = 0;
const maxAttack = 60;

const immunity = () => {
  trevorsHP = 1000;
}

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

console.log('updated');
console.log('signing out!!!');
