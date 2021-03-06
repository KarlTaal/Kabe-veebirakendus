const m = [
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, {"player":"must", "powerful": true}, null, {"player":"must", "powerful": true}, null, {"player":"must", "powerful": true}, null, {"player":"must", "powerful": true}],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [{"player":"valge", "powerful": true}, null, {"player":"valge", "powerful": true}, null, {"player":"valge", "powerful": true}, null, {"player":"valge", "powerful": true}, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null]
];

const teeKäik = (käik, mänguväljak) => {
  const koopia = JSON.parse(JSON.stringify(mänguväljak));


}


const kasToimusSöömine = (käik, mänguväljak) => {
  const nupp = mänguväljak[käik[0]];
  const rida = käik[0][0];
  const lõpuRida = käik[1][0];

  if (nupp === "must"){


  }

  if (nupp === "valge"){


  }

}

teeKäik([[2, 3], [3, 2]], m);

