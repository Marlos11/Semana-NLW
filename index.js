const perguntas = [
    {
        pergunta: 'Qual propriedade CSS é usada para alterar a cor do texto?',
        respostas: [
            'color',
            'background-color',
            'font-color'
        ],
        correta: 0
    },
    {
        pergunta: 'Qual seletor CSS é usado para aplicar regras a um elemento com um ID específico?',
        respostas: [
            'class',
            'tag',
            'id'
        ],
        correta: 2
    },
    {
        pergunta: 'Qual unidade CSS é usada para medir distâncias relativas ao tamanho da fonte de um elemento?',
        respostas: [
            'px',
            'em',
            'cm'
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é o padrão de caixa de modelo de layout CSS que inclui padding e border no cálculo da largura total de um elemento?',
        respostas: [
            'box-sizing: content-box;',
            'box-sizing: border-box;',
            'box-sizing: padding-box;'
        ],
        correta: 1
    },
    {
        pergunta: 'Qual propriedade CSS é usada para alterar a posição de um elemento em relação ao seu contêiner pai?',
        respostas: [
            'position',
            'display',
            'float'
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é a função da propriedade CSS "z-index"?',
        respostas: [
            'Controlar a opacidade do elemento',
            'Determinar a ordem de empilhamento dos elementos',
            'Definir a transição de cor de fundo'
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é o seletor CSS usado para aplicar estilos a todos os elementos de uma lista não ordenada?',
        respostas: [
            'ul',
            'ol',
            'li'
        ],
        correta: 0
    },
    {
        pergunta: 'Qual propriedade CSS é usada para definir a altura de uma caixa de elemento?',
        respostas: [
            'height',
            'width',
            'size'
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é a sintaxe correta para comentar em CSS?',
        respostas: [
            '/* Comentário */',
            '// Comentário',
            '<!-- Comentário -->'
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é a propriedade CSS usada para adicionar sombras a elementos?',
        respostas: [
            'text-shadow',
            'box-shadow',
            'shadow'
        ],
        correta: 1
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




