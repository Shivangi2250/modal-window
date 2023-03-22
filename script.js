'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');


// function to open modal
const openModal = function(){
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden'); 
}

// function to close modal
const closeModal = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// whenever click happens in any of the buttons then model is openend
for(let i=0;i<btnsShowModal.length;i++){
  btnsShowModal[i].addEventListener('click', openModal);
}



// close modal is we click on the cross btn
btnCloseModal.addEventListener('click', closeModal);
// close modal is we click on the overlay
overlay.addEventListener('click', closeModal);
 

// close the modal if escaped key is pressed
document.addEventListener('keydown', function(e){
  console.log(e);  //will print all the events as an object just after when any key is pressed
  // console.log(e.key);  // it will print which key was pressed

  if(e.key==='Escape' && !modal.classList.contains('hidden')){
      closeModal();
  }
});