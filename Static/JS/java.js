// alert('Olá');
// CSS
const app = document.getElementById('raiz')
// app.textContent = 'oiiii'

// Javascript
const caixa = document.createElement('div')
// caixa.textContent = ' foi criado dinamicamente';
// caixa.setAttribute('class', 'd-flex')
caixa.setAttribute('class', 'caixa')
app.appendChild(caixa);

for (var controladora = 1; controladora <= 10; controladora++){
    var c = document.createElement('div');
    c.setAttribute('class', 'artigos')
    caixa.appendChild(c);

    var t = document.createElement('h3');
    t.textContent = 'Titulo' + controladora;
    c.appendChild(t);

    var p = document.createElement('p');
    p.textContent = 'Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor, que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais.';
    c.appendChild(p);
}