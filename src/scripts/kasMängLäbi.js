
const kasLõpp = (mänguLaud)=> {

  let musti = 0;
  let valgeid = 0;

  mänguLaud.forEach(rida =>{
    rida.forEach(ruut =>{
      if (ruut !== null) {
        if (ruut.player === "must")
          musti++;
        if (ruut.player === "valge")
          valgeid++;
      }
    })
  })

  if (musti === 0 && valgeid !== 0)
    return "valge"
  if (valgeid === 0 && musti !== 0)
    return "must"

  return null;
}

export default kasLõpp;