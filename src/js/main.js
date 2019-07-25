const editedText = document.querySelector('.editor__text--js');

if(sessionStorage.getItem('sessionText')){
  editedText.value = sessionStorage.getItem('sessionText');
  console.log(editedText.value);
}else{
  console.log("dupa");
}

editedText.addEventListener('keyup', (e)=>{
  sessionStorage.setItem('sessionText', e.target.value);
})
