/*apertar um botão 
function teste(){
    alert("Você clicou!")
}*/

/*prompt + alert
function teste(){
    var nome = prompt("Digite seu nome")
    alert(`Ola, ${nome}!Seja bem vindo`)
}*/

/*mostrar na tela
function teste(){
    var nome = prompt('Digite seu nome')
    var res =document.getElementById('resultado')
    res.innerHTML = `<p>Ola, ${nome}! Seja bem vindo :)`
}*/

/*trabalhando com numeros

alert("Seja bem vindo ao meu site!")
function teste(){
    var num = prompt("Digite um numero.")
    var res = document.querySelector('section#res')
    res.innerHTML = `<p>O dobro de ${num} é ${num*2} e a metade é ${num/2}`
}*/

/*Somando dois numeros
function teste(){
    var n1 = Number(prompt('Digite um numero'))
    var n2 = Number(prompt('Digite outro numero'))
    soma = n1 + n2
    res = document.querySelector('section#res')
    res.innerHTML = `<p>A soma entre ${n1} e ${n2} é igual a ${soma}`
}*/

/*calculando media
function teste(){
    var nome = prompt('Digite o nome do aluno')
    var n1 = Number(prompt('Qual foi a primeira nota do aluno?'))
    var n2 = Number(prompt('Qual foi a segunda nota do aluno'))
    media = (n1 + n2)/2

    var res = document.getElementById('situacao')
    res.innerHTML = `<p>Calculando a media final de ${nome}`
    res.innerHTML += `<p>As notas obtidas fora ${n1} e ${n2}`
    res.innerHTML += `<p>A media final sera de ${media}`
}*/