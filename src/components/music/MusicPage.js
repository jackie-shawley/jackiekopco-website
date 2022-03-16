import React, { useState, useEffect } from "react";
import Player from "./Player";

export default function MusicPage() {

    const [songs, setSongs] = useState([
        {
            'title': 'Believe',
            'artist': 'Jackie Kopco',
            'img_src': '/songs/songs-images/Believe.png',
            'src': '/songs/Believe Master.wav'
        },
        {
            'title': 'What Happens Now',
            'artist': 'Jackie Kopco',
            'img_src': '/songs/songs-images/what happens now photo for soundcloud.jpg.png',
            'src': '/songs/What Happens Now MASTER 48k 24 bit.wav'
        },    
    ])

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);


    useEffect(()=>{
        setNextSongIndex(()=>{
        if (currentSongIndex + 1 > songs.length - 1 ){
          return 0;
        } else{
          return currentSongIndex + 1;
        }
      });
      },[currentSongIndex])

    return(
        <div className="music-body">
            <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={songs} />
        </div>
    )
}