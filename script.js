document.addEventListener('keydown', addAudio)
const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))


function addAudio(e) {
        const audio = document.querySelector(`audio[data-key=${e.key}]`);
        if(!audio) return;
        audio.currentTime = 0;                   // this starts the audio from beginning
        audio.play();
        const key = document.querySelector(`.key[data-key=${e.key}]`);
        key.classList.add('active');
    
}
 function removeTransition() {
       this.classList.remove('active');
}

