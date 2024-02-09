const perguntas = [
    {
        pergunta: 'Qual é o ano de fundação da Sociedade Esportiva Palmeiras?',
        respostas: [
            '1914',
            '1920',
            '1930'
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é o estádio principal utilizado pela Sociedade Esportiva Palmeiras em seus jogos como mandante?',
        respostas: [
            'Allianz Parque',
            'Maracanã',
            'Mineirão'
        ],
        correta: 0
    },
    {
        pergunta: 'Quem é considerado o maior artilheiro da história da Sociedade Esportiva Palmeiras?',
        respostas: [
            'Ademir da Guia',
            'Evair',
            'César Maluco'
        ],
        correta: 2
    },
    {
        pergunta: 'Quantas vezes a Sociedade Esportiva Palmeiras conquistou a Copa Libertadores da América até o momento?',
        respostas: [
            '1 vez',
            '2 vezes',
            '3 vezes'
        ],
        correta: 1
    },
    {
        pergunta: 'Qual técnico liderou a Sociedade Esportiva Palmeiras na conquista da Copa Libertadores da América em 1999?',
        respostas: [
            'Felipão',
            'Luxemburgo',
            'Cuca'
        ],
        correta: 0
    },
    {
        pergunta: 'Quem é o presidente atual da Sociedade Esportiva Palmeiras?',
        respostas: [
            'Maurício Galiotte',
            'Paulo Nobre',
            'Luiz Gonzaga Belluzzo'
        ],
        correta: 0
    },
    {
        pergunta: 'Qual jogador foi eleito o melhor do mundo atuando pela Sociedade Esportiva Palmeiras?',
        respostas: [
            'Rivaldo',
            'Edmundo',
            'Marcos'
        ],
        correta: 2
    },
    {
        pergunta: 'Quantas vezes a Sociedade Esportiva Palmeiras venceu o Campeonato Brasileiro de Futebol?',
        respostas: [
            '8 vezes',
            '10 vezes',
            '12 vezes'
        ],
        correta: 2
    },
    {
        pergunta: 'Qual foi a última conquista internacional da Sociedade Esportiva Palmeiras?',
        respostas: [
            'Copa Mercosul',
            'Copa do Brasil',
            'Copa Sul-Americana'
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é o maior rival da Sociedade Esportiva Palmeiras no futebol?',
        respostas: [
            'Santos',
            'São Paulo',
            'Corinthians'
        ],
        correta: 2
    }
];


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
// estamos buscando o conteúdo na nossa tag template atraves do seu seletor. 

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas

for (let item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta



    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt ').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
             corretas.add(item)

            }
            mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas

        }

        quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()

    /* a variavel quizItem esta guardando agora o valor da variavel templete adcionado o conteudo que é clonado 
do html. Para isso estamos utilizando a função conleNode()
a função appendChild() esta colocando as informações que chegam de quizItem na tela. 

para que possamos exibir as 10 perguntas na telas nos iremos pegar o nosso 
quizItem que ja tem os valores do nosso templete e iremos atribuir um novo valor a ele atraves do nosso 
querry selector('h3').textContent = item.pergunta

 */
    quiz.appendChild(quizItem)// colocando as informações na tela.

}




