/* 
[readyState]

0: uninitialized
1: loading
2: loaded
3: interactive
4: complete

*/


const END_POINT = 'https://jsonplaceholder.typicode.com/users';


export function xhr({//기본값
    method = "GET",
    url = '',
    onSuccess = null,
    onFail = null,
    body = null,
    headers = {
        'content-Type':'application/json',
        'Access-Control-Allow-Origin':'*'
    }
}) {

    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    
    Object.entries(headers).forEach(([key,value])=>{// 'content-Type':'application/json' 이것을 key와 value로 분리하기
        xhr.setRequestHeader(key,value);
    })

    xhr.addEventListener("readystatechange", () => {
        const { readyState, status, response } = xhr;

        if (readyState === 4) {
        if (status >= 200 && status < 400) {
            onSuccess(JSON.parse(response));
        } else {
            onFail({ message: "에러가 발생했습니다!" });
        }
        }
    });
    xhr.send(JSON.stringify(body));
}



// callback => 함수 본문을 넘겨서 안쪽 함수에서 실행



// xhr(
//     'POST',
//     END_POINT,
//     (data)=>{
//     console.log( data );
// },
// ({message})=>{
//     console.log(message);
// },
// {name:'tiger'}
// );

//--------------

xhr({
    // method:'GET', 위에서 GET 통신을 적으면 여기서 생략 가능하다
    url:END_POINT, //이 값들은 처음에 null로 작성한것들이 덮어씌워지면서 값이 입력된다
    onSuccess(){ },
    onFail(){ },
    body:{name:'tiger'}
});




//--------------------------------------------------------
// 자바스크립트의 함수는 객체다

xhr.nicName = 'tiger';


xhr.get = (url,onSuccess,onFail)=>{
    xhr({
    url, //url:url
    onSuccess, // onSuccess:onSuccess
    onFail //onFail:onFail
    }) // 전달받은 value의 값이 key값과 동일하기때문에 생략 가능하다
}


xhr.get(
    END_POINT,
    ()=>{},
    ()=>{}
)

xhr.post = (url,body,onSuccess,onFail)=>{
    xhr({
    method:'POST', //기본값을 post로 작성하면 post로 실행
    url,
    body,
    onSuccess,
    onFail
    })
}


xhr.put = (url,body,onSuccess,onFail)=>{
    xhr({
    method:'PUT',
    url,
    body,
    onSuccess,
    onFail
    })
}

xhr.delete = (url,onSuccess,onFail)=>{
  xhr({
    method:'DELETE',
    url,
    onSuccess,
    onFail
  })
}






/* -------------------------------------------- */
/*                  xhr Promise                 */
/* -------------------------------------------- */


const defaultOptions = {
    method : 'GET',
    url : '',
    body : null,
    errorMessage:'서버와의 통신이 원활하지 않습니다.',
    headers:{
        'Content-Type':'application/json', //작성하지 않으면 이후 전달하는 내용은 텍스트로 인식하기때문에 내가 뭘 전달 할것인지 명시
        'Access-Control-Allow-Origin':'*'
    }
}



export function xhrPromise(options){

//mixin

// const config = {...defaultOptions, ...options}
// const {method,url, body} = config;
// 이 변수들을 아래처럼 구조분해 할당으로 간단하게!

const {method,url, body, errorMessage, headers} = { 
    ...defaultOptions, 
    ...options,  //하지만 이렇게만 작성하면 앝은 복사이기 때문에
    headers:{...defaultOptions.headers, ...options.headers}, //header의 객체까지 복사
};


    const xhr = new XMLHttpRequest();

    xhr.open(method,url);

    Object.entries(headers).forEach(([key,value])=>{
        xhr.setRequestHeader(key, value);
    })

    xhr.send(JSON.stringify(body));

    
    return new Promise((resolve, reject) => {
        xhr.addEventListener('readystatechange',()=>{

        if(xhr.readyState === 4){

            if(xhr.status >= 200 && xhr.status < 400){
                resolve(JSON.parse(xhr.response));

            }else{
            reject
            // error
            }
        }
        })
    })
    }



xhrPromise.get = (url) => {
    return xhrPromise({ url })
}

xhrPromise.post = (url, body) => {
    return xhrPromise({
        method: 'POST',
        url, 
        body
    })
}

xhrPromise.put = (url, body) => {
    return xhrPromise({
        method: 'PUT',
        url, 
        body
    })
}

xhrPromise.delete = (url, body) => {
    return xhrPromise({
        method: 'DELETE',
        url, 
        body
    })
}



// xhrPromise.get()
// xhrPromise.post()
// xhrPromise.put()
// xhrPromise.delete()


// xhrPromise.post(END_POINT,{name:'tiger'})
// .then(console.log)
// .catch(console.log)