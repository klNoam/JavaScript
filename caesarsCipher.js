function rot13(str) {
  let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let phrase = "";
  for(let i = 0; i < str.length; i++){
    let index;
    if(str[i]!=' '&&str[i]!='!'&&str[i]!='?'&&str[i]!='.'){
      index = alphabet.indexOf(str[i]);
      index += 13;
    }
    if(index >= alphabet.length){
      index -= alphabet.length;
    }
    if(str[i]!=' '&&str[i]!='!'&&str[i]!='?'&&str[i]!='.'){
      phrase += alphabet[index];
    }else{
      phrase += str[i];
    }
  }
  return phrase;
}

console.log(rot13("SERR PBQR PNZC"));