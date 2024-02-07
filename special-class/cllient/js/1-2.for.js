//for, while, do..while



//while

// let i = 0;
// while(i < 10){
//     console.log(++i)
//}
    // i++; 후증가 -> 0부터 9까지
    // ++i; 선증가 -> 1부터 10까지





//for

// for(let i = 0; 0<10; i +=1){
//     console.log(i);
// } // let 이 아니라 var를 사용하면 for문 외부에서도 호출이 되기 때문에 let 사용

// let i = 0;
// for(; 0<10; i +=1){
//     console.log(i);
// } //이렇게 let 을 밖으로 따로 빼서 만들 수 있다








//in문 객체 안에 해당 키가 있는지?

const data = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
    }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
    }
}

//data 객체 안에 website라는 키가 있어? -> if...

// const log = (data) => console.log(data);
// log('website' in data);
//log라는 함수를 만들어서 console에 바로 찍을 수 있다


// console.log('valueOf' in data);//key in value
//자신에게 없는 프로퍼티여도 부모까지 올라가서 찾은 후 true를 내뱉는다
//그래서 자신 객체에서만 찾을 수 있는 hasOwnproperty를 사용


//자신의 property를 가지고 있는지 확인 하는 방법
//하지만 데이터는 훼손되거나 수정 될 여지가 있기때문에 hasOwnproperty만 사용하는 것은 비추천한다. 
// console.log( data.hawOwnproperty('toString'));

// console.log( Object.prototype.hasOwnProperty.call(data,'toString'));
//call 하여 빌려쓴다.
// 누가(data) 어떤 능력을(hasOwnproperty) 누구에게(Object) 빌려쓴다(call)
//내가(data) 객체이긴 하지만 진짜 나를 만들어준 조상을(Object) 찾아가서 조상의 프로퍼티를 빌려쓴다(call)
//하지만 data.hasOwnporoperty('tostring')과 같다!








//for..in => 객체한테 쓸 수 있다 객체순환 for in
// 왜 써야 하는가? 모든 객체의 key값 | value값을 조회하기 위해

// key in data지만 앞에 오는 값은 변수로 넣어야 한다.
//이유는 찾아야 하는 객체를 
for( const key in data ){
    const L1 = data[key];
    if(typeof L1 === 'object'){
        for(const key in L1){
        console.log(L1[key])
        }
    }
    console.log(L1)
}

    // console.log(data[key]);
    //data.key는 undefined가 뜬다. 변수로 받았기 때문에 대괄호로
    //이러면 value값을 볼 수 있다.









//배열은 for...in을 사용하지 못할까? => 할 수 있지만 안하는게 좋다 공식문서에서 하지 말라함  for..in으로 조회 했을 때 순서를 보장 해 주지 않습니다 라고 함
//for...of => 반복 가능한 요소들 배열순환 for of
//열어봤을때 symboll에 이터러블이 있으면 실행 가능하다





//3개의 객체를 담고있는 배열이다
const arr = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
    }
    },
    {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
        }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
    }
    }
]
for (const value of arr){
    console.log(value.website);
}
//특정 value를 찾아서 wevsite를 찾아 출력해라 라는 명령



//for..in, for...of 몇번반복? 길이만큼

const smallArray = ['a','b', 'c', 'd'];

for (const value of smallArray){
    console.log(value);
}
// for(let value of ...) 라고 하면 값을 변경할 수 있다. let = 10이라고 재할당 하면 console에 재할당 된 값이 출력된다


//객체를 for...of를 사용하려면 ..iterable => 객체를 배열로 변경해준다
const user = {
    name:'tiger',
    age: 40,
    adress: '서울시 중랑구 면목동'
}

const keys = Object.keys(user); //객체의 키를 모아서 새로운 배열로 반환해준다

for ( const key of keys ){
    console.log(key);
}

//const keys = Object.keys(user); 반환하는 값이 이미 배열이라면?
//이렇게 for문으로만 사용 할 수 있다
for ( const key of Object.keys(user)){
    // console.log(key);
}


//const keys = Object.keys(user); -> 객체의 key를 모아서 새로운 배열로 반환
const values = Object.values(user) //객체의 값들을 모아서 새로운 배열로 반환
const entries = Object.entries(user); //entries는 key와 value를 모은 하나의 쌍 배열[key, value] 을 묶은 [[key, value],[key, value],[key, value]]새로운 배열로 반환
// console.log(entries);

for(const value of values ){
    // console.log(value);
}

for(const keyvalue of entries ){ //const 변수 뒤에 오는 단어는 내가 인식하기 쉬운걸로 작성하기. value 값을 찾는데 변수명이 key면 헷갈리니 주의~
//    let key = keyvalue[0]; //entries [key,value]의 0번째는 key
    // let value = keyvalue[1]; //entries [key,value]의 1번째는 value

    // console.log(key, value);
}
//객체는 for..in? for...of? for of 가 더 편하다!






//실습

const saleris = {
    심호영 : 150,
    곽도희 : 250,
    김경미 : 153,
    전희선 : 175
}

//객체를 for...of를 사용하여 모든 월급의 합을 구하시오

// let total = 0;

// for ( const value of Object.values(saleris) ){
//     total += value; // total = total + value;
// }

// console.log(total);




//entries
// let total = 0;

// for ( const keyvalue of Object.entries(saleris) ){
//     const value = keyvalue[1];
//     total += value; // total = total + value;
// }

// console.log(total);


// let total = 0;

// for(const key in saleris){
//    if( Object.prototype.hasOwnProperty.call(saleris,key)){

//     total += saleris[key];
    
//    }
// }

// console.log(total);



//forEach, reduce, map, filter, find, findIndex...  덧셈을 하려면 forEach나 reduce가 많이 쓰인다

// const values = Object.values(saleris);
// values.forEach() 아래와 같다

// Object.values(saleris).forEach()


const value = Object.values(saleris);

let total = 0;

value.forEach((a,b,c)=>{ //a value(number), b index(number), c array(number)
    console.log( `${ b + 1 }번째 : ${a}` );

    total += a
})
console.log(total);



//문과 식의 차이점
//문 : 값 반환x
//식 : 무조건 값 반환
// if 문, for문., while문, do while문, for in문, for of문
// 논리연산식, 삼항식 등 반환