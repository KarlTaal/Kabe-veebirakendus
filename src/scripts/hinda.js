
const hinda = (mängija, mängulaud) => {
  let skoor = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (mängulaud[i][j] !== null && mängulaud[i][j].player === mängija){
        if (mängulaud[i][j].powerful)
          skoor += 2;
        else
          skoor++;
      }
    }
  }
  return skoor;
}

export default hinda;