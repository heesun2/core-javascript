import { 
    copy,
    addClass,
    showAlert,
    clearContents,
    getNode,
    getRandom,
    insertLast,
    removeClass,
    shake
} from "./lib/index.js";

import jujeobData from "./data/data.js"
console.log( jujeobData('윤우중') );

// 모듈 프로그래밍 사용해서 

// [phase-1]
// 1. 주접 떨기 버튼을 클릭할 수 있는 핸들러를 연결해 주세요.
//    - button     click      addEventListener

// 2. input 값을 (콘솔에)가져와 주세요.
//    - input   value  console.log

//3. jujeob 데이터 가져오기
//4. jujeobData 함수에 input.value를 넣어주세요
//5. 랜덤한 주접 한개를 pick

//6. pick한 값을 result에 뿌려주세요
// result 내용 비우기 (clearContents,node.textContent = '')
// pick text => insertAdjacentHTML('beforeend',text),insertLast()





// [phase-2]
//아무값도 입력하지 않았을 때 예외처리(콘솔출력)


const submit = getNode('#submit');
const nameField = getNode('#nameField');
const result= getNode('.result');



//global gsap
function handleJujeob(e){
    e.preventDefault();

    const name = nameField.value;
    const list = jujeobData(name);
    const pick = list[getRandom(list.length)];


    if(!name || name.replace(/\s*/g,'') === ''){

        showAlert('.alert-error','이름을 입력해주세요',2000);
        // addClass(nameField,'shake')
        shake.restart();

        return;
    }




    // if(!isNumericString(name)){
    //     showAlert('.alert-error','제대로된 이름을 입력해주세요');
    //     return;
    // }

    // result.textContent = ''
    clearContents('.result')
    insertLast(".result",pick)

    // result.insertAdjacentHTML('beforeend',pick)


    // console.log( pick);
}

function handleCopy(){

    const text = this.textContent;

    navigator.clipboard.writeText(text).then(()=>{
        showAlert('.alert-success','클립보드 복사완료');
    })
}

submit.addEventListener('click',handleCopy);
submit.addEventListener('click',handleJujeob);
