function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;

  // Pausar audio si ya está reproduciéndose
  const isPlaying = !audio.paused;
  if (isPlaying) {
    audio.pause();
    key.classList.remove('playing');
  } else {
    audio.play();
    key.classList.add('playing');
  }
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

 
 
   