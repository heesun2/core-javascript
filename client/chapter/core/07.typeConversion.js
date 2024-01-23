/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 2024;

// console.log(YEAR); // 2024 숫자형
// console.log(typeof YEAR);
// console.log(typeof String(YEAR)); //string 문자열
// console.log(String(YEAR)); //2024 문자열 명시적 형변환
// console.log( YEAR + ''); // 2024 문자열 암시적 형변환


// undefined, null
let days = null;
let wddkend; //undefined

// console.log(days+''); //암시적 형변환
// console.log(undefined+''); //암시적 형변환
// console.log(undefined+' '.trim());




// boolean
let isClicked = false;

// console.log(isClicked + '');



/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log( Number(friend) );



// null
let money = null;
console.log( Number(money) );

// boolean
let cutie = true;
console.log(Number(cutie));

// string
let num = '250'
console.log( Number(num) ); // 명시적 형변환
console.log( num * 1 ); //암시적
console.log( num / 1 ); //암시적
console.log( +num ); //암시적



// numeric string

const width = '105.3px'

console.log( Number(width) ); // 단위값 때문에 NaN
console.log( parseInt(width)); //정수 반환 105
console.log( parseFloat(width)); //소수점까지 반환 105.3



/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''

// 위에 나열한 것 이외의 것들 
const value = prompt('값을 입력해부세요');
console.log( Number(value) + 10 );