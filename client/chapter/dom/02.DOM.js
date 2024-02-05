// /* --------------------------------- */
// /* DOM traversal                     */
// /* --------------------------------- */

// /* 모든 노드에서 사용 */
// // - parentNode
// // - childNodes
// // - firstChild
// // - lastChild
// // - previousSibling
// // - nextSibling

// /* 요소 노드에서만 사용 가능 */
// // - parentElement
// // - children
// // - firstElementChild
// // - lastElementChild
// // - previousElementSibling
// // - nextElementSibling

// /* 문서 대상 찾기 */
// // - getElementById
// // - getElementsByTagName
// // - getElementsByClassName
// // - querySelector
// // - querySelectorAll
// // - closest


// // const h2 = document.querySelector('h2');
// // const first = h2.querySelector('.first');
// //h2에서 쿼리셀렉터를 통해 first를 찾는다!

// //어디 안에서 뭘 찾겠다는 범위 설정이 가능하다


// function getNode(node, context = document){ // 재사용이 가능한 node

//     if(typeof node !== 'string'){
//         throw new Error('getNode 함수의 인수는 문자 타입이어야 합니다.')
//     }

//     if(context.nodeType !== document.DOCUMENT_NODE){
//         context = document.querySelector(context);
//     }

//     return context.querySelector(node);
// }

// getNode('.first','h2')
// //'.first' 안에 있는 'h2'를 찾겠다


// function getNodes(node){
//     if(typeof node !== 'string'){
//     throw new Error('getNodes 함수의 인수는 문자 타입 이어야 합니다.');
//     }
//     return document.querySelectorAll(node)
// }

const first = getNode('.first');
const spanList = getNode('.span');



// console.log(first); // null이 뜨는 이유는 dom에 null이 뜨면 없다는 의미
// console.log(spanList);

// /* 문서 대상 확인 */
// // - matches
// // - contains

// target에 selector가 있어? 라고 물어보는 것
// target은 first, selector는 span
// 맞으면 true, 틀리면 false가 나온다
console.log(first.matches('span') );


//h1 태그 안에 .second라는 자식이 있어?
console.log(getNode('h1').contains(getNode('.second')));
