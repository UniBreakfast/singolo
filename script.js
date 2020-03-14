const SLIDER_BTNS = document.querySelectorAll('.slider__btn')
const SLIDES = document.querySelector('.slider__slides')

SLIDER_BTNS.forEach(btn => btn.onclick = slideBtnHandler)

function slideBtnHandler(event) {
  if (SLIDES.classList.contains('sliding')) return

  const OLD_SLIDE = document.querySelector('.slides__slide.active')
  const NEW_SLIDE = document.querySelector('.slides__slide:not(.active)')
  const direction = event.target.dataset.btn=='right'? 'left' : 'right'

  NEW_SLIDE.dataset.position = event.target.dataset.btn

  setTimeout(()=> {
    SLIDES.classList.add('sliding')
    OLD_SLIDE.dataset.position = direction
    NEW_SLIDE.dataset.position = null
    OLD_SLIDE.classList.remove('active')
    NEW_SLIDE.classList.add('active')
    NEW_SLIDE.ontransitionend =()=> SLIDES.classList.remove('sliding')
  }, 50)
}


const PNONE_BTNS = document.querySelectorAll('.phone__btn')

PNONE_BTNS.forEach(btn => btn.onclick = phoneBtnHandler)

function phoneBtnHandler() {
  this.parentNode.classList.toggle('off')
}
