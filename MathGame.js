const problem = document.querySelector('.problem')
const form = document.querySelector('.form')


let state = {
  score: 0,
  wrongAnswers: 0
  
}

function updateProblem() {
  state.currentProblem = generateProblem()
  problem.innerHTML = `${state.currentProblem.numberOne} ${state.currentProblem.operator} ${state.currentProblem.numberTwo}`
}
updateProblem()

function generateNumber(max) {
  return Math.floor(Math.random() * (max + 1))
}

function generateProblem() {
  return {
    numberOne: generateNumber(10), 
    numberTwo: generateNumber(10),
    operator: ['+', '-', 'x'] [generateNumber(2)]
  }
}
form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
  e.preventDefault()
  let correctAnswer 
  const p = state.currentProblem
  if (p.operator == '+') correctAnswer = p.numberOne + p.numberTwo
  if (p.operator == '-') correctAnswer = p.numberOne - p.numberTwo
  if (p.operator == 'x') correctAnswer = p.numberOne * p.numberTwo

  if (parseInt(ourField.value, 10) === correctAnswer){
    state.score++
    pointsNeeded.textContent = 10 - state.score 
    updateProblem()
      renderProgressBar()
        
  }else {
    state.wrongAnswers++
    mistakesAllowed.textContent = 2 - state.wrongAnswers
  }
}