import Modal from './modal.js'

const modal = Modal()

//Pegar todos os botões que existe com a classe check

const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button =>{
    // add a escuta para identificar se o botão foi clicado

    button.addEventListener("click", event => {
        // Abrindo a modal 
        modal.open()
    })
});


// Abrir a modal quando o botão excluir for clicado
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button =>{
    button.addEventListener("click", event =>{
        modal.open()
    })

});