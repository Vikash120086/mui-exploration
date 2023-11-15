import * as React from "react";
import { Typography } from "@mui/material";

import { createComponent } from "@mui/toolpad/browser";
import { defaultVariantMapping } from "../hiddenComponents/SharedResources";

export interface IntroTextProps {
  title: string;
  titleVariant: string;
  body: string;
  bodyVariant: string;
}

function IntroText({ title, titleVariant, body, bodyVariant }: IntroTextProps) {
  return (<div>  <Typography variant={titleVariant}>{title}</Typography>
  <Typography variant={bodyVariant}>{body}</Typography></div>
  );
}


export default createComponent(IntroText, {
  argTypes: {
    title: {
      type: "string",
      default: "Heading",
    },
    titleVariant: {
      type: "string",
      default: "h2",
      enum: Object.keys(defaultVariantMapping)
    },
    body: {
      type: "string",
      default: "Body",
    },
    bodyVariant: {
      type: "string",
      default: "body",
      enum: Object.keys(defaultVariantMapping)
    }
  },
});
