console.log("Hello shiva ");
// let btn = document.getElementById('mybtn');
// btn.addEventListener('click', ()=>{
//     var audio = new Audio('/Drum-kit/sound/crash.mp3');
//     audio.play();
//     console.log("you have press btn");
// })

let myImg = document.querySelectorAll('.myimg');
let drum = document.querySelectorAll('.drum');
console.log(drum);
for (let index = 0; index < myImg.length; index++) {
    document.addEventListener('keypress', (e) => {
        switch (e.key) {
            case 'A':
                var audio = new Audio('/Drum-kit/sound/crash.mp3');
                audio.play();
                break;

            case 'B':
                var audio = new Audio('/Drum-kit/sound/kick-bass.mp3');
                audio.play();
                break;

            case 'C':
                var audio = new Audio('/Drum-kit/sound/snare.mp3');
                audio.play();
                break;

            case 'D':
                var audio = new Audio('/Drum-kit/sound/tom-1.mp3');
                audio.play();
                break;

            case 'E':
                var audio = new Audio('/Drum-kit/sound/tom-2.mp3');
                audio.play();
                break;

            case 'F':
                var audio = new Audio('/Drum-kit/sound/tom-3.mp3');
                audio.play();
                break;

            case 'G':
                var audio = new Audio('/Drum-kit/sound/tom-4.mp3');
                audio.play();
                break;

            default:
                console.log("invalid key");
                break;

        }

        let temp = document.querySelector("." + e.key)
        temp.classList.add('modified');

        setTimeout(() => {
            temp.classList.remove('modified');
        }, 100);

    })
 
}

console.log(drum[0].outerText);



for (let index = 0; index < myImg.length; index++) {
    myImg[index].addEventListener('click', () => {
        switch (index) {
            case 0:
                var audio = new Audio('/Drum-kit/sound/crash.mp3');
                audio.play();
                break;

            case 1:
                var audio = new Audio('/Drum-kit/sound/kick-bass.mp3');
                audio.play();
                break;
        
            case 2:
                var audio = new Audio('/Drum-kit/sound/snare.mp3');
                audio.play();
                break;
        
            case 3:
                var audio = new Audio('/Drum-kit/sound/tom-1.mp3');
                audio.play();
                break;
        
            case 4:
                var audio = new Audio('/Drum-kit/sound/tom-2.mp3');
                audio.play();
                break;
        
            case 5:
                var audio = new Audio('/Drum-kit/sound/tom-3.mp3');
                audio.play();
                break;

            case 6:
                var audio = new Audio('/Drum-kit/sound/tom-4.mp3');
                audio.play();
                break;
        
            default:
                console.log("invalid key");
                break;

            }
            myImg[index].classList.add('modified');
            setTimeout(() => {
                myImg[index].classList.remove('modified');
            }, 100);
    })

};


