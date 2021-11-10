// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const polybiusSquare = {
      1: {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'},
      2: {1: 'f', 2: 'g', 3: 'h', 4: 'i/j', 5: 'k'},
      3: {1: 'l', 2: 'm', 3: 'n', 4: 'o', 5: 'p'},
      4: {1: 'q', 2: 'r', 3: 's', 4: 't', 5: 'u'},
      5: {1: 'v', 2: 'w', 3: 'x', 4: 'y', 5: 'z'},
    };

    const output = input.toLowerCase().split('');
    // no spaces
    const outputNoSpace = output.filter(numbers => numbers != ' ');
    // decode
    if(!encode) { 
      let decode = '';
      if(outputNoSpace.length % 2 != 0) return false;
      for(let i = 0; i < output.length; i += 2){
        if(output[i] === ' '){
        decode += ' ';
        i--;
      }else{
        decode += polybiusSquare[output[i + 1]][output[i]];}
      };
      return decode;
    }else{ 
    // encode
      const encrypt = [];
      for(let letter of output){
        if(letter === ' ') encrypt.push(' '); 
        for(let a = 1; a < 6; a++){
          for(let d = 1; d < 6; d++){
            if(polybiusSquare[a][d].includes(letter)){
              encrypt.push(d);
              encrypt.push(a);
            };
          };
        };
      };
      return encrypt.join('');
    };
  };
return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
