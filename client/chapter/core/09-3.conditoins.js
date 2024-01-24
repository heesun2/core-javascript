/* ---------------- */
/* Switch           */
/* ---------------- */



const value = 10;

switch(value){
    case 10 :
        console.log('10입니다');
        break;
    
    case 20 :
        console.log('20입니다');
        break;

    default:
        console.log('난수입니다');
}






const MORNING    = '아침',
    LUNCH      = '점심',
    DINNER     = '저녁',
    NIGHT      = '밤',
    LATE_NIGHT = '심야',
    DAWN       = '새벽';

let thisTime;


/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'
switch (thisTime) {
    case MORNING:
        console.log('뉴스 기사 글을 읽는다');
        break;
    
    case LUNCH:
        console.log('점심을 먹는다');
        break;

}

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


/* switch문 → if문 변환 --------------------------------------------------- */

if(thisTime === MORNING){
    console.log('디스코드를 켠다')

    }else if(thisTime === LUNCH){
    console.log('체력 보충을 위한 잠을 잔다.')

    }else if(thisTime === DINNER){
    console.log('회고조 팀원들끼리 코드리뷰')

    }else if(thisTime === NIGHT){
    console.log('내일을 위한 체력을 위해 잠을 잔다.')

    }else if(thisTime === LATE_NIGHT || thisTime === DAWN){
    console.log('내일의 수업을 위한 info글 읽다가 잠이 들어');
    console.log('꿈속에서 에러를 해결하는 나의 모습을 찾는다.');
    }

/* switch vs. if -------------------------------------------------------- */

// prompt를 통해 숫자를 받는다 (0~6까지)
// switch case 문을 사용해서

// 0 : 일
// 1 : 월
// 2: 화
// 3:수
// 4:목
// 5:금
// 6:토

// const num = prompt('0 ~ 6 사이의 숫자를 입력해 주세요')

// function getRandom(){
//     return Math.floor(Math.random()*7);
// }

// const num = getRandom()
// function getDay(number){ //인자, 매개변수


//     switch (number){
//         case 0: console.log('일'); break;
//         case 1: console.log('월'); break;
//         case 2: console.log('화'); break;
//         case 3: console.log('수'); break;
//         case 4: console.log('목'); break;
//         case 5: console.log('금'); break;
//         case 6: console.log('토'); break;
//     }
// }

// getDay(getRandom()) //인수


function getRandom(){
    return Math.floor(Math.random()*7);
}

const num = getRandom()
function getDay(number){
    switch (number) {
        case 0: return '일';
        case 1: return '월';
        case 2: return '화';
        case 3: return '수';
        case 4: return '목';
        case 5: return '금';
        case 6: return '토';
    }
} 

function weekend(){
    const today = getDay(getRandom(7));

//     if(today.includes('토') || today.includes('일')){ //includes 포함 여부를 알려주는 역할
//         console.log(`오늘은 ${today}요일 이며 주말입니다`)
//     } else {
//         console.log(`오늘은 평일입니다`)
//     }
// }

today.includes('토') || today.includes('일')? '주말입니다' : '평일입니다'
}

const result = weekend();
console.log(result);