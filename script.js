// Capturando os quatro elementos criados
const titulo = document.getElementById('titulo');
const lista1 = document.querySelector('ul');
const link = document.querySelector('a');
const lista2 = document.getElementById('lista-ordenada');
// Adicionando conteúdo textual aos elementos 'h1' e 'a'
titulo.innerText = 'Proz Educação';
link.innerText = 'Visite nosso site!';
// Adicionando itens simples na lista não ordenada (ul)
lista1.innerHTML = `
<li>Sobre a Proz</li>
<li>Cursos</li>
<li>Fale conosco</li>
`
// Adicionando itens com links na lista ordenada (ol)
lista2.innerHTML = `
<li><a href="https://www.facebook.com/prozeducacaobr">Facebook</a></li>
<li><a href="https://www.instagram.com/prozeducacaobr/">Instagram</a></li>
<li><a href="https://www.linkedin.com/company/prozeducacao">LinkedIn</a></li>
`