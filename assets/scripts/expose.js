// expose.js

window.addEventListener('DOMContentLoaded', init);


const jsConfetti = new JSConfetti()

function init() {
  // TODO

  let hornSelect = document.getElementById('horn-select');
  hornSelect.addEventListener('change', () => {
    let horn = hornSelect.value;

    let image = document.querySelector('img[alt="No image selected"]');
    image.src = "assets/images/" + horn + ".svg";

    let audio = document.querySelector('audio');
    audio.src = "assets/audio/" + horn + ".mp3";
  }) 


  let audio = document.querySelector('audio');
  let button = document.querySelector('button');
  let controls = document.querySelector('input[name="volume"]');
  let volImg = document.querySelector('img[alt="Volume level 2"]')


  button.addEventListener('click', () => {
    audio.play();   
    if(hornSelect.value == 'party-horn') {
      jsConfetti.addConfetti();
    }
  })

controls.addEventListener("input", update);

function update() {
  audio.volume =  controls.value/100;
  let num = controls.value;
  if (num == 0) {
    volImg.src = "assets/icons/volume-level-0.svg";
  } else if (num < 33) {
    volImg.src = "assets/icons/volume-level-1.svg";
  } else if (num < 67) {
    volImg.src = "assets/icons/volume-level-2.svg";
  } else {
    volImg.src = "assets/icons/volume-level-3.svg";
  }
}

}