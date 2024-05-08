// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }
  
    const voices = speechSynthesis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("dataName", voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }
  
  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }


  let button = document.querySelector('button');
  let speech = new SpeechSynthesisUtterance();
  let txt = document.getElementById('text-to-speak');
  let voiceSelect = document.getElementById('voice-select');
  const synth = window.speechSynthesis;
  const img = document.querySelector("img[alt='Smiling face']");

  voiceSelect.addEventListener('change', () =>{
    const voices = speechSynthesis.getVoices();
    let selected = voiceSelect.querySelector("option:checked");

    let name = selected.getAttribute('dataName');
    var selectedVoice = voices.find(voice => voice.name === name);
    speech.voice = selectedVoice;
  })

  button.addEventListener('click', function(){
    speech.text = txt.value;
    synth.speak(speech);

  })

  speech.addEventListener('start', openSmile);

  speech.addEventListener('end', closeSmile);

  function openSmile() {
    img.src = "assets/images/smiling-open.png";
}

// Function to close the smile
function closeSmile() {
    img.src = "assets/images/smiling.png";
}
}