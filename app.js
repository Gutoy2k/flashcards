function criaCartao(categoria, pergunta, resposta){
let container = document.getElementById('container');
let cartao = document.createElement('article');
cartao.className- 'cartao';
cartao.innerHTML = `
 <div class="cartao_conteudo">
 <H3>${categoria}</H3>
 <div class="cartao_conteudo_pergunta">
 <p>${pergunta}</p>
 </div>
 </div>`
 
 container.appendChild(cartao);
}