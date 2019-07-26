const editedText = document.querySelector('.editor__text--js');
const saveButton = document.querySelector('.button__save--js');
const loadButton = document.querySelector('.button__load--js');
const deleteButton = document.querySelector('.button__delete--js');

//  odzyskiwanie po refreshu pisanego tekstu
if(sessionStorage.getItem('sessionText')){
  editedText.value = sessionStorage.getItem('sessionText');
}

//  zapamiętywanie pisanego tekstu w sessionStorage
editedText.addEventListener('keyup', (e)=>{
  sessionStorage.setItem('sessionText', e.target.value);
})

//  zapamiętywanie napisanego tekstu w localStorage
saveButton.addEventListener('click', (e)=>{
  localStorage.setItem('savedText', editedText.value);
})
//  wczytanie zapamiętanego tekstu z localStorage
loadButton.addEventListener('click', (e)=>{
  if(localStorage.getItem('savedText')){
    editedText.value = localStorage.getItem('savedText');
  }
})

//  usunięcie zapamiętanego tekstu w localStorege i sessionStorage, 
//  oraz wyczyszczenie okna textarea
deleteButton.addEventListener('click', (e)=>{
  sessionStorage.removeItem('sessionText');
  localStorage.removeItem('savedText');
  editedText.value = null;
})