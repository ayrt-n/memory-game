// Shuffles an array in place and returns the shuffled array
function shuffle(array) {
  const shuffledArray = [...array];
  let m = shuffledArray.length;

  while (m) {
    const i = Math.floor(Math.random() * m);
    m -= 1;

    const tmp = shuffledArray[m];
    shuffledArray[m] = shuffledArray[i];
    shuffledArray[i] = tmp;
  }

  return shuffledArray;
}

export default shuffle;
