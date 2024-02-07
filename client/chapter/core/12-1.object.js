/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;



// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let dialog = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  ["max-width"]:800,
  height: '40vh',
  ["min-height"]:280,
  transform:'translate(-50%,-50%)'
};



const template = /* html */`
  <nav>
    <ul class="menuList">
      <li>menu01</li>
      <li>menu02</li>
      <li>menu03</li>
      <li>menu04</li>
    </ul>
  </nav>
`



// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
        //  authorization
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한


let authUser = {
  uuid: crypto.randomUUID(),
  name:'tiger',
  email:'seonbeom2@gmail.com',
  isSignIn:false,
  permission: 'paid' // paid | free
};


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.


// getter
console.log( authUser.uuid );
console.log( authUser.name );
console.log( authUser.email );
console.log( authUser.isSignIn );

// setter
console.log( authUser.permission = 'free' );


// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

//  getter 
console.log( authUser['name'] );
console.log( authUser['uuid'] );
console.log( authUser['email'] );
console.log( authUser['permission'] );

// setter
console.log( authUser['isSignIn'] = true );



// 해당 객체에 키값의 여부를 확인하는 방법 => in 



// console.log( 'name' in authUser );

Object.prototype.nickName = 'tiger';


for(let key in authUser){
  
  if(Object.prototype.hasOwnProperty.call(authUser,key)){
    console.log(key);
  }

}

console.clear()



// 객체의 key만을 모아놓은 배열

const keyList = Object.keys(authUser);
console.log(keyList);

function entries(obj){
    let result = [];
    for(let key in obj){
        if(Object.prototype.hasOwnProperty.call(obj,key)){
            result.push([key,obj[key]])
        }
    }
    return result;
}

entries(authUser) 


// 객체의 value만을 모아놓은 배열 

const valueList = Object.values(authUser);
console.log(valueList);



// 객체의 key와 value의 쌍을 배열로 

const keyValue = Object.entries(authUser);
console.log(keyValue);




function isObject(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'object'
}


// 프로퍼티 제거(remove 비워두기) or 삭제(delete 없애버리기)

function removeProperty(obj,key){

  
  if(!isObject(obj)) return 
  
  obj[key] = null;
}



removeProperty([1,2,3],'uuid') // authUser.uuid = null;


function deleteProperty(obj,key){
    if(!isObject(obj)) return;
    delete obj[key]
}




// deleteProperty(authUser,'uuid') // authUser.uuid : undefined;







// 계산된 프로퍼티 (computed property)
let calculateProperty = 'tel'; // phone | tel

function createUser(name,age,phone){

    return {
        name:name,
        age:age,
        [calculateProperty]:phone
    }
}




// 프로퍼티 포함 여부 확인


// 프로퍼티 나열






// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}




/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

const arr = [10,100,1000,10000]

//arr[0] // 배열의 0번째인 10을 꺼내 쓴다. 하지만 이렇게 반복해서 사용한다면 오류와 복잡해질것
//const a1 = arr[0] //함수로 선언하여 a1을 필요할 때 꺼내 쓸 수 있음.
//const로 만들면 배열의 숫자를 꺼내 써서 변경 할 수 없다.

//순서는 바꿀 수 없음. 변수 이름은 바꿀 수 있다.
// const [a,b,c,d] = [10,100,1000,10000] //이렇게 명시 해주면 필요한 순서의 숫자를 꺼내 쓸 수 있다
// console.log(a); 

const [a1,,...rest] = [10,100,1000,10000] //숫자의 개수를 알지 못할 때 ...rest
console.log( rest ); 


const first = document.querySelector('.first');
const second = document.querySelector('.second');

const [ firstElem,secondElem ] = document.querySelectorAll('span');


let [varibleA, varibleB] = array;







/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */


