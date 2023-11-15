import * as React from "react";
import { createComponent } from "@mui/toolpad/browser";
import useScript from "../hiddenComponents/hooks/useScript";
import Brightcove from "../hiddenComponents/Video/Brightcove";
import Youtube from "../hiddenComponents/Video/Youtube";
export interface VideoProps {
  bcAccount: string;
  videoId: string;
  muted: boolean;
  loop: boolean;
  width: string;
  height: string;
  videoType: string;
  autoplay:boolean
}

// suport Youtube

function Video({ bcAccount, videoId, muted,autoplay, loop, width, height, videoType }: VideoProps) {
  // Embed brightcove
  useScript("https://players.brightcove.net/734546229001/default_default/index.min.js");

  return (<>
    {videoType === "brightcove" &&
    <Brightcove 
      bcAccount={bcAccount}
      videoId={videoId}
      muted={muted}
      loop={loop}
      width={width}
      height={height}
      videoType={videoType}
    ></Brightcove>}

  {videoType === "youtube" &&
   <Youtube
   videoId={videoId}
      muted={muted}
      loop={loop}
      width={width}
      height={height}
      autoplay={autoplay}
  
  ></Youtube>}
  </>);
}

export default createComponent(Video, {
  argTypes: {
    bcAccount: {  
      type: "string",
      default: "734546229001",
    },
    videoId: {  
      type: "string",
      default: "6337038827112",
    },
    muted: {
      type: "boolean",
      default: true,
    },
    autoplay: {
      type: "boolean",
      default: false,
    },
    width: {
      type: "string",
      default: '100',
    },
    height: {
      type: "string",
      default: '100',
    },
    loop: {
      type: "boolean",
      default: true,
    },
    videoType: {
      type: "string",
      enum: ["brightcove", "youtube"],
      default: "brightcove"
    }
  },
});
