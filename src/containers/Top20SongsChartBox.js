import React, { useEffect, useState } from "react";
import SongList from "../components/SongList";


const TopTwentySongsContainer = () => {
    const [songs, setSongs] = useState([])

    useEffect(() => {
        getSongs()
    }, [])

    const getSongs = function() {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setSongs(data.feed.entry))
    }


    return (
        <div>

            <SongList songs={songs}></SongList>
        </div>
    )

}



export default TopTwentySongsContainer