import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer ({ src }) {
    
    return (
        <>
            <ReactPlayer
                url={src}
                controls={true}
            />
        </>
    )
}

export default VideoPlayer
