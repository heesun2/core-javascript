/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */


// const portableFan = {
//     maker: 'fromB',
//     brand: 'FD221',
//     type: 'neckband',
//     photo: {
//       static: 'https://bit.ly/3OS50UD',
//       animate: 'https://bit.ly/3P8646q'
//     },
//     getFullName() {
//       return `${this.brand}, ${this.maker}`;
//     },
//   };
  
  // 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
//   console.log(portableFan.photos.animate);
  
  // 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//     if ('animate' in portableFan.photos) {
//         console.log(portableFan.photos.animate);
//     }
// }


  // 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.

// portableFan && portableFan.photos && portableFan.photos.animate


  // 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.

// portableFan.photos?.animate


  // 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.

// const gerFullName = portableFan.gerFullName();

// console.log(gerFullName);

  // 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.





//web API
//sync (동기) & async(비동기)

// const timer = setTimeout(()=>{
//     console.log(2);
// },3000) //비동기 따로 빼서 제어 하고 싶을 상황에서 사용한다

// clearTimeout(timer)

// //동기
// console.log(1);
// console.log(3);


// let count = 0;

// const timer = setInterval(()=>{
//     console.log(++count);
// },10);

const button = document.querySelector('.click');

setTimeout(()=>{

    const template = `
        <button type="button" class="class">"click"</button>
        `
    document.body.insertAdjacentHTML('beforeend',template)
    },3000)


    button?.




