// elements
let elForm = document.querySelector('.forma');
let elList = document.querySelector('.form__list');

// btns

let elSumbit = document.querySelector('#sumbit');
let elAll = document.querySelector('#all');
let elCom = document.querySelector('#com');
let elIncom = document.querySelector('#incom');


elForm.addEventListener('submit', itemadd);
elList.addEventListener('click',elcoms);
elList.addEventListener('click',colors);
elIncom.addEventListener('click',incom);

function itemadd(e) {
  e.preventDefault();
  let elInput = document.querySelector('.input').value;
  let li = document.createElement('li');

  // text span
  if (document.querySelector('.input').value != "") {
    let textspan = document.createElement('span');
    textspan.className = "span";
    textspan.appendChild(document.createTextNode(elInput));

    let iconspan = document.createElement('span');
    iconspan.className = "xs";
    iconspan.appendChild(document.createTextNode('x'));

    // icon span
    li.className = 'form__item';
    li.appendChild(textspan);
    li.appendChild(iconspan);

    elList.appendChild(li);
    elInput = document.querySelector('.input').value = "";
    
  }
}
function elcoms(e){
  if(e.target.classList.contains('xs')){
    let li = e.target.parentElement;
    elList.removeChild(li);
  }
  
}
let obj = [];
function colors(e){
  if(e.target.classList.contains('form__item')){
    let li = e.target;
    li.addEventListener("click", toggle);
    function toggle(el) {
      obj[obj.length] = el.target;
      this.classList.toggle("xs2");
      
    }
  }
}
elCom.addEventListener('click',coms);
function coms(e){
  let item = obj;
  for(let i = 0; i < item.length; i++){
    if(item[i].classList[1] == ['xs2']){
      item[i].classList.remove('new');
      item[i].style.display = "none";
      console.log(item[i].classList);
    }
  }
}
// elIncom.addEventListener('click',incom);
// function incom(e){
//   let item = obj;
//   for(let i = 0; i < item.length; i++){

//     if(item[i].classList.length == 3){
//       item[i].style.display = "flex";
//     }else{
//       item[i].style.display = "none";
//     }
//   }
// }
elAll.addEventListener('click',elalls);
function elalls(e){
  let item = obj;
  for(let i = 0; i < item.length; i++){
    item[i].style.display = "flex";
    
  }
}