// Let's begin
window.onload = function(){
    let Songs = ['song1.mp3', 'song2.mp3', 'song3.mp3'];
    let statut = true;
    let progress = document.getElementById('progress');
    let piste = 0;
    let currentSong = new Audio(Songs[piste]);
    currentSong.play(); // Autoplay
    
    // ACTIONS after clicking the play button
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

    // ACTIONS after clicking the next button
    document.getElementById('next').addEventListener('click', function(){
        piste ++; 
        currentSong.pause();
        currentSong = new Audio(Songs[piste]);
        currentSong.play();
    }, false);

    // ACTIONS after clicking  the prev button
    document.getElementById('prev').addEventListener('click', function(){
        piste --;
        currentSong.pause();
        currentSong = new Audio(Songs[piste]);
        currentSong.play();
    }, false);

    currentSong.onloadeddata = function(){
        progress.innerText = this.duration;
        this.ontimeupdate = function () {
            progress.setAttribute('value', (this.currentTime/this.duration) * 100);
        }
    }
}


