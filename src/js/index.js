//-Passo 1, pegar o elemento que representa o botao na tela usando o js

const botaoTrailer = document.querySelector(".botao_trailer") 

//-Passo 2, pegar o elemento da modal no js
const video = document.getElementById("video")
const modal = document.querySelector(".modal")
const linkDoVideo = video.src

//-Passo 3 , identificar quando o usuario clicar no botao

botaoTrailer.addEventListener("click", () => {
    //-Passo 4, abrir a modal na tela.
    modal.classList.add("aberto")
    video.setAttribute("src", linkDoVideo)
})



//-Passo 1, pegar o elemento de fechar modal usando js

const botaoFecharModal = document.querySelector(".fechar__modal") 

//-Passo 2, identificar quando o usuario clicar no X 

botaoFecharModal.addEventListener("click", () => {
    //-Passo 3, fechar a modal
    modal.classList.remove("aberto")
    video.setAttribute("src", "")
})





