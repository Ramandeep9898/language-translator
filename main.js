const translatesMinos = document.querySelector('#translate-minion');
const translatesYoda = document.querySelector('#translate-yoda');
const textAreaInp = document.querySelector('#textarea-input');
const textAreaOut = document.querySelector('#textarea-output');
function errHandler(err){
    alert('something went worng please try again later..')
}


function doFetch(url){
 fetch(url)
    .then(res=>res.json())
    .then(json=>{
        textAreaOut.innerText = json.contents.translated;
    })
    .catch(errHandler);
}

function url(text,lang){
    return `https://api.funtranslations.com/translate/${lang}.json?text=${text}`;
}

translatesMinos.addEventListener('click',()=>{
    const text = textAreaInp.value;
    doFetch(url(text,'minion'));
});
translatesYoda.addEventListener('click',()=>{
    const text = textAreaInp.value;
    doFetch(url(text,'yoda'));
})