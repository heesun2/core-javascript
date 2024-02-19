
const END_POINT = 'https://jsonplaceholder.typicode.com/users'




const defaultOptions = {
    method: 'GET',
    body: null,
    headers:{
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*'
    }
}


export const tiger = async ( options )=>{

    const {url, ...restOption} = { //{url, ...restOption} url이 제거된 나머지 객체들만! 따라서 url과 나머지들을 분리해서 가져온다
        ...defaultOptions,
        ...options,
        headers:{
            ...defaultOptions.headers,
            ...options.headers
        }
    }


    const response = await fetch(END_POINT); // 아래respones는 fetch를 사용해야만 쓸 수 있다 Promise<Respones>

    //ok: status 200~399
    if(response.ok){//통신성공

        response.data = await response.json(); //respones가 가지고 있는 능력 json객체로 변경 가능
    }   

    return response
}

const result = await tiger({
    url: END_POINT
});

// console.log( result.data ); // 뭘 찾는건지 이해가 안됨. 객체를 반환하기때문에 뭐 찾을 수 없어서 await을 사용해서 뽑아내는데 모르겠음 왜?




tiger.get = (url,options)=>{
    return tiger({
        url,
        ...options
    })
}


tiger.post = (url,body,options)=>{
    return tiger({
        method:'POST',
        url,
        body:JSON.stringify(body),
        ...options
    })
}


tiger.put = (url,body,options)=>{
    return tiger({
        method:'PUT',
        url,
        body:JSON.stringify(body),
        ...options
    })
}


tiger.delete = (url,options)=>{
    return tiger({
        method:'DELETE',
        url,
        ...options
    })
}
