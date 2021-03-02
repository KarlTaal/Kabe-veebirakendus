
const getInitialGameField = ()=> {
  return [
    [null, null, null, null, null, null, null, null],
    [{"player":"must", "powerful": false}, null, null, null, null, null, null, null],
    [null, {"player":"valge", "powerful": false}, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, {"player":"must", "powerful": false}, null,null, null, {"player":"must", "powerful": false}, null, null],
    [null, null, {"player":"must", "powerful": false},null, {"player":"must", "powerful": false}, null, {"player":"must", "powerful": false}, null],
    [null, null,null, {"player":"valge", "powerful": false}, null, null, null, {"player":"valge", "powerful": false}],
    [null, null, null, null, null, null, null, null]
  ]
}

export default getInitialGameField;

