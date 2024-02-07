/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b); //false

// 논리곱(그리고) 연산자 &&
let AandB = a && b;
console.log(AandB); // 비어있는 값 반환

// 논리합(또는) 연산자 ||
let AorB = a || b;
console.log(AorB); //10반환

// a = a || b;
//둘중 비교해서 true 값을 반환하여 true인것을 a에 할당하는 것.
//logical or assignment 논리합 할당 연산자

// 부정 연산자
let reverseValue = !value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy;






let userName = prompt(`who's there`);

//상황
//1. 사용자가 취소 버튼을 누른 경우 => Null
//2. 사용자가 esc 버튼을 누른 경우 => Null
//3. 아무것도 입력 하지 않았을 경우 => ''
//4. 띄어쓰기를 입력한 경우 => ' '


console.log( userName );

if(userName?.toLowerCase === 'Admin' ){
    let password = prompt('비밀번호를 입력해 주세요');

    if(password === 'TheMaster'){
        console.log('로그인 성공');
    } else {
        console.log('비밀번호를 다시 입력 해 주세요');
    }

} else if (userName === null || userName.replace(/\s*/g,'') === ''){ 
    console.log('취소했습니다');

} else {
    console.log('올바른 사용자가 아닙니다');
}



// if(userPassWorl == 'TheMaster') {
//     alert('Welcome!');
// } else {
//     alert('Wrong password')
// }