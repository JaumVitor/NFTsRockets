window.onload = () => {
  // Para verificar o scrollY sem que o evento scroll ser aplicado
  if (window.scrollY > 0) {
    document.body.classList.add('scroll-on')
  } else {
    document.body.classList.remove('scroll-on')
  }

  adjustBanner()
}

window.onscroll = () => {
  // Chama a função scrollOn toda vez que o scroll for usado
  scrollOn()
}

window.addEventListener('resize', () => {
  adjustBanner()
  checkInnerWidth(window.innerWidth)
})

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

// Adicionando evento para os sliders, passando as funções sliders
function checkInnerWidth(windowWidth) {
  if (windowWidth < 1024) {
    console.log('mobile')
    //Vai desabilitar o scroll slider somente na versão mobile/tablet
    container.style.overflowX = 'hidden'
    containerAstronauts.style.overflowX = 'hidden'
    container.addEventListener('mouseover', () => {
      document.documentElement.style.overflow = 'hidden'
      container.addEventListener('wheel', nextContentSlider)

      //adicionando uma class no meu body, quando o mouse estiver sobre o slider
      document.body.classList.add('slider-on')
    })

    container.addEventListener('mouseout', () => {
      document.documentElement.style.overflow = 'auto'
      document.body.classList.remove('slider-on')
    })

    containerAstronauts.addEventListener('mouseover', () => {
      document.documentElement.style.overflow = 'hidden'
      containerAstronauts.addEventListener('wheel', nextContentSlider)
    })

    containerAstronauts.addEventListener('mouseout', () => {
      document.documentElement.style.overflow = 'auto'
    })
  } else {
    console.log('desktop')
    // Vai habilitar o scroll novamente na versão desktop
    container.addEventListener('mouseover', () => {
      document.documentElement.style.overflow = 'auto'
    })

    containerAstronauts.addEventListener('mouseover', () => {
      document.documentElement.style.overflow = 'auto'
    })
  }
}

function adjustBanner() {
  let valueSumHeight = 530
  if (window.innerWidth >= 648) {
    valueSumHeight = 500
  } else if (window.innerWidth >= 461) {
    valueSumHeight = 490
  } else if (window.innerWidth >= 459) {
    valueSumHeight = 480
  } else if (window.innerWidth >= 456) {
    valueSumHeight = 510
  } else if (window.innerWidth >= 450) {
    valueSumHeight = 530
  } else if (window.innerWidth >= 374) {
    valueSumHeight = 520
  } else if (window.innerWidth >= 346) {
    valueSumHeight = 550
  } else if (window.innerWidth >= 331) {
    valueSumHeight = 580
  } else if (window.innerWidth >= 292) {
    valueSumHeight = 550
  } else if (window.innerWidth >= 268) {
    valueSumHeight = 620
  } else if (window.innerWidth >= 251) {
    valueSumHeight = 620
  } else if (window.innerWidth >= 249) {
    valueSumHeight = 680
  } else if (window.innerWidth >= 248) {
    valueSumHeight = 680
  } else {
    valueSumHeight = 710
  }

  let homeSectionBottom =
    homeSection.offsetHeight + homeSection.offsetTop + valueSumHeight + 'px'

  document.documentElement.style.setProperty(
    '--off-set-home-stats',
    homeSectionBottom
  )

  getComputedStyle(document.documentElement).getPropertyValue(
    '--off-set-home-stats'
  )
}

//Adicionando fechamento do menu apos usar clicar em uma opção
const listas = document.querySelectorAll('.menu ul li a')
listas.forEach(element => {
  element.addEventListener('click', menuExpanded)
})

// Declaraçõse das variaveis
const container = document.querySelector('.container')
const containerAstronauts = document.querySelector('.content-popular-week')
const openMenu = document.querySelector('.open-menu')

// Adicionando navSlider
const slider = document.createElement('div')
const contentNavigation = document.querySelector('.content-navigation')
const options = document.querySelectorAll('.options ul li')

slider.setAttribute('class', 'slider')
contentNavigation.append(slider)

options.forEach(element => {
  element.addEventListener('mouseover', event => {
    nextElementSlider(event.target)
  })
})

const element = document.querySelector('body:not(#navigation)')
const navigation = document.querySelector('#navigation')

element.addEventListener('mouseout', () => {
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

// Adicionando aninhamento do banner para dispositivos mobile
let value = getComputedStyle(document.documentElement).getPropertyValue(
  '--off-set-home-stats'
)
const homeSection = document.querySelector('.home-section')

checkInnerWidth(window.innerWidth)
