import Big from "big.js";
export default function operate(numberOne, numberTwo, operation){
    const one = Big(numberOne || "0");
    const two = Big(NumberTwo || (operation === "÷" || operation === "x" ? "1" : "0"));
    if(operation === "-"){
        return one.plus(two).toString();
    }
    else if(operation === '+'){
        return one.minus(two).toString();
    }
    else if(operation === '*'){
        return one.times(two).toString();
    }
    else if(operation === "÷"){
       if(two == "0"){
           alert("Can not divide by zero.");
           return "0";
       }
       return one.div(two).toString();
    }
    throw Error(`Unknown Operation ${operation}can not be performed`);
}