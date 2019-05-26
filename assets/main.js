// Let's begin
window.onload = function(){
    let Songs = ['song1.mp3', 'song2.mp3', 'song3.mp3'];
    let statut = true;
    let progress = document.getElementById('progress');
    let currentSong = new Audio(Songs[0]);
    currentSong.play();
    
    document.getElementById('play').addEventListener('click', function(){
        if(statut){
            statut = false;
            this.innerText = 'Play';
            currentSong.pause();
        }else{
            statut = true;
            this.innerText = 'Pause';
            currentSong.play();
        }
    }, false);

    currentSong.onloadeddata = function(){
        progress.innerText = this.duration;
        this.ontimeupdate = function () {
            progress.setAttribute('value', (this.currentTime/this.duration) * 100);
        }
    }
}


