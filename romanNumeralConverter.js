function convertToRoman(num) {
    let romanNumerals = "";
    function convertToM (){
        romanNumerals += "M";
        num = num - 1000;
    }
    function convertToCM(){
        romanNumerals += "CM";
        num = num - 900;
    }
    function convertToD(){
        romanNumerals += "D";
        num = num - 500;
    }
    function convertToCD(){
        romanNumerals += "CD";
        num = num - 400;
    }
    function convertToC(){
        romanNumerals += "C";
        num = num - 100;
    }
    function convertToXC(){
        romanNumerals += "XC";
        num = num - 90;
    }
    function convertToL(){
        romanNumerals += "L";
        num = num - 50;
    }
    function convertToXL(){
        romanNumerals += "XL";
        num = num - 40;
    }
    function convertToX(){
        romanNumerals += "X";
        num = num - 10;
    }
    function convertToIX(){
        romanNumerals += "IX";
        num = num - 9;
    }
    function convertToV(){
        romanNumerals += "V";
        num = num - 5;
    }
    function convertToIV(){
        romanNumerals += "IV";
        num = num - 4;
    }
    function convertToI(){
        romanNumerals += "I";
        num = num -1;
    }
    while(num>0){
        switch(true){
            case (num>=1000): convertToM(); break;
            case (num>=900): convertToCM(); break;
            case (num>=500): convertToD(); break;
            case (num>=400): convertToCD(); break;
            case (num>=100): convertToC(); break;
            case (num>=90): convertToXC(); break;
            case (num>=50): convertToL(); break;
            case (num>=40): convertToXL(); break;
            case (num>=10): convertToX(); break;
            case (num>=9): convertToIX(); break;
            case (num>=5): convertToV(); break;
            case (num>=4): convertToIV(); break;
            case (num>=1): convertToI(); break;
        }
    }
    return romanNumerals;
}

console.log(convertToRoman(1));