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

function backToHome() {
  if (window.scrollY > 0) {
    window.scrollTo(0, 0)
  }
}

const closeMenu = document.querySelector('.close-menu')
closeMenu.addEventListener('click', () => {
  closeMenu.classList.toggle('active')
  document.body.classList.toggle('menu-expanded')
})

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

const wrapper = document.querySelector('.wrapper')
function menuExpanded() {
  if (!(wrapper.offsetWidth >= 1024)) {
    // Para não ativar o menu expanded na versão desktop
    document.body.classList.toggle('menu-expanded')
  }
}

function nextElementSlider(element) {
  slider.style.left = element.offsetLeft + 'px'
  slider.style.width = element.offsetWidth + 'px'
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
// openMenu.addEventListener('click', menuExpanded)
container.addEventListener('wheel', nextContentSlider)
containerAstronauts.addEventListener('wheel', nextContentSlider)

// Adicionando navSlider
const slider = document.createElement('div')
const contentNavigation = document.querySelector('.content-navigation')
const options = document.querySelectorAll('.options ul li')

slider.setAttribute('class', 'slider')
contentNavigation.append(slider)

options.forEach(element => {
  element.addEventListener('click', event => {
    nextElementSlider(event.target)
    console.log(event.target.offsetLeft)
  })
})

const element = document.querySelector('body:not(#navigation)')
const navigation = document.querySelector('#navigation')

element.addEventListener('wheel', () => {
  slider.style.width = '0px'
})

// Adicionando svg na col-c
const colunaC = document.querySelector('.col-c')
const svg = document.createElement('img')
svg.setAttribute('class', 'logo-art')
svg.setAttribute('src', './assets/badge.svg')
svg.setAttribute('alt', 'badge nfts')
colunaC.append(svg)

ScrollReveal({
  origin: 'top',
  duration: 1000,
  distance: '30px'
}).reveal(
  ` #home, .slider-image, .stats, .home-section, #popular-week, #best-artists, .artist, footer`
)
