let remove = "sample case";
console.log(
  "Ini adalah hasil dari character vowels dan no vowels dari ",
  remove
);

let arr1 = remove.split("");

let reg = /[aiueo]/gi;

let arr2 = remove.match(reg);

console.log("hasil character vowels : ", arr2);

let noVowels = [];
for (let i = 0; i < arr1.length; i++) {
  if (arr2.indexOf(arr1[i]) === -1) {
    noVowels.push(arr1[i]);
  }
}
console.log("hasil character no Vowels : ", noVowels);
