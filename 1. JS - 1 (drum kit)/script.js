window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  //   if(key ===)

  if (!audio) return; // stop the function if key not found.
  console.log(key); //
  audio.currentTime = 0; // reset the audio, without it if we play again and again it will cause the music to take time for replay.
  audio.play(); // play the audio on keyPress
  //   key.classList.add('playing')
  key.classList.toggle("playing");
});

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".keys");

keys.forEach((key) => key.addEventListener("transitioned", removeTransition));
