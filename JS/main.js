var nome = "Diego";
var idade = prompt("Digite sua idade:");
var frase = "Vou aprender linguagem de programação";
var lista = ["gremio","vasco","palmeiras"];
var dicionario = {nome:"Gremio", regiao:"sul"};
var lista_dicionario = [{nome:"Gremio", regiao:"sul"}, {nome:"Vasco", regiao:"sudeste"}, {nome:"Palmeiras", regiao:"sudeste"}];
var i = 0;
var data = new Date();

/* alert = pop-up que aparece como mensagem*/
alert("Meu primeiro JS "+nome+" Idade: "+idade);

/* cosole.log = aparece no "Inspesionar" do browser (ver o resultado n console do browser)*/
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

