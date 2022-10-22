function telephoneCheck(str) { 
    let char0 = str[0];
    if(char0 == '('){
        for(let i = 1; i <= 3; i++){
            if(Number.isInteger(parseInt(str[i]))==false){
                return false;
            }
        }
        if(str[4]!=')'){
            return false;
        }
        let index = 5;
        if(str[5]==' '){
            index ++;
        }
        for(let i = index; i <= index + 2; i++){
            if(Number.isInteger(parseInt(str[i]))==false){
                return false;
            }
        }
        index += 3;
        if(str[index]!='-'){
            return false;
        }
        index ++;
        for(let i = index; i <= index + 3; i++){
            if(Number.isInteger(parseInt(str[i]))==false){
                return false;
            }
        }
    }else if(char0=='1'){
        if(str[1]!=' '&&str[1]!='('){
            return false;
        }
        if(str[1]=='('){
            for(let i = 2; i <= 4; i++){
                if(Number.isInteger(parseInt(str[i]))==false){
                    return false;
                }
            }
            if(str[5]!==')'){
                return false;
            }
            for(let i = 6; i <= 8; i++){
                if(Number.isInteger(parseInt(str[i]))==false){
                    return false;
                }
            }
            if(str[9]!=='-'){
                return false;
            }
            for(let i = 10; i <= 13; i++){
                if(Number.isInteger(parseInt(str[i]))==false){
                    return false;
                }
            }
            return true;
        }
        if(str[2]=='('){
            for(let i = 3; i <= 5; i++){
                if(Number.isInteger(parseInt(str[i]))==false){
                    return false;
                }
            }
            if(str[6]!==')'){
                return false;
            }
            if(str[7]!==' '){
                return false;
            }
            for(let i = 8; i <= 10; i++){
                if(Number.isInteger(parseInt(str[i]))==false){
                    return false;
                }
            }
            if(str[11]!=='-'){
                return false;
            }
            for(let i = 12; i <= 15; i++){
                if(Number.isInteger(parseInt(str[i]))==false){
                    return false;
                }
            }
            return true;
        }
        for(let i = 2; i <= 4; i++){
            if(Number.isInteger(parseInt(str[i]))==false){
                return false;
            }
        }
        if(str[5]!=' '&&str[5]!='-'){
            return false;
        }
        for(let i = 6; i <= 8; i++){
            if(Number.isInteger(parseInt(str[i]))==false){
                return false;
            }
        }
        if(str[9]!=' '&&str[9]!='-'){
            return false;
        }
        for(let i = 10; i <= 13; i++){
            if(Number.isInteger(parseInt(str[i]))==false){
                return false;
            }
        }
    }else{
        if(Number.isInteger(parseInt(char0))==false){
            return false;
        }
        let index = 0;
        for(index; index < 3; index++){
            if(Number.isInteger(parseInt(str[index]))==false){
                return false;
            }
        }
        if(str[index] == '-'){
            index ++;
            for(index; index < 7; index++){
                if(Number.isInteger(parseInt(str[index]))==false){
                    return false;
                }
            }
            if(str[index]!='-'){
                 return false;
            }
            index ++;
            for(index; index < 12; index++){
                if(Number.isInteger(parseInt(str[index]))==false){
                    return false;
                }
            }
        }else if(str[index] == ' '){
            index ++;
            for(index; index < 7; index++){
                if(Number.isInteger(parseInt(str[index]))==false){
                    return false;
                }
            }
            if(str[index]!=' '){
                 return false;
            }
            index ++;
            for(index; index < 12; index++){
                if(Number.isInteger(parseInt(str[index]))==false){
                    return false;
                }
            }
        }else if(Number.isInteger(parseInt(str[index]))){
            index ++;
            for(index; index <= 9; index++){
                if(Number.isInteger(parseInt(str[index]))==false){
                    return false;
                }
            }
            if(str.length!=10){
                return false;
            }
        }else{
            return false;
        }
    }
    return true;
}
  
telephoneCheck("555)-555-5555");