console.log("Welcome to Trendy Tunes");
// Initialze the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Todh", filePath: "songs/1.mp3", coverPath: "cover/cover1.jpg" },
    { songName: "Her", filePath: "songs/2.mp3", coverPath: "cover/cover1.jpg" },
    { songName: "Daku", filePath: "songs/3.mp3", coverPath: "cover/cover1.jpg" },
    { songName: "Baller", filePath: "songs/4.mp3", coverPath: "cover/cover1.jpg" },
    { songName: "Black-Matte", filePath: "songs/5.mp3", coverPath: "cover/cover1.jpg" },
    { songName: "Siggned to God", filePath: "songs/6.mp3", coverPath: "cover/cover1.jpg" },
    { songName: "Invinceble", filePath: "songs/7.mp3", coverPath: "cover/cover1.jpg" },
    { songName: "Peaches", filePath: "songs/8.mp3", coverPath: "cover/cover1.jpg" },
]

songItems.forEach((Element, i) => {
    Element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    Element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

})

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})

// listen to events 
audioElement.addEventListener('timeupdate', () => {
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element) => {
        Element.classList.add('fa-play-circle');
        Element.classList.remove('fa-pause-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element) => {
    Element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', (d) => {
    if (songIndex >= 7) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    d.target.classList.remove('fa-play-circle');
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
