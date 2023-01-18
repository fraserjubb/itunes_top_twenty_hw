import React from "react";
import Song from "./Song";

const SongList = ({songs}) => {

    const songListItems = songs.map((song) => {
        return (
            <Song title = {song["im:name"].label} 
            artist = {song["im:artist"].label}
            id = {song.category.attributes["im:id"]}
            
            > {song["im:name"].label} 
            {song["im:artist"].label}
            {song.category.attributes["im:id"]}
            </Song>
        )
    })

    return (
        <div>
        <ul>
            {songListItems}
        </ul>
        </div>
    )
}

export default SongList