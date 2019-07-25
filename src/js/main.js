const editedText = document.querySelector('.editor__text--js');
editedText.addEventListener('keyup', (e)=>{
  sessionStorage.setItem('sessionText', e.target.value);
})



