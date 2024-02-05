

//querySelector => html을 잡아서 javascript에 끌어 놓는것
//이걸로 input을 잡을것이다
//일치 유무를 찾아야 하기 때문에 input을 잡아야함

const idField = document.querySelector('#idField');
const submit = document.querySelector('.btn');



//eventListener

function handleCheckId(){
    console.log(this.value); //handleCheckId를 호출한 idField ( 따라서 this 가 해당 Input )
    // this.value를 하면 사용자가 작성한 문자를 그대로 console에 추력하고 수집하게 된다

    if(this.value  === 'hello'){ //만약 작성된'hello'와 같은 문장이 입력된다면
        console.log('success'); // 이렇게반환하고
        idField.classList.remove('is-active'); // 문자를 정확히 입력 했을 때 하단의 is-active를 삭제하는 코드 


     } else{ //만약 아니라면
        console.log('error!') //이렇게 에러를 반환한다
        idField.classList.add('is-active'); //지정된 문자 외에 다른 문자를 입력하면 css에 입력 된 값으로 빨갛게 변경하도록
    }
}

function handleSubmit(e){ //event 객체를 떨궈주는 역할인 e 

    e.preventDefault(); // 객체를 떨궈주는 역할인 e의 preventDefault 기능을 사용하겠다
    console.log('제출!');
}


idField.addEventListener('input', handleCheckId) //해당 input에 호출이 일어나면 계속해서 변화 해 주는 input
submit.addEventListener('click', handleSubmit)



//classlist