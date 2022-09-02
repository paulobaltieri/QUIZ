const form = document.querySelector('.questions')
const resultado = document.querySelector('.res1')
const scoreQuiz = document.querySelector('.scoreQuiz')
const correctQuestions = ['b', 'b', 'b', 'b']

form.addEventListener('submit', event => {
    event.preventDefault()
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]
    let score = 0
    userAnswers.forEach((valor, index) => {
        if (valor === correctQuestions[index]) {
            score += 25
            console.log(`acertou ${valor}`)

        } else if (valor !== correctQuestions[index]) {
            console.log(`ERROU ${valor}`)
        }
    })
    if (score === 100) {
        const audio = new Audio('src/audio/clap.mp3')
        audio.play()
    }
    scoreQuiz.classList.remove('d-none')
    scoreQuiz.querySelector('span').textContent = `${score}%`

    scroll(0, 0)
})