function slidesPlugin(slideActive) {
  const slides = document.querySelectorAll('.slide')
  slides[slideActive].classList.add('active')

  for (const slide of slides) {
    slide.addEventListener('click', (e) => {
      e.preventDefault()
      clearSlide()
      slide.classList.add('active')
    })
  }

  function clearSlide() {
    for (const slide of slides) {
      slide.classList.remove('active')
    }
  }
}

slidesPlugin(2)
