const changeText = document.getElementById('text');
const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {
  changeText.textContent = 'ボタンをクリックしました';
});