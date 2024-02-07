const data = [
    {
    productName:'간장게장',
    price: 25_000,
    saleRadio:10,
    quantity:5,
    },
    {
    productName:'장어구이',
    price: 28_500,
    saleRadio:24,
    quantity:3,
    },
    {
    productName:'고추잡채',
    price: 17_500,
    saleRadio:13,
    quantity:0,
    },
    {
    productName:'안심 스테이크',
    price: 22_900,
    saleRadio:23,
    quantity:0,
    }
]


//⭐️⭐️⭐️⭐️⭐️   forEach, map, filter, reduce   ⭐️⭐️⭐️⭐️⭐️



const arr = ['가희', '지성','도희','우중','호영'];

function f(t,i){
    console.log(t,i);
}


//반복만 처리 / 값X => 그럼 왜써요? 배열 반복하려고 씀
const a = arr.forEach((item,index)=>{
    return item
})


//새로운 배열 값 o => 그럼 왜써요? 새로운 배열 데이터를 만들기 위해
const map = arr.map((t,i)=>{
    return 'hello-' + t
})


// 새로운 배열 값 o => 그럼 왜써요? 새로운 배열 데이터를 만들기 위해
const filter = arr.filter ((t,i) =>{
    return t === '호영' //console에는 true 1개, false 4개 ( 호영은 1개라서 true 1개)
})

// console.log(map);




// 데이터의 price 값을 모두 더하기
// 재할당을 받아야 하기 때문에 let 사용
let total = 0;
data.forEach((t,i)=>{
    total += t.price;
})

// console.log(total);




//map 을 사용하여 productName만 가지고 있는 배열 데이터 생성

const name = data.map((t,i)=>{
    return t.productName
})
// console.log(name);


// [간장게장, 장어구이, 고추잡채, 안심스테이크]
// 값 o => 다양한 자료형, 숫자, 문자, 객체, 배열
// 이건 계속 쌓이는 것이기 때문에 let이 아닌 const
const result = data.reduce((acc,cur)=>{ //cur은 배열의 첫번째 아이템을 제외한 나머지 요소 [장어구이, 고추잡채, 안심스테이크]
    //console.log(acc); //acc는 배열중 가정 첫번째 요소 [장어구이]
    acc.push(cur.productName)
    return acc
},[]) //초기값을 설정하면 이 초기값이 acc로 담긴다! '헤이' 라고 작성하면 '헤이'가 acc로 들어감!
// 그리고 초기값 설정을 하면 배열의 첫번째도 cur로 들어감! [간장게장, 장어구이, 고추잡채, 안심스테이크]
// console.log(result); //result는 값을 반환한다.



//map 을 사용하여 [[간장게장,25000원],[장어구이,28500원]
// let productNameAndPrice = data.map((t)=>{
//     return [t.productName, t.price]
// })

// console.log(productNameAndPrice);



//filter를 사용하여 수량이 남아있는 항목들만 배열로 나타내시오
const quantity = data.filter ((t) =>{
    return t.quantity !== 0;
})
// console.log(quantity);



//세일 가격이 적용된 price만 배열로
const sale = data.map((t)=>{
    // console.log(t.saleRadio);
    return `<li>할인된 가격: ${t.price - t.price * (t.saleRadio * 0.01)} 남은 수량 : ${t.quantity > 0 ? t.quantity : '재고없음'}</li>` //삼항식 t.quantity > 0 이게 true라면 ? t.quantity을 반환한다 : 아니라면 '재고없읍'
})

sale.forEach((t)=>{
    console.log(t);
    document.body.insertAdjacentHTML('beforeend',t)
})

function render(text){ // text 자리에 내가 작성하고 싶은 '문자'를 적으면
    document.body.insertAdjacentHTML('beforeend',text)//html 화면에 그려준다 (위치, 작성한 텍스트)
}
sale.forEach(render)


// document.body.insertAdjacentHTML('beforeend',sale)



console.clear()

const salaries = {
    호영:150,
    도희:250,
    경미:153,
    희선:175,
    선범:3000
}

//객체의 구조 분해 할당 ( 안써도 문제는 없지만 모든 개발자가 사용한다. 작업하기 위해선 필수적 )
//객체는 순서가 중요하지 않다. 순서가 중요한것은 배열!
//그래서 구조분해 할당을 할 때도 순서가 전혀 상관이 없다

const { 경미 : a1 , 도희 : b1, 희선 :c1, 호영: d1 , 선범 = 5000 } = salaries; // const 경미 = salaries.경미 => 이 코드와 같다

console.log( a1 , c1, b1,  d1, 선범 );
//구조분해 할당을 통해 선범에게 5000을 새로 부여 했어도 처음 명시된 3000이 console에 뜬다


// function createUser(obj){
//     const {name,age,nickName = 'duck'} = obj
//     '잘생긴' + name
//     age + 10
//     console.log(nickName.toUpperCase());
// }

function createUser({name,age,nickName = 'duck'}){ //이렇게 간단하게 작성 가능!
    '잘생긴' + name
    age + 10
    console.log(nickName.toUpperCase());
}

// createUser('이경민',30,150, '서울시', 30, 50); //너무 길다!
const 이경민 = ({
    name:'이경민',
    age:30,
    salaries:150,
    address:'서울시',
    lat:30,
    long:50
})
createUser(이경민);



const e = (t) => { t }
()=>{}
arr.forEach(e)




