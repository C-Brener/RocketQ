import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')



//Pegar todos os botões que existe com a classe check

const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button =>{
    // add a escuta para identificar se o botão foi clicado

    button.addEventListener("click", handleClick)
});


// Abrir a modal quando o botão excluir for clicado
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button =>{
    button.addEventListener("click", (event) => handleClick(event, false)) //Caso a variavel check seja alterada de true para false executara o codigo padraõa do html

    
});

function handleClick(event, check = true){
    event.preventDefault()

    const slug = check ? "check" : "delete" // verificação do action
    const roomId = document.querySelector("#room-id").dataset.id // verificação da sala
    const questionId = event.target.dataset.id //Pegando o id pelo event, pois por termos usado o event ele pega todas as informações do evento selecionado incluido o datta id que definimos manualmente.
    


    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}`) // passando a constante slug para identificar se a action do modal é check ou delete

    // a interrogação server para verificar qual o valor booleano que a variavel retornará sabendo que o balor padrão é true
    modalTitle.innerHTML = check ? "Marcar como Lido" : "Excluir essa pergunta"
    modalDescription.innerHTML = check ? "Deseja mesmo marcar essa questão como lida?" : "Deseja excluir essa pergunta?"
    modalButton.innerHTML = check ? "Sim, marcar como lida." : "Sim, excluir."
    check? modalButton.classList.remove("red") : modalButton.classList.add("red")

    
    // abrindo a modal 
    modal.open()
}