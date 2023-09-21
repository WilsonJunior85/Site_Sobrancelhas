



var menu1 = document.querySelector(".menu1");     /* criando uma variavel e buscando o menu1 */

/* Adicionar o evento addEventListener que vai ficar escutando o evento de click */
menu1.addEventListener("click", function() {
/* Criando uma variável com elemento sidebar, apartir da lista de classe add ou remover uma classe chamada show-menu */
var sidebar = document.querySelector(".container").classList.toggle("show-menu");

});


/*------------------------------------- Função do formulário e-mail --------------------------------------*/

function Enviar(){
    let nome1 = document.querySelector('#nome').Value;
    let email1  = document.querySelector('#email').Value;
    let mensagem1 = document.querySelector('#mensagem').Value;
    let res = document.querySelector('#res').Value;
    
     
    if( nome1 == "" || email1 == "" || mensagem1 == "" ) {
    alert ("Favor preencha todos os campos");
    
    }else {

        document.querySelector('#res').innerHTML = ` Olá ${res} Funcionou!`;

    } 
    return 0;
}

/* _____________________________________Redirecionamento de páginas_____________________________________________*/

function saibamais(){

location.href="saibamais.html"

}

function videos(){
    location.href="video.html"

}

function contato (){
location.href="contato.html"

}

function fotos(){
location.href="Fotos.html"

}





/* ____________________________________________________Script dos videos___________________________________________*/













/*________________________________________Formulário___________________________________________________________________

document.querySelector("#qtde").addEventListener("change", atualizarPreco);
document.querySelector("#js").addEventListener("change", atualizarPreco);
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco);
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco);
document.querySelector("#prazo").addEventListener("change", function (){
const prazo = document.querySelector("#prazo").value;   
document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`;
atualizarPreco()
});
function atualizarPreco(){
 
 let quantidade = document.querySelector("#qtde").value;
 const TemOrcamento = document.querySelector("#js").checked;
 let preco = document.querySelector("#preco").value;
 const incluiLayout = document.querySelector("#layout-sim").checked;
 const incluiLayout2 = document.querySelector("#layout-nao").checked;
 const prazo = document.querySelector("#prazo").value;
 preco = quantidade * 100;
 if(TemOrcamento){
preco = preco + (preco * 10/100);

 }
 if (incluiLayout || incluiLayout2){
     preco = preco + 100
 }
 document.querySelector("#preco").innerHTML = `${preco.toFixed(2)}`;


}

*/






    