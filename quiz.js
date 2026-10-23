function checkAnswer() {
  const answer = document.querySelector('input[name="quiz"]:checked');
  const result = document.getElementById('quiz-result');

  if (!answer) {
    result.textContent = '请先选一个答案。';
  } else if (answer.value === 'nav') {
    result.textContent = '答对了！';
  } else {
    result.textContent = '再试一次。';
  }
}

document.getElementById('check-answer').addEventListener('click', checkAnswer);
