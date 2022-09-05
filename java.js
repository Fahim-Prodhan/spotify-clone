// Initialize the variable
let audioElement = new Audio("songs/1.mp3");
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSong = document.getElementById("masterSong");
let songItems = Array.from ( document.getElementsByClassName("songItem"));


let songs = [
    {  songName: "Moho", filePath: "songs/1.mp3",coverPath: "covers/1.jpg" },
    {  songName: "Neshar Bojha", filePath: "songs/2.mp3",coverPath: "covers/2.jpg" },
    {  songName: "Purnota", filePath: "songs/3.mp3",coverPath: "covers/3.jpg" },
    {  songName: "Maa by Jems", filePath: "songs/4.mp3",coverPath: "covers/4.jpg"},
    {  songName: "Ghorgari", filePath: "songs/5.mp3",coverPath: "covers/5.jpg" },
    {  songName: "Opare", filePath: "songs/6.mp3",coverPath: "covers/6.jpg" },
    {  songName: "Srotoshini", filePath: "songs/7.mp3",coverPath: "covers/7.jpg" },
    {  songName: "Na-Paoyar Golpo", filePath: "songs/8.mp3",coverPath: "covers/10.jpg" }
]

songItems.forEach((element,i)=> {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})



//play and pause 
masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})
//listen to events
audioElement.addEventListener("timeupdate", ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration )/100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("listPlayBtn")).forEach((element)=>{
        element.classList.add("fa-circle-play");
        element.classList.remove("fa-circle-pause");
    })
}


Array.from(document.getElementsByClassName("listPlayBtn")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.play();
        audioElement.currentTime = 0;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
        masterSong.innerText = songs[songIndex].songName;

    })
})

document.getElementById("next").addEventListener("click",()=>{
    if(songIndex >= 7){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.play();
        audioElement.currentTime = 0;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        masterSong.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;
})

document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
        audioElement.src = `songs/${songIndex+1}.mp3`;    
        audioElement.play();
        audioElement.currentTime = 0;
        masterSong.innerText = songs[songIndex].songName;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
})