window.onload = () => {
  // Para verificar o scrollY sem que o evento scroll ser aplicado
  if (window.scrollY > 0) {
    document.body.classList.add('scroll-on')
  } else {
    document.body.classList.remove('scroll-on')
  }
}

window.onscroll = () => {
  // Chama a função scrollOn toda vez que o scroll for usado
  scrollOn()
}

function scrollOn() {
  if (window.scrollY > 0) {
    document.body.classList.add('scroll-on')
  } else {
    document.body.classList.remove('scroll-on')
  }
}
// Funcões para passar imagem dos sliders
function nextContentSlider(event) {
  if (event.deltaY < 0) {
    event.target.scrollBy(300, 0)
  } else {
    event.target.scrollBy(-300, 0)
  }
}

function menuExpanded() {
  document.body.classList.toggle('menu-expanded')
}

//Adicionando fechamento do menu apos usar clicar em uma opção
const listas = document.querySelectorAll('.menu ul li a')
listas.forEach(element => {
  element.addEventListener('click', menuExpanded)
})

// Declaraçõse das variaveis
const container = document.querySelector('.container')
const containerAstronauts = document.querySelector('#popular-week')
const openMenu = document.querySelector('.open-menu')

// Adicionando evento para os sliders, passando as funções sliders
openMenu.addEventListener('click', menuExpanded)
container.addEventListener('wheel', nextContentSlider)
containerAstronauts.addEventListener('wheel', nextContentSlider)
