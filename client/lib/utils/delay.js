






import { getNode } from '../dom/getNode.js'
import { insertLast } from '../dom/insert.js';
import { isNumber, isObject } from './typeOf.js'
import { xhrPromise } from './xhr.js';
import { tiger } from './tiger.js';



const first = getNode('.first');
const second = getNode('.second');

function delay(callback, timeout = 1000){ //delay 함수에 1초 timeout 설정
    setTimeout(callback, timeout)
}


// delay(()=>{ //상단에서 만든 함수 delay에 1초 timeout 사용
//     first.style.top = '-100px' // 1초 뒤  -100px 이동
//     second.style.top = '100px'

//     delay(()=>{ // 위에 delay함수 실행 뒤 1초가 더 지나서 360도 회전
//         first.style.transform = 'rotate(360deg)'
//         second.style.transform = 'rotate(-360deg)'
        
//         delay(()=>{ // 다음으로 또 다시 delay 함수 실행 되고 1초가 더 지나서 0의 자리로
//             first.style.top = '0'
//             second.style.top = '0'
//         })
//     })
// })





//mixin
// 기존객체 + 전달받은 객체
const defaultOptions = { //기본값으로 설정하는 과정
    shouldReject:false,
    timeout:1000,
    successMessage:'성공입니다',
    errorMessage:'알수업는 오류'
}


export function delayP(options){

    let config = {...defaultOptions} //재할당 하기 위해 let 사용

    if(isNumber(options)){
        config.timeout = options;
    }

    if(isObject(options)){
        config = {...defaultOptions, ...options}
    }
//config에 담아서 config에서 뽑아서 사용할것
    
    let{shouldReject, successMessage, errorMessage, timeout} = config; //재할당 하기 위해 let 


    return new Promise((resolve,reject)=>{
        // resolve('성공'); // 성공과 실패에 정보를 실어담을 수 있다.
        
        setTimeout(()=>{
            if(!shouldReject){
                resolve(successMessage);
            }else{
                reject(errorMessage); 
            }
        },timeout);
    })
}


// delayP(2000) // 2초를 기본값에 덮어씌웠기 때문에 위 함수는 5초 뒤 실행된다
// .then((res)=>{
//     console.log(res);

//     first.style.top = '-100px' // 1초 뒤  -100px 이동
//     second.style.top = '100px'

//     return delayP(2000)
// })
// .then((res)=>{ //실어보내는 대상을 then을 통해 불러올 수 있다. 위에서 3초 뒤에 console에 뜨게 했기때문에 3초 뒤에 than이 실행되어 그 때 값을 탁 잡아낸다
//     console.log(res); //callback함수의 매개변수를 통해 대상을 받아볼 수 있는것.

//     first.style.transform = 'rotate(360deg)'
//     second.style.transform = 'rotate(-360deg)'

//     return delayP(2000)
// })
// .catch((err)=>{
//     console.log(err); //reject가 뜨면 catch를 이용하여 잡는다

//         first.style.top = '0'
//         second.style.top = '0'

//     return delayP(2000)
// })
//코드를 체인처럼 연결해서 사용하여 출력할 수 있다.
//하지만 체인처럼 연결된 함수들을 하나하나 모두 실행 해 주고 싶다면 반드시 return을 해야한다




// const promise = mew promise((resolve, reject)=>{ //(a : 실패 ,b : 성공 )
//     reject('실패!')
// })

// console.log(promise);




//async : 함수의 return값을 무조건 Promise<object> 해준다
async function delayA( data ){
    return data
}

// delayA('신재훈').then(console.log); //원래는 이렇게 then을 사용하여 호출했다

const result = await delayA('신재훈'); //await은 Promise 객체의 result 값을 꺼내는 용도로 사용
//await은 async 안에서만 사용 할 수 있는데 async 내부에 있지 않지만 실행








/* -------------------------------------------------------------------------- */
/*                                    async                                   */
/* -------------------------------------------------------------------------- */


// async function 라면끓이기(){


//     console.log('물');
//     await delayP() //기다리는것을 수행 -> 코드의 실행 흐름 제어 가능

//     console.log('스프');
//     await delayP()

//     console.log('면');
//     await delayP()

//     console.log('그릇');
//     await delayP()

// }

// 라면끓이기()



async function getData(){

    const response = await tiger.get('https://pokeapi.co/api/v2/pokemon/50');

    const imgSrc = response.data.sprites.other.showdown [ 'front_default'];

    insertLast('h1',`<img src = "${imgSrc}" alt = "" />`)

}

// getData()







