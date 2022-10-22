function checkCashRegister(price, cash, cid) {
    //creates the object the function will output
    const cashRegisterOutput = {
        status: "OPEN",
        change: [],
    };

    //adding up the cash value of the cash in drawer
    let cvd = 0;
    for(let i = 0; i < cid.length; i++){
        cvd = parseFloat((cvd+cid[i][1]).toFixed(10));
    }

    let change = cash-price;

    //checks if the register has enough cash to give change - if yes, change the status and change values/return the object
    if(cvd<change){
        cashRegisterOutput.status = "INSUFFICIENT_FUNDS";
        cashRegisterOutput.change = [];
        return cashRegisterOutput;
    }

    //check if the register has the same cash value as what needs to be given as change - if yes, change status and change values/return the object
    if(cvd==change){
        cashRegisterOutput.status = "CLOSED";
        cashRegisterOutput.change = cid;
        return cashRegisterOutput;
    }
    //calculate change
    for(let i = cid.length - 1; i >= 0; i--){
        switch(cid[i][0]){
            case "ONE HUNDRED": 
                if(change>=100){
                    cashRegisterOutput.change.push(["ONE HUNDERED", 0]);
                }
                while(change>=100&&cid[i][1]!=0){
                    cid[i][1] = parseFloat((cid[i][1]-100).toFixed(10));
                    change = parseFloat((change-100).toFixed(10));
                    cashRegisterOutput.change[cashRegisterOutput.change.length - 1][1] += 100;
                }; break;
            case "TWENTY":
                if(change>=20){
                    cashRegisterOutput.change.push(["TWENTY", 0]);
                }
                while(change>=20&&cid[i][1]!=0){
                    cid[i][1] = parseFloat((cid[i][1]-20).toFixed(10));
                    change = parseFloat((change-20).toFixed(10));
                    cashRegisterOutput.change[cashRegisterOutput.change.length - 1][1] += 20;
                }; break;
            case "TEN":
                if(change>=10){
                    cashRegisterOutput.change.push(["TEN", 0]);
                }
                while(change>=10&&cid[i][1]!=0){
                    cid[i][1] = parseFloat((cid[i][1]-10).toFixed(10));
                    change = parseFloat((change-10).toFixed(10));
                    cashRegisterOutput.change[cashRegisterOutput.change.length - 1][1] += 10;
                }; break;
            case "FIVE":
                if(change>=5){
                    cashRegisterOutput.change.push(["FIVE", 0]);
                }
                while(change>=5&&cid[i][1]!=0){
                    cid[i][1] = parseFloat((cid[i][1]-5).toFixed(10));
                    change = parseFloat((change-5).toFixed(10));
                    cashRegisterOutput.change[cashRegisterOutput.change.length - 1][1] += 5;
                }; break;
            case "ONE":
                if(change>=1){
                    cashRegisterOutput.change.push(["ONE", 0]);
                }
                while(change>=1&&cid[i][1]!=0){
                    cid[i][1] = parseFloat((cid[i][1]-1).toFixed(10));
                    change = parseFloat((change-1).toFixed(10));
                    cashRegisterOutput.change[cashRegisterOutput.change.length - 1][1] += 1;
                }; break;
            case "QUARTER":
                if(change>=0.25){
                    cashRegisterOutput.change.push(["QUARTER", 0]);
                }
                while(change>=0.25&&cid[i][1]!=0){
                    cid[i][1] = parseFloat((cid[i][1]-0.25).toFixed(10));
                    change = parseFloat((change-0.25).toFixed(10));
                    cashRegisterOutput.change[cashRegisterOutput.change.length - 1][1] += 0.25;
                }; break;
            case "DIME":
                if(change>=0.1){
                    cashRegisterOutput.change.push(["DIME", 0]);
                }
                while(change>=0.1&&cid[i][1]!=0){
                    cid[i][1] = parseFloat((cid[i][1]-0.1).toFixed(10));
                    change = parseFloat((change-0.1).toFixed(10));
                    cashRegisterOutput.change[cashRegisterOutput.change.length - 1][1] += 0.1;
                }; break;
            case "NICKEL":
                if(change>=0.05){
                    cashRegisterOutput.change.push(["NICKEL", 0]);
                }
                while(change>=0.05&&cid[i][1]!=0){
                    cid[i][1] = parseFloat((cid[i][1]-0.05).toFixed(10));
                    change = parseFloat((change-0.05).toFixed(10));
                    cashRegisterOutput.change[cashRegisterOutput.change.length - 1][1] += 0.05;
                }; break;
            case "PENNY":
                if(change>=0.01){
                    cashRegisterOutput.change.push(["PENNY", 0]);
                }
                while(change>=0.01&&cid[i][1]!=0){
                    cid[i][1] = parseFloat((cid[i][1]-0.01).toFixed(10));
                    change = parseFloat((change-0.01).toFixed(10));
                    cashRegisterOutput.change[cashRegisterOutput.change.length - 1][1] += 0.01;
                }; break;
        }
    }

    //checking if the cash in drawer is sufficent to the amount of change needed
    if(change!=0){
        cashRegisterOutput.status = "INSUFFICIENT_FUNDS";
        cashRegisterOutput.change = [];
        return cashRegisterOutput;
    }
    return cashRegisterOutput;
  }
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));