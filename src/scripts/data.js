
const getInitialGameField = ()=> {
  return [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, {"player":"valge", "powerful": true}, null, {"player":"valge", "powerful": true}, null, null, null],
    [null, null, null, {"player":"must", "powerful": false}, null, null, null, null],
    [null, null, {"player":"valge", "powerful": true}, null, {"player":"valge", "powerful": true}, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null]
  ]
}

export default getInitialGameField;

