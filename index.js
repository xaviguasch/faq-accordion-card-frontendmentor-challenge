const questionAreas = document.querySelectorAll('.question-area')
const answerAreas = document.querySelectorAll('.answer-area')
const questions = document.querySelectorAll('.question')
const arrows = document.querySelectorAll('.icon-arrow')

questionAreas.forEach((qArea) => {
  qArea.addEventListener('click', (e) => {
    let nextSibling = qArea.nextElementSibling
    let questionChild = qArea.firstElementChild
    let arrowChild = qArea.firstElementChild.nextElementSibling

    answerAreas.forEach((aA) => {
      if (aA === nextSibling) {
        aA.classList.toggle('hidden')
      } else {
        if (!aA.classList.contains('hidden')) {
          aA.classList.toggle('hidden')
        }
      }
    })

    questions.forEach((q) => {
      if (q === questionChild) {
        q.classList.toggle('bold')
      } else {
        if (q.classList.contains('bold')) {
          q.classList.toggle('bold')
        }
      }
    })

    arrows.forEach((arrow) => {
      if (arrow === arrowChild) {
        arrow.classList.toggle('rotated')
      } else {
        if (arrow.classList.contains('rotated')) {
          arrow.classList.toggle('rotated')
        }
      }
    })
  })
})
