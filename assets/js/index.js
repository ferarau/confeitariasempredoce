// Criar listas de imagens
let imagens = [
    'assets/img/bolo-capa1.jpg',
    'assets/img/bolo-capa2.jpg',
    'assets/img/bolos-capa3.png',

]  

let indiceAtualListaImagens = 0

function exibirImagem() {
    let imagemCarrosel = document
        .getElementById('img-carrosel')
    imagemCarrosel.src = imagens[indiceAtualListaImagens]
}
// Lógica para exibir as imagens em cinco segundos
setInterval(function() {
    exibirImagem()
    indiceAtualListaImagens++
// Verifica se chegou ao fim das imagens
// Ai volta pro começo
if (indiceAtualListaImagens > 2) {
    indiceAtualListaImagens = 0
}
}, 5000);

exibirImagem()
 indiceAtualListaImagens++