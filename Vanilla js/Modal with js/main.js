// Get the modal element
var modal = document.getElementById('simpleModal');
//get open modal element
var modalBtn = document.getElementById('modalBtn');
//get close button 
var closeBtn = document.getElementsByClassName('closeBtn');

//Listen for open click
modalBtn.addEventListener('click', openModal);

//Listen for close click
closeBtn.addEventListener('click', closeModal);

//listen for outside click
window.addEventListener('click', outsideClick )




//function to openModal 
function openModal(){
   modal.style.display = 'block';
}

//function to close Modal 
function closeModal(){
    modal.style.display = 'none';
 }

 //function to close Modal if outside click
function outsideClick(e){
    if(e.target == modal){
    modal.style.display = 'none';
 }
}