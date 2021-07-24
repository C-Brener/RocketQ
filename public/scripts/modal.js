export default function Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper')

    const cancelButton = document.querySelector(".button.cancel") //Colocando o botão de cancelar para funcionar

    cancelButton.addEventListener("click", close) //Ouvindo o cancel button para quandotal button for selecionado executar o comando close

    function open(){
        // está função servirar para atribuir a classe "active" no modal para termos a manioulação de excluir ou não o objeto pergunta
        modalWrapper.classList.add("active")
    }
    function close(){
        // está função removera a classe "active"
        modalWrapper.classList.remove("active")
    }

    return{
        open,
        close
    }
}