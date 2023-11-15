import * as React from "react";
import { Typography, Grid } from "@mui/material";
import { createComponent } from "@mui/toolpad/browser";
import { default as Story, StoryProps}  from "./Story";

// https://www.npoint.io/docs/696dd6b32d03f61cd55b
export interface StoriesProps {
  mainPillar: StoryProps[],
  leftPillar: StoryProps[],
  rightPillar: StoryProps[],
}

function Stories({ mainPillar, leftPillar, rightPillar }: StoriesProps) {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Grid container spacing={2}>
        {/* Display mainPillar in the center column for all screen sizes */}
        <Grid item xs={12} lg={6} order={{ xs: 0, lg: 1 }}>
          {mainPillar.map((story, index) => (
            <Story key={`main-story-${index}`} {...story} />
          ))}
        </Grid>
        {/* Display leftPillar on the left for screen sizes above 1199px */}
        <Grid item xs={12} lg={3} order={{ xs: 1, lg: 0 }}>
          {leftPillar.map((story, index) => (
            <Story key={`left-story-${index}`} {...story} />
          ))}
        </Grid>
        {/* Display rightPillar on the right for screen sizes above 1199px */}
        <Grid item xs={12} lg={3} order={{ xs: 2, lg: 2 }}>
          {rightPillar.map((story, index) => (
            <Story key={`right-story-${index}`} {...story} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}


export default createComponent(Stories, {
  argTypes: {
    leftPillar: {
      type: "array",
      default: [],
      description: "An array of stories "      
    },
    rightPillar: {
      type: "array",
      default: [],
      description: "An array of stories "      
    },
    mainPillar: {
      type: "array",
      default: [],
      description: "An array of stories "
    }
  },
});
