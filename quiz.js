function checkAnswer() {
  const answer = document.querySelector('input[name="quiz"]:checked');
  const result = document.getElementById('quiz-result');

  if (!answer) {
    result.textContent = 'Choose an answer first.';
  } else if (answer.value === 'nav') {
    result.textContent = 'Correct!';
  } else {
    result.textContent = 'Try again.';
  }
}

document.getElementById('check-answer').addEventListener('click', checkAnswer);
