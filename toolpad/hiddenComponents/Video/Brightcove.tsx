import * as React from "react";
import useScript from "../hooks/useScript";

export interface VideoProps {
    bcAccount: string;
    videoId: string;
    muted: boolean;
    loop: boolean;
    width: string;
    height: string;
    videoType: string;
  }
function Brightcove({ bcAccount, videoId, muted, loop, width, height }: VideoProps) {
    // Embed brightcove
    useScript("https://players.brightcove.net/734546229001/default_default/index.min.js");
  
    return (  
      <video-js
        data-account={bcAccount}
        data-video-id={videoId}
        data-player="default"
        data-embed="default"
        controls=""
        muted={muted}
        loop={loop}
        >
      </video-js>
    );
  }

export default Brightcove;