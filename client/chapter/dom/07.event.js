/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

const first = getNode('.first');

// 1. HTML 속성 : onclick="handler()"

// 2. DOM 프로퍼티 : element.onclick = handler

function handler(){
  console.log('클릭 이벤트 발생!!');
}

// first.onclick = handler


// 3. 메서드 : element.addEventListener(event, handler[, phase])




// const remove = bindEvent('.first','click',handler);



// first.addEventListener('click',handler);

// getNode('.deleteEvent').addEventListener('click',remove)




/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener





const ground = getNode('.ground');
const ball = getNode('#ball');





function handleBall({offsetX:x, offsetY:y}){

//   const {offsetX:x, offsetY:y} = e;

  // const x = e.offsetX;
  // const y = e.offsetY;

  console.log(x, y);
  ball.style.transform = `translate(${ x - (ball.offsetWidth / 2)}px, ${ y - (ball.offsetHeight / 2)}px)`


}


ground.addEventListener('click',handleBall)




function handle(e){
    console.log(this,e);
  }
  
  // callback, closure, IIFE, call, apply
  
  function throttle(callback,limit = 100){
  
    let waiting = false;
  
    return function(e){
  
      if(!waiting){
  
        callback.call(this,e);
        waiting = true;
    
        setTimeout(() => {
          waiting = false;
        }, limit);
      }
    }
  }
  
  
  
  ground.addEventListener('mousemove',throttle((handle),1000))