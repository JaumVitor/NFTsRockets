const container = document.querySelector('.container')
const containerAstronauts = document.querySelector('#popular-week')

nextContentSlider = event => {
  window.onscroll = () => {
    // window.scrollTo(event.pageX, event.pageY)
  }
  if (event.deltaY < 0) {
    event.target.scrollBy(300, 0)
  } else {
    event.target.scrollBy(-300, 0)
  }
}

container.addEventListener('wheel', nextContentSlider)
containerAstronauts.addEventListener('wheel', nextContentSlider)

const homeSection = document.querySelector('.home-section')
