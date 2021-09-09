for (let i = 100; i < 201; i++) {
  let str = "";
  if (i % 3 === 0) {
    str += "Loopy";
  }
  if (i % 4 === 0) {
    str += "Lighthouse";
  }
  if (str) {
    console.log(str);
  } else {
    console.log(i);
  }
}
