const direction = document.getElementById('direction');
const demo = document.getElementById('layout-demo');
const code = document.getElementById('layout-code');

direction.addEventListener('change', function () {
  demo.style.flexDirection = direction.value;
  code.textContent = 'flex-direction: ' + direction.value + ';';
});
