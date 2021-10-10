/*
var nome = "Diego";
var idade = prompt("Digite sua idade:");
var frase = "Vou aprender linguagem de programação";
var lista = ["gremio","vasco","palmeiras"];
var dicionario = {nome:"Gremio", regiao:"sul"};
var lista_dicionario = [{nome:"Gremio", regiao:"sul"}, {nome:"Vasco", regiao:"sudeste"}, {nome:"Palmeiras", regiao:"sudeste"}];
var i = 0;
var data = new Date();

// alert = pop-up que aparece como mensagem
alert("Meu primeiro JS "+nome+" Idade: "+idade);

// cosole.log = aparece no "Inspesionar" do browser (ver o resultado n console do browser)*
console.log(nome);
console.log(idade);
console.log(frase.replace("linguagem", "linguagens"));
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" | "));
console.log(dicionario.nome +" é um time do "+dicionario.regiao);
console.log(lista_dicionario[2].nome +" é um time do "+lista_dicionario[2].regiao);

if (idade >= 18){
    alert("Maior de Idade");
}
else{
    alert("Menor de Idade");
}

while (i < 5){
    console.log("while "+i); 
    i++;
}


for (i=0; i<=5; i++){
    console.log("For "+i);
}

alert(data);
alert(data.getDate());

function soma(n1, n2){
    return n1+n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(setReplace("O Japão é "+soma(5,5)+"!","Japão","Brasil"));
*/
function ClicouBotao(){  // dcumento = variavel criada para alocar o elemento... this = o elemento q esta chamando a funcao  
    //alert("Clicou no botão!");
    document.getElementById("ResultadoBotao").innerHTML = "Você clicou!";  //document.getElementById = Pega o id do documento .. innerHTML = insere um html no documento
}
    
function ClicouParagrafo(documento){
    documento.innerHTML="Obrigado por clicar!"; // documento(variavel) = é o elemento ou seja  document.getElementById("Clique")
}

function MudaCor(documento){
    //alert("a");
    //document.getElementById("MudandoCor").style.color = "#FF0000";
    documento.style.color = "#DD1122";
}

function VoltaCor(documento){
    //alert("a");
    //document.getElementById("MudandoCor").style.color = "#000000";
    documento.style.color = "#000000";
}

function RedirecionaNovaAba(documento){
    window.open("https://www.google.com/"); //Abre em nova aba
    window.location.href = "https://www.google.com/"; //muda a href ou seja abre na mesma aba
}

function Load(){
    alert("Passou pelo load!");

}

function FuncaoChange(documento){
    alert("Valor escolhido: "+documento.value);
}