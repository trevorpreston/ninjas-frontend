const minAttack = 0;
const maxAttack = 60;

const randomAttack = () => {
  return minAttack + (Math.floor(Math.random() * maxAttack))
}

const stars = ['⭐️', '⭐️', '⭐️', '⭐️'];

stars.forEach(throwingStar => {
  const attack = randomAttack();

  console.log(`${throwingStar} hit ninja Trevor for ${attack} points!`);

})

