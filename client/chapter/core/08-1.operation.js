/* ---------------- */
/* Operators        */
/* ---------------- */


// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = 10;
let b = 30;

// 단항 연산자
let unary;

// 이항 연산자
let binary = +a + +b;
console.log(binary);

// 삼항 연산자
let ternary = a > 10 ? '크다' : '작다';
console.log( ternary )

// let ifStatement;
// if(a > 10){
//     ifStatement = '크다';
// } else {
//     ifStatement = '작다';
// }

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 10 - 2;

// 산술 연산자: 곱셈
let multiplication = 10 * 3;

// 산술 연산자: 나눗셈
let division = 10 / 2;

// 산술 연산자: 나머지
let remainder = 10 % 3;

if (a % 2 === 0){
    console.log('짝수입니다');
} // 짝수를 구하는 if 문인데, 이것보다 더 간편하게 작성 할 수 있다.


// 산술 연산자: 거듭 제곱
let power = 2 ** 53 - 1;
console.log(power);

Math.pow(2,53)-1


// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1,2,3] + [4,5,6];

const first = [1,2,3];
const second = [4,5,6];

console.log( [...first, ...second] );


// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)


// 선,후 증감 연산자
// ++, --

let counter = 0;
console.log(counter++);
// counter = counter + 1
// counter += 1; //복합 할당 연산자


// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3; // ?
// (2)10을 4로 나눈 나머지 * (5)10을 2로 나누고 할당해준다 + (125) 바로 직전에 count가 5로 할당 되었으니 5의 3승