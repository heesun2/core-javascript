





function checkUser(){


    let userName = prompt('사용자의 아이디를 입력해주세요', ''); //prompt 취소나 esc를 누르면 null이 나옴

    if(!userName) return '해당정보가 없습니다';
    //if 문은 문{} 없이 한 줄로 입력 할 수있다
    //if 문이지만 retun해서 값을 내뱉는다 이 return은 문의 것이 아니라 함수의 것이라 내뱉어지는것

    userName = userName.toLowerCase()//재할당을 통해 받은문자열을 소문자로 변경하고 그 값을 사용 하겠다는 재할당을 주어도 된다.
    //?. 옵셔널 체이닝 
    // 옵셔널 체이닝은 앞에 null이나 undefined가 뜨면 출력하지 않는것을 의미



    if (userName.toLowerCase === 'tiger'){ //prompt에 입력된 값이 tiger와 일치한다면?
    // 이 조건문에 toLowerCase를 작성한다면 아래 조건문에도 다 입력 해 주어야 하는 번거로움이 있다. 그래서 위에 prompt에 입력해서 한번에 적용하는 방법도 있다
        console.log('환영합니다');
    }else if(userName === 'bear'){
        console.log('반갑습니다');
    }else if(userName === 'null'){
        console.log('취소됐습니다');

    //userName === null이 되어도 toLowerCase가 실행되어 없는 문자열에 소문자 변환을 할 수 없어서 자꾸 에러가 뜨게 된다
    // 그래서 userName === null을 만나면 return을 해야하고 코드를 멈춰야 하는데 이 return은 함수로 감싸져 있고 그 내부에서만 실행 가능하다 그래서 전체 조건문을 function으로 감싼다

    }else if(userName === ' ' || userName.replace(/\s*/g, '') === ''){
        console.log('빈 문자를 입력하셨습니다');
    }else{
        console.log('안녕히가세요');
    }

}

checkUser()


//replace -> 받은 문자열을 내 명령으로 인해 변경시키는 방법
//tiger.replace('t','o') -> t를 o 로 바꿔준다
//결과는 'oiger' 

//공백 찾기
// \s* -> space의 약자 s 그리고 모두 수집*
// /\s*/g-> g는 전체 영역


//소문자와 대문자로 바꾸는것
//'aaa'.toupperCase() -> 'AAA'
//'AAA'.toLowerCase() -> 'aaa'