/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength = message.length;


// 특정 인덱스의 글자 추출
let extractCharacter;


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// 부분 문자열 추출
let slice;
let subString;
let subStr;


// 문자열 포함 여부 확인


function checkBrowser(){

    const agent = window.navigator.userAgent.toLowerCase();
    let browserName;

    switch (true) {
        case agent.indexOf('edge') > -1 : browserName = 'MS Edge'; break;
        case agent.indexOf('chrome') > -1 : browserName = 'chrome'; break;
        case agent.indexOf('safari') > -1 : browserName = 'Apple Safari'; break;
        case agent.indexOf('firefox') > -1 : browserName = 'FireFox'; break;
        case agent.indexOf('trident') > -1 : browserName = 'IE'; break;
    
    }
    
    return browserName;

}



let lastIndexOf;
let includes = message.includes('Less');


let startsWith = message.startsWith('Less');
console.log( startsWith );

let endsWith = message.endsWith('more.')
console.log( endsWith );



// 공백 잘라내기

let str = '     a    b     c          d    '

let trimLeft = str.trinLeft(); //왼쪽만
let trimRight 
let trim = twr.trim(); //양 끝 여백만 삭제된다


// 텍스트 반복
let repeat;


// 대소문자 변환
let toLowerCase;
let toUpperCase;


// 텍스트 이름 변환 유틸리티 함수
let toCamelCase;
let toPascalCase;