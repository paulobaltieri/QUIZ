const form = document.querySelector('.questions')
const correctQuestion = ['b', 'b', 'b', 'b']

form.addEventListener('submit', event => {
    event.preventDefault()

    const userQuestions = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]
    console.log(userQuestions)
})

