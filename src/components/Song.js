import React from "react"

const Song = ({title, artist, id}) => {
    return (
        <>
        <h3>Ranking:</h3>
        <p>{id}</p>
        <h3>Title:</h3>
        <p>{title}</p> 
        <h3>Artist(s):</h3>
        <p>{artist}</p>
        <br></br>
        </>
    )
}

export default Song