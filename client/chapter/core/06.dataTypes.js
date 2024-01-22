/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

let empty = null;
// console.log(typeof empty);




// 2. 값이 할당되지 않은 상태

let undef;
// console.log(typeof undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

const duble = "hello";
const single = 'hello';
const backtick = `hello ${undef}`;

// console.log(backtick); 

// const str = new String('hi'); // string constructor funtion 생성자 방식

// 4. 정수, 부동 소수점 숫자(길이 제약)

const interger = 150;
const floatingPointNumber = 10.331;

// console.log(typeof floatingPointNumber); // number

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigNumber = 123n;
// console.log(typeof bigNumber);

// 6. 참(true, yes) 또는 거짓(false, no)
const isClicked = false;
// console.log(typeof isClicked); //boolean


// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = {name: 'tiger'};
// console.log(typeof obj); //object

// 8. 고유한 식별자(unique identifier)
const unique = Symbol('uuid');
// console.log(typeof unique); //symbol


/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류




// Object

const user = {
    name: 'tiger',
    age:27,
    sayHi:function(){
        console.log('hello~');
    },

    sayHi2:()=>{
        console.log('hello2~~');
    },

    sayHi(){
        console.log('hello3~~');
    }
}




// Array
const arr = [1,'a',{name:'tiger'},4,()=>{}];
// console.log(arr[2].name);

// function
function sum(a,b){
    // console.log(a+b)
}
// sum(1,2)


// this


