import * as React from "react";
import YouTube, { YouTubeProps}  from "react-youtube";

export interface YTProps {
    videoId: string;
    muted: boolean;
    loop: boolean;
    width: string;
    height: string;
    autoplay: boolean;
    onReady
  }
function Youtube({ videoId, muted, loop, width, height, autoplay, onReady }: YTProps) {
    // Embed youtube iframe

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
  
      const opts: YouTubeProps['opts'] = {
        height: height,
        width: width,
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: autoplay ? 1 : 0,
        },
      };
    return (  
        <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
    );
  }

export default Youtube;