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
    var res = document.getElementById('resultado')
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

/*
function teste(){
    var num = Number(prompt("Digite o numero"))
    var res = document.querySelector('section#res')

    res.innerHTML = `<p>O numero a ser analisado é ${num}</p><hr>`
    res.innerHTML += `<p>O seu valor absoluto é ${Math.abs(num)}</p>`
    res.innerHTML += `<p>A sua parte inteira é ${Math.trunc(num)}</p>`
    res.innerHTML += `<p>O valor inteiro mais proximo é ${Math.round(num)}</p>`
    res.innerHTML += `<p>A sua raiz quadrada é ${Math.sqrt(num)}</p>`
    res.innerHTML += `<p>A sua raiz cubica é ${Math.cbrt(num)}</p>`
    res.innerHTML += `<p>O valor de ${num}<sup>2</sup> é ${Math.pow(num, 2)}</p>`
    res.innerHTML += `<p>O valor de ${num}<sup>3</sup> é ${Math.pow(num, 3)}</p>`
}*/

/*
var contador = 0
var res = document.querySelector('section#result')

function contar(){
    contador ++
    result.innerHTML = `<p>O contador esta em <mark>${contador}</mark> cliques</p>`
}

function zerar(){
    contador = 0
    result.innerHTML = null
}*/

/*Varios botões
function b1(){
    res.innerHTML += `<p>Você clicou no botão 1<p>`
}

function b2(){
    res.innerHTML += `<p>Você clicou no botão 2<p>`
}

function b3(){
    res.innerHTML += `<p>Você clicou no botão 3<p>`
}

function b4(){
    res.innerHTML += `<p>Você clicou no botão 4<p>`
}*/

/*Calculando media 2.0
function calcular(){
    var nome = prompt('Digite seu nome')
    var n1 = Number(prompt('Digite a primeira nota'))
    var n2 = Number(prompt('Digite a segunda nota'))
    media = (n1 + n2) / 2
    
    if(media >= 6){
        msg = 'Aprovado!'
    } else {
        msg = 'Reprovado!'
    }

    var res = document.querySelector('section#saida')
    res.innerHTML = `<br>Calculando a media final de <mark>${nome}</mark>.<br><br>`
    res.innerHTML += `As notas obtidas foram <mark>${n1}</mark> e <mark>${n2}</mark>.<br><br>`
    res.innerHTML += `A media final sera <mark>${media}</mark>.<br><br>`
    res.innerHTML += `A mensagem que temos é <mark>${msg}</mark>`
}*/

/*Impar ou par

function teste(numero){
    numero = Number(prompt('Digite um numero'))

    if(numero % 2 == 0){
        msg = 'PAR'
    }   else {
        msg = 'IMPAR'
    }

    var res = document.querySelector('section#res')
    res.innerHTML = `<p>O numero ${numero} que foi digitado é ${msg}</p>`
}*/

/*Comparando valores
function teste(n1, n2){
    n1 = Number(prompt('Digite um numer'))
    n2 = Number(prompt('Digite outro numero'))

    if (n1 > n2){
        msg = `Analisando os valores entre <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <mark>${n1}</mark>`
    } else {
        msg = `Analisando os valores entre <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <mark>${n2}</mark>`
    }

    var res = document.querySelector('section#res')
    res.innerHTML = `${msg}` 
}*/

/*Data atual
function teste(){
    var data = new Date

    var res = document.querySelector('section#res')
    res.innerHTML = `<p>O que eu recebi do sistema foi ${data}</p>`
}*/


/*Calculando idade
function teste(ano, nascimento, idade){
    var data_atual = new Date()
    ano = data_atual.getFullYear()
    nascimento = Number(prompt('Digite o ano de nascimento'))
    idade = ano - nascimento 

    var res = document.querySelector('section#res')
    res.innerHTML = `Quem nasceu em ${nascimento} ira completar <b>${idade}</b> em ${ano}`
}*/

/*Numero aleatorio
    
    function aleatorio(min, max, num){
    min = Math.ceil(1)
    max = Math.floor(100)
    num = Math.floor(Math.random() * (max - min) + min)

    var res = document.querySelector('section#res')
    res.innerHTML += `<p>Acabei de pensar no numero <mark>${num}</mark><p>`
}

function limpar(limpar){
    var res = document.querySelector('section#res')
    res.innerHTML = null
}*/

/*
 var a = prompt('')

 var b = prompt('')

 console.log(`${a} ${b}`)

 a = a * b

 b = a / b

 a = a / b

 console.log(`${a} ${b}`)*/