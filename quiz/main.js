import { $instructions, $divQuestions, $questionNumber, $question, $responseTrue, $responseFalse, $notice } from './dom.js'
import { questions } from './questions.js'

let index = 0
let placar = 0

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
		gameOver()
		setTimeout(() => {
			mostrarPrimeiraQuestao()
			$divQuestions.css('display', 'inline-block');
		}, 2000)
	}
}

function validarResposta(bool, question) {
	if (bool === question.rightAlternative) {
		placar += 10
		$instructions.text(`Pontos ${placar}`)
	} else $instructions.text(`Pontos ${placar}`)
}

function gameOver() {
	setTimeout(() => {
		$instructions.text(`Fim de jogo!`)
		$divQuestions.css('display', 'none')
		$notice.text(`Você conseguiu atingiu a nota ${placar}.`)
		placar = 0
	}, 500)
}


$responseTrue.click(e => {
	mostrarProximaQuestao(true)
	e.preventDefault()
})

$responseFalse.click(e => {
	mostrarProximaQuestao(false)
	e.preventDefault()
})
