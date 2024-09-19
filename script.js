const showModal = document.querySelector('.button')
const closeModal = document.querySelector('.span')
const modal = document.querySelector('.backround')
const modalInfo = document.querySelector('.p')

closeModal.addEventListener('click',function(){
    modal.style.display = 'none'
})

showModal.addEventListener('click',function(){
    modal.style.display = 'flex'
})