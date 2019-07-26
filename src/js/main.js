const deleteButton = document.querySelector('.button__delete--js');
const editedText = document.querySelector('.editor__text--js');
const loadButton = document.querySelector('.button__load--js');
const saveButton = document.querySelector('.button__save--js');


//  odzyskiwanie po refreshu pisanego tekstu
if(sessionStorage.getItem('sessionText')){
  editedText.value = sessionStorage.getItem('sessionText');
  console.log("po refresh został przywrócony pisany tekst: " + editedText.value);
}

//  zapamiętywanie pisanego tekstu w sessionStorage
editedText.addEventListener('keyup', (e)=>{
  sessionStorage.setItem('sessionText', e.target.value);
  console.log("sessionStorage zapamiętał: " + sessionStorage.getItem('sessionText'));
})

//  zapamiętywanie napisanego tekstu w localStorage
saveButton.addEventListener('click', (e)=>{
  localStorage.setItem('savedText', editedText.value);
  console.log("localStorage zapamiętał: " + localStorage.getItem('savedText'));
})
//  wczytanie zapamiętanego tekstu z localStorage
loadButton.addEventListener('click', (e)=>{
  if(localStorage.getItem('savedText')){
    editedText.value = localStorage.getItem('savedText');
    console.log("z localStorage wczytano: " + editedText.value);
  }
})

//  usunięcie zapamiętanego tekstu w localStorege i sessionStorage, 
//  oraz wyczyszczenie okna textarea
deleteButton.addEventListener('click', (e)=>{
  sessionStorage.removeItem('sessionText');
  localStorage.removeItem('savedText');
  editedText.value = null;
  console.log("usunięte zostały zapisy sessionStorage i localStorage, oraz wyczyszczono obszar edycji tekstu")
})

//buttony świecenie podczas wciśnięcia
saveButton.addEventListener('mousedown', (e)=>{
    saveButton.classList.add('button__save--pushed-js');
})
saveButton.addEventListener('mouseup', (e)=>{
  saveButton.classList.remove('button__save--pushed-js');
})
saveButton.addEventListener('mouseout', (e)=>{
  if(saveButton.classList.contains('button__save--pushed-js')){
    saveButton.classList.remove('button__save--pushed-js');
  }
})

loadButton.addEventListener('mousedown', (e)=>{
  loadButton.classList.add('button__load--pushed-js');
})
loadButton.addEventListener('mouseup', (e)=>{
  loadButton.classList.remove('button__load--pushed-js');
})
loadButton.addEventListener('mouseout', (e)=>{
if(loadButton.classList.contains('button__load--pushed-js')){
  loadButton.classList.remove('button__load--pushed-js');
}
})

deleteButton.addEventListener('mousedown', (e)=>{
  deleteButton.classList.add('button__delete--pushed-js');
})
deleteButton.addEventListener('mouseup', (e)=>{
  deleteButton.classList.remove('button__delete--pushed-js');
})
deleteButton.addEventListener('mouseout', (e)=>{
if(deleteButton.classList.contains('button__delete--pushed-js')){
  deleteButton.classList.remove('button__delete--pushed-js');
}
})



//Kod do pojawiającego się i znikającego menu, hamburger menu.
/*const navigationSwitcher = document.querySelector(".navigation__switcher--js");

navigationSwitcher.addEventListener('click', (e)=>{
  const navigationList = document.querySelector(".navigation__list--js");
  navigationList.classList.toggle('navigation__list--visible');
  if(navigationList.classList.contains('navigation__list--visible')){
    navigationSwitcher.innerHTML = 'X';
  }else{
    navigationSwitcher.innerHTML = '&#x2261';
  }
})*/

