// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    // if shift is not meeting standards
    if (!shift || shift > 25 || shift < -25) return false;
    // alphabet array
    const alph = [
    'a', 'b', 'c', 'd', 
    'e', 'f', 'g', 'h', 
    'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 
    'q', 'r', 's', 't', 
    'u', 'v', 'w', 'x',
    'y', 'z'
    ];
    let result = [];
    // making input lower case and spliting in an array
    input = input.toLowerCase().split('');
    if (encode === true){
    // looping input
      input.forEach((character, index) => {
        if (alph.includes(character)){
    // first shift
          alph.find((letter, index) => {
            if (character === letter) {
              let newIn = index + shift;
              if (newIn < 0) newIn += 26;
              if (newIn > 25) newIn -= 26;
              code = alph[newIn];
              result.push(code);
            }
          });
        }else{
          result.push(character)
        }
      });
    }else{
      input.forEach((character, index) => {
        if (alph.includes(character)){
    // reverse shift
          alph.find((letter, index) => {
            if (character === letter) {
              let newIn = index - shift;
              if (newIn < 0) newIn += 26;
              if (newIn > 25) newIn -= 26;
              code = alph[newIn];
              result.push(code);
            }
          });
        }else{
          result.push(character);
        }
      });
    }
  return result.join('');
  }
  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };
