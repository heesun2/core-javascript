//어디에 쓰는건가?

// const first = document.querySelector('.first');




// function handleClick(){

//     let isClicked = false;

//     return ()=>{

//         console.log('clicked');

//         if(!isClicked){
//             document.body.style.background = 'orange'
//         }else{
//             document.body.style.background = 'white'
//         }

//         isClicked = !isClicked

//         }

//     }

// first.addEventListener('click', handleClick())


function state(initValue){

    let value = initValue;

    function read(){
        return value;
    }

    function write(newValue){
        value = newValue;
    }

    return [read,write];

}
const [read,write] = state(111);