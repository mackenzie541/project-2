// jshint esversion: 6

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};


let revWords = (str) => {
  var words = str.split(" ");
  var temp;
  for (var i = 0; i < words.length; i++){
    temp = " ";
    for (var j = words [i].length - 1; j >= 0; j--){
      temp += words [i][j];
    }
    words[i] = temp;
  }
  return words.join(" ");
};

//revWords ("Web App Dev"); // expect "beW ppA veD" 
//revWords ("Delta Echo"); // expect "atleD ohcE" 
