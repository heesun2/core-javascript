/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
    return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);


  // 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney;

  // 화살표 함수와 this


  /* 다음 함수를 작성해봅니다. -------------------------------------------------- */

  // pow(numeric: number, powerCount: number): number;
let pow = (numeric,powerCount) => {

let result = 1;

for(let i = 0; i < powerCount; i++) result *= numeric;

return result;

}; 

// console.log(pow(2,53));


let powExpression = (numeric,powCount) => {
    return Array(powCount).fill(numeric).reduce((acc)=>{//Array로 배열을 만들고 fill로 임시배열들을 채워준다.
        return acc * numeric
    },1) //기본 초기값은 0인데 0에 숫자를 곱해도 0이기 때문에 초기값을 1로 설정해주기
};



  // repeat(text: string, repeatCount: number): string;
let repeat = (text,repeatCount)=>{
    let result = ''
    for(let i = 0; i < repeatCount; i++) {
        result += text
    }

    return result;
};


//배열의 반복

let repeatExpression = (text,repeatCount) => {
    return Array(repeatCount)
        .fill(null)
        .reduce((acc) => {
            return acc + text;
        }, "");
};


repeat('hello',3)