function palindrome(str) {
  str = str.split(/[^a-z0-9]/gmi);

  str = str.join("");
  str = str.toLowerCase();
  let reversed = [];
  for(let i = 0; i < str.length; i++){
    reversed.unshift(str[i]); 
  }
  reversed = reversed.join("");
  if(reversed==str){
    return true;
  }
  return false;
}
  
console.log(palindrome("your mom"));