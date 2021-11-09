// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
  // your solution code here
    const sub = {};
    if(!alphabet || alphabet.length < 26 || alphabet.length > 26) return false;
    let codeCount = 97;
    for(let i = 0; i <= 25; i++){
      if(Object.values(sub).includes(alphabet[i])){
        return false;
      }else{
        sub[String.fromCharCode(codeCount)] = alphabet[i];
        codeCount++;
      }
    }
  // encoding and decoding
    const buildEncrypt = input.toLowerCase().split('');
    {
      return buildEncrypt.map(letter => {
        for(let plainLetter in sub){
          let subLetter = sub[plainLetter];
          if(letter == ' ') return ' ';
  // encode
          if(encode && letter === plainLetter) return subLetter;
  // decode
          if(!encode && letter === subLetter) return plainLetter;
        }
      }).join('');
    } 
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };