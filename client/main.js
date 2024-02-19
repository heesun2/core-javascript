import { 
  setStorage,
  getStorage,
  deleteStorage,
  getNode,
  clearContents
} from './lib/index.js '

//1. textField의 값을 로컬스토리지에 저장 해 주세요
// input, addEvent... eventType:input


const textField = getNode('#textField');
const clear = getNode('[data-name="clear"]')

const handleTextField = (e) => {
  const value = e.currentTarget.value;
  setStorage('text', value);
}


const handleClear = () => deleteStorage('text').then(clearContents(textField))
  

textField.addEventListener('input',handleTextField);
clear.addEventListener('click',handleClear);



function init(){
  getStorage('text').then((res)=>{
    textField.value = res;
  })
}


window.addEventListener('DOMContentLoaded', init);


( async ()=>{
  const data = await getStorage('text')
  textField.value = data;
})()

