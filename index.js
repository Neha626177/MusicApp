
const music = document.querySelector('audio');
const play= document.querySelector('#play');
const Img = document.querySelector('img');
const artist = document.querySelector("#artist");
const prev = document.getElementById('prev');
const next = document.getElementById("next");
const title = document.getElementById('title')
let progress = document.getElementById("progress");
let duration_time = document.getElementById("duration_time");
let current_time = document.getElementById('current_time');
 let progress_div = document.getElementById("progress_div");



const songs = [
  {
    name: "songs/128-Voice Of Anek - Anek 128 Kbps.mp3",
    image: "assets/128Voice Of Anek - Anek 128 Kbps.jpg",
    title: "Voice of anek",
    artist: "Sunidhi Chauhan",
  },
  {
    name: "songs/128-Enemmy Title (English) - Enemmy (Law And Disorder) 128 Kbps.mp3",
    image:
      "assets/128Enemmy Title (English) - Enemmy (Law And Disorder) 128 Kbps.jpg",
    title: "Enemmy",
    artist: "Gaurav Dasgupta",
  },
  {
    name: "songs/128-2 Jatt - Shinda 128 Kbps.mp3",
    image: "assets/1282 Jatt - Shinda 128 Kbps.jpg",
    title: "Jatt Shindha",
    artist: "Shinda",
  },
  {
    name: "songs/128-Aaiye Re Kabootri - Surender Romio 128 Kbps.mp3",
    image: "assets/128Aaiye Re Kabootri - Surender Romio 128 Kbps.jpg",
    title: "Aaiye Re Kabootri",
    artist: "Surender Romio",
  },
  {
    name: "songs/128-10 Numbari - Masoom Sharma 128 Kbps.mp3",
    image: "assets/12810 Numbari - Masoom Sharma 128 Kbps.jpg",
    title: "10 Numberi",
    artist: "Masoo Sharma",
  },
  {
    name: "songs/128-Azaad - Raj Mawer 128 Kbps.mp3",
    image: "assets/128Azaad - Raj Mawer 128 Kbps.jpg",
    title: "Azad",
    artist: "Raj Mawer",
  },
  {
    name: "songs/128-Baalam Khota - Renuka Panwar 128 Kbps.mp3",
    image: "assets/128Baalam Khota - Renuka Panwar 128 Kbps.jpg",
    title: "Baalam Khota",
    artist: "Renuka Panwar",
  },
  {
    name: "songs/128-Baaz - Masoom Sharma 128 Kbps.mp3",
    image: "assets/128Baaz - Masoom Sharma 128 Kbps.jpg",
    title: "Baaz",
    artist: "Masoom Sharma",
  },
  {
    name: "songs/128-Babu Teri Yaari - U K Haryanvi 128 Kbps.mp3",
    image: "assets/128Babu Teri Yaari - U K Haryanvi 128 Kbps.jpg",
    title: "Babu Teri Yaari",
    artist: "U K Haryanvi",
  },
  {
    name: "songs/128-Badmashi - Raj Mawer 128 Kbps.mp3",
    image: "assets/128Badmashi - Raj Mawer 128 Kbps.jpg",
    title: "Badmashi",
    artist: "Raj Mawer",
  },
  {
    name: "songs/128-Bakes Dozen - Chitrakut 128 Kbps.mp3",
    image: "assets/128Bakes Dozen - Chitrakut 128 Kbps.jpg",
    title: "Bakes Dozen",
    artist: "Somesh Saha",
  },
  {
    name: "songs/128-Chann Warga - Surjit Bhullar 128 Kbps.mp3",
    image: "assets/128Chann Warga - Surjit Bhullar 128 Kbps.jpg",
    title: "Chann Warga",
    artist: "Surjit Bhullar",
  },
  {
    name: "songs/128-Commando (English Version)- Commando 2 128 Kbps.mp3",
    image: "assets/128Commando (English Version)- Commando 2 128 Kbps.jpg",
    title: "Commando",
    artist: "Aditi singh Sahrma",
  },
  {
    name: "songs/128-Halamithi Habibo - Beast 128 Kbps.mp3",
    image: "assets/128Halamithi Habibo - Beast 128 Kbps.jpg",
    title: "Halamithi Habibo",
    artist: "Anirodh Ravichanser,Jonita Gandhi",
  },
  {
    name: "songs/128-Jollyo Gymkhana - Beast 128 Kbps.mp3",
    image: "assets/128Jollyo Gymkhana - Beast 128 Kbps.jpg",
    title: "Jollyo Gymkhana",
    artist: "Nakash,Anirudh,Ravichander",
  },
  {
    name: "songs/128-Le Sajna - Babli Bouncer 128 Kbps.mp3",
    image: "assets/128Le Sajna - Babli Bouncer 128 Kbps.jpg",
    title: "Le Sajna",
    artist: "Tanishk Bagchi,Altomash....",
  },
  {
    name: "songs/128-Oh Ku Takum - Anek 128 Kbps.mp3",
    image: "assets/128Oh Ku Takum - Anek 128 Kbps.jpg",
    title: "Oh Ku Takum",
    artist: "Anuraj,Temswapang..",
  },
  // {
  //   name: "songs/128-What Jhumka - Rocky Aur Rani Kii Prem Kahaani 128 Kbps.mp3",
  //   image: "",
  //   title: "",
  //   artist: "",
  // },
  {
    name: "songs/128-Maan Le - Chitrakut 128 Kbps.mp3",
    image: "assets/128Maan Le - Chitrakut 128 Kbps.jpg",
    title: "Maan Le",
    artist: "Arjit Singh",
  },
];

