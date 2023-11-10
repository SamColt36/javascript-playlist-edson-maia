import { $instructions, $questionNumber, $question, $responseTrue, $responseFalse, $notice } from './dom.js'
import { questions } from './questions.js'

let index = 0
let count = 0

function mostrarPrimeiraQuestao() {
	index = 0
	$instructions.text(`Leia a questão e clique na resposta correta`)
	$question.text(questions[index].statement)
	$questionNumber.text(1)
	$notice.text(`Questão ${index + 1} de ${questions.length}`)
}

mostrarPrimeiraQuestao()

function mostrarProximaQuestao(bool) {
	index++
	const question = questions[index - 1]

	if (index < questions.length) {
		$question.html(questions[index].statement)
		$questionNumber.text(index + 1)
		$notice.text(`Questão ${index + 1} de ${questions.length}`)

		validarResposta(bool, question)
	} else if (index === questions.length) {
		validarResposta(bool, question)
		setTimeout(() => mostrarPrimeiraQuestao(), 1000)
	}
}

function validarResposta(bool, question) {
	if (bool === question.rightAlternative) {
		count += 10
		$instructions.text(`Pontos ${count}`)
	} else $instructions.text(`Pontos ${count}`)
}

$responseTrue.click(e => {
	mostrarProximaQuestao(true)
	e.preventDefault()
})

$responseFalse.click(e => {
	mostrarProximaQuestao(false)
	e.preventDefault()
})
