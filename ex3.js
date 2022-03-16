const randNumberArray = [];
for (let index = 0; index < 20; index++) {
  const randNumber = Math.floor(Math.random() * 101);
  randNumberArray.push(randNumber);
}
console.log(
  randNumberArray.sort((a, b) => {
    return a - b;
  })
);