let isPlaying = false;

// for paly
const playMusic = ()=>{
    isPlaying = true;
    music.play();
    Img.classList.add('anime')
    play.classList.replace("fa-play","fa-pause")
    
}
// for pause
const  pauseMusic= () => {
  isPlaying = false;
  music.pause();
  Img.classList.remove("anime");
  play.classList.replace("fa-pause", "fa-play");
}

play.addEventListener('click',()=>{
    // if(isPlaying){
    //     pauseMusic();
    // }else{
    //     playMusic();
    // }
    isPlaying ? pauseMusic() : playMusic();
})

//*******changing data******
const loadSongs = (songs) =>{

    title.textContent = songs.title;
    artist.innerHTML= songs.artist;
    music.src = songs.name;
    Img.src =  songs.image;

} 
  songIndex =0;  
//  loadSongs(songs[songIndex]);
 const nextSong=()=>{
  // songIndex++;
  songIndex =(songIndex + 1) % songs.length;
  loadSongs(songs[songIndex]);
  playMusic();
 }
 const  prevSong = ()=>{
   songIndex =( songIndex -1 + songs.length) % songs.length;
  isPlaying = true;
  loadSongs(songs[songIndex]);
    playMusic();
 }


//  progress js work

 music.addEventListener("timeupdate", (event)=>{
  const {currentTime,duration} = event.srcElement;
  let progress_time = (currentTime / duration) * 100;
  progress.style.width = `${progress_time}%`;

  // music time update
  let min_duration = Math.floor(duration/60);
  let sec_duration =Math.floor(duration%60);
  let total_duration = `${min_duration}:${sec_duration}`;
 
  
  if(duration){
     duration_time.innerHTML = total_duration;
     if (sec_duration < 10) {
       duration_time.innerHTML = `${min_duration}:0${sec_duration}`;
     } else {
       duration_time.innerHTML = total_duration;
     }

  }

   



  let min_currentTime = Math.floor(currentTime/60)
  let sec_currentTime = Math.floor(currentTime%60)
  let tot_currentTime = `${min_currentTime}:${sec_currentTime}`
  if(sec_currentTime<10) {
    current_time.innerHTML = `${min_currentTime}:0${sec_currentTime}`
  }else{
     current_time.innerHTML = tot_currentTime;
  }

  // // progressonclick functionality 
  progress_div.addEventListener('click',(event)=>{
    const {duration } = music;
    let mov_progress = (event.offsetX/event.srcElement.clientWidth)*duration;

    music.currentTime = mov_progress;
  })
 

})

music.addEventListener('ended',nextSong);

next.addEventListener("click", nextSong);
prev.addEventListener('click',prevSong);